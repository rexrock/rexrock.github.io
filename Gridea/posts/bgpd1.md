---
title: ' QUAGGA ZEBRA : bgpd'
date: 2014-10-16 12:31:00
tags: [动态路由]
published: true
hideInList: false
feature: 
isTop: false
---

1. 启动和关闭BGP

```
bgpd(config)# router bgp asn
bgpd(config)# no router bgp asn
```

asn即自治系统的ID，asn对于bgp协议来说是必要的，因为asn要通过asn来判断两个BGP路由之间的关系式IBGP还是EBGP。

2. 设置routerID

```
bgpd(config-router)# bgp router-id A.B.C.D
```

routerID是BGP路由器的标识符，用来标识一台BGP路由器。如果bgpd能够连接到zebra并获取到接口信息，那么bgpd将使用所以接口中最大的IP地址来作为routerID，如果不能连接到zebra，那么routerID将被设置为0.0.0.0。所以设置routerID是十分必要的。

3. 设置管理距离

```
bgpd(config-router)# distance bgp <1-255> <1-255> <1-255>
```

设置管理距离，三个值分别为：
     
4. 设置对等体peer


