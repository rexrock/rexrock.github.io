---
title: 'linux系统备份恢复'
date: 2021-06-18 10:31:00
tags: [Linux]
published: true
hideInList: false
feature: 
isTop: false
---

参考：https://help.ubuntu.com/community/BackupYourSystem/TAR

## 1. 备份
没什么好讲的，就是打个tar包
```
cd / # THIS CD IS IMPORTANT THE FOLLOWING LONG COMMAND IS RUN FROM /
tar -cvpzf backup.tar.gz \
--exclude=/backup.tar.gz \
--exclude=/proc \
--exclude=/tmp \
--exclude=/mnt \
--exclude=/dev \
--exclude=/sys \
--exclude=/run \ 
--exclude=/media \ 
--exclude=/var/log \
--exclude=/var/cache/apt/archives \
--exclude=/usr/src/linux-headers* \ 
--exclude=/home/*/.gvfs \
--exclude=/home/*/.cache \ 
```

## 2. 恢复
一开始想的是完全恢复，即找一块独立的磁盘，分区+格式化，然后将tar包解压，重启后BIOS选择从该磁盘启动，先看一下步骤：
1. 分区+格式化+mount：
    具体步骤略过，可以完全模仿原系统的分区，也可以自定义分区（需要改grub.conf中vmlinux和initrd的加载路路径）
	三步完成后，需要为新磁盘安装grub
	```
	grub2-install /dev/sdx
	```

2. 解压：
	```
		tar -xvpzf backup.tar.gz -C /media/ --numeric-owner
	```
	解压后需要根据分区调整文件位置，之后需要创建一些没有打包过来的临时目录
	```
		mkdir /proc /sys /mnt /media # 不全，自己看缺啥目录就创建啥目录
	```

3. grub恢复
	```
	for f in dev dev/pts proc ; do mount --bind /$f /media/whatever/$f ; done
	chroot /media/whatever
	grub-mkconfig -o /boot/grub/grub.cfg 
	# ubuntu/debian下的命令是 dpkg-reconfigure grub-pc
	```

4. 结果
	从新磁盘启动后，发现从老的initrd启动，无法加载系统分区，即/dev/目录下看不到sda sdb这些设备；
	然后重新启动，chroot到新磁盘，重新安装内核，然后再重新拉起，分区倒是都加载了，但是initrd启动还是有问题，过去太久具体记不起来了；注意chroot到新磁盘安装内核，需要mount一些目录，具体那些请根据错误提示操作：
	```
	mount -t proc proc /media/proc/
	```

5. 最终解决
	最后的解决方法是，安装一个同版本系统，然后只将我们打包的内容作为根文件系统分区才解决。