#  结构体
C语言允许用户自己建立由不同数据组成的组合型的数据结构，它称为结构体。
## 定义
```c
#include <stdio.h>

struct Student {
    char name[30];
    int age;
    double score;
};
struct Student2 {
    char name[30];
    int age;
    double score;
} A, *p1; // A 的类型为 struct Student2, p 的类型为 struct Student2*
struct Student3 {
    char name[30];
    int age;
    double score;
} A1 = {"zhangsan", 20}, *p2; //定义结构体变量时初始化

struct {
    char name[30];
    int age;
    double score;
} A2 = {"zhangsan", 20}, *p3; //只定义结构体的变量
void f();
int main() {
    // f();
    // 完全初始化
    struct Student a = {"zhangsan", 20, 91.6};
    // 不完全初始化,未被赋值的成员将有一个默认值0
    struct Student b = {"zhangsan", 20};
    // 定义结构体变量时,使用其他结构体变量完全初始化
    struct Student c = a;
    struct Student d = {.score = 18.5}; // c99新功能
    printf("姓名为：%s，年龄：%d，成绩：%lf\n", d.name, d.age, d.score);
    return 0;
}
void f() {
    struct Student a;
    printf("请输入学生姓名,年龄和成绩:\n");
    scanf("%s%d%lf", a.name, &a.age, &a.score);
    printf("姓名为：%s，年龄：%d，成绩：%lf\n", a.name, a.age, a.score);
    struct Student *p = &a;
    printf("姓名为：%s，年龄：%d，成绩：%lf\n", p->name, p->age, p->score);
}
```
:::tip 补充
1. 基本数据类型变量的地址能够被它们所占字节长度整除；
2. 结构体变量的首地址能够被其最宽节本类型成员的大小整除；
3. 结构体成员相对于结构体变量的首地址的偏移量（结构体变量的地址编号和结构体成员的地址编号所差的字节数）
都是其成员大小的整数倍；
4. 结构体的总大小为结构体最宽基本类型成员的整数倍
:::

## 数组&指针

## typedef
```c
#include <stdio.h>

typedef int Count;  // Count 代表int类型
typedef int Num[3]; // Num 代表一个含有3个int类型元素的数组类型
typedef struct {
    int a;
    double b;
} Stu;          // Stu代表了一个结构体变量
#define INT int //这里是定义了一个宏名 INT,在预编译阶段进行简单的字符串替换
int main() {
    Count a = 1;
    Num b = {2, 3, 4};
    Stu m = {12, 4.56};
    printf("%d\n", a);
    printf("%d, %d, %d\n", b[0], b[1], b[2]);
    printf("%d,%lf\n", m.a, m.b);
    INT c = 10; // 在预编译阶段该句被替换为 int c = 10;
    printf("%d\n", c);
    return 0;
}
```

## 共用体

```c
#include <stdio.h>
union Data {
    int i;
    char ch;
    double f;
};

union Data1 {
    int i;
    char ch;
    double f;
} w, *u;

union {
    int i;
    char ch;
    double f;
} w1 = {234}, *u1;

int main() {
    union Data a;
    // a = 3; error 不可以直接用一个基本类型对共用体变量赋值
    a.i = 3;
    printf("%d\n", a.i);
    a.ch = 'A';
    printf("%c\n", a.ch);
    a.f = 3.14;
    printf("%lf\n", a.f);

    // 输出垃圾值,因为共用体中所有成员所使用的的内存的开头的地址是一样的
    // 所以当我们对其中一个成员变量赋值时，会把这个变量原有的数据给覆盖
    printf("%d, %c\n", a.i, a.ch);

    // 此种方式只能对这个共用体变量的第一个成员赋值
    union Data b = {123};
    // c99新功能,对第三个成员赋值
    union Data c = {.f = 4.5};
    // c99允许共用体变量可以相互赋值
    union Data d = b;
    // 共用体变量的地址和长度必须被其最宽的基本类型成员的大小所整除
    // 其总长度必须大于等于最宽成员的长度
    union Data2 {
        char a[10];
        int b;
    } g;
    printf("%d\n", sizeof(g)); // 输出12
    return 0;
}
```
