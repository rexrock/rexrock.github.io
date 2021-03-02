---
id: xdp1
title: XDP技术简介
---

## 1. XDP程序的运行位置
XDP（eXpress Data Path）提供了一个内核态、高性能、可编程 BPF 包处理框架。这个框架在软件中最早可以处理包的位置（即网卡驱动收到包的 时刻）运行 BPF 程序。如下图所示：

![XDP程序运行的位置](./images/1613889918890.png)

NAPI poll 机制不断调用驱动实现的 poll 方法，后者处理 RX 队列内的包，并最终将包送到正确的程序，也就是我们所说的 XDP 程序。所以很明显这需要网卡驱动的支持，如果驱动支持 XDP ，那 XDP 程序将在 poll 机制内执行。如果不支持，那 XDP 程序将只能在更后面的位置被执行，即上图中的receive_skb中。这其中经历了哪些步骤呢？

 1. 创建skb，如果不支持XDP，poll机制会将报文送给 clean_rx()，该函数会创建一个skb，并skb进行一些硬件校验何检查，然后较给 gro_receive() 函数；
 2. 分片重组，GRO可以理解为LRO的软件实现，相比LRO只针对TCP报文，GRO可以处理更多其他类型的报文，总之在 gro_receive() 函数中，如果是分片报文则进行分片重组然后交给 receive_skb() 函数，如果不是分片报文，则直接交给 receive_skn() 函数进行处理；

## 2. XDP的三种工作模式

上面提到XDP程序可以运行在不同位置，每个位置即对应XDP的一种工作模式：

 - Native XDP，即运行在网卡驱动实现的的 poll() 函数中，需要网卡驱动的支持；
 - Generic XDP，即上面提到的如果网卡驱动不支持XDP，则可以运行在 receive_skb() 函数中；
 - Offloaded XDP，这种模式是指将XDP程序offload到网卡中，这需要网卡硬件的支持，JIT编译器将BPF代码翻译成网卡原生指令并在网卡上运行。

## 3. XDP程序的返回码
XDP程序执行结束后会返回一个结果，告诉调用者接下来如何处理这个包：

 - XDP_DROP，丢弃这个包，主要用于报文过滤的安全场景；
 - XDP_PASS，将这个包“交给/还给”内核，继续走正常的内核处理流程；
 - XDP_TX，从收到包的网卡上再将这个包发出去（即hairpin模式），主要用于负载均衡场景；
 - XDP_REDIRECT，何XDP_TX类似，但是是通过另外一个网卡将包发出去。除此之外还可以实现将报文重定向到其他的CPU处理，类似于XDP_PASS继续走内核处理流程，但是由其他的CPU处理，当前CPU继续处理后续的报文接收；
 - XDP_ABORTED，表示程序产生异常，行为类似XDP_DROP，但是会通过一个tracepoint打印日志义工追踪；

下面是 Mellanox mlx5 驱动中关于XDP的处理，如果该函数返回 true，则说明报文被XDP处理了，不用再走内核协议栈了，如果返回 false 则创建SKB然后继续走内核协议栈：

```
/* returns true if packet was consumed by xdp */
bool mlx5e_xdp_handle(struct mlx5e_rq *rq, struct mlx5e_dma_info *di,
                      u32 *len, struct xdp_buff *xdp)
{
        struct bpf_prog *prog = rcu_dereference(rq->xdp_prog);
        u32 act;
        int err;

        if (!prog)
                return false;

        act = bpf_prog_run_xdp(prog, xdp);
        switch (act) {
        case XDP_PASS:
                *len = xdp->data_end - xdp->data;
                return false;
        case XDP_TX:
                if (unlikely(!mlx5e_xmit_xdp_buff(rq->xdpsq, rq, di, xdp)))
                        goto xdp_abort;
                __set_bit(MLX5E_RQ_FLAG_XDP_XMIT, rq->flags); /* non-atomic */
                return true;
        case XDP_REDIRECT:
                if (xdp->rxq->mem.type != MEM_TYPE_XSK_BUFF_POOL) {
                        page_ref_sub(di->page, di->refcnt_bias);
                        di->refcnt_bias = 0;
                }
                /* When XDP enabled then page-refcnt==1 here */
                err = xdp_do_redirect(rq->netdev, xdp, prog);
                if (unlikely(err))
                        goto xdp_abort;
                __set_bit(MLX5E_RQ_FLAG_XDP_XMIT, rq->flags);
                __set_bit(MLX5E_RQ_FLAG_XDP_REDIRECT, rq->flags);
                if (xdp->rxq->mem.type != MEM_TYPE_XSK_BUFF_POOL)
                        mlx5e_page_dma_unmap(rq, di);
                rq->stats->xdp_redirect++;
                return true;
        default:
                bpf_warn_invalid_xdp_action(act);
                fallthrough;
        case XDP_ABORTED:
xdp_abort:
                trace_xdp_exception(rq->netdev, prog, act);
                fallthrough;
        case XDP_DROP:
                rq->stats->xdp_drop++;
                return true;
        }
}

```

**疑问？**
如果我们相对报文执行 redirect，那么我们在BPF程序中需要执行 bpf_redirect() / bpf_redirect_map()，但是从上面的代码中看，从我们的BPF程序返回后，驱动程序也调用了一个叫做 xdp_do_redirect() 的函数。那么问题来了，报文的 redirect 到底是在什么时候执行的呢？答案后面揭晓。

**接着分析：**

``` drivers/net/ethernet/mellanox/mlx5/core/en/xdp.c:mlx5e_xdp_handle
        case XDP_REDIRECT:
                /* When XDP enabled then page-refcnt==1 here */
                err = xdp_do_redirect(rq->netdev, &xdp, prog);
                if (unlikely(err))
                        goto xdp_abort;
                __set_bit(MLX5E_RQ_FLAG_XDP_XMIT, rq->flags);
                __set_bit(MLX5E_RQ_FLAG_XDP_REDIRECT, rq->flags);
                if (!xsk)
                        mlx5e_page_dma_unmap(rq, di);
                rq->stats->xdp_redirect++;
                return true;
```
XDP程序返回后，驱动会根据XDP程序的返回码去真正执行 action。我们以 XDP_REDIRECT 为例，继续跟踪 xdp_do_redirect() 函数：
``` javascript
// >> net/core/filter.c
xdp_do_redirect(netdev, xdp_buff, xdp_prog) =>
xdp_do_redirect_map(netdev, xdp_buff, xdp_prog, bpf_map, bpf_redirect_info) =>
__bpf_tx_xdp_map(netdev, fwd, bpf_map, xdp_buff, index) =>
// fwd即xdp_sock；

// >> kernel/bpf/xskmap.c
__xsk_map_redirect(bpf_map, xdp_buff, xdp_sock) =>

// >> net/xdp/xsk.c
xsk_rcv(xdp_sock, xdp_buff)
__xsk_rcv(xdp_sock, xdp_buff, len)
```

我们主要看下 xsk_rck() 和 __xsk_rcv() 两个函数：
``` xl
int xsk_rcv(struct xdp_sock *xs, struct xdp_buff *xdp)
{
        u32 len;

        if (!xsk_is_bound(xs))
                return -EINVAL;
        // AF_XDP技术详解中曾介绍过，AF_XDP socket是跟具体的网卡RX队列绑定的，这里再真正执行
		// 收包前做了依次判断(虽然XDP程序中也有判断，但毕竟不是强制的)
        if (xs->dev != xdp->rxq->dev || xs->queue_id != xdp->rxq->queue_index)
                return -EINVAL;

        len = xdp->data_end - xdp->data;

        return (xdp->rxq->mem.type == MEM_TYPE_ZERO_COPY) ?
                __xsk_rcv_zc(xs, xdp, len) : __xsk_rcv(xs, xdp, len);
}
```

``` javascript
static int __xsk_rcv(struct xdp_sock *xs, struct xdp_buff *xdp, u32 len)
{
        u64 offset = xs->umem->headroom;
        u64 addr, memcpy_addr;
        void *from_buf;
        u32 metalen;
        int err;

        // 从 FILL RING中获取可以承载报文数据的desc
        if (!xskq_peek_addr(xs->umem->fq, &addr, xs->umem) ||
            len > xs->umem->chunk_size_nohr - XDP_PACKET_HEADROOM) {
                xs->rx_dropped++;
                return -ENOSPC;
        }

        if (unlikely(xdp_data_meta_unsupported(xdp))) {
                from_buf = xdp->data;
                metalen = 0;
        } else {
                from_buf = xdp->data_meta;
                metalen = xdp->data - xdp->data_meta;
        }
        // 执行报文数据的copy，该函数时非zero copy模式下的执行函数
        memcpy_addr = xsk_umem_adjust_offset(xs->umem, addr, offset);
        __xsk_rcv_memcpy(xs->umem, memcpy_addr, from_buf, len, metalen);

        offset += metalen;
        addr = xsk_umem_adjust_offset(xs->umem, addr, offset);
		// 插入到 RX RING中
        err = xskq_produce_batch_desc(xs->rx, addr, len);
        if (!err) {
                xskq_discard_addr(xs->umem->fq);
                xdp_return_buff(xdp);
                return 0;
        }

        xs->rx_dropped++;
        return err;
}
```

**结论：**
bpf_redirect() 和 bpf_redirect_map() 应该只是填充bpf_redirect_info结构（即redirect的target相关的数据），真正的redirect操作仍由驱动在 XDP程序返回后执行。

``` javascript
// >> include/linux/filter.h
struct bpf_redirect_info {
        u32 flags;
        u32 tgt_index;
        void *tgt_value;
        struct bpf_map *map;
        struct bpf_map *map_to_flush;
        u32 kern_flags;
};
// >> net/core/filter.c:
int xdp_do_redirect(struct net_device *dev, struct xdp_buff *xdp,
                    struct bpf_prog *xdp_prog)
{
        struct bpf_redirect_info *ri = this_cpu_ptr(&bpf_redirect_info);
        struct bpf_map *map = READ_ONCE(ri->map);

        if (likely(map))
                return xdp_do_redirect_map(dev, xdp, xdp_prog, map, ri);

        return xdp_do_redirect_slow(dev, xdp, xdp_prog, ri);
}
```

分析的没错，bpf_redirect_map()函数定义如下：

``` javascript
// >> net/core/filter.c
BPF_CALL_3(bpf_xdp_redirect_map, struct bpf_map *, map, u32, ifindex,
           u64, flags)
{
        struct bpf_redirect_info *ri = this_cpu_ptr(&bpf_redirect_info);

        /* Lower bits of the flags are used as return code on lookup failure */
        if (unlikely(flags > XDP_TX))
                return XDP_ABORTED;

        ri->tgt_value = __xdp_map_lookup_elem(map, ifindex);
        if (unlikely(!ri->tgt_value)) {
                /* If the lookup fails we want to clear out the state in the
                 * redirect_info struct completely, so that if an eBPF program
                 * performs multiple lookups, the last one always takes
                 * precedence.
                 */
                WRITE_ONCE(ri->map, NULL);
                return flags;
        }

        ri->flags = flags;
        ri->tgt_index = ifindex;
        WRITE_ONCE(ri->map, map);

        return XDP_REDIRECT;
}
```


