# 示例代码

## 指针运算
```c
#include <stdio.h>

int main() {
    int a[2] = {1, 2, 3};
    int *p = &a[0], *q = &a[2];
    printf("%d\n", p > q); // 输出 0
    printf("%d\n", p < q); // 输出 1
    printf("%d\n", q - p); // 输出 2
    p = q;
    printf("%d\n", p == q); // 输出 1
    return 0;
}
```

## 指针和数组
```c
#include <stdio.h>

int main() {

    int a[3] = {1, 2, 9};
    int *p = a;
    for (int i = 0; i < 3; i++) {
        printf("%d\n", a[i]); // 输出129
    }
    printf("--------------------\n");
    printf("%p\n", a); // 输出a[0]的地址
    // printf("%d", &(a+1)) // 表达式必须为左值或函数指示符
    // p = p + 1;
    // printf("%p", &(p + 1));   // 表达式必须为左值或函数指示符
    printf("%d", *(p + 1));   // 输出 2 (a[1]的值
    printf("%d\n", *(&a[2])); // 输出 9 (a[2]的值)
    printf("%p\n", &a[2]);    // 输出a[2]的地址
    printf("--------------------\n");
    printf("%p\n", (a + 1));  // 输出a[1]的地址
    printf("%d\n", *(a + 1)); // 输出a[1]的值
    for (int i = 0; i < 3; i++) {
        printf("%p\n", &a[i]); //输出 a[0],a[1],a[2]的地址
    }
    for (int i = 0; i < 3; i++) {
        printf("%d", (*p)++); // 等价于a[0]++;循环结束后，a[0]的值为4
    }

    printf("\n");
    for (int i = 0; i < 3; i++) {
        printf("%d", *p++); // 等价于 printf("%d", *p); p++;
    }
    printf("\n");
    printf("%p\n", p); //执行完上面一个循环后，p的值为 a[2] 的地址

    return 0;
}
```