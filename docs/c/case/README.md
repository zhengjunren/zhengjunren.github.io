# 示例代码

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

## 查找与排序
```c
#include <stdio.h>
#include <string.h>
#define N 5

void sort(int num[], char name[][8]);
void input(int num[], char name[][8]);
int search(int num[], int employNum);
int main() {
    int employeeNum[N];
    char employeeName[N][8];
    input(employeeNum, employeeName);
    sort(employeeNum, employeeName);
    for (int i = 0; i < N; i++) {
        printf("工号为：%d，姓名为：%s\n", employeeNum[i], employeeName[i]);
    }
    int pos = search(employeeNum, 87);
    if (pos != -1) {
        printf("%s", employeeName[pos]);
    } else {
        printf("没找到");
    }


    return 0;
}
void input(int num[], char name[][8]) {
    for (int i = 0; i < N; i++) {
        printf("请输入第%d个员工的工号：", i + 1);
        scanf("%d", &num[i]);
        printf("请输入ta的姓名：");
        scanf("%s", &name[i]);
    }
}

void sort(int num[], char name[][8]) {
    int j;
    for (int i = 0; i < N - 1; i++) {
        int maxPos = 0;
        for (j = 0; j < N - i; j++) {
            if (num[j] > num[maxPos]) {
                maxPos = j;
            }
        }
        int temp = num[j - 1];
        char *s;
        strcpy(s, name[j - 1]);
        strcpy(name[j - 1], name[maxPos]);
        num[j - 1] = num[maxPos];
        num[maxPos] = temp;
        strcpy(name[maxPos], s);
    }
}

int search(int num[], int employNum) {
    int low = 0, high = N - 1;
    int mid = -1;
    mid = (low + high) / 2;
    while (mid > low && mid < high) {

        if (num[mid] > employNum) {
            high = mid;
        } else if (num[mid] == employNum) {
            break;
        } else {
            low = mid;
        }
        mid = (high + low) / 2;
    }
    if (num[mid] == employNum) {
        return mid;
    } else {
        return -1;
    }
}
```
> 注意：字符数组的赋值用`strcpt`函数！！！！

> 二分查找的循环条件是： high > mid && mid > low

## 移动数组元素
将数组中后 m 个数移动为前 m 个数
```c
#include <stdio.h>
void move(int *a, int n, int m);
int main() {

    int a[5] = {1, 2, 3, 4, 5};
    move(a, 5, 3);
    for (int i = 0; i < 5; i++) {
        printf("%d ", a[i]);
    }
    return 0;
}
// n为数组长度，m为移动的个数
void move(int *a, int n, int m) {

    for (int i = 0; i < m; i++) {
        int temp = *(a + n - 1);
        for (int j = n - 1; j > 0; j--) {
            *(a + j) = *(a + j - 1);
        }
        *a = temp;
    }
}
```

## 报数题
n 个人为成一圈，顺序排号。从第一个个人考试报数（从 1 到 3 报数），凡报到 3 的人退出圈子，问最后留下来的是原来的几号位
```c
#include <stdio.h>
#include <stdlib.h>
int find(int *a, int n);
int main() {
    printf("请输入有多少个人：");
    int n;
    scanf("%d", &n);
    int *a = (int *)malloc(n * sizeof(int));
    int count = 0;
    int exit = 0;
    int i = 0;
    while (exit != n - 1) {
        if (*(a + i % n) != 3) {
            *(a + i % n) = count % 3 + 1;
            if (*(a + i % n) == 3) {
                exit++;
            }
            count++;
        }
        i++;
    }
    int pos = find(a, n);
    printf("%d", pos + 1);
    return 0;
}
int find(int *a, int n) {
    for (int i = 0; i < n; i++) {
        if (*(a + i) != 3) {
            return i;
        }
    }
    return 0;
}
```