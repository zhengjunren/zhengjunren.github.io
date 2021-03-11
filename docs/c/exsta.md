#  extern&static

## static关键字
```c
#include <stdio.h>

// 静态局部变量实在编译的时候赋初值,即只赋值一次,不会随函数调用结束后其存储单元释放
// 自动变量是在函数调用时赋初值，调用一次，赋值一次，调用结束后其存储单元释放
int *P;
void f() {
    int i = 10;
    // j 默认值0
    static int j;
    printf("%d, %d\n", i++, j++);
    P = &j;
}

int main() {
    // printf("%d", j); error 因为j的作用域不在这
    f();
    f();
    f();
    /**
     * 输出
     * 10, 0
     * 10, 1
     * 10, 2
     */
    printf("%d", *P); //可以通过指针引用在其他函数中定义的静态局部变量
    return 0;
}
```
在定义函数的时候在函数首部加`static`，代表这个函数是内部函数，其特点是不可以被其他文件通过函数名来调用。
但可以通过函数指针来间接调用

在不同文件中不可以有重名的外部函数定义，函数声明：先从本文件寻找函数定义，找不到，
再从其他文件中寻找外部函数定义

## extern关键字

### 测试1
```c
#include <stdio.h>
extern int A; // 在本文件内扩展全局变量的作用域, 只能修饰全局变量
int main() {
    printf("%d\n", A);
    // printf("%d\n", B); ERROR
    return 0;
}
int A = 10;
int B = 20;
```

### 测试2

`test.c`:
```c
int A = 10;

// static修饰的全局变量称作 静态外部变量
// 其他文件不可以通过它的变量名来引用该变量
static int B = 100;

int *p = &B;
`test2.c`
```c
//int A = 99; error 因为test.c中定义了有了变量 A
```

`main.c`:
```c
#include <stdio.h>
// extern可以将全局变量的作用域拓展到其他文件, 默认先找本文件内的全局变量
// 在不同文件中是不可以有重名的全局变量
extern int A; 
extern int B;
extern int *p;
int main() {
    printf("%d\n", A); // 输出10
    //error 因为B是静态外部变量，不可以在其他文件中通过变量名引用
//    printf("%d", B);
    printf("%d\n", *p); // 输出100
    return 0;
}
```
在定义函数的时候在函数首部加`extern`，代表这个函数是外部函数`extern`其实可以省略，
外部函数可以被其他文件通过函数名来调用。
