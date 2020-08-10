# 宏和头文件
## 定义
```c
#include <stdio.h>
/*
 * # 开头的都是预处理命令,预处理是发生在预编译阶段(编译之前)
 * 对源程序文件进行一些简单的文本替换
 */
// 宏定义
#define PI 3.141592
// 全局变量及时在所有函数体之外定义的变量(除形参外)
int A; // 系统默认初始化为0
int B = 3;
int main() {
    printf("%lf\n", PI); //输出3.141592
    printf("PI\n");      // 输出 PI
    // PI = 10; 报错, 因为PI是个符号常量不可以被赋值
    printf("%d, %d\n", A, B); // 输出0, 3
    return 0;
}
```

## 条件编译

```c
#include <stdio.h>
#define DAXIE 1
void f1() {
    char ch;
    while ((ch = getchar()) != '\n') {
#if 0 //如果表达式为真编译下面的代码，如果为假，编译#else中的代码
        if (ch >= 'A' && ch <= 'Z') {
            ch += 32;
        }
#else
        if (ch >= 'a' && ch <= 'z') {
            ch -= 32;
        }
#endif
        putchar(ch);
    }
}

void f2() {
    char ch;
    while ((ch = getchar()) != '\n') {
#ifdef DAXIE //如果定义了 DAXIE 宏常量,那么执行下面的代码,否则执行else中的
        if (ch >= 'A' && ch <= 'Z') {
            ch += 32;
        }
#else
        if (ch >= 'a' && ch <= 'z') {
            ch -= 32;
        }
#endif
        putchar(ch);
    }
}

void f3() {
    char ch;
    while ((ch = getchar()) != '\n') {
#ifndef DAXIE //如果没有定义 DAXIE 宏常量,那么执行下面的代码,否则执行else中的
        if (ch >= 'A' && ch <= 'Z') {
            ch += 32;
        }
#else
        if (ch >= 'a' && ch <= 'z') {
            ch -= 32;
        }
#endif
        putchar(ch);
    }
}

int main() {

    f2();
    return 0;
}
```

:::tip 注意

条件编译是一个预处理指令，而变量和表达式是在编译过程中产生的所以不可以使用变量或表达式作为条件编译的条件

:::

## 头文件

头文件包含指令:

+ `#include<文件名?>`，系统到存放 c 库函数头文件的目录中寻找要包含的头文件，这成为标准方式。
+ `#include"文件名"`，系统先在用户当前目录中寻找要包含的头文件，若找不到，再按标准方式查找。
+ 注意：头文件的后缀可以为`.h`，`.c`，或者没有后缀。

头文件：`myHead.h`

```c
#define PI 3.1415
int e = 123;
int max(int x, int y) { return x > y ? x : y; }
```

调用程序：

```c
#include "myHead.h"
#include <stdio.h>

int main() {
    printf("%lf\n", PI); // 输出 3.141500
    printf("%d\n", max(1, 2)); // 输出 2
    printf("%d\n", e); // 输出 123
    return 0;
}
```

