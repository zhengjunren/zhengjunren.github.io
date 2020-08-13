# 内存分配
## malloc&calloc
1.C99允许使用基类型为void的指针

2.指向void类型 可理解为“指向空类型”或者“不指向确定的类型”。也就是说所指向的数据类型的字节长度不确定。
```c
#include <stdio.h>
#include <stdlib.h>
int main() {
    int n;
    printf("请输入学生数：");
    scanf("%d", &n);
    // void* 相当于java中的Object类
    // void *malloc(unsigned int size)
    // 在堆区分配连续的 size 个字节的存储空间,并返回这段存储空间开头位置的地址
    // 如果分配失败，返回空指针
    //等价于 int *p1 = malloc(sizeof(int) * n);
    int *p1 = (int *)malloc(sizeof(int) * n);
    // void *malloc(unsigned int n, unsigned int size)
    //相当于 n行50列的二维数组
    // 等价于char(*p2)[50] = calloc(n, sizeof(char) * 50);
    char(*p2)[50] = (char(*)[50])calloc(n, sizeof(char) * 50);
    if (p1 == NULL) {
        printf("内存分配失败，程序退出\n");
        exit(-1);
    }
    if (p2 == NULL) {
        printf("内存分配失败，程序退出\n");
        exit(-1);
    }
    for (int i = 0; i < n; i++) {
        printf("请输入第%d个学生的成绩和名字\n", i + 1);
        scanf("%d%s", p1 + i, p2[i]);
    }
    for (int i = 0; i < n; i++) {
        printf("请输入第%d个学生的成绩为：%d, 姓名为：%s\n", i + 1, p1[i],
               p2[i]);
    }
    free(p1);
    free(p2);
    // free(p2); error 因为此时p2不再指向一个动态内存空间
    return 0;
}
```

## realloc
```c
#include <stdio.h>
#include <stdlib.h>
int main() {

    int *p = (int *)malloc(sizeof(int) * 2);
    if (p == NULL) {
        printf("内存分配失败，程序退出\n");
        exit(-1);
    }
    p[0] = 1;
    p[1] = 2;
    printf("%d, %d\n", p[0], p[1]);

    // void *realloc(void *p, unsigned int size)
    // 功能是把p指向的动态内存空间改成size个字节，若失败返回空指针
    // 其指针参数必须是一个已经指向了一段动态内存的指针
    if (realloc(p, sizeof(int) * 4) == NULL) {
        printf("内存分配失败，程序退出\n");
        exit(-1);
    }
    p[2] = 3;
    p[3] = 4;
    printf("%d, %d, %d, %d\n", p[0], p[1], p[2], p[3]);
    double *p1 = (double *)p;
    p1[0] = 3.14;
    p1[1] = 89.5;
    p1[2] = 100.5;
    //输出 3.140000, 89.500000, 100.500000, 0.000000
    printf("%lf, %lf, %lf, %lf\n", p1[0], p1[1], p1[2], p1[3]);
    return 0;
}
```

## 注意事项
```c
#include <stdio.h>
#include <stdlib.h>
void f() {
    int *p = (int *)malloc(sizeof(int) * 10);
    if (p == NULL) {
        printf("内存分配失败,程序退出\n");
        exit(-1);
    }
    // free(p + 1); error free函数的实参必须是动态内存空间的首地址或者空指针
    free(p); // 如果分配的动态空间不认为释放,将在程序结束后,由系统收回
    p = NULL; // free函数对NULL的指针操作多次,程序不会报错
    free(p);
    // 在堆区有两个动态内存A和B(A前B后),p1和p2分别指向他们
    // 如果free(p1)会不会把B的内存空间释放？
    // 首先堆区不可能又2段连续的动态内存空间,即使有free(p1)对B的内存空间也没有影响
}
void g() {
    // realloc
    // 重新分配动态内存空间成功的话,会返回该动态空间的首地址,否则返回空指针
    // 如果realloc的指针实参为NULL,就会开辟新的动态内存空间
    int *p = (int *)realloc(NULL, sizeof(int) * 4);
    if (p == NULL) {
        printf("内存分配失败,程序退出\n");
        exit(-1);
    }
    for (int i = 0; i < 4; i++) {
        p[i] = i;
    }
    printf("地址为%p\n", p);
    // realloc对一段动态内存空间扩容时,会根据其后面是否有足够的连续的
    //未被其他程序占用的空间来选择扩容方式,如果有，会直接扩容,并把指针实参的值返回,
    //若没有,则会开辟新的动态内存空间将原有动态内存空间的数据拷贝到新的动态内存空间之后，
    //把原来的动态内存空间释放,最后返回新的动态内存空间的首地址
    printf("地址为%p\n", p = (int *)realloc(p, 1000));
    // printf("地址为%p\n", realloc(p, 1000));
    //  free(p); 若输出语句为注释中的语句,在执行free(p)有可能报错
    // realloc(p+1,4);error
    // realloc函数的实参必须是动态内存空间的首地址或者空指针
    // 如果 realloc函数所分配的内存大小为0个字节,则等价于free(p);返回值为NULL
     printf("地址为%p\n", realloc(p, 0)); 
}
int main() {
    f();
    g();
    return 0;
}
```