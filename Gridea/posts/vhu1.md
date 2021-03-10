---
id: vhu1
title: 深入浅出vhostuser传输模型
---

## 1. virtio的ring结构
Virtio设备是支持多队列，每个队列由结构vring_virtqueue定义（可以是收包队列也可以是发包队列），而每个vring_virtqueue中都定义了一个vring结构，负责具体的数据传输。

``` code
// include/uapi/linux/virtio_ring.h
struct vring {
        unsigned int num;

        struct vring_desc *desc;

        struct vring_avail *avail;

        struct vring_used *used;
};
```
可见，ving不是一个ring环，而是包含了三个ring环，利用着三个ring环实现报文的收发。我们通过一张图来描述三个ring环的作用及关系：
![enter description here](./images/1615334196092.png)

**1. vring_desc**
Struct vring_desc并没有定义一个ring环，而是定义了ring环中每个元素的结构。上图中已经对vring_desc各成员做了注解。Desc ring没有消费者和生产者，我们可以把它看作一块用来交互数据的共享内存。

> 说明：vring_desc结构中的addr成员，在Guest向外发包的场景中，指向的是一块承载了发包数据的内存，而在Guest从外面收包的场景中，指向的是一块预分配好的空内存，Host会将收到的包存放到这块空内存中。

**2. vring_avail**
Struct vring_avail是定义了一个ring环的（即成员ring[]），这个ring环的生产者是Guest中的virtio-net，消费者是Host中vhostuser/vhostnet。Avail ring环中每个元素即指向desc ring的下标。

> 说明：Avail ring和desc ring的长度都是一样的，但是avail ring并不会指向desc ring的每一个desc。例如有些skb是由多个分片组成的（scattergather），那么这个skb实际会被转换成多个desc，并且通过vring_desc中的next将多个desc链接在一起，最后一个desc通过flag标记结束。那么这种情况下，Avail ring只会存储第一个desc的下标，同时vring_avail的idx也只累加1。

**3. vring_used**
 Struct vring_used跟vring_avail类似，不过used ring的生产者是vhostnet/vhostuser，消费者是virtio-net。
 
> 说明：used ring中的每个元素包含两个成员id和len，id指向desc ring中的下标，而len则指向desc中所存储数据的长度(通常len成员只在Guest从外面收包的场景中才有效，这个时候desc中len指的是内存中可以最大存储的数据的长度，而user ring中的len指的则是内存中实际存储的数据的长度）。

那么这三个ring在内存中是怎么分布的呢？我们通过一张图描述下：
![enter description here](./images/1615334206753.png)

如图，三个ring是分布在一块连续的内存中的（物理/虚拟地址都是连续的）。最前面是desc ring，接下来是avail ring，最后是used ring。

## 将vring映射到vhostuser
Virtio队列中的vring是由Guest中的virtio-net驱动申请的，那么vhostuser如何操作这些vring呢？答案是virtio-net在申请好vring后需要将vring的地址告诉vhostuser。我们通过一张图，看一下虚拟机启动时所涉及到的内存注册过程：
![enter description here](./images/1615335007124.png)

如上图所示，整个内存注册过程分为三个步骤：
**第一步：**
QEMU未虚拟机申请内存，并将虚拟机的整个内存注册到vhostuser。你没看错，确实是需要将虚拟机的整个内存都注册到vhostuser驱动中。

> 说明：Vhostuser和QEMU通过unix socket建立了通信连接，两者通过该连接进行协商。

**第二步：**
Guest中的virtio-net驱动申请队列（即virtqueue），并将队列中的vring地址同步给QEMU。
``` code
// 追踪从virtio-net开始初始化到创建virtqueue，函数定义位置：linux-kernel-src/drivers/virtio/
|virtio_pci_probe
| |virtio_pci_legacy_probe / virtio_pci_modern_probe
| |	|setup_vq
| |	| |vring_create_virtqueue
| | | | |vring_create_virtqueue_split
| | | | | |void *queue = vring_alloc_queue // 申请vring的地址
| | | | | |vring_init(struct vring *, queue)
| | | | | |__vring_create_virtqueue
| | | |iowrite32(VIRTIO_PCI_QUEUE_PFN) // 将vring_addr注册到QEMU
```
> 说明：Virtio-net和QEMU之间的通信不是通过什么scoket，而是由virtio-net向一段特定的io空间写数据实现的。不单单QEMU是这样做的，包括VMWARE也是这么做的（XEN不熟悉）。同理，QEMU向GUEST发起的数据请求也都是都通过IO实现的。

**第三步：**
QEMU在enable每个virtqueu的时候，会将virtqueue中三个vring的长度及地址注册到vhostuser。并且初始化三个vring中消费者/生产者的位置。

``` code
// vhostuser中相关协商处理函数
static vhost_message_handler_t vhost_message_handlers[VHOST_USER_MAX] = {
	......
	[VHOST_USER_SET_VRING_NUM] = vhost_user_set_vring_num,
	[VHOST_USER_SET_VRING_ADDR] = vhost_user_set_vring_addr,
	[VHOST_USER_SET_VRING_BASE] = vhost_user_set_vring_base,
	......
};
```

## Guest向外发包

## Guest从外面收包
## Virtio的前后端通知机制

 