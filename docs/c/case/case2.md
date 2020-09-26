## 使用链表
```c
#include <stdio.h>
#include <stdlib.h>
typedef struct Student {
    long num;
    float score;
    struct Student *next;
} Student, *StudentList;


StudentList create();
void insert(StudentList studentList, int index, Student *stu);
void insertLast(StudentList list, Student *stu);
int len(StudentList studentList);
Student *input();
void output(StudentList list);
void check(Student *student);
Student *getNode(StudentList list, int index);
void del(StudentList list, int index);
StudentList sort(StudentList list1, StudentList list2);
int main() {
    StudentList list1 = create();
    StudentList list2 = create();
    for (int i = 0; i < 3; i++) {
        printf("请输入第%d个学生的信息：\n", i + 1);
        Student *stu = input();
        insertLast(list1, stu);
    }
    for (int i = 0; i < 2; i++) {
        printf("请输入第%d个学生的信息：\n");
        Student *stu = input();
        insertLast(list2, stu);
    }
    sort(list1, list2);
    output(list1);
    return 0;
}

/**
 * 创建链表
 */
StudentList create() {
    StudentList studentList = (StudentList)malloc(sizeof(Student));
    check(studentList);
    studentList->next = NULL;
    studentList->num = 0;
    studentList->score = 0;
    return studentList;
}
/**
 * 创建链表节点，返回指向该节点的指针
 */
Student *input() {
    Student *stu = (Student *)malloc(sizeof(Student));
    check(stu);
    printf("请输入学号：");
    scanf("%ld", &stu->num);
    printf("请输入分数：");
    scanf("%f", &stu->score);
    stu->next = NULL;
    return stu;
}
/**
 * 求链表长度
 */
int len(StudentList studentList) {
    int len = 0;
    while (studentList->next != NULL) {
        studentList = studentList->next;
        len++;
    }
    return len;
}
/**
 * 往链表最后插入节点
 */
void insertLast(StudentList list, Student *stu) {
    int length = len(list);
    insert(list, length + 1, stu);
}
/**
 * 根据索引插入链表或者节点
 */
void insert(StudentList studentList, int index, Student *stu) {
    if (index < 0 || index > len(studentList) + 1) {
        printf("插入失败");
        return;
    }

    for (int i = 0; i < index - 1; i++) {
        studentList = studentList->next;
    }
    Student *temp = stu;
    while (temp->next != NULL) {
        temp = temp->next;
    }
    temp->next = studentList->next;
    studentList->next = stu;
}
/**
 * 输出
 */
void output(StudentList list) {
    while (list->next != NULL) {
        list = list->next;
        printf("学号为：%ld", list->num);
        printf("分数为：%lf\n", list->score);
        printf("\n");
    }
}
/**
 * 两链表合并，并排序
 */
StudentList sort(StudentList list1, StudentList list2) {
    insertLast(list1, list2->next);
    int length1 = len(list1);
    int j = 0;
    for (int i = 0; i < length1; i++) {
        // 链表的第一个有效位置是 0
        int min = 0;
        for (j = 1; j < length1 - i; j++) {
            if (getNode(list1, j)->num < getNode(list1, min)->num) {
                min = j;
            }
        }
        // 找到最小节点的前一个节点
        Student *stu = getNode(list1, min - 1);
        // 找到最小节点，并保存
        Student *minStu = getNode(list1, min);
        // 将最小节点覆盖，此时 list1 的长度减少 1
        stu->next = minStu->next;
        // 将最小节点的next成员指向空
        minStu->next = NULL;
        // 找到最后一个节点，将最小节点插入到最后
        Student *last = getNode(list1, len(list1) - 1);
        insertLast(last, minStu);
    }

    return NULL;
}

Student *getNode(StudentList list, int index) {
    if (index == -1) {
        return list;
    }

    list = list->next;
    for (int i = 0; i < index; i++) {
        list = list->next;
    }
    return list;
}

void del(StudentList list, int index) {
    for (int i = 0; i < index - 1; i++) {
        list = list->next;
    }
    Student *student = list->next;
    list->next = student->next;
    free(student);
}
void check(Student *student) {
    if (student == NULL) {
        printf("内存分配失败！程序退出");
        exit(-1);
    }
}


```