# 链表
```c
#include <stdio.h>
#include <stdlib.h>
typedef struct Node {
    int data;
    struct Node *next;
} Node, *List;

void check(List list);
List create();
void insertLast(List list, int data);
void output(List list);
int len(List list);
int del(List list, int index);
int insert(List list, int index, int data);
void invert(List list);
int main() {

    List list = create();
    insertLast(list, 1);
    insertLast(list, 2);
    insertLast(list, 3);
    insertLast(list, 4);
    insertLast(list, 5);
    del(list, 2);
    insert(list, 2, 20);
    output(list);
    return 0;
}
List create() {
    List list = (List)malloc(sizeof(Node));
    check(list);
    list->next = NULL;
    return list;
}

void insertLast(List list, int data) {
    List last = (List)malloc(sizeof(Node));
    check(list);
    last->data = data;
    last->next = NULL;
    while (list->next != NULL) {
        list = list->next;
    }
    list->next = last;
}
void output(List list) {
    while (list->next != NULL) {
        list = list->next;
        printf("%d\n", list->data);
    }
}
int len(List list) {
    int len = 0;
    while (list->next != NULL) {
        len++;
        list = list->next;
    }
    return len;
}
int del(List list, int index) {
    if (index < 0 || index > len(list)) {
        return 0;
    }

    for (int i = 0; i < index - 1; i++) {
        list = list->next;
    }
    Node *node = list->next;
    list->next = node->next;
    free(node);
    return 1;
}
int insert(List list, int index, int data) {
    if (index < 0 || index >= len(list) + 1) {
        return 0;
    }
    // 找到要插入位置的前一个位置
    for (int i = 0; i < index - 1; i++) {
        list = list->next;
    }
    // 创建一个节点，并且 node 指向这块节点，即 node 为这块节点的地址
    Node *node = (Node *)malloc(sizeof(Node));
    check(node);
    node->data = data;
    node->next = list->next;
    list->next = node;
    return 1;
}
void invert(List list) {
    if (list->next == NULL) {
        return;
    }

    Node *p = list;
    Node *pNext = p->next;
    while (pNext->next != NULL) {
    }
}
void check(List list) {
    if (list == NULL) {
        printf("分配内存失败");
        exit(-1);
    }
}
```