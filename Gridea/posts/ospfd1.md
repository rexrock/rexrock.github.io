---
title: ' QUAGGA ZEBRA : ospfd'
date: 2014-10-13 12:31:00
tags: [动态路由]
published: true
hideInList: false
feature: 
isTop: false
---

## 1. 运行和终止ospfd

```
ospfd(config)# router ospf
ospfd(config)# no router ospf
```

## 2. 配置router id

```
ospfd(config-router)# ospf router-id a.b.c.d
ospfd(config-router)# no ospf router-id
```

## 3. 兼容RFC1583的开关

```
ospfd(config-router)# ospf rfc1583compatibility
ospfd(config-router)# no ospf rfc1583compatibility
```

RFC2328是RFC1583的继任者，建议通过改变路径优先算法来避免在老版本OSPFV2中发生的路由环路，具体来讲，就是他要求区域间路径和区域间骨干路径平等但是依然优先外部路径。

## 4. 配置接口处于被动模式

```
ospfd(config-router)# passive-interface interface
ospfd(config-router)# no passive-interface interface
```

## 5. 设置管理距离

```
ospfd(config-router)# distance <1-255> 
ospfd(config-router)# no distance <1-255>
```

## 6. 创建OSPF区域
![ospf](https://rexrock.github.io/post-images/1617148712508.png)

**network命令和area命令有啥区别？**

```
ospfd(config-router)# network a.b.c.d/m area a.b.c.d
ospfd(config-router)# network a.b.c.d/m area <0-4294967295>
ospfd(config-router)# no network a.b.c.d/m area a.b.c.d
ospfd(config-router)# no network a.b.c.d/m area <0-4294967295>
```

RouterID和AreaID是OSPF报文头中不可缺少的两个字段（都是32bit），所以当使用network指定哪些网络和端口要运行OSPF协议的同时必须指定其所属的AREA。AREA相当于OSPF端口的一个集合，按照一般人的理解，如果没有创建AREA那么何来AREAID，所以在我们的系统中首先使用area areaID命令创建区域，再指定那些网络或者端口在此区域中运行areaID。

```
ospfd(config-router)# area a.b.c.d range a.b.c.d/m
ospfd(config-router)# area <0-4294967295> range a.b.c.d/m
ospfd(config-router)# no area a.b.c.d range a.b.c.d/m
ospfd(config-router)# no area <0-4294967295> range a.b.c.d/m
```

Area命令是用来设置路由汇聚的，而不是用来定义Area的。

## 7. 设置虚连接

```
ospfd(config-router)# area a.b.c.d virtual-link a.b.c.d
ospfd(config-router)# area <0-4294967295> virtual-link a.b.c.d
ospfd(config-router)# no area a.b.c.d virtual-link a.b.c.d
ospfd(config-router)# no area <0-4294967295> virtual-link a.b.c.d
```

![enter description here](https://rexrock.github.io/post-images/1617148778812.png)

![enter description here](https://rexrock.github.io/post-images/1617148793821.png)

## 8. 外部路由的Metric说明

![enter description here](https://rexrock.github.io/post-images/1617148921184.png)

