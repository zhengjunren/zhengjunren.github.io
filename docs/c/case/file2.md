---
title: 文件操作2
date: 2021-01-04
---
```c
#include <stdio.h>
#include <stdlib.h>
#define N 5

typedef struct Employee {
    int num;
    char name[10];
    char sex[2];
    int age;
    char address[20];
    int salary;
    char health[8];
    char aclass[10];
} Employee, *List;
typedef struct Information {
    int num;
    int salary;
} EInformation;

void output(Employee *e);
void outputList(List list);
void input(Employee *employee);
void inputList(List list);
void setInformation(Employee *e, EInformation *i);
void setInformationList(Employee *e, EInformation *i);
void check(FILE *fp);
void save();
int main() {
    // save();
    FILE *fp = fopen("G:/codeOfc/c/chapter10/employee.dat", "rb");
    Employee e[N];
    fread(e, sizeof(Employee), N, fp);
    fclose(fp);
    EInformation ei[N];
    setInformationList(e, ei);
    fp = fopen("G:/codeOfc/c/chapter10/employee_simple.dat", "wb");
    fwrite(ei, sizeof(EInformation), N, fp);
    fclose(fp);
    fp = fopen("G:/codeOfc/c/chapter10/employee_simple.dat", "rb");
    EInformation ei1[N];
    fread(ei1, sizeof(EInformation), N, fp);
    fclose(fp);

    outputList(e);
    return 0;
}


void save() {
    Employee employee[N];
    inputList(employee);
    FILE *fp = fopen("employee.dat", "wb");
    fwrite(employee, sizeof(Employee), N, fp);
    fclose(fp);
}

void inputList(List list) {
    for (int i = 0; i < N; i++) {
        printf("请输入第%d个员工的信息：\n", i + 1);
        input(list + i);
        printf("\n");
    }
}

void outputList(List list) {
    for (int i = 0; i < N; i++) {
        output(list + i);
        printf("\n");
    }
}

void input(Employee *employee) {
    printf("员工工号：");
    scanf("%d", &employee->num);
    char c;
    printf("员工姓名：");
    scanf("%s", employee->name);
    printf("员工性别：");
    scanf("%s", employee->sex);
    printf("员工年龄：");
    scanf("%d", &employee->age);
    printf("员工地址：");
    scanf("%s", employee->address);
    printf("员工薪水：");
    scanf("%d", &employee->salary);
    printf("健康状况：");
    scanf("%s", employee->health);
    printf("文化程度：");
    scanf("%s", employee->aclass);
}

void output(Employee *e) {
    printf("员工工号为：%d；", e->num);
    printf("员工姓名为：%s；", e->name);
    printf("员工性别为：%s；", e->sex);
    printf("员工年龄：%d；", e->age);
    printf("员工地址：%s；", e->address);
    printf("员工薪水：%d；", e->salary);
    printf("健康状况：%s；", e->health);
    printf("文化程度：%s；", e->aclass);
}
void setInformationList(Employee *e, EInformation *ei) {
    for (int i = 0; i < N; i++) {
        setInformation(e + i, ei + i);
    }
}
void setInformation(Employee *e, EInformation *i) {
    i->num = e->num;
    i->salary = e->salary;
}
void check(FILE *fp) {
    if (fp == NULL) {
        printf("打开文件失败！程序退出！");
        exit(-1);
    }
}
```

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define N 5

typedef struct Employee {
    int num;
    char name[10];
    char sex[2];
    int age;
    char address[20];
    int salary;
    char health[8];
    char aclass[10];
} Employee, *List;
typedef struct Information {
    int num;
    int salary;
} EInformation;

void del(char *fileName, char *name);
void check(FILE *fp);
int findPos(char *name, FILE *fp);
int length(FILE *fp);
void output(Employee *e);
void outputList(List list);

int main() {
    char name[20];
    scanf("%s", name);
    char fileName[] = "G:/codeOfc/c/chapter10/employee.dat";
    del(fileName, name);
    return 0;
}

int findPos(char *name, FILE *fp) {
    rewind(fp);
    int len = length(fp);
    Employee e;
    for (int i = 0; i < len; i++) {

        fseek(fp, i * sizeof(Employee), SEEK_SET);
        fread(&e, sizeof(Employee), 1, fp);
        if (strcmp(e.name, name) == 0) {
            return i;
        }
    }
    return -1;
}

int length(FILE *fp) {
    fseek(fp, 0L, SEEK_END);
    int len = ftell(fp) / sizeof(Employee);
    rewind(fp);
    return len;
}

void del(char *fileName, char *name) {
    FILE *fp = fopen(fileName, "rb");
    check(fp);
    int index = findPos(name, fp);
    if (index == -1) {
        printf("没有该人，删除失败");
        return;
    }
    int len = length(fp);
    char tempFileName[] = "G:/codeOfc/c/chapter10/temp.dat";
    FILE *temp = fopen(tempFileName, "wb");
    Employee e;
    for (int i = 0; i < len; i++) {
        if (i == index) {
            continue;
        }
        fseek(fp, i * sizeof(Employee), SEEK_SET);
        fread(&e, sizeof(Employee), 1, fp);
        fwrite(&e, sizeof(Employee), 1, temp);
    }
    fclose(temp);
    fclose(fp);
    remove(fileName);
    rename(tempFileName, fileName);
}

void check(FILE *fp) {
    if (fp == NULL) {
        printf("打开文件失败！程序退出！");
        exit(-1);
    }
}
```
