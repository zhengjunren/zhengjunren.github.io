#  文件操作

## 第一部分
```c
#include <stdio.h>
#define N 5
typedef struct Student {
    int num;
    char name[8];
    int score[3];
    float ave;
} Student, *List;

void input(List list);
void output(List list);
void setAve(List list);
int main() {
    Student students[N];
    List list = students;
    input(list);
    setAve(list);
    FILE *fp;
    fp = fopen("stud.dat", "wb");
    for (int i = 0; i < N; i++) {
        if (fwrite(list + i, sizeof(Student), 1, fp) != 1) {
            printf("写入错误！");
        }
    }
    fclose(fp);
    Student stu[N];
    fp = fopen("stud.dat", "rb");
    fread(stu, sizeof(Student), 5, fp);
    fclose(fp);
    output(stu);
    return 0;
}
void input(List list) {
    for (int i = 0; i < N; i++) {
        printf("请输入第%d个学生信息：\n", i + 1);
        printf("NUM: ");
        scanf("%d", &(list + i)->num);
        printf("NAME: ");
        scanf("%s", (list + i)->name);
        for (int j = 0; j < 3; j++) {
            printf("score%d: ", j + 1);
            scanf("%d", &((list + i)->score[j]));
        }
    }
}
void output(List list) {
    for (int i = 0; i < N; i++) {
        printf("学号为：%d，姓名为：%s；", (list + i)->num, (list + i)->name);
        for (int j = 0; j < 3; j++) {
            printf("分数%d为：%d", j + 1, (list + i)->score[j]);
        }
        printf("平均分为：%f", (list + i)->ave);
        printf("\n");
    }
}
void setAve(List list) {
    for (int i = 0; i < N; i++) {
        float sum = 0;
        for (int j = 0; j < 3; j++) {
            sum = sum + (list + i)->score[j];
        }
        (list + i)->ave = sum / 3;
    }
}
```

## 第二部分
```c
#include <stdio.h>
#include <stdlib.h>
#define N 5
typedef struct Student {
    int num;
    char name[8];
    int score[3];
    float ave;
} Student, *List;
void check(FILE *fp);
void output(List list);
void sort(Student *stu);
int main() {
    // 以二进制方式读取文件
    FILE *fp1 = fopen("G:/codeOfc/c/chapter10/stud.dat", "rb");
    check(fp1);
    Student stu[N];
    // 将文件信息读取至 stu 数组中
    fread(stu, sizeof(Student), N, fp1);
    // 关闭 fp1 文件指针
    fclose(fp1);
    // 以二进制方式写入文件
    FILE *fp2 = fopen("G:/codeOfc/c/chapter10/stud_sort", "wb");
    // 对 stu 数组排序
    sort(stu);
    // 将 stu 数组写入 fp2 所指向的文件
    fwrite(stu, sizeof(Student), N, fp2);
    // 关闭 fp2
    fclose(fp2);
    Student students[5];
    fp2 = fopen("G:/codeOfc/c/chapter10/stud_sort", "rb");
    fread(students, sizeof(Student), 5, fp2);
    fclose(fp2);
    output(students);
    return 0;
}

/**
 * 输出List中的信息
 */
void output(List list) {
    for (int i = 0; i < N; i++) {
        printf("学号为：%d，姓名为：%s；", (list + i)->num, (list + i)->name);
        for (int j = 0; j < 3; j++) {
            printf("分数%d为：%d", j + 1, (list + i)->score[j]);
        }
        printf("平均分为：%f", (list + i)->ave);
        printf("\n");
    }
}

/**
 * 对 stu 数组排序
 */
void sort(Student stu[N]) {
    int j = 0;
    for (int i = 0; i < N - 1; i++) {
        int max = 0;
        for (j = 1; j < N - i; j++) {
            if (stu[j].ave > stu[max].ave) {
                max = j;
            }
        }
        Student temp = stu[max];
        stu[max] = stu[j - 1];
        stu[j - 1] = temp;
    }
}
void check(FILE *fp) {
    if (fp == NULL) {
        printf("打开文件失败！程序退出！");
        exit(-1);
    }
}
```

## 第三部分
```c
#include <stdio.h>
#define N 5
typedef struct Student {
    int num;
    char name[8];
    int score[3];
    float ave;
} Student, *List;
void setAve(Student *stu);
void input(Student *stu);
int findPosition(Student s, FILE *fp);
void output(List list);
int length(FILE *fp);
void insert(FILE *fp, int index, Student stu);
int main() {
    FILE *fp = fopen("G:/codeOfc/c/chapter10/stud_sort", "rb+");
    Student stu[N];
    fread(stu, sizeof(Student), 5, fp);
    Student newStu;
    input(&newStu);
    int index = findPosition(newStu, fp);
    insert(fp, index, newStu);
    Student s[N + 1];
    rewind(fp);
    fp = fopen("G:/codeOfc/c/chapter10/stud_sort", "rb");
    fread(s, sizeof(Student), 6, fp);
    output(s);

    return 0;
}

void output(List list) {
    for (int i = 0; i < N + 1; i++) {
        printf("学号为：%d，姓名为：%s；", (list + i)->num, (list + i)->name);
        for (int j = 0; j < 3; j++) {
            printf("分数%d为：%d", j + 1, (list + i)->score[j]);
        }
        printf("平均分为：%f", (list + i)->ave);
        printf("\n");
    }
}

/**
 * 将找到的一个比stu平均分大的学生之后的信息后移一位
 * 在插入stu
 */
void insert(FILE *fp, int index, Student stu) {
    // 获取文件中的学生信息个数
    int len = length(fp);
    Student temp;
    // 第len - 1是最后一个学生的信息，
    for (int i = len - 1; i > index - 1; i--) {
        // 将（光标）移动到距离文件首位置的第 i* sizeof(Student)个字节
        fseek(fp, i * sizeof(Student), 0);
        // 读取第 i 个学生的信息
        fread(&temp, sizeof(Student), 1, fp);
        // 将（光标）往后移动一个位置
        fseek(fp, sizeof(Student) * (i + 1), 0);
        // 写入第 i 个学生的信息
        fwrite(&temp, sizeof(Student), 1, fp);
    }
    // 将光标移动到 index 的位置
    fseek(fp, index * sizeof(Student), 0);
    fwrite(&stu, sizeof(Student), 1, fp);
}

/**
 * 获取文件中存储的Student结构体个数
 */
int length(FILE *fp) {
    fseek(fp, 0L, SEEK_END);
    int len = ftell(fp) / sizeof(Student);
    rewind(fp);
    return len;
}
/**
 * 找到第一个比 s 平均分大的学生的位置
 * 从 0 开始
 */
int findPosition(Student s, FILE *fp) {
    rewind(fp);
    int i = 0;
    for (i = 0; i < N; i++) {
        Student stu;
        fseek(fp, i * sizeof(Student), 0);
        fread(&stu, sizeof(Student), 1, fp);
        if (stu.ave > s.ave) {
            return i;
        }
    }
    return length(fp);
}

void input(Student *stu) {
    printf("请输入学生信息：");
    printf("NUM：");
    scanf("%d", &stu->num);
    printf("NAME：");
    scanf("%s", stu->name);
    for (int i = 0; i < 3; i++) {
        printf("SCORE%d", i + 1);
        scanf("%d", &stu->score[i]);
    }
    setAve(stu);
}

void setAve(Student *stu) {
    float sum = 0;
    for (int i = 0; i < 3; i++) {
        sum = sum + stu->score[i];
    }
    stu->ave = sum / 3;
}
```
