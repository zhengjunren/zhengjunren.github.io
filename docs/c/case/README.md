# 一些题目

## 指针运算
> 指针间没有`+`操作
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

## 循环练习
斐波那契数列：1,1,2,3,5,8,13,21,34······,要求由低到高输出斐波那契数列能被3整除的十个数
```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 4; i++) {
        for (int j = 1; j <= 5; j++) {
            printf("%d\t", j * i);
        }
        printf("\n");
    }

    int a = 1, b = 1;
    int sum = 1;

    int count = 0;
    while (count < 2) {
        /*
         * 第一次循环 a = 1, b = 1, sum = 2
         * 第二次循环 a = 1, b = 2, sum = 3 count = 1
         * 第三次循环 a = 2, b = 3, sum = 5
         * 第四次循环 a = 3, b = 5, sum = 8
         * 第五次循环 a = 5, b = 8, sum = 13
         * 第六次循环 a = 8, b = 13,sum = 21 count = 2
         */
        sum = a + b;
        a = b;
        b = sum;
        if (sum % 3 == 0) {
            printf("%d\t", sum);
            count++;
        }
    }

    return 0;
}
```

## 打印杨辉三角

```c
#include <stdio.h>
/*
1
1   1
1   2   1
1   3   3   1
1   4   6   4   1
*/
int main() {
    int a[10][10] = {0};
    for (int i = 0; i < 10; i++) {
        a[i][0] = 1;                   // 每行第一列的值为0
        for (int j = 1; j <= i; j++) { // 注意 j 最后要等于 i
            if (j == i) {              // 第 i行的第i个数为1
                a[i][j] = 1;
            } else { // 第 i 行不是最后一个的值等于
                a[i][j] = a[i - 1][j - 1] + a[i - 1][j];
            }
        }
    }
    for (int i = 0; i < 10; i++) {
        for (int j = 0; j <= i; j++) {
            printf("%d\t", a[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```
```c
#include <stdio.h>
#include <stdlib.h>
void arr_print(int *a, int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", a[i]);
    }
}
void fun() {
    int **a = (int **)malloc(sizeof(int *) * 10);
    int num[10];
    for (int i = 0; i < 10; i++) {
        *(a + i) = (int *)malloc(sizeof(int) * (i + 1));
        num[i] = i + 1;
    }
    a[0][0] = 1;
    a[1][0] = 1;
    a[1][1] = 1;
    int j = 0;
    for (int i = 2; i < 10; i++) {
        a[i][0] = 1;
        a[i][i] = 1;
        for (j = 1; j < i; j++) {
            a[i][j] = a[i - 1][j] + a[i - 1][j - 1];
        }
    }
    for (int i = 0; i < 10; i++) {
        arr_print(*(a + i), i + 1);
        printf("\n");
    }
}

int main() {
    fun();
    return 0;
}
```

## 汉诺塔

## 最长单词
```c
#include <stdio.h>
#include <string.h>
int alphabetic(char);
int longest(char[]);
int main() {
    char line[100];
    gets(line);
    char *s;

    int word_length = 0; // word_length 当前单词长度
    int longest_len = 0; // 最长单词长度
    int current = 0;     //指向单词开始的位置
    s = line;
    int len = strlen(line);
    int i = 0;
    // 若 i < len 则统计不到最后一个单词的长度
    while (i <= len) {
        //判断当前指针所指是否为字母
        if (alphabetic(*s)) {
            // 若为字母，则单词长度加一
            word_length++;
        } else {
            // 若不是字母，说明单词已经结束
            // 判断当前单词是否是最长的单词
            if (word_length > longest_len) {
                // 赋值给
                longest_len = word_length;
                // 最长单词的起始位置
                current = i - word_length;
            }
            // 单词结束，单词长度重置
            word_length = 0;
        }
        s++;
        i++;
    }

    for (int j = 0; j < longest_len; j++) {
        printf("%c", line[j + current]);
    }

    return 0;
}
int alphabetic(char a) {
    if ((a >= 'a' && a <= 'z') || (a >= 'A' && a <= 'Z')) {
        return 1;
    }
    return 0;
}
```
## 删除字符串中所有空格
```c
#include <stdio.h>
void delSpace(char *s) {
    char *t = s;
    char *letter, *space;
    letter = space = s;
    while (*s != '\0') {
        if (*s == ' ') {
            space = s;
            letter++;
            while (*letter == ' ') {
                letter++;
            }
            *space = *letter;
            if (*letter == '\0') {
                break;
            }
            *letter = ' ';
            s++;
        } else {
            letter++;
            space++;
            s++;
        }
    }
}

void fun(char *str) {
    int i = 0;
    char *p = str;
    while (*p) {
        if (*p != ' ') {
            str[i] = *p;
            i++;
        }
        p++;
    }
    str[i] = '\0';
}

int main() {
    char s[] = "abc ef g";
    fun(s);
    printf("%s", s);
    return 0;
}
```

## 字符数组排序
```c
#include <stdio.h>
#include <string.h>
void sort(char *s, int len);
int main() {
    char str[80];
    gets(str);
    int len = strlen(str);
    sort(str, len);
    puts(str);
    return 0;
}
void sort(char s[], int len) {
    for (int i = 0; i < len - 1; i++) {
        for (int j = 0; j < len - 1 - i; j++) {
            if (*(s + j) > *(s + j + 1)) {
                char a = *(s + j + 1);
                *(s + j + 1) = *(s + j);
                *(s + j) = a;
            }
        }
    }
}
```

