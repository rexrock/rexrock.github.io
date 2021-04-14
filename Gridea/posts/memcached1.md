---
title: 'Memcached安装及使用'
date: 2013-09-02 12:31:00
tags: [Memcached]
published: true
hideInList: false
feature: 
isTop: false
---

## 1. 下载

1.下载libevent
2.下载memcached
2.下载C语言客户端开发库libmemcached

# 2. 安装使用

**1.libevent**

```
./configure --prefix=/usr
# "如果没有指定安装前缀--prefix=/usr否则libevent将会被默认安装在/usr/local/lib目录下"
make　&&　make install
```

**2.memcached**

```
./configure --with-libevent=/usr
make　&&　make install 
# ＂如果libevent没有被安装在/usr/lib目录下，在编译时会发生错误
# /usr/local/memcached/bin/memcached: error while loading shared libraries: libevent-1.4.so.2:
# cannot open shared object file: No such file or directory
# 解决办法即创建软链接（参照LD_DEBUG）
ln –s /usr/local/lib/libevent-2.0.so.5 /usr/lib/libevent-2.0.so.5＂
```

**3.libmemcached**

```
#./configure
#make && make install
```

## 3. 使用

```
memcached -d -m 64 -l localhost -p 11211 -u rexrock
```
启动memcached，在运行使用libmemcached开发的客户端程序时要保证memcached是运行的

## 4. memcached的配置文件

1.自启动脚本/etc/init.d/memcached
2.自启动开关/etc/default/memcached
3.自启动参数/etc/memcached.conf

## 5. 清空memcached数据的方法

```
service memcached restart
```
即重启memcached服务即可


