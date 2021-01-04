---
title:  使用链表2
date: 2021-01-04
---
```c
#include <stdio.h>
#include <stdlib.h>
typedef struct list {
    int data;
    struct list *next;
} Node, *List;
void check(List l) {
    if (l == NULL) {
        printf("内存分配失败！程序退出");
        exit(-1);
    }
}
List create() {
    List list = (List)malloc(sizeof(Node));
    check(list);
    list->next = NULL;
    return list;
}

Node *createNode(int data) {
    Node *node = (Node *)malloc(sizeof(Node));
    check(node);
    node->data = data;
    node->next = NULL;
    return node;
}

int length(List list) {
    int len = 0;
    while (list->next != NULL) {
        list = list->next;
        len++;
    }
    return len;
}

void insert(List list, int data, int index) {

    for (int i = 0; i < index; i++) {
        list = list->next;
    }
    Node *node = createNode(data);
    node->next = list->next;
    list->next = node;
}

void insertLastPosition(List list, int data) {
    insert(list, data, length(list));
}

void insertStartPosition(List list, int data) {
    insert(list, data, 0);
}

void output(List list) {
    while (list->next != NULL) {
        list = list->next;
        printf("%d ", list->data);
    }
}

void reverseOutput(List list) {
    if (list->next != NULL) {
        reverseOutput(list->next);
    }
    printf("%d\n", list->data);
}
List reverseList(List list) {
    List temp = list;
    list = list->next;
    free(temp);
    List newHead = NULL;

    Node *node;
    while (list != NULL) {
        node = list;
        list = list->next;

        node->next = newHead;
        newHead = node;
    }
    List head = create();
    head->next = newHead;
    return head;
}

Node *getNode(List list, int index) {
    for (int i = 0; i <= index; i++) {
        list = list->next;
    }
    return list;
}

void listcat(List l1, List l2) {
    l2 = l2->next;
    while (l1->next != NULL) {
        l1 = l1->next;
    }
    l1->next = l2;
}

void sort(List list) {
    int len = length(list);
    int j;
    for (int i = 0; i < len - 1; i++) {
        int maxPos = 0;
        for (j = 1; j < len - i; j++) {
            if (getNode(list, maxPos)->data < getNode(list, j)->data) {
                maxPos = j;
            }
        }
        if (getNode(list, j - 1)->data != getNode(list, maxPos)->data) {
            // 找到最后一个节点的前一个节点
            // Node *beforeLast = getNode(list, j - 1 - 1);
            // 找到最大节点的前一个节点
            Node *beforeMax = getNode(list, maxPos - 1);
            // 找到无序的最后一个节点
            Node *last = getNode(list, j - 1);
            // 找到最大的节点
            Node *max = getNode(list, maxPos);
            // 覆盖最大的节点
            beforeMax->next = max->next;
            // 将最大的节点的next域指向最后一个节点next指向的域
            max->next = last->next;
            // 再将最后一个节点的next指向最大节点
            last->next = max;
        }
    }
}

int main() {
    List list = create();
    insertLastPosition(list, 3);
    insertLastPosition(list, 2);
    insertLastPosition(list, 1);
    insertLastPosition(list, 4);
    // reverseOutput(list->next);
    List newList = reverseList(list);
    sort(newList);
    output(newList);
    return 0;
}
```
