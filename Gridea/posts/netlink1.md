---
title: 'NETLINK中常用数据结构说明'
date: 2021-03-26 12:31:00
tags: [NETLINK, KERNEL]
published: true
hideInList: false
feature: 
isTop: false
---

![msghdr](./images/1616982518757.png)

include/linux/uio.h
![iovce](./images/1616982548951.png)
其中nlmsg_flags用于设置消息标志，包括如下：
![nlmsg_flags](./images/1616982587013.png)

include/linux/socket.h
![msghdr](./images/1616982623148.png)
