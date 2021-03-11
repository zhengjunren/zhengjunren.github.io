#  宏和头文件
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
### 作用域
```c
#include <stdio.h>
#define A 2  // 作用域为 2到5行

void f() { printf("%d\n", A); }

#define A(a, b) a - b // 作用域为该行至程序末尾

void g() { printf("%d", A(5, 2)); }

int main() {
    f(); // 输出 2
    g(); // 输出 3
    return 0;
}
```

### undef

```c
#include <stdio.h>
#define A 2
#define B(a, b) a + b
void g();
void f() { printf("%d, %d\n", A, B(4, 1)); }
#undef A
#undef B
int main() {

    f();
    // printf("%d, %d\n", A, B(4, 1));  ERROR undef 终止了宏的作用域
    return 0;
}
void g() {
    // 编译报错, undef 终止了宏的作用域
    // printf("%d, %d\n", A, B(4, 1));
}
```
```c
#include <stdio.h>
#undef AB
#undef AB
extern int a;
extern int a;
void f();
void f();
int main() {
    return 0;
}
```
可以多次终止同一个宏名的定义，即使宏名未定义

可以多次扩展同一个全局变量的作用域，即使宏名未定义

可以多次扩展同一个函数的作用域，即使函数未定义

### 宏与函数重名
```c
#include <stdio.h>

void F(int a) {
    // 输出a的值
    printf("%d", a);
}
#define F(a) F(a); printf("haha")
#define G(a) G(a); printf("haha")
// 将下面代码替换为 void G(int a); printf("haha") ERROR
// void G(int a) {
//     // 输出a的值
//     printf("%d", a);
// }
int main() {
    F(3); // 首先被执行的是预处理指令，将 F(3) 替换成 F(3) printf("%d", a); 输出3haha
    //相当于调用 F(3) 函数 再输出
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

