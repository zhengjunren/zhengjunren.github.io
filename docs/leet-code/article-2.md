---
title: 刷题
date: 2021-01-04
---
## 合并排序的数组
给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。
初始化 A 和 B 的元素数量分别为 m 和 n。<br/>
示例:<br/>
输入:<br/>
A = [1,2,3,0,0,0], m = 3<br/>
B = [2,5,6],       n = 3<br/>
输出: [1,2,2,3,5,6]<br/>
说明:<br/>
A.length == n + m<br/>
```java
package leetcode.editor.cn;

import java.util.Arrays;

@SuppressWarnings("all")
public class SortedMergeLcci {
    public static void main(String[] args) {
        Solution solution = new SortedMergeLcci().new Solution();
        int[] A = {1, 2, 3, 0, 0, 0};
        int[] B = {2, 5, 6};
        solution.test(A, 3, B, 3);
        System.out.println(Arrays.toString(A));
    }
    class Solution {
        public void merge(int[] A, int m, int[] B, int n) {
            for (int i = 0; i < n; i++) {
                int j = 0;
                while (j < m + i && A[j] < B[i]) {
                    j++;
                }
                for (int k = m + i - 1; k >= j; k--) {
                    A[k + 1] = A[k];
                }
                A[j] = B[i];
            }
        }

        public void test(int[] A, int m, int[] B, int n) {
            int k = m + n - 1;
            int i = m - 1;
            int j = n - 1;
            while (i >= 0 && j >= 0) {
                if (A[i] > B[j]) {
                    A[k] = A[i];
                    i--;
                    k--;
                }else {
                    A[k] = B[j];
                    j--;
                    k--;
                }
            }
            while (j >= 0) {
                A[k] = B[j];
                k--;
                j--;
            }
            while (i >= 0) {
                A[k] = A[i];
                k--;
                i--;
            }
        }
    }
}
```
