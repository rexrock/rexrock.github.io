---
title: 'QUAGGA ZEBRA : ripd'
date: 2014-10-10 12:31:00
tags: [动态路由]
published: true
hideInList: false
feature: 
isTop: false
---

## 1. 运行和终止ripd

```
     # zebra -d
     # ripd -d
```
由于rip协议需要的接口信息都保存在守护进程zebra中，所以运行ripd之前一定要先运行zebra。

```
kill ‘cat /var/run/ripd.pid‘
```

直接使用kill命令终止ripd

## 2. 信号处理

> ‘SIGHUP’ Reload configuration file ripd.conf. All configurations are reseted. All routes learned so far are cleared and removed from routing table.

## 3. 开启关闭RIP

必须在调用其他RIP命令之前开启RIP

```
ripd(config)# router rip
ripd(config)# no router rip
```

## 4. 设置用来发送和接收RIP数据包的接口

### 4.1 通过网络地址设置

```
ripd(config-router)# network network
ripd(config-router)# no network network
```

### 4.2 通过网口名称设置

```
ripd(config-router)# network ifname
ripd(config-router)# no network ifname
```

## 5. 指定邻居

如果当前路由器的一个邻居不能处理组播，那么该命令用来在当前路由器上指定该邻居，然后当前路由器将以单播形式来发送更新给这个邻居。

```
ripd(config-router)# neighbor a.b.c.d
ripd(config-router)# no neighbor a.b.c.d
```

## 6. 设置被动接口

设置接口处于被动模式，被动接口只接受路由更新而不发送路由更新（使用neighbor指定的邻居除外，也就是说即使接口处于被动模式，但是使用neighbor命令指定的邻居通过该接口与当前路由器连接，那么该接口仍会向这个邻居发送路由更新）。

```
ripd(config-router)#passive-interface (IFNAME|default)
ripd(config-router)#no passive-interface IFNAME
```
如果为default那么则所有的接口都将处于被动模式。

## 7. 设置水平分割和带毒性逆转的水平分割

```
ripd(config-if)# ip rip split-horizon
ripd(config-if)# no ip split-horizon
```
缺省情况下，ripd是启动了水平分割的，使用no ip split-horizon关闭水平分割

```
ripd(config-if)# ip rip split-horizon poisoned-reverse
ripd(config-if)# no ip rip split-horizon poisoned-reverse
```
缺省情况下，ripd没有打开带毒性逆转的水平分割，使用ip rip split-horizon poisoned-reverse开启带毒性逆转的水平分割。

## 8. 全局版本控制

默认情况下，可以同时接收ripv1和ripv2的数据包并发送ripv2的数据包。

```
ripd(config-router)# version version
version can be either ‘1” or ‘2”.
```
 通过version命令可以指定发送数据包的版本，该版本是全局的；由于ripv1的不安全性，使用“version 2”指定发送版本是十分受鼓励的。

```
config#  no version
```

设置全局版本为默认值。

## 9. 接口版本控制

接口版本控制的优先级高于关于版本控制

```
ripd(config-if)# ip rip send version version
```

指定改接发送packets的rip版本，如果指定为‘1 2’，那么packets will be both broadcast and multicast，默认为全局版本.

```
ripd(config-if)# ip rip receive version version
version can be ‘1’, ‘2’ or ‘1 2’.
```

默认为‘1 2’

## 10. 设置定时器

### 10.1 rip协议有几个定时器

 - 更新计时器，默认为30s，每隔一个周期就会主动发送“包含了完整路由表”的应答信息给所有的RIP邻居。

 - 无效计时器，默认是180s，每一条路由被创建的时候，rip会为其建立一个倒计时，如果这个时间内没有收到更新，那么该路由度量将自动被设置为16（ x.x.x.x is possibly down，即不可达），但是在清楚计时器超时以前，该路由仍将保留在路由表中。

 - 清除计时器，清除计时器。默认情况下，清除计时器设置为 240 秒，比无效计时器长 60 秒。当清除计时器超时后，该路由将从路由表中删除。（这里就意味着一个路由条目在180秒内没有收到更新报文时，无效计时器超时。路由条目中该路由被标志为x.x.x.x is possibly down，直到清除计时器也超时了(再过60秒后)该路由条目才被删除。在RIP中真正删除路由条目的是清除计时器超时。）

 - 抑制计时器，抑制计时器。该计时器用于稳定路由信息，并有助于在拓扑结构根据新信息收敛的过程中防止路由环路。在某条路由被标记为不可达后，它处于抑制状态的时间必须足够长，以便拓扑结构中所有路由器能在此期间获知该不可达网络。默认情况下，抑制计时器设置为 180 秒。

### 10.2 抑制计时器介绍

抑制计时器通过以下方式工作：

 1. 路由器从邻居处接收到更新，该更新表明以前可以访问的网络现在已不可访问。
 2. 路由器将该网络标记为 possibly down 并启动抑制计时器。
 3. 如果在抑制期间从任何相邻路由器接收到含有更小度量的有关该网络的更新，则恢复该网络并删除抑制计时器。
 4. 如果在抑制期间从相邻路由器收到的更新包含的度量与之前相同或更大，则该更新将被忽略。如此一来，更改信息便可以继续在网络中传播一段时间。
 5. 路由器仍然会转发目的网络被标记为 possibly down 的数据包。通过这种方式，路由器便能克服连接断续所带来的问题。如果目的网络确实不可达，但路由器又转发了数据包，黑洞路由就会建立起来并持续到抑制计时器超时。

**分析：**
在quagga中，只有三种计时器“更新计时器”、“无效计时器”和“抑制计时器”，上面所描述的清除计时器=无效计时器+抑制计时器。所以ripd的timer命令只需要设置三种计时器即可。
```
ripd(config-router)# timers basic update timeout garbage
ripd(config-router)# no timers basic
```

## 11. 设置管理距离

管理距离是一种对路由选择信息的可信度进行排序的方法。管理距离是一个0-255的证书，值越小可信度越高。尽管管理距离可以配置为1-9，但是他们被保留内部使用，不推荐使用他们。
![enter description here](https://rexrock.github.io/post-images/1617148423731.png)

```
ripd(config-router)# distance <1-255> [RIP command]
ripd(config-router)# no distance <1-255> [RIP command]
```

## 12. RIPV2的认证

设置ripv2的验证模式（简单密码验证|MD5验证）

```
ripd(config-if)# ip rip authentication mode
ripd(config-if)# no ip rip authentication mode 
```

设置简单密码验证的密码

```
ripd(config-if)# ip rip authentication string string
ripd(config-if)# no ip rip authentication string string
```

设置MD5认证的秘钥链

```
ripd(config-if)# ip rip authentication key-chain key-chain
ripd(config-if)# no ip rip authentication key-chain key-chain
```



