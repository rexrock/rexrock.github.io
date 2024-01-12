---
title: 'RDMA编程模型'
date: 2020-3-27 12:31:00
tags: [RDMA]
published: true
hideInList: false
feature: 
isTop: false
---

## 1. 连接管理

**通过rdmacm实现连接管理：**

- Socket既管理连接又管理传输；
- RDMACM只管理连接，数据传输下面再介绍；

![rdma1_1](https://rexrock.github.io/post-images/rdma1_1.png)

## 2. 数据传输

**RDMA的三种数据传输模式：**
- 双边操作—Send/Receive，收发端都参与才能完成；
- 单边操作—Write，提前明确两边的收发地址，数据传输过程，无需接收端参与；
- 单边操作—Read，提前明确两边的收发地址，数据传输过程，无需发送端参与；

**基于socket的通信不用关心物理设备，但是RDMA通信必须要跟RDMA设备绑定！！！**

- 创建socket的时候，不管管最终从哪个设备出去，也不用做任何跟绑定设备相关的操作；
- 创建qp的时候，必须指定在哪个RDMA设备上创建qp；

**跟哪个RDMA设备绑定**
- 如果不使用rdmacm，需要用户自己根据IP地址来寻找跟哪个RDMA设备绑定，或者干脆手动指定；然后打开设备：struct ibv_context *ctx = ibv_open_device ()
- 如果使用了rdmacm，则通过rdma_resolve_addr自动找到要绑定的设备，并返回struct ibv_context *ctx;

### 2.1 创建数据传输需要的QP、CQ

- 申请保护域PD：ibv_alloc_pd()

- 创建CQ:

  - 创建cq_event_channel：ibv_create_comp_channel()

  - 创建cq：ibv_create_cq()

  - 指定cq的通知机制：ibv_req_notify_cq(),这样的话当一个cqe(completion queue entry )被放到cq中时，会产生一个completion event ，被放到event channel中。然后我们通过ibv_get_cq_event（阻塞）得到event，再调用ibv_poll_cq获取cqe。否则指定通过ibv_poll_cq（非阻塞）不停的轮询。

- 创建QP并指定其CQ、PD、ibver_ctx： rdma_create_qp()
- 注册将要参与数据传输的内存：ibv_reg_mr（）,返回这块内存的key，对端有了key才能访问这块内存；

![rdma1_2](https://rexrock.github.io/post-images/rdma1_2.png)

### 2.2 创建QP的契机

图中标★处：

![rdma1_3](https://rexrock.github.io/post-images/rdma1_3.png)

### 2.3 传输之send/receive

![rdma1_4](https://rexrock.github.io/post-images/rdma1_4.png)

### 2.5 传输之write/read

> 前提，被read/write的一端(称接收端)，需要把自己要被read/write的内存，发给发起read/write的一端（称发送端）

**发送哪些内容？**

- addr，rkey：ibv_reg_mr，返回两个key，lkey即本端网卡操作这端内存的key，rkey即对端网卡操作这段内存的key。

**怎么把addr、rkey发送给对端？**

- 随便：可以通过上面讲的send/receive，或者干脆通过TCP/IP传输这种数据；

![rdma1_5](https://rexrock.github.io/post-images/rdma1_5.png)

### 2.6 传输之write_with_immediate

> 前提，被read/write的一端(称接收端)，需要把自己要被read/write的内存，发给发起read/write的一端（称发送端）

![rdma1_6](https://rexrock.github.io/post-images/rdma1_6.png)

## 3. 总结

**前面为什么说RDMA的连接管理合数据传输时分开的？**

- Rdma_cm_event管理连接状态；
- Cq管理数据传输的状态；
