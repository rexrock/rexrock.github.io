---
title: 'openstack环境搭建'
date: 2020-03-03 12:31:00
tags: [OPENSTACK]
published: true
hideInList: false
feature: 
isTop: false
---

## 1. Mysql安装

参考：https://cloud.tencent.com/developer/article/1329000
登录mysql：
```
# mysql -u root -p
# show databases;
# use mysql;
# show tables;
```

## 2. Keystone安装

### 2.1 选取openstack版本

使用yum search查看支持如下openstack发行版本：
centos-release-openstack-ocata.noarch
centos-release-openstack-pike.x86_64
centos-release-openstack-queens.noarch
centos-release-openstack-rocky.noarch
centos-release-openstack-stein.noarch
首先处于兼容性考虑选取了最老的版本ocata，安装后总是提示：
ArgsAlreadyParsedError: arguments already parsed: cannot register CLI option
解决无果，google上说是老版本的patch，所以决定换个新版本再试试；
Stein、rocky、queens三者安装失败，只能选择pike版本了：
```
# yum install centos-release-openstack-pike
# yum update
```

### 2.2 配置keystone数据库

```
# CREATE DATABASE keystone;
# GRANT ALL PRIVILEGES ON keystone.* TO 'keystone'@'localhost' IDENTIFIED BY 'keystone_Passw0rd';
# GRANT ALL PRIVILEGES ON keystone.* TO 'keystone'@'%' IDENTIFIED BY 'keystone_Passw0rd';
```

### 2.3 安装keystone

```
# yum install python-openstackclient openstack-keystone httpd mod_wsgi
```

### 2.4 标记keystone配置文件

```
# vi /etc/keystone/keystone.conf
[database]
connection = mysql://keystone:keystone_Passw0rd@172.24.10.2/keystone
[token]
provider = fernet
```

### 2.5 初始化

```
主要是再数据库中创建keystone服务所需要的表项，后面其他服务都是一样的道理。
# su -s /bin/sh -c "keystone-manage db_sync" keystone
初始化fernet密钥库
# keystone-manage fernet_setup --keystone-user keystone --keystone-group keystone
# keystone-manage credential_setup --keystone-user keystone --keystone-group keystone
引导服务
# keystone-manage bootstrap --bootstrap-password rootPassw0rd## --bootstrap-admin-url http://172.24.10.2:35357/v3/  --bootstrap-internal-url http://172.24.10.2:5000/v3/  --bootstrap-public-url http://172.24.10.2:5000/v3/ --bootstrap-region-id RegionOne
```

### 2.6 配置apache http server

编辑/etc/httpd/conf/httpd.conf
ServerName 172.10.24.2:80
创建链接：
```
# ln -s /usr/share/keystone/wsgi-keystone.conf /etc/httpd/conf.d/
```

### 2.7 启动服务并验证

```
# systemctl start httpd.service
export OS_USERNAME=admin
export OS_PASSWORD=rootPassw0rd##
export OS_PROJECT_NAME=admin
export OS_USER_DOMAIN_NAME=Default
export OS_PROJECT_DOMAIN_NAME=Default
export OS_AUTH_URL=http://172.24.10.2:35357/
export OS_IDENTITY_API_VERSION=3
export OS_TENANT_NAME=admin
运行如下命令进行验证
# openstack user list
```


