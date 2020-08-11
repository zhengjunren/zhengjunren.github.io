# 指针
```c
#include <stdio.h>

void f1(int b) { b = 10; }
void f2(int *c) { *c = 10; }
int main() {
    int *p; // p是int* 类型，用于存放int型数据地址
    int a = 2;
    p = &a; // p 指向 a
    *p = 3; // *p 等价于 a
    f1(1);
    f2(&a);
    printf("%d\n", a);
    printf("%d\n", sizeof(int *)); // 输出8
    printf("%d\n", sizeof(*p));    // 输出4
    int d[3]; // 数组名是一个int* 类型的常量,其值为d[0]的地址
    p = d;
    p[0] = 1;
    p[1] = 2; // 等价于 p[1] = 2等价于 *(p + 1)=2
    p[2] = 3;
    *p = 10;
    *(p + 1) = 20; // 等价于 *(d+1) = 20 *(&d[1]) = 20
    *(p + 2) = 30; // *(p+2) -> p[2]   *(p+2) 和*(2+p)等价 2[p]
    0 [p] = 100;
    1 [p] = 200;
    2 [p] = 300;
    // d = &a; d是一个常量，不能被赋值
    printf("%p, %p, %p\n", p, p + 1, p + 2); // p + n 实际上是 p + sizeof(*p)
    for (int i = 0; i < 3; i++) {
        printf("%d\n", d[i]);
    }

    return 0;
}
```