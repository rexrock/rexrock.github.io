---
title: 'PAMk开发'
date: 2013-8-26 12:32:00
tags: [PAM]
published: true
hideInList: false
feature: 
isTop: false
---

## 1. Pam应用程序开发

任何一个支持PAM的应用程序在进行认证时必须以pam_start( )开始进行初始化，最后以pam_end( )结束。

### 1.1 pam_start()

```
#include <security/pam_appl.h>
Int
pam_start(
const char *service_name,
const char *user,
const struct pam_conv *pam_conversation,
pam_handle_t **pamh
);
```

#### 1.1.1 参数讲解

**service_name**
	应用的名字，这个名字参数非常重要。
	当应用程序执行验证操作时，libpam库会在/etc/pam.d/下寻找以service_name命名的配置文件，该配置文件中指定了相关参数，其中包括将要调用哪个动态链接库进行验证。
	配置文件的格式与前面讲的/etc/pam.conf的格式基本一致，只是去掉了service-name这一项，因为该配置文件的名字就是service-name。
	其实linux系统中/etc/pam.conf这个配置文件在整个pam框架中已经起不到什么作用，至少在ubuntu10.04系统中是否对这个配置文件进行配置，根本什么也不影响。
	前面的对/etc/pam.conf的所有介绍均适用于/etc/pam.d/目录下的配置文件。
**user**
	用户名，即PAM框架所作用的用户的名称。说白了就是你要对哪个用户进行pam验证，该用户就是此轮验证中（pam_start——pam_end）被操作的对象。
**&conv**
	对话函数conv，用于提供PAM与用户或应用程序进程通信的通用方法。对话函数是必需的，因为PAM模块无法了解如何进行通信。通信可以采用 GUI、命令行、智能读卡器或其他设备等方式进行。这个对话函数是一个回调函数，这里只是对它的一个注册，接下来的验证过程中，应用程序和服务模块之间的所有信息交互都要通过它。对话函数需要应用程序的作者自己编写。
**&pamh**
	PAM句柄 pamh，即 PAM 框架用于存储有关当前操作信息的不透明句柄。成功调用 pam_start() 后将返回此句柄。要研究这个pamh，需要对pam的内部实现机制进行了解，有点复杂，暂时先不说这个。大家把它想成类似于一个socket套接字的东西就行，反正就是一个句柄而已。

#### 1.1.2 返回值讲解

**PAM_ABORT**
	一般性的错误，我也不知道什么叫一般性的错误。
**PAM_BUF_ERR**
	内存缓冲区错误，具体的我也不知道。
**PAM_SUCCESS**
	成功建立验证xx，反正就是成功了。
**PAM_SYSTEM_ERR**
	系统错误，参数中有无效的指针。有些参数必须提供指向了真实数据的指针变量。
	

### 1.2 pam_end()

```
#include <security/pam_appl.h>
int
pam_end(
pam_handle_t *pamh,
int pam_status);
```

#### 1.2.1 参数讲解

pam_end()函数是整个pam验证过程中，应用程序最后调用的函数。从此以后句柄pamh不再有效，而且所有的占用的内存将被释放。

**pamh**
	就是pam_start()函数中创建的pamh；
**pam_status**
	是应用程序在执行pam_end()函数前所执行的最后一个pam API函数的返回值。
	Pam_status通常被传递给服务模块的特有的一个回调函数cleanup()，这样服务模块就知道关闭应用程序是否成功，然后继续执行和之前一样的工作，即给其他应用程序提供验证服务。

Pam_end()释放了pam_set_item()和pam_get_item()申请的所有内存，所有对象的指针在pam_end()执行后也都不在有效。

#### 1.2.2 返回值讲解

**PAM_SUCCESS**
	应用程序的验证过程被成功终止。
**PAM_SYSTEM_ERR**
	系统错误，例如pamt是个无效指针NULL，或者函数还在被服务模块调用。

在pam_start()和pam_end()之间就是应用程序要执行的验证操作。就是所谓的四个服务模块。当然，你可以只进行其中的一项认证或者几个认证，哪怕没有任何验证操作，只要您认为值得就可以。

### 1.3 认证管理pam_authenticate()

```
#include <security/pam_appl.h>
int
pam_authenticate(
pam_handle_t *pamh,
int flags);
```
该函数被用来验证用户的合法性（即令牌认证），这个用户就是在pam_start()参数传递的user。User被要求提供一个密码或者一个简单的数字输入。然后服务模块中对应的pam_sm_authenticate()函数会检测user的输入并验证是否合法。

#### 1.3.1 参数讲解

**pamh** 
	参数pamh就是pam_start()函数中创建的pamh了（所有函数的pamh参数都相同，下面的函数将不再介绍pamh参数）；
**flags**
	参数flags可以被设置为0，或者设置为如下值：
	PAM_SILENT
	不输出任何信息
	PAM_DISALLOW_NULL_AUTHTOK
	如果用户没有注册，那么服务模块应该返回PAM_DISALLOW_NULL_AUTHTOK；

#### 1.3.2 返回值讲解

**PAM_ABORT**
	如果收到这个，应用程序应该立即调用pam_end()退出；
**PAM_AUTH_ERR**
	user没有被验证；
**PAM_CRED_INSUFFICIENT**
	由于一些原因应用程序没有足够的凭证来验证用户；
**PAM_AUTHINFO_UNVAIL**
	服务模块不能获取user的验证信息，原因可能是网络或硬件配置错误；
**PAM_MAXTRIES**
	服务模块验证用户的次数达到上限，应用程序这边不要再提交验证请求了，也就是说不要再运行pam_ authenticate()了；
**PAM_SUCCESS**
	用户成功通过验证
**PAM_USER_UNKNOWN**
	该用户不能够被服务模块识别，我估计要么是用户名格式非法，要么是用户没有注册等其他原因。

### 1.4 账户管理pam_acct_mgmt()
```
#include <security/pam_appl.h>
int
pam_acct_mgmt(
pam_handle_t *pamh,
int flags);
```
pam_acct_mgmt()通常被用来确认用户账户是否有效。确认的内容可以包括下面的内容：

 - 令牌认证（就是pam_authenticate()实现的功能）
 - 账户是否过期；
 - 访问权限；

该函数一般在pam_authenticate()成功执行（即用户通过验证）之后被调用执行，所以上面内容中的第一项常可以被省略。

#### 1.4.1参数讲解

与pam_authenticate完全相同。

#### 1.4.2返回值讲解

**PAM_ACCT_EXPIRED**
	用户已经过期失效；
**PAM_AUTH_ERR**
	用户令牌认证失败；
**PAM_NEW_AUTHTOK_REQD**
	该用户账户是有效的但是认证令牌是过期的，正确的做法是回复该值要求用户执行pam_chauthtok()来更新令牌（密码）在用户获得其他服务之前。
**PAM_PERM_DENIED**
	不允许访问，应该就是所谓的权限控制；
**PAM_SUCCESS**
	认证令牌被成功更新，或者是用过通过认证；
**PAM_USER_UNKNOWN**
	该用户不能够被服务模块识别；

