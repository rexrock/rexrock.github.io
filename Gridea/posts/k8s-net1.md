---
title: 'Flannel和Calico简介'
date: 2021-03-03 10:21:00
tags: [K8S-NET]
published: true
hideInList: false
feature: 
isTop: false
---
## 1. Flannel

Flannel是CoreOS维护的一个网络组件，Flannel为每个Pod提供全局唯一的IP，Flannel使用ETCD来存储Pod子网与Node IP之间的关系。flanneld守护进程在每台主机上运行，并负责维护ETCD信息和路由数据包。

```
https://github.com/coreos/flannel
```

### 1.1 Flannel部署

```
wget https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
# 修改net-conf.json配置，选择网络模式“ vxlan / host-gw "，并配置pod-cidr(注意需要跟kubeadm创建集群时指定
# 的pod-cidr一致，这里不够只能，calico可以自动读取的)
kubectl apply -f kube-flannel.yml
```

部署完成，可以在每个node上看到属于这个node子网

```
root@k8s-99-12:~# cat /var/run/flannel/subnet.env
FLANNEL_NETWORK=10.17.0.0/16
FLANNEL_SUBNET=10.17.0.1/24
FLANNEL_MTU=1450
FLANNEL_IPMASQ=true
```

### 1.2 hos-gw工作模式

如何配置工作模式，上面已有介绍。这里主要看下flannel的host-gw模式时如何工作的

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614303683871.png)

**说明：**

flannel的host-gw模式，就是将每个节点都当成一个网关，部署中指定pod-cidr后，flannel会为每个node分配一个子网，并将这些node子网信息都存储到etcd中，然后每个节点上flannel守护进程会根据这些信息将其他所有节点都加到本地路由中以实现跨界点访问。下面我们分别看一下node节点上以及pod中的路由是什么样的。

**pod路由**

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614303723395.png)

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614303751754.png)

**宿主机路由**

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614303802333.png)

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614303831855.png)

> **限制：**
> 
> 1\. Node需要二层互通，否则下一条转发不出去（以我们的云主机为例，云主机之间转发靠流表，因此在云主机上搭建的k8s集群，如果采用flannel的host-gw模式，跨节点访问不通的）。

### 1.3 vxlan模式

vxlan模式的转发路径如下图所示，flannel.1即linux的vxlan port：

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614303854716.png)

vxlan的原理这里不做展开，关于linux vxlan的配置及工作原理可参考：
[http://just4coding.com/2020/04/20/vxlan-fdb/](http://just4coding.com/2020/04/20/vxlan-fdb/)

分别看一下12节点和16节点的转发表：

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614303886618.png)

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614303902545.png)

可以看到每个节点被当成一个网关，只不过底层传输走了vxlan。

## 2. Calico

### 2.1 Calico部署

**部署前确保宿主机的iptables为legacy模式：**

```
iptables --version
update-alternatives --set iptables /usr/sbin/iptables-legacy
update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy
update-alternatives --set arptables /usr/sbin/arptables-legacy
update-alternatives --set ebtables /usr/sbin/ebtables-legacy
```

**参考：**[https://docs.projectcalico.org/getting-started/kubernetes/self-managed-onprem/onpremises#install-calico-with-kubernetes-api-datastore-50-nodes-or-less](https://docs.projectcalico.org/getting-started/kubernetes/self-managed-onprem/onpremises#install-calico-with-kubernetes-api-datastore-50-nodes-or-less)

**参考：**[https://blog.51cto.com/14143894/2463392](https://blog.51cto.com/14143894/2463392)

**说明：**

1\. Calico可以自己读取集群的pod-cidr配置，无需像flannel一样去手动修改配置；

2\. Calico网络模式的选择：

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614303947059.png)

 - **BGP**：CALICO\_IPV4POOL\_IPIP="Never" 且 CALICO\_IPV4POOL\_VXLAN=”Never“
 - **IP Tunnel:** CALICO\_IPV4POOL\_IPIP="Always" 且 CALICO\_IPV4POOL\_VXLAN=”Never“
 - **VXLAN**: CALICO\_IPV4POOL\_IPIP="Never" 且 CALICO\_IPV4POOL\_VXLAN=”Always“

### 2.2 BGP模式

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614303997323.png)

**类似flannel的host-gw模式，但是有两点不同：**

1\. 不在使用bridge，所有pod通信全部走路由，例如pod1和pod2的通信的路由如下：

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614304023667.png)

2\. 其他节点路由信息的添加由BGP负责，flannel则是通过自己的守护进程实现，可以看到calico-node的pod里跑了bird：

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614304040483.png)

**限制：**

和flannel一样，BGP模式要求节点在二层互通；

**最后看一下两个节点上的路由信息：**

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614304078596.png)

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614304108422.png)

### 2.3 IP Tunnel模式

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614304129190.png)

IP Tunnel方案相比BGP方案相比，唯一的区别时跨节点通信由原来的路由转发，改为IPIP隧道模式。好处时对节点网络没有二层互通的要求，只要节点三层可达，即可实现通信。

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614304149124.png)

### 2.4 Vxlan模式

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614304168262.png)

现在Calico也支持vxlan模式了，相比IP Tunnel模式，唯一的区别就是隧道类型变了，毕竟vxlan已经成为网络虚拟化的主流方案，和flannel一样都是使用的linux内核提供的vxlan功能。

直接看下12节点的路由和转发表好了：

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614304182545.png)

![enter description here](file://C:/Users/liyang07/Documents/Gridea/post-images/1614304208695.png)