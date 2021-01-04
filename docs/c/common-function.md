---
title: 常见函数
date: 2021-01-04
---

## qsort

### 声明
void qsort(void *base, size_t nitems, size_t size, int (*compar)(const void *, const void*))
### 参数
+ base -- 指向要排序的数组的第一个元素的指针。
+ nitems -- 由 base 指向的数组中元素的个数。
+ size -- 数组中每个元素的大小，以字节为单位。
+ compar -- 用来比较两个元素的函数。

compar 参数

compar 参数指向一个比较两个元素的函数。比较函数的原型应该像下面这样。注意两个形参必须是 const void * 型，同时在调用 compar 函数（compar 实质为函数指针，这里称它所指向的函数也为 compar）时，传入的实参也必须转换成const void * 型。在 compar 函数内部会将 const void * 型转换成实际类型，见下文。

int compar(const void *p1, const void *p2);
如果 compar 返回值小于 0（< 0），那么 p1 所指向元素会被排在p2所指向元素的前面如果 compar 返回值等于 0（= 0），那么 p1 所指向元素与 p2 所指向元素的顺序不确定如果 compar 返回值大于 0（> 0），那么 p1 所指向元素会被排在 p2 所指向元素的后面。

```c
#include <stdio.h>
#include <stdlib.h>
int compare(const void *a, const void *b) {
    int *num1 = (int *)a;
    int *num2 = (int *)b;
    // num1 比 num2 大
    if (*num1 - *num2 > 0) {
        return 1;
    } else {
        return -1;
    }
}

int main() {
    int nums[] = {2, 7, 3, 2, 8, 4, 9, 5, 68};
    qsort(nums, 9, sizeof(int), compare);
    arrayPrint(nums, 9);
    return 0;
}
```
## sscanf
### 声明

int sscanf(const char *str, const char *format, ...)

### 参数
+ str -- 这是 C 字符串，是函数检索数据的源。
+ format -- 这是 C 字符串，包含了以下各项中的一个或多个：空格字符、非空格字符 和 format 说明符。
format 说明符形式为 [=%[*][width][modifiers]type=]，具体讲解如下：

|参数|描述|
| :----:| :----: |
|*|	这是一个可选的星号，表示数据是从流 stream 中读取的，但是可以被忽视，即它不存储在对应的参数中。|
|width|	这指定了在当前读取操作中读取的最大字符数。|
|modifiers|	为对应的附加参数所指向的数据指定一个不同于整型（针对 d、i 和 n）、无符号整型（针对 o、u 和 x）或浮点型（针对 e、f 和 g）的大小： h ：短整型（针对 d、i 和 n），或无符号短整型（针对 o、u 和 x） l ：长整型（针对 d、i 和 n），或无符号长整型（针对 o、u 和 x），或双精度型（针对 e、f 和 g） L ：长双精度型（针对 e、f 和 g）|
|type|一个字符，指定了要被读取的数据类型以及数据读取方式。具体参见下一个表格。|

|类型|合格的输入|参数的类型|
| :----:| :----: | :----: |
|c|	单个字符：读取下一个字符。如果指定了一个不为 1 的宽度 width，函数会读取 width 个字符，并通过参数传递，把它们存储在数组中连续位置。在末尾不会追加空字符。|char *|
|d|	十进制整数：数字前面的 + 或 - 号是可选的。|	int *|
|e,E,f,g,G|	浮点数：包含了一个小数点、一个可选的前置符号 + 或 -、一个可选的后置字符 e 或 E，以及一个十进制数字。两个有效的实例 -732.103 和 7.12e4|	float *|
|o|	八进制整数。|	int *|
|s|	字符串。这将读取连续字符，直到遇到一个空格字符（空格字符可以是空白、换行和制表符）。|	char *|
|u|	无符号的十进制整数。|	unsigned int *|
|x,X|	十六进制整数。|	int *|

```c
#include <stdio.h>
#include <string.h>

int main() {
    char str[80];
    // sprintf(str, "I am %d year old, I say %s", 20, "how are you");
    // puts(str);
    int year, month, day;
    sscanf("2020-08-19", "%d-%d-%d", &year, &month, &day);
    printf("%d-%d-%d", year, month, day);
    return 0;
}
```

## sprintf

### 声明
int sprintf(char *str, const char *format, ...)
### 参数
+ str -- 这是指向一个字符数组的指针，该数组存储了 C 字符串。
+ format -- 这是字符串，包含了要被写入到字符串 str 的文本。它可以包含嵌入的 format 标签，format 标签可被随后的附加参数中指定的值替换，并按需求进行格式化。format 标签属性是 %[flags][width][.precision][length]specifier，具体讲解如下：

|specifier（说明符）|输出|
| :----:| :----: |
|c|	字符|
|d 或 i|	有符号十进制整数|
|e|	使用 e 字符的科学科学记数法（尾数和指数）|
|E|	使用 E 字符的科学科学记数法（尾数和指数）|
|f|	十进制浮点数|
|g|	自动选择 %e 或 %f 中合适的表示法|
|G|	自动选择 %E 或 %f 中合适的表示法|
|o|	有符号八进制|
|s|	字符的字符串|
|u|	无符号十进制整数|
|x|	无符号十六进制整数|
|X|	无符号十六进制整数（大写字母）|
|p|	指针地址|
|n|	无输出|
|%|	字符|

|flags|描述|
| :----:| :----: |
| - |在给定的字段宽度内左对齐，默认是右对齐（参见 width 子说明符）。|
| + |强制在结果之前显示加号或减号（+ 或 -），即正数前面会显示 + 号。默认情况下，只有负数前面会显示一个 - 号|
| (space)|如果没有写入任何符号，则在该值前面插入一个空格。|
| 0 |在指定填充 padding 的数字左边放置零（0），而不是空格（参见 width 子说明符）。|
| # |与 o、x 或 X 说明符一起使用时，非零值前面会分别显示 0、0x 或 0X。与 e、E 和 f 一起使用时，会强制输出包含一个小数点，即使后边没有数字时也会显示小数点。默认情况下，如果后边没有数字时候，不会显示显示小数点。与 g 或 G 一起使用时，结果与使用 e 或 E 时相同，但是尾部的零不会被移除。|

```c
#include <stdio.h>
#include <string.h>

int main() {
    char str[80];
    sprintf(str, "I am %d year old, I say %s", 20, "how are you");
    puts(str);
    return 0;
}
```


## strstr()
### 描述
C 库函数 char *strstr(const char *haystack, const char *needle) 在字符串 haystack 中查找第一次出现字符串 needle 的位置，不包含终止符 '\0'。

### 声明
下面是 strstr() 函数的声明。

char *strstr(const char *haystack, const char *needle)

### 参数
+ haystack -- 要被检索的 C 字符串。
+ needle -- 在 haystack 字符串内要搜索的小字符串。

### 返回值
该函数返回在 haystack 中第一次出现 needle 字符串的位置，如果未找到则返回 null。


## strncpy()

### 描述
C 库函数 char *strncpy(char *dest, const char *src, size_t n) 把 src 所指向的字符串复制到 dest，最多复制 n 个字符。当 src 的长度小于 n 时，dest 的剩余部分将用空字节填充。

### 声明
下面是 strncpy() 函数的声明。

char *strncpy(char *dest, const char *src, size_t n)
### 参数
+ dest -- 指向用于存储复制内容的目标数组。
+ src -- 要复制的字符串。
+ n -- 要从源中复制的字符数。
### 返回值
该函数返回最终复制的字符串。

## strncat()
### 描述
C 库函数 char *strncat(char *dest, const char *src, size_t n) 把 src 所指向的字符串追加到 dest 所指向的字符串的结尾，直到 n 字符长度为止。

### 声明
下面是 strncat() 函数的声明。

char *strncat(char *dest, const char *src, size_t n)
### 参数
+ dest -- 指向目标数组，该数组包含了一个 C 字符串，且足够容纳追加后的字符串，包括额外的空字符。
+ src -- 要追加的字符串。
+ n -- 要追加的最大字符数。
### 返回值
该函数返回一个指向最终的目标字符串 dest 的指针。

## 常见函数的返回值

```c
#define NULL ((void *)0)
#define SEEK_CUR 1
#define SEEK_END 2
#define SEEK_SET 0
#define EOF (-1)
```

### fclose()
int fclose(FILE *stream)

如果流成功关闭，则该方法返回零。如果失败，则返回 EOF(即-1)。

### feof()
int feof(FILE *stream)

当设置了与流关联的文件结束标识符时，该函数返回一个非零值，否则返回零。

### fopen()
FILE *fopen(const char *filename, const char *mode)

该函数返回一个 FILE 指针。否则返回 NULL，且设置全局变量 errno 来标识错误。

### fread()
size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream)

成功读取的元素总数会以 size_t 对象返回，size_t 对象是一个整型数据类型。如果总数与 nmemb 参数不同，则可能发生了一个错误或者到达了文件末尾。

### fseek() 
int fseek(FILE *stream, long int offset, int whence)

如果成功，则该函数返回零，否则返回非零值。

### ftell()
long int ftell(FILE *stream)

该函数返回位置标识符的当前值。如果发生错误，则返回 -1L，全局变量 errno 被设置为一个正值。

### fwrite()
size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream)

如果成功，该函数返回一个 size_t 对象，表示元素的总数，该对象是一个整型数据类型。如果该数字与 nmemb 参数不同，则会显示一个错误。

### fprint()
int fprintf(FILE *stream, const char *format, ...)

如果成功，则返回写入的字符总数，否则返回一个负数。

### fscanf() 
int fscanf(FILE *stream, const char *format, ...)

如果成功，该函数返回成功匹配和赋值的个数。如果到达文件末尾或发生读错误，则返回 EOF。

### fgetc()
int fgetc(FILE *stream)

该函数以无符号 char 强制转换为 int 的形式返回读取的字符，如果到达文件末尾或发生读错误，则返回 EOF。

### fgets()
char *fgets(char *str, int n, FILE *stream)
如果成功，该函数返回相同的 str 参数。如果到达文件末尾或者没有读取到任何字符，str 的内容保持不变，并返回一个空指针。

如果发生错误，返回一个空指针。

### fputc()

int fputc(int char, FILE *stream)

如果没有发生错误，则返回被写入的字符。如果发生错误，则返回 EOF，并设置错误标识符。

### fputs()

int fputs(const char *str, FILE *stream)

该函数返回一个非负值，如果发生错误则返回 EOF。
