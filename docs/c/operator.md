#  运算符

## 单目

```c
#include <stdio.h>

int main() {
    printf("%d, %d\n", 1 + 2 * 3, (1 + 2) * 3);
    int a = 1, b = 2, c = 3;
    a = b = c;
    // 单目运算符的优先等级为2
    printf("%d\n", a);
    printf("%d %d %d", !1, !9, !0);
    // - (负号运算符)
    printf("%d\n", 4 * -3);
    return 0;
}
```

## 算术运算符

```c
#include <stdio.h>

int main() {
    printf("%d, %lf\n", 5 / 2, 5.0 / 2);
    int a;
    // 输出a的值为3, 因为把一个浮点型的数据赋给整型变量会丢失小数部分
    printf("%d\n", a = 3.98);
    // 输出 1,0
    printf("%d, %d", 5 % 2, 4 % 2);
    // 编译报错，求余运算符两边的操作数必须是整数
    // printf("%d, %d", 5.0 % 2);

    //赋值运算符
    int b = 1, c = 7;
    // 输出b的值为3,因为 b += 2 和 b = b + 2等价
    printf("%d\n", b += 2);
    // 输出c的值为3,因为 c /= 2 和 c = c / 2等价
    printf("%d\n", c /= 2);
    // 因为赋值运算符的左操作数必须是一个左值(变量),b+c只是一个数值,并非变量
    // b + c = 100;
    a = 1, b = 2, c = 3;
    // printf("%d", (a = b) = a);
    return 0;
}
```

## 逗号和逻辑运算符

```c
#include <stdio.h>

int main() {
    // 逗号运算符
    printf("%d\n", (1 != 1, 2 == 2, 3)); // 输出 3
    int a = 0;
    // 只有四种运算符(&&, ||, 逗号， 条件运算符)规定了运算方向,必须自左向右
    a += 1, (a *= 2);
    // 输出 2 而不是 1
    printf("%d\n", a);

    // 逻辑与预算福
    a = 0;
    // 逻辑与的优先级11,赋值运算符14
    // 等价于(0 && a) = 3
    // 0 && 3 = 3;
    // 先计算 && 左边的操作数，在计算右操作数

    // 只有四种运算符(&&, ||, 逗号， 条件运算符)规定了运算方向,必须自左向右
    0 && (a = 3);
    printf("%d\n", a); // 输出a的值为0,短路

    a = 0;
    // 只有四种运算符(&&, ||, 逗号， 条件运算符)规定了运算方向,必须自左向右
    0 && (a = 3);
    1 || (a = 3);
    printf("%d\n", a); //  输出a的值为1,短路
    return 0;
}
```
## 条件运算符
```c
#include <stdio.h>

int main() {
    //条件运算符
    1 ? printf("哈哈\n") : printf("呵呵");
    /* //与上一句等价
    if (1) {
        printf("哈哈\n");
    } else {
        printf("呵呵");
    }
    */
    1 ? printf("1\n"), printf("2\n") : (printf("3\n"), printf("4\n"));
    /* // 与上一句等价
    if (1) {
        printf("1\n");
        printf("2\n");
    } else {
        printf("3\n");
        printf("4\n");
    }
    */

    1 ? printf("1\n"), printf("2\n") : printf("3\n"), printf("4\n");
    /* // 与上一句等价
    if (1) {
        printf("1\n");
        printf("2\n");
    } else {
        printf("3\n");
    }
    printf("4\n");
    */

    0 ? printf("A\n") : 0 ? printf("B\n") : printf("C\n");
    /* // 与上一句等价
    if (0)
        printf("A\n");
    else {
        if (0)
            printf("B\n");
        else
            printf("C\n");
    }

    */
    /* // 与上一句等价
    if (0)
        printf("A\n");
    else if (0)
        printf("B\n");
    else
        printf("C\n");
    */
    int a = 0;
    0 ? (a += 2) : 2;
    // 只有四种运算符(&&, ||, 逗号， 条件运算符)规定了运算方向,必须自左向右
    printf("%d\n", a); // 输出a的值2
    // 因为表达式是数值和运算符的组合，return 是关键字，所以return 0并不是表达式
    // 0 ? return 0 : printf("123/n");
    // 0 ? int x : printf("123/n"); int x 不是表达式
    return 0;
}
```

## 自增自减

```c
#include <stdio.h>

int main() {
    int i = 1, j = 4;
    // 前自减运算符的表达式的值是该变量减1之后的值
    // 后自减运算符的表达式的值是该变量没有被减1之前的值
    printf("%d, %d\n", --i, j--);
    printf("%d, %d\n", i, j);
    // 自增自减运算符不能用于一个数值，只能用于一个变量
    // printf("%d", --(i + j));
    i = 1, j = 4;
    printf("%d\n", i+++j); // 等价于 (i++)+j
    int a;
    // (double)a 是吧这个数值表达式转化为double类型,并不是把a转化为double
    printf("%d\n", sizeof((double)a)); // 输出 8
    printf("%d\n", sizeof(a));         // 输出 4

    return 0;
}
```

