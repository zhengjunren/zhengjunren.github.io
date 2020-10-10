# 排序算法

## 插入排序
```c
#include <stdio.h>

void print_arr(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    putchar('\n');
}

void insertsort(int arr[], int n) {
    print_arr(arr, n);
    for (int i = 1; i < n; i++) {
        // 找到有序列的后一个节点
        int key = arr[i];
        // 获取有序列的最后一个下标
        int j = i - 1;
        // 当有序列比要排序节点的值要大时，且有序列标记还没有到第一个时
        // 有序列往后移动，直到找到了比待排序小的数的位置
        // 此时有序列的标记为比待排序数位置的前一个
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
        print_arr(arr, n);
    }
}

int main() {
    int arr[] = {9, 5, 2, 7, 12,3,10,5,8};
    insertsort(arr, 9);
    return 0;
}
```

## 归并排序
```c
#include <stdio.h>
#include <stdlib.h>
void print_arr(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    putchar('\n');
}

void merge(int arr[], int tempArr[], int left, int mid, int right) {
    // 标记左半区第一个未排序的元素，
    int l_pos = left;
    // 标记右半区第一个未排序的元素，
    int r_pos = mid + 1;
    // 临时数组元素的下标
    int pos = left;
    // 合并
    while (l_pos <= mid && r_pos <= right) {
        // 左半区第一个剩余元素更小
        if (arr[l_pos] < arr[r_pos]) {
            tempArr[pos] = arr[l_pos];
            l_pos++;
        }
            // 右半区第一个剩余元素更小
        else {
            tempArr[pos] = arr[r_pos];
            r_pos++;
        }
        pos++;
    }
    while (l_pos <= mid) {
        tempArr[pos] = arr[l_pos];
        l_pos++;
        pos++;
    }
    while (r_pos <= right) {
        tempArr[pos] = arr[r_pos];
        r_pos++;
        pos++;
    }
    while (left <= right) {
        arr[left] = tempArr[left];
        left++;
    }
}

void msort(int arr[], int tempArr[], int left, int right) {
    // 如果只有一个元素，就不用划分
    // 一个元素的区域本身就是有序的，只需要归并
    if (left < right) {
        // 找中间点
        int mid = (left + right) / 2;
        // 递归划分左半区
        msort(arr, tempArr, left, mid);
        // 递归划分右半区
        msort(arr, tempArr, mid + 1, right);
        // 合并已经排序的部分
        merge(arr, tempArr, left, mid, right);
    }
}

void merge_sort(int arr[], int n) {
    // 分配辅助数组
    int *tempArr = (int *)malloc(sizeof(int) * n);
    if (tempArr != NULL) {
        msort(arr, tempArr, 0, n - 1);
        free(tempArr);
    } else {
        printf("error");
    }
}


int main() {
    int arr[] = {9, 5, 2, 7, 12};
    int n = 5;
    print_arr(arr, n);
    merge_sort(arr, n);
    print_arr(arr, n);
    return 0;
}
```

## 快速排序
```c
#include <stdio.h>


void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}
void print_arr(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    putchar('\n');
}

int partition(int arr[], int low, int high) {
    int i = low - 1, j = high;
    int pivot = arr[high];
    while (1) {
        while (arr[++i] < pivot) {
            ;
        }
        while (arr[--j] > pivot) {
            ;
        }
        if (i < j) {
            swap(&arr[i], &arr[j]);
        } else {
            break;
        }
    }
    // 把枢纽元素放到正确的位置
    swap(&arr[i], &arr[high]);
    return i;
}
void qsort(int arr[], int low, int high) {
    if (low < high) {
        int mid = partition(arr, low, high);
        qsort(arr, low, mid - 1);
        qsort(arr, mid + 1, high);
    }
}
void quick_sort(int arr[], int n) {
    qsort(arr, 0, n - 1);
}

int main() {
    int arr[] = {9, 5, 2, 11, 12, 4, 3, 1, 7};
    int n = 9;
    quick_sort(arr, n);
    print_arr(arr, n);
    return 0;
}
```