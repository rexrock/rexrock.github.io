---
id: ebpf1
title: eBPF的使用限制
slug: /
---

## 1. 不能使用循环语句

eBPF程序中不能使用循环语句，如果非要使用循环，则必须通过编译选项“`#pragma clang loop unroll(full)`”让编译器在编译过程中将循环展开。

此外必须要注意的一点是，循环中的语句必须是单一且独立的块，如下：

~~~
static __always_inline int search_service_ip(int i, __u32 ip) {
	...
	return 0;
}

static __always_inline int is_service_ip(__u32 ip) {
#pragma clang loop unroll(full)
	for(int i = 0; i < 32; i++) {
		switch(search_service_ip(i, ip)) {
			case 0:
				continue;
			case 1:
				return 1;
			default:
				break;
		}
	}
	return 0;
}
~~~

## 2. map操作的原子性

* ebpf提供函数map\_update\_elem()对ebpf map表中的数据进行更新，该函数在对BPF\_HASH表进行操作时是原子操作，对BPF\_ARRAY操作时是非原子的。
* 即使map\_update\_elem(）全部是原子操作，我们执行累加的流程是“ lookup elem -> elem++ -> update elem”，这一串操作也没办法保证原子性。

**对ebpf map进行原子更新我们分内核态和用户态两种场景：**

* 在内核态运行的ebpf程序可直接对ebpf map中的数据进行操作，加上bpf\_map\_lookup\_elem()返回的是map中数据的指针。我们可以借助编译器原语（\_\_sync\_fetch\_and\_add）在LLVM生成eBPF指令时，以原子方式对bpf\_map\_lookup\_elem()返回的数据指针直接进行加减以此实现原子操作。（bcc的llvm编译器是内置的，所以已将该原语封装成lock\_xadd()函数）
* 目前用户态程序对ebpf map进行累加修改，还没有办法保证原子性，所以在程序设计阶段，务必保证不要让用户态程序和内核态程序同时对ebpf map进行类似累加修改的操作。

