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

## 填充每个节点的下一个右侧节点指针

给定一个 完美二叉树 ，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：
```c
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。
![116](/leetcode/116_sample.png)

```java
package leetcode.editor.cn;

import java.util.LinkedList;
import java.util.Queue;

@SuppressWarnings("all")
public class PopulatingNextRightPointersInEachNode {
    public static void main(String[] args) {
        Solution solution = new PopulatingNextRightPointersInEachNode().new Solution();

    }

    class Node {
        public int val;
        public Node left;
        public Node right;
        public Node next;

        public Node() {
        }

        public Node(int _val) {
            val = _val;
        }

        public Node(int _val, Node _left, Node _right, Node _next) {
            val = _val;
            left = _left;
            right = _right;
            next = _next;
        }
    }

    class Solution {
       public Node connect(Node root) {
           if (root == null) {
               return root;
           }
           connectTwoNode(root.left, root.right);
           return root;
       }

        public void connectTwoNode(Node node1, Node node2) {
            if (node1 == null || node2 == null) {
                return;
            }
            node1.next = node2;

            connectTwoNode(node1.left, node1.right);
            connectTwoNode(node2.left, node2.right);

            connectTwoNode(node1.right, node2.left);
        }

        public Node connect2(Node root) {
            if (root == null) {
                return root;
            }
            Queue<Node> queue = new LinkedList<>();
            queue.add(root);
            while (!queue.isEmpty()) {
                int size = queue.size();
                for (int i = 0; i < size; i++) {
                    Node poll = queue.poll();
                    if (i < size - 1) {
                        poll.next = queue.peek();
                    }

                    if (poll.left != null) {
                        queue.add(poll.left);
                    }
                    if (poll.right != null) {
                        queue.add(poll.right);
                    }

                }
            }
            return root;
        }

    }
}

```

方法一：<https://labuladong.gitee.io/algo/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%B3%BB%E5%88%97/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%B3%BB%E5%88%971.html#三、算法实践>

方法二：<https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/solution/tian-chong-mei-ge-jie-dian-de-xia-yi-ge-you-ce-2-4/>


## 把二叉搜索树转换为累加树
给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。

提醒一下，二叉搜索树满足下列约束条件：

节点的左子树仅包含键 小于 节点键的节点。<br/>
节点的右子树仅包含键 大于 节点键的节点。<br/>
左右子树也必须是二叉搜索树。

![538](/leetcode/538_sample.png)

题目应该不难理解，比如图中的节点 5，转化成累加树的话，比 5 大的节点有 6，7，8，加上 5 本身，所以累加树上这个节点的值应该是 5+6+7+8=26。

二叉搜索树的中序遍历是升序的（左根右），将其改为降序的（右根左）
```java
package leetcode.editor.cn;

@SuppressWarnings("all")
public class ConvertBstToGreaterTree {
    public static void main(String[] args) {
        Solution solution = new ConvertBstToGreaterTree().new Solution();

    }

    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }
    class Solution {
        int sum = 0;
        public TreeNode convertBST(TreeNode root) {
            traverse(root);
            return root;
        }

        public void traverse(TreeNode root) {
            if (root == null) {
                return;
            }
            traverse(root.right);
            sum += root.val;
            root.val = sum;
            traverse(root.left);
        }
    }
}
```

## 验证二叉搜索树
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：
+ 节点的左子树只包含小于当前节点的数。
+ 节点的右子树只包含大于当前节点的数。
+ 所有左子树和右子树自身必须也是二叉搜索树。

解决该问题，利用二叉搜索树的性质——中序遍历为升序
```java
package leetcode.editor.cn;

import java.util.LinkedList;
import java.util.List;
import java.util.Stack;

@SuppressWarnings("all")
public class ValidateBinarySearchTree {
    public static void main(String[] args) {
        Solution solution = new ValidateBinarySearchTree().new Solution();

    }

    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }
    class Solution {
        long pre = Long.MIN_VALUE;

        public boolean isValidBST(TreeNode root) {
            if (root == null) {
                return true;
            }
            if (!isValidBST(root.left)){
                return false;
            }
            if (root.val <= pre) {
                return false;
            }
            pre = root.val;
            return isValidBST(root.right);
        }

        public boolean isValidBST(TreeNode root) {
            Stack<Integer> stack = new Stack<>();
            List<Integer> l = new LinkedList<>();
            inorder(l, root);
            stack.add(l.get(0));
            for (int i = 1; i < l.size(); i++) {
                if (stack.peek() >= l.get(i)) {
                    return false;
                }
                stack.add(l.get(i));
            }
            return true;
        }

        public void inorder(List<Integer> list, TreeNode root) {
            if (root == null) {
                return;
            }
            inorder(list, root.left);
            list.add(root.val);
            inorder(list, root.right);
        }

    }
}
```


## 二叉搜索树中的众数
给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。

假定 BST 有如下定义：

结点左子树中所含结点的值小于等于当前结点的值
结点右子树中所含结点的值大于等于当前结点的值
左子树和右子树都是二叉搜索树

提示：如果众数超过1个，不需考虑输出顺序
```java
package leetcode.editor.cn;

import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("all")
public class FindModeInBinarySearchTree {
    public static void main(String[] args) {
        Solution solution = new FindModeInBinarySearchTree().new Solution();

    }

    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode(int x) {
            val = x;
        }
    }

    class Solution {
        List<Integer> mList = new ArrayList<>();
        int current = 0;//表示当前节点的值
        int count = 0;//表示当前节点的数量
        int maxCount = 0;//最大的重复数量

        public int[] findMode(TreeNode root) {
            inOrderTraversal(root);
            int[] res = new int[mList.size()];
            //把集合list转化为数组
            for (int i = 0; i < mList.size(); i++) {
                res[i] = mList.get(i);
            }
            return res;
        }

        //递归方式
        public void inOrderTraversal(TreeNode node) {
            //终止条件判断
            if (node == null)
                return;
            //遍历左子树
            inOrderTraversal(node.left);

            //下面是对当前节点的一些逻辑操作
            int nodeValue = node.val;
            if (nodeValue == current) {
                //如果节点值等于curent，count就加1
                count++;
            } else {
                //否则，就表示遇到了一个新的值，curent和count都要
                //重新赋值
                current = nodeValue;
                count = 1;
            }
            if (count == maxCount) {
                //如果count == maxCount，就把当前节点加入到集合中
                mList.add(nodeValue);
            } else if (count > maxCount) {
                //否则，当前节点的值重复量是最多的，直接把list清空，然后
                //把当前节点的值加入到集合中
                mList.clear();
                mList.add(nodeValue);
                maxCount = count;
            }

            //遍历右子树
            inOrderTraversal(node.right);
        }
    }
}
```
我们都知道二叉搜索树的中序遍历是有序的，有一种方式就是把二叉搜索树中序遍历的结果存放到一个数组中，因为这个数组是升序的（虽然有重复的），我们可以遍历这个数组，这里使用几个变量

使用变量curent表示当前的值，count表示当前值的数量，maxCount表示重复数字最大的数量。list集合存放结果

1，如果节点值等于curent，count就加1，

2，如果节点不等于current，说明遇到了下一个新的值，更新current为新的值，然后让count=1；

接着比较count和maxCount的大小，

如果count==maxCount，就把当前节点的值加入到集合list中。
如果count>maxCount，先把list集合清空，然后再把当前节点的值加入到集合list中，最后在更新maxCount的值。


作者：sdwwld<br/>
链接：https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/solution/er-cha-shu-zhong-xu-bian-li-de-liang-chong-fang-sh/<br/>
来源：力扣（LeetCode）<br/>
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。<br/>