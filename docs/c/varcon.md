---
title: 变量和常量
date: 2021-01-04
---

## 整型变量

:::tip 整型数据存储空间
`short (2) <= int (2或4) <= long (4) <= long long (8) `

`unsigned short (2) <= unsigned int (2或4) <= unsigned long(4) <= unsigned long long(8) `
:::

| 字节数 |       有符号的取值范围        |            类型             |
| :----: | :---------------------------: | :-------------------------: |
|   2    | -2^15~(2^15)-1 (-32768~32767) |          short int          |
|   4    |  -2^31~(2^31)-1 (约-2e9~2e9)  |          int long           |
|   8    | -2^63~(2^63)-1 (约-9e18~9e18) |          long long          |
|   2    |        0~2^16(0~65535)        | unsigned short unsigned int |
|   4    |      0~(2^32)-1(约0~4e9)      | unsigned int unsigned long  |
|   8    |     0~(2^64)-1(约0~18e18)     |     unsigned long long      |

```c
#include <stdio.h>

int main() {
    // 与 short int a = 1等价,
    // unsigned short int a = 1 与 unsigned short a = 1 等价
    short a = 1;
    int b = 2;
    long c = 3;
    long long d = 4;
    unsigned short e = 5;
    unsigned int f = 6;
    unsigned long g = 7;
    printf("%d, %d, %d\n", sizeof(short), sizeof(int), sizeof 5); // 输出 2 4 4
    // 与 printf("%hi, %i, %li\n", a, b, c); 等价
    printf("%hd, %d, %ld\n", a, b, c);
    printf("%hu, %u, %lu\n", e, f, g);
    // 输出 173， 7b, 7B, 0x7b, 0X7B
    printf("%o, %x, %X, %#x, %#X", 123, 123, 123, 123, 123);
    // scanf 中带 #
    //随便输入一个16进制数，scanf会因为错误终止，所以并未把任何值赋值给b,b的值还是2
    scanf("%#x", &b);
    printf("%d", b);
    return 0;
}
```

## 字符型变量
```c
#include <stdio.h>

int main() {
    signed char sc;
    unsigned char uc;
    char ch;
    printf("%d, %d, %d\n", sizeof(sc), sizeof(uc), sizeof(ch)); // 输出 1 1 1
    uc = -1;
    ch = -1;
    printf("%d, %d", ch, uc); // 输出 -1 255
    return 0;
}
```

### getchar和putchar

```c
#include <stdio.h>

void f1() {
    char ch = getchar(); // 返回类型为int,返回值为用户输入的 ASCII 码,出错返回-1
    putchar(ch); // 向屏幕输出一个字符
}
// 从键盘读入3个字符并输出
void f2() {
    putchar(getchar());
    putchar(getchar());
    putchar(getchar());
}
int main() {
    // f1();
    f2();
    /*
     * 运行结果1: 输入boy按回车,输出boy
     * 运行结果2: 输入b按回车,输出b和换行符,输入o按回车,输出o
     */
    return 0;
}
```



## 浮点型变量

规范化的指数形式，把小数部分中的小数点的数字为0，小数点后第一位不为0

如 ：0.314159e1 就是 3.13159 的规范化指数形式 

|  +   | .314159  |  1   |
| :--: | :------: | :--: |
| 数符 | 小数部分 | 指数 |

| 字节数 | 有效数字 |    数值范围(绝对值)     |      数据类型       |
| :----: | :------: | :---------------------: | :-----------------: |
|   4    |    6     |   0以及1.2e-38~3.4e38   |        float        |
|   8    |    15    |  0以及2.3e-308~1.7e308  | double ,long double |
|   16   |    19    | 0以及3.4e-4932~1.1e4932 |     long double     |

> 注：从数值的左边第一位不为0的数字起，知道这个数字结束，中间的数字叫做这个值的有效数字(如0.618的有效数字有3个,分别是 6,1,8)
```c
#include <stdio.h>

int main() {
    float a = 1.1F;        // 1.1F 表示 1.1 是个 float 型数据
    double b = 1.1;        // 默认情况下:凡是小数都是 double 型
    long double c = 1e-8L; // 1e-8L 表示 1e-8L是个 long double 的数据
    //把一个“长的”浮点型数据赋给“短的”浮点型变量可能造成精度损失，有的编译器会出现警告
    printf("%d, %d, %d\n", sizeof(1.1F), sizeof(1.1), sizeof(1e-8L)); // 4 8 16
    // 默认情况下使用带 f 和带 e 的格式声明只输出小数点后 6 位(第七位四舍五入)
    // 输出 1.100000, 1.100000, 0.000000
    printf("%f, %lf, %Lf\n", a, b, c);
    // 输出 1.100000e+000, 1.100000e+000, 3.172890E-317
    printf("%e, %le, %LE\n", a, b, c);
    //小数或指数形式(哪一种简短就哪一种形式)
    printf("%g, %lg, %LG\n", a, b, c); // 输出 1.1, 1.1, 3.17289E-317
    return 0;
}
```

## 全局变量

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
## 自动变量
```c
#include <stdio.h>

int main() {
    // int a = 3; 默认情况下,a就是一个自动变量,所以auto可以不加
    // auto 只能用于修饰局部变量
    auto int a = 3;
    for (int i = 0; i < 10000; i++)
        ;
    // register只能修饰局部变量，但该变量不一定会成为寄存器变量,还需要编译系统决定
    register int j = 2;

    return 0;
}
```

## 寄存器变量
[**在上面**](#自动变量)


## 常量

```c
#include <stdio.h>

int main() {
    // 整型常量
    printf("%d\n", 234);
    // 浮点型常量
    printf("%lf, %lf\n", 3.24, 3e-2); // 3e-2表示3乘以10的-2次方
    // 字符串常量
    printf("%s\n", "%dabc\n");
    printf("%s\n", "%%dabc\n");
    // 字符型常量
    printf("%c, %d\n", 'a', 'a');                       // 输出 a, 97
    printf("%c, %c, %c, %c\n", '\\', '\'', '\?', '\"'); // 输出 \, ', ?, "
    printf("\a");                                       // 响铃
    printf("1111\babc\n"); // 输出 111abc    \b 退格符
    printf("2222\r333\n"); // 输出 3332 \r 回车符将光标回到本行开头，覆盖
    printf("\101 \102 \103\n"); // 输出 A B C
    printf("\x41\n");           // 输出 A
    return 0;
}
```
