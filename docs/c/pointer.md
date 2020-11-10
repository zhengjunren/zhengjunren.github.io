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

```c
#include <stdio.h>

int main() {
    char *s = "abcde";
    s += 2;
    printf("%d\n", s); // 输出的是 'c'的地址
    printf("%p", s); // 输出的是 'c'的地址
    return 0;
}

```

## 指针数组
1. 一个数组，若其元素均为指针类型数据，称为指针数组。
2. 定义指针数组的一般形式：类型名 `*` 数组名[数组长度]；
3. 如:`int *p[4]`;  由于`[ ]`比`*`优先级高，因此`p`先于`[4]`结合，形成`p[4]`,这显然是数组的形式，表示`p`数组有4个元素。然后`p[4]`再和`*`结合，表示此数组的每个元素都可指向一个整型变量。


## 函数指针
```c
#include <stdio.h>

int max(int a, int b) { return a > b ? a : b; }

int min(int a, int b) { return a > b ? b : a; }

int main() {
    // p是一个函数指针变量，用来指向函数类型为int 函数参数类型为两个整型的函数
    // p的类型为int (*) (int, int)
    int (*p)(int, int);
    p = max;
    printf("%d\n", (*p)(10, 5)); // 等价于 max(10, 5);
    p = min;
    printf("%d\n", p(10, 5)); // 等价于 (*P)(10, 5);
    return 0;
}
```

## void 指针
请看补充