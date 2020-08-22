# 数组
## 定义数组
```c
#include <stdio.h>

int main() {
    int n = 5;
    int m = 8;
    float a1[5];               // 合法
    float a2[5 * 2 + 1];       // 合法
    float a3[sizeof(int) + 1]; // 合法
    // float a4[-4];           // 不合法
    float a5[0]; // 不合法
    // float a6[2.5];          // 不合法
    float a7[(int)2.5]; // 合法
    float a8[n];        // C99前不合法
    float a9[m];        // C99前不合法
    // 在定义的时候初始化(完全初始化)
    // int a[4] = {1, 2, 3, 4};
    // int a[] = {1, 2, 3, 4};
    // 不完全初始化中，元素如果未被初始化将会有一个默认值 0
    int a[4] = {1};
    for (int i = 0; i < 4; i++) {
        printf("%d\n", a[i]);
    }
    return 0;
}
```
## 数组排序
### 冒泡排序
```c
#include <stdio.h>

int main() {
    int a[5] = {89, 34, -56, 1, 23};
    /**
     * 1.
     * 第一轮 34 89 -56 1 23
     * 第二轮 34 -56 89 1 23
     * 第三轮 34 -56 1 89 23
     * 第四轮 34 -56 1 23 89
     * 2.
     * 第一轮 -56 34 1 23 89
     * 第二轮 -56 1 34 23 89
     * 第三轮 -56 1 23 34 89
     * 3.
     * 第一轮 -56 1 23 34 89
     *
     * ······
     */
    // 让内层循环体执行四次
    for (int i = 0; i < 5 - 1; i++) { 
    // 外层循环每执行一次，内层循环就比上次执行次数少1
        for (int j = 0; j < 4-k; j++) { 
            if (a[j] > a[j + 1]) {
                int temp = a[j + 1];
                a[j + 1] = a[j];
                a[j] = temp;
            }
        }
    }

    // for (int j = 0; j < 4; j++) {
    //     if (a[j] > a[j + 1]) {
    //         int temp = a[j + 1];
    //         a[j + 1] = a[j];
    //         a[j] = temp;
    //     }
    // }
    // for (int i = 0; i < 3; i++) {
    //     int temp = a[i + 1];
    //     a[i + 1] = a[i];
    //     a[i] = temp;
    // }

    // for (int i = 0; i < 2; i++) {
    //     int temp = a[i + 1];
    //     a[i + 1] = a[i];
    //     a[i] = temp;
    // }
    // for (int i = 0; i < 1; i++) {
    //     int temp = a[i + 1];
    //     a[i + 1] = a[i];
    //     a[i] = temp;
    // }
    for (int i = 0; i < 5; i++) {
        printf("%d ", a[i]);
    }
    return 0;
}
```

### 选择排序
```c
#include <stdio.h>

int main() {
    int a[7] = {89, 34, -56, 1, 23, 100, -32};

    /**
     * 第一次循环 a[0] > a[1],不执行if中的语句
     * 第二次循环 a[0] > a[2],不执行if中的语句
     * 第三次循环 a[0] > a[3],不执行if中的语句
     * 第四次循环 a[0] > a[4],不执行if中的语句
     * 第五次循环 a[0] < a[5],执行if中的语句,c = 5
     * 第六次循环 a[5] > a[6],不执行if中的语句
     */
    for (int k = 0; k < 6; k++) {
        int i;
        int c = 0;
        for (i = 1; i < 7 - k; i++) {
            if (a[c] < a[i]) {
                c = i;
            }
        }
        int temp = a[c];
        a[c] = a[i - 1];
        a[i - 1] = temp;
    }

    for (int i = 0; i < 7; i++) {
        printf("%d ", a[i]);
    }
    return 0;
}
```

## 二维数组
### 初始化
:::tip 注意
**二维数组初始化时,一定不能省略列标**
:::
```c
#include <stdio.h>

int main() {
    // 初始化1
    // int a[3][4] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12};
    // 初始化2
    // int a[3][4] = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};
    //指定第一个值为1,其他值为0
    // int a[3][4] = {1};
    // 中间行默认值为0
    // int a[3][4] = {{1, 2, 3, 4}, {}, {9, 10, 11, 12}};
    // 其他没指定值的元素系统默认值为0
    // int a[3][4] = {{1}, {2, 3}, {4}};
    // 其他没指定值的元素系统默认值为0
    // int a[3][4] = {{1}, {2, 3}};
    // 最后一个元素默认值为0
    int a[][4] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11};
    // 输出方式1
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            printf("%d\t", a[i][j]);
        }
        printf("\n");
    }
    printf("\n");
    // 输出方式2
    for (int i = 0; i < 12; i++) {
        printf("%d\t", a[i / 4][i % 4]);
    }

    return 0;
}
```

![运行结果](/c/array.png)

## 字符数组
### 初始化
```c
#include <stdio.h>

int main() {
    //  '\0' 空字符是c中字符串结束的标志
    char a[10] = {'h', 'a', ' ', 'h', 'a', '\n'};
    printf("haha\0hehe"); // 输出 haha
    printf("%s", "ABCD"); // 字符串常量末尾都有一个空字符
    printf("%s", a);
    char b[10] = {"ha ha\n"};
    char c[10] = "ha ha\n";
    char d[] = "ha";             // d 数组有3个元素
    char e[] = {'h', 'a'};       // e 数组有2个元素
    char f[3] = {'h', 'a', ' '}; // f数组有3个元素
    // c = "ha ha\n"; error c是一个 char* 类型的常量
    char *ch = "ha ha\n"; // 字符串常量在计算机的内存当中是一个没有名字的数组
    printf("%s", ch);
    return 0;
}
```

### 字符数组长度
```c
#include <stdio.h>
#include <string.h>

int main() {
    char test1[3] = {'a', 'b', 'c'}; // 数组长度为3
    int len1 = strlen(test1);
    printf("%d\n", len1);            // 输出的值不确定
    char test2[4] = {'a', 'b', 'c'}; // 数组长度为4
    int len2 = strlen(test2);
    printf("%d\n", len2);                  // 输出3
    char test3[4] = {'a', 'b', 'c', '\0'}; // 数组长度为4
    int len3 = strlen(test3);
    printf("%d\n", len3); // 输出3
    return 0;
}
```

### 字符串拼接函数
char * strcat (char * destination, const char * source);

strcat() 将把 source 连接到 destination 后面，并删除原来 destination 最后的结束标志`'\0'`。
这意味着，destination 必须足够长，要能够同时容纳 destination 和 source，否则会越界（超出范围）。

```c
#include <stdio.h>
#include <string.h>

int main() {
    char test1[5] = "abcd";
    char test2[4] = "efg";
    strcat(test1, test2);
    puts(test1); // 输出的值不确定
    char test3[20] = "abcd";
    char test4[] = "efghijk";
    strcat(test3, test4);
    puts(test3); // 输出 abcdefghijk
    return 0;
}
```

### 字符串拷贝函数
char * strcpy ( char * destination, const char * source );
strcpy() 会把 source 中的字符串拷贝到 destination 中，字符串结束标志'\0'也一同拷贝

```c
#include <stdio.h>
#include <string.h>

int main() {
    char test1[20] = "abcd";
    char test2[] = "this is a test";
    strcpy(test1, test2);
    puts(test1);
    return 0;
}
```
将 test2 复制到 test1 后，test1 中原来的内容就被覆盖了。
另外，strcpy() 要求 destination 要有足够的长度，否则不能全部装入所拷贝的字符串。

### 字符串比较函数
int strcmp ( const char * str1, const char * str2 );

字符本身没有大小之分，strcmp() 以各个字符对应的 ASCII 码值进行比较。strcmp() 从两个字符串的第 0 个字符开始比较，如果它们相等，就继续比较下一个字符，直到遇见不同的字符，或者到字符串的末尾。

返回值：若 str1 和 str2 相同，则返回0；若 str1 大于 str2，则返回大于 0 的值；若 str1 小于 str2，则返回小于0 的值。
```c
#include <stdio.h>
#include <string.h>

int main() {
    // a 的 ASCII 码为 97
    // A 的 ASCII 码为 65
    char a[] = "aBcDeF";
    char b[] = "AbCdEf";
    char c[] = "aacdef";
    char d[] = "aBcDeF";
    printf("a VS b: %d\n", strcmp(a, b)); // 输出大于0的数
    printf("a VS c: %d\n", strcmp(a, c)); // 输出小于0的数
    printf("a VS d: %d\n", strcmp(a, d)); // 输出0
    return 0;
}
```

### 字符串输入输出
```c
#include <stdio.h>

void show(char *a, int len) {
    for (int i = 0; i < len; i++) {
        printf("%d\n", a[i]);
    }
}

int main() {
    char a[30], b[30], c[30], ch;

    // 如果输入项是字符数组的数组名，或 char* 类型的变量，就不需要加取地址符号
    // 使用scanf输入多个字符串时，用空格、tab或者换行来分隔
    // scanf("%s%s%s%c", a, b, c, &ch);
    // printf("%s%s%s%c", a, b, c, ch);

    // a数组中没有被赋值的元素是垃圾值
    // show(a, 30);

    // 和 scanf 一样会把字符数组当中的一个元素赋空字符，
    // gets()可以把空格、tab赋给字符数组的元素
    // gets()会丢弃换行符
    // gets(a);
    // ch = getchar();
    // puts(a);
    // putchar(ch);

    // puts() 输出该字符串后，会再输出一个换行符
    puts("haha");

    int x = 2, y = 3;
    printf("x=%d,y=%d\n", x, y);
    char *p = "x=%#x,y=%#x\n";
    printf(p, x, y);
    return 0;
}
```