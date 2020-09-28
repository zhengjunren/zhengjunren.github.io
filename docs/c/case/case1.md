# 另一些题目
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
> 注意：字符数组的赋值用`strcpy`函数！！！！

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

## 字符数组排序
用指向指针的指针的方法对五个字符串排序并输出
```c
#include <stdio.h>
#include <string.h>
#define LINEMAX 20

void sort(char **p);
int main() {
    char **p, *pstr[5],
        str[5][LINEMAX] = {"test", "question", "sunday", "apple", "graduate"};
    for (int i = 0; i < 5; i++) {
        pstr[i] = str[i];
    }
    p = pstr;
    sort(p);
    for (int i = 0; i < 5; i++) {
        printf("%s\n", pstr[i]);
    }
    return 0;
}

void sort(char **p) {
    char *temp;
    // for (int i = 0; i < 4; i++) {
    //     for (int j = 0; j < 4 - i; j++) {
    //         if (strcmp(*(p + j), *(p + j + 1)) > 0) {
    //             temp = *(p + j);
    //             *(p + j) = *(p + j + 1);
    //             *(p + j + 1) = temp;
    //         }
    //     }
    // }
    int j;
    for (int i = 0; i < 4; i++) {
        int maxPosition = 0;
        for (j = 1; j < 5 - i; j++) {
            if (strcmp(*(p + j), *(p + maxPosition)) > 0) {
                maxPosition = j;
            }
        }
        temp = *(p + maxPosition);
        *(p + maxPosition) = *(p + j - 1);
        *(p + j - 1) = temp;
    }
}
```
> 注意：选择排序算法的交换不在内层循环！！！！

## 排序（指针）
```c
#include <stdio.h>
void sort(int **p);
int main() {
    int a[5] = {25, 1, 7, 3, 18};
    int **p, *pa[5];
    for (int i = 0; i < 5; i++) {
        pa[i] = &a[i];
    }
    p = pa;
    sort(p);
    for (int i = 0; i < 5; i++) {
        printf("%d ", *pa[i]);
    }
    return 0;
}
void sort(int **p) {
    int j = 0;
    for (int i = 0; i < 4; i++) {
        int max = 0;
        for (j = 1; j < 5 - i; j++) {
            if (**(p + j) > **(p + max)) {
                max = j;
            }
        }
        int *temp = *(p + j - 1);
        *(p + j - 1) = *(p + max);
        *(p + max) = temp;
    }
}
```
![示意图](/c/sortwithpointer.png)

## 查找文件内容
输入字符串，在文件中查找该字符串，若找到，提示信息，若没有找到，则追加至文件中
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
void check(FILE *fp);
int main() {
    char str[80];
    printf("输入字符串：");
    gets(str);
    int len = strlen(str);
    int flag = 1;
    int i = 0;
    FILE *fp = fopen("G:/codeOfc/c/chapter10/test.txt", "r+");
    check(fp);
    char *res = (char *)malloc(sizeof(char) * len +1);
    while (flag) {
        fseek(fp, i*sizeof(char), SEEK_SET);
//        fread(res, sizeof(char), len, fp);
//        *(res + len) = '\0';
        // 等同于上面两句
        fgets(res, len + 1, fp);

        int a = strcmp(res, str);
        if (a == 0) {
            flag = 0;
            printf("找到了");
        }
        if (feof(fp)) {
            flag = 0;
            printf("没有找到，插入文件末尾");
            // 将文件光标移至文件末尾
            fseek(fp, 0, SEEK_END);
            fputs(str, fp);
        }
        i++;
    }
    fclose(fp);
    return 0;
}

void write() {
    char str[80];
    printf("输入字符串：");
    gets(str);
    FILE *fp = fopen("G:/codeOfc/c/chapter10/test.txt", "a+");
    rewind(fp);
    int i = 0;
    while (*(str + i) != '\0') {
        fputc(str[i], fp);
        i++;
    }
    fclose(fp);
}

void check(FILE *fp) {
    if (fp == NULL) {
        printf("打开文件失败！程序退出！");
        exit(-1);
    }
}
```