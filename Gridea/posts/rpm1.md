---
title: '制作RPM包'
date: 2021-06-18 09:31:00
tags: [RPM]
published: true
hideInList: false
feature: 
isTop: false
---

参考：https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html-single/rpm_packaging_guide/index

## 1. 安装必要的工具

```
yum install @'Development Tools' rpm-build yum-utils
```

## 2. 创建编译目录

```
rpmdev-setuptree
```
编译目录路径为${home}/rpmbuild/，目录结构如下：
.
├── BUILD，编译目录
├── RPMS，rpm包存放目录
├── SOURCES，源码包存放目录
├── SPECS，spec文件存放目录
└── SRPMS，src.rpm存放目录

### 3. 创建spec文件
本文为shell脚本创建rpm包，没有源码编译这一步，直接看spec文件：

```
# 指定rpmbuild工作目录，可以不指定，默认就是${home}/rpmbuild/
BuildRoot:     /root/rpmrebuild
# 指定架构依赖，由于是脚本，所以是noarch，还可以是x86_64/arm等，如果不是noarch可以不指定，rpmbuild会自动检测并设置
BuildArch:     noarch
# rpm包的名称
Name:         hello-test
# rpm包的版本
Version:       1.0.0
# rpm包的发行号，即当前版本第n次的发行
Release:       1_11
License:       GPLv3+
Group:         Unspecified
Summary:       Hello test

%description
Just test for build rpm package

%install
# 下面执行的其实都是shell命令了，工作目录为${home}/rpmbuild/BUILD/，
# 所以说我们需要将待安装的文件放在${home}/rpmbuild/BUILD/目录下,然后
# 执行下面的命令将文件安装到%{buildroot}目录下，%{buildroot}是自动创
# 建的目录，通常这个目录是${home}/rpmbuild/BUILDROOT/${Name}-${Version}-${Release}.${BuildArch}
mkdir -p %{buildroot}/etc/hello-test/
install -m 0755 test.sh %{buildroot}/etc/hello-test/test.sh
install -m 0644 test.conf %{buildroot}/etc/hello-test/test.conf

%files
# 安装文件列表，并定义每个文件的属性
%defattr(644,root,root,755)
%attr(755,root,root) /etc/hello-test/test.sh
%config(noreplace) %attr(0644, root, root) "/etc/hello-test/test.conf"
```

## 4. 执行rpmbuild开始打包

```
rpmbuild -ba hello-test.spec
```