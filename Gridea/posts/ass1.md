---
title: '汇编实现hello world程序'
date: 2013-03-22 12:31:00
tags: [汇编]
published: true
hideInList: false
feature: 
isTop: false
---

C内嵌汇编实现hello world程序，手动执行ld进行静态链接，不依赖任何库

编译：
gcc -c write.c
-c : 编译和汇编，不进行链接

链接：
ld -static -e main -o write ./write.o
-static : 静态链接
-e main : 执行程序入口函数

```
#define EXITNO 23
const char *str = "Hello world\n";

#ifdef __x86_64__
void m_print()
{
    asm volatile(
        "syscall"
        :
        :"a"(1), "D"(0), "S"(str), "d"(12)
        );
}

void m_exit()
{
    asm volatile(
        "syscall"
        :
        :"a"(60), "D"(EXITNO)
        );
}
#else
void m_print()
{
    asm volatile(
        "int $0x80"
        :
        :"a"(4), "b"(0), "c"(str), "d"(13)
        );
}

void m_exit()
{
    asm volatile(
        "int $0x80"
        :
        :"a"(1), "b"(EXITNO)
        );
}
#endif

int main()
{
    m_print();
    m_exit();
}
```

