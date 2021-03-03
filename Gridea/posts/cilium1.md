---
title: 'Cilium简介'
date: 2021-03-03 10:22:00
tags: [K8S-NET,Cilium]
published: true
hideInList: false
feature: 
isTop: false
---
## 1. Cilium工作模式

官网：
[https://docs.cilium.io/en/v1.8/concepts/networking/routing/](https://docs.cilium.io/en/v1.8/concepts/networking/routing/)

Cilium也分为overlay和underlay两种工作模式：

 - overlay，目前支持vxlan和geneve两种虚拟化网络协议；
 - underlay，该模式下cilium需要能够对分配到其他node上的ip段进行路由，但遗憾得是，cilium既不能像flannel那样通过自身的守护进程下发路由配置，也不能像calico那样直接集成bird以提供BGP功能；所以要实现cilium路由模式的部署，我们需要自己提供BGP功能，有两种方式：

        方式一：节点本身知道如何路由所有POD IP，但是网络中存在一个路由器，该路由器知道如何到达每个POD IP，每个节点需配置一条默认路由指向该路由器，该方式主要常见于云提供商的网络集成场景。
        方式二：每个节点都知道所有的POD IP，并将路由插入到本地内核的路由表中。和flannel和calico一样，这需要所有节点二层互通。这需要我们自己部署BGP功能（可以通过kube-router来部署BGP功能）。

**说明：**

Geneve（Generic Network Virtualization Encapsulation-统用网络虚拟化封装），参考：[https://zhuanlan.zhihu.com/p/35790366](https://zhuanlan.zhihu.com/p/35790366)

## 2. 路由模式

### 2.1 Cilium部署

```
git clone https://github.com/cilium/cilium.git
#kubectl create -f cilium/install/kubernetes/quick-install.yaml
```

**注意：**

cilium默认是采用vxlan方式部署的，所以我们需要先修改quick-install.yaml：

```
--- cilium-vxlan.yaml   2020-10-26 14:36:13.449026862 +0800
+++ cilium-route.yaml   2020-10-26 14:28:08.458113851 +0800
@@ -95,7 +95,9 @@
   #   - disabled
   #   - vxlan (default)
   #   - geneve
-  tunnel: vxlan
+  tunnel: disabled
+  native-routing-cidr: 10.17.0.0/16
+  #auto-direct-node-routes: true

   # Name of the cluster. Only relevant when building a mesh of clusters.
   cluster-name: default
```

官方文档中说，如果各节点二层互通，那么直接通过参数auto-direct-node-routes: true
即可实现各节点路由配置的同步和下发，环境所限并未验证。

![enter description here](https://rexrock.github.io/post-images/1614300041226.png)

我们看到，只部署cilium，那么该节点上是没有其他节点POD IP的路由的。这时候如果默认路由指向的网关可以提供其他节点POD IP的路由（对应underlay方式一的部署），那么整个集群POD已经可以直接互通。

### 2.2 kube-router部署

```
wget https://raw.githubusercontent.com/cloudnativelabs/kube-router/v0.4.0/daemonset/generic-kuberouter-only-advertise-routes.yaml
```

按照文档说明，需要先修改一些内容：

```
root@k8s-99-12:~# diff -rNua kube-router.orig.yaml kube-router.yaml
--- kube-router.orig.yaml       2020-10-26 14:45:03.716777078 +0800
+++ kube-router.yaml    2020-10-26 11:08:40.467744916 +0800
@@ -29,11 +29,9 @@
         - "--run-firewall=false"
         - "--run-service-proxy=false"
         - "--enable-cni=false"
-        - "--enable-ibgp=false"
-        - "--enable-overlay=false"
-        - "--peer-router-ips=<CHANGE ME>"
-        - "--peer-router-asns=<CHANGE ME>"
-        - "--cluster-asn=<CHANGE ME>"
+        - "--enable-pod-egress=false"
+        - "--enable-ibgp=true"
+        - "--enable-overlay=true"
         - "--advertise-cluster-ip=true"
         - "--advertise-external-ip=true"
         - "--advertise-loadbalancer-ip=true"
```

测试环境使用ibgp即可，无需配置ebpf，所以peer-router-ips、peer-router-asns、cluster-asn无需配置。

![enter description here](https://rexrock.github.io/post-images/1614300092938.png)

kube-router启动后，可以看到其他节点的POD IP已经被加入本地路由。

## 3. VXLAN模式

Cilium默认就是以vxlan方式部署，但是cilium并不会自动读取以配置的pod-cidr，需要我们通过参数native-routing-cidr: 10.17.0.0/16自己指定。

![enter description here](https://rexrock.github.io/post-images/1614300139319.png)

可以看到vxlan部署后，跨界点访问都导向了cilium\_host。由于cilium大量使用ebpf功能，穿透内核协议栈部分功能，所以目前没办法画出完整的流量走向图，后续持续更新。