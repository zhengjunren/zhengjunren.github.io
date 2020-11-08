# 刷题！
## 检查替换后的词是否有效
给定有效字符串 "abc"。<br/>
对于任何有效的字符串 V，我们可以将 V 分成两个部分 X 和 Y，使得 X + Y（X 与 Y 连接）等于 V。（X 或 Y 可以为空。）那么，X + "abc" + Y 也同样是有效的。<br/>
例如，如果 S = "abc"，则有效字符串的示例是："abc"，"aabcbc"，"abcabc"，"abcabcababcc"。<br/>
无效字符串的示例是："abccba"，"ab"，"cababc"，"bac"。<br/>
如果给定字符串 S 有效，则返回 true；否则，返回 false。

```c
char* stack;
int top;
#define push(val) stack[++top] = val
#define pop() top--
char gettop()  {
    if(top>=0) return stack[top];
    else return '0';
}

bool isValid(char * S){
    int len = strlen(S);
    stack = (char*)calloc(sizeof(char), len); top = -1;
    for (int i = 0; i < len; i++) {
        if (S[i] != 'c') {
            push(S[i]);
        } else {
            if (gettop() != 'b')
                return false;
            pop();
            if (gettop() != 'a')
                return false;
            pop();
        }
    }
    if (top < 0)
        return true;
    return false;
}

```
> 作者：gaozhekang

> 链接：https://leetcode-cn.com/problems/check-if-word-is-valid-after-substitutions/solution/cyu-yan-shuang-100shi-xian-by-gaozhekang-20/

>来源：力扣（LeetCode）
>著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

我的
```c
bool isValid(char * s){
    int len = strlen(s);
    if(len == 0 || len == 1 || len == 2) return false;
    int *stack = (int *)malloc(sizeof(int)*len);
    int top = -1;
    while(*s != '\0') {
        if(*s == 'a') {
            top++;
            stack[top] = 1;
        } else if(*s == 'b') {
            if(top == -1 || stack[top] != 1) {
                return false;
            }else{
                top++;
                stack[top] = 2;
            }
        } else if(*s == 'c') {
            if(top == -1 || stack[top] != 2) {
                return false;
            } else {
                top--;
                top--;
            }
        }
        s++;
    }
    if(top == -1) {
        return true;
    }else{
        return false;
    }
}
```
## 合并两个有序链表
```java
//将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
// 示例：
// 输入：1->2->4, 1->3->4
//输出：1->1->2->3->4->4
package leetcode.editor.cn;

@SuppressWarnings("all")
public class MergeTwoSortedLists {
    public static void main(String[] args) {
        Solution solution = new MergeTwoSortedLists().new Solution();
        ListNode listNode = new ListNode(1, new ListNode(3,new ListNode(4, null)));
        ListNode listNode1 = new ListNode(1, new ListNode(2,new ListNode(4, null)));
        ListNode listNode2 = solution.mergeTwoLists(listNode1, listNode);
        System.out.println(1);
    }
    public static class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    class Solution {
        public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
            ListNode head = new ListNode(0);
            ListNode t = head;
            while (l1 != null && l2 != null) {
                if (l1.val < l2.val) {
                    t.next = l1;
                    t = t.next;
                    l1 = l1.next;
                }
                else {
                    t.next = l2;
                    t = t.next;
                    l2 = l2.next;
                }
            }
            // 任一为空，直接连接另一条链表
            if (l1 == null) {
                t.next = l2;
            }
            else {
                t.next = l1;
            }

            return head.next;
        }
    }
}

```

## 有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。<br/>
有效字符串需满足：左括号必须用相同类型的右括号闭合。左括号必须以正确的顺序闭合。<br/>
注意空字符串可被认为是有效字符串。<br/>
示例 1:<br/>
输入: "()[]{}"<br/>
输出: true<br/>
示例 2:<br/>
输入: "{()}}{"<br/>
输出: false
```java
package leetcode.editor.cn;

import java.util.Stack;

@SuppressWarnings("all")
public class ValidParentheses {
    public static void main(String[] args) {
        Solution solution = new ValidParentheses().new Solution();
        System.out.println(solution.isValid("(){}}{"));
    }
    class Solution {
        public boolean isValid(String s) {
            char[] chars = s.toCharArray();
            Stack<Character> stack = new Stack<>();
            int i = 0;
            while (i < chars.length) {
                if (stack.isEmpty() && (chars[i] == '}' || chars[i] == ']' || chars[i] == ')')) {
                    return false;
                }
                if (chars[i] != '}' && chars[i] != ']' && chars[i] != ')') {
                    stack.push(chars[i]);
                } else if (chars[i] == ')') {
                    if (!(stack.peek() == '(')) {
                        return false;
                    }
                    stack.pop();
                } else if (chars[i] == ']') {
                    if (!(stack.peek() == '[')) {
                        return false;
                    }
                    stack.pop();
                } else if (chars[i] == '}') {
                    if (!(stack.peek() == '{')) {
                        return false;
                    }
                    stack.pop();
                }
                i++;

            }
            return stack.isEmpty();

        }
    }
}
```

## 最大子序列和
给定一个整数数组nums,找到一个具有最大和的连续子数组(子数组最少包含一个元素),返回其最大和<br/>
输入: [-2,1,-3,4,-1,2,1,-5,4] <br/>
输出: 6<br/>
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```java
package leetcode.editor.cn;

@SuppressWarnings("all")
public class MaximumSubarray {
    public static void main(String[] args) {
        Solution solution = new MaximumSubarray().new Solution();
        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        solution.maxSubArray(nums);
    }
    class Solution {
        public int maxSubArray(int[] nums) {
            int maxSum = nums[0];
            int[] dp = new int[nums.length];
            dp[0] = maxSum;
            for (int i = 1; i < nums.length; i++) {
                if (dp[i-1] > 0) {
                    dp[i] = dp[i - 1] + nums[i];
                }else {
                    dp[i] = nums[i];
                }
                if (dp[i] > maxSum) {
                    maxSum = dp[i];
                }
            }
            return maxSum;
        }
    }
}
```

## 加一
给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。<br/>
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。<br/>
你可以假设除了整数 0 之外，这个整数不会以零开头。<br/>
输入: [1,2,3]<br/>
输出: [1,2,4]<br/>
解释: 输入数组表示数字 123。<br/>
输入: [1,9,9]<br/>
输出: [2,0,0]<br/>
解释: 输入数组表示数字 199。
```java
package leetcode.editor.cn;

import java.util.Arrays;

@SuppressWarnings("all")
public class PlusOne {
    public static void main(String[] args) {
        Solution solution = new PlusOne().new Solution();
        int[] nums = {1, 9, 9};
        System.out.println(Arrays.toString(solution.plusOne(nums)));
    }
    class Solution {
        public int[] plusOne(int[] digits) {
            int i = digits.length - 1;
            int carry = 0;
            // 判断末位是否为 9，如果为 9 改成 0
            // 此时 i 往前移动，直至digits[i]不为 9 
            // 并且要进位
            while (i >= 0 && digits[i] == 9) {
                digits[i] = 0;
                i--;
                carry = 1;
            }
            // 判断第一位是否为 0 和是否要进位
            // 判断是否要进位是验证输入的数组为 {0}
            if (carry == 1 && digits[0] == 0) {
                int[] nums = new int[digits.length + 1];
                nums[0] = 1;
                return nums;
            }
            digits[i] = digits[i] + 1;
            return digits;
        }
    }
}

```

## 二进制加法
给你两个二进制字符串，返回它们的和（用二进制表示）。<br/>
输入为 非空 字符串且只包含数字 1 和 0。<br/>
示例 1:<br/>
输入: a = "11", b = "1"<br/>
输出: "100"<br/>
示例 2:<br/>
输入: a = "1010", b = "1011"<br/>
输出: "10101"<br/>
解法1
```java
package leetcode.editor.cn;

@SuppressWarnings("all")
public class AddBinary {
    public static void main(String[] args) {
        Solution solution = new AddBinary().new Solution();
        System.out.println(solution.addBinary("1010", "1011"));
    }
    class Solution {
        public String addBinary(String a, String b) {
            char[] max;
            char[] min;
            if (a.length() > b.length()) {
                max = a.toCharArray();
                min = b.toCharArray();
            }else {
                max = b.toCharArray();
                min = a.toCharArray();
            }
            int i = min.length - 1;
            int j = max.length - 1;
            int carry = 0;
            while (j >= 0) {
                char x = i < 0 ? '0' : min[i];
                char y = max[j];
                if (x == '1' && y == '1') {
                    if (carry == 1) {
                        max[j] = '1';
                    }
                    else {
                        max[j] = '0';
                    }
                    carry = 1;
                } else if (x == '1' || y == '1') {
                    if (carry == 1) {
                        max[j] = '0';
                        carry = 1;
                    }else {
                        max[j] = '1';
                        carry = 0;
                    }
                }else {
                    if (carry == 1) {
                        max[j] = '1';
                    }
                    else {
                        max[j] = '0';
                    }
                    carry = 0;
                }
                j--;
                i--;
            }
            if (carry == 1) {
                char[] res = new char[max.length + 1];
                res[0] = '1';
                for (int k = 0; k < max.length; k++) {
                    res[k + 1] = max[k];
                }
                return new String(res);
            }
            else {

                return new String(max);
            }

        }
    }
}
```
解法2
```c
#include <stdio.h>
#include <string.h>
#include "stdlib.h"
char * addBinary(char * a, char * b);
int main() {
    puts(addBinary("11", "1"));
    return 0;
}
char * addBinary(char * a, char * b){
    int len1 = strlen(a), len2 = strlen(b), maxLen, minLen;
    char *max, *min;
    if(len1 > len2) {
        maxLen = len1;
        minLen = len2;
        max = a;
        min = b;
    }
    else{
        maxLen = len2;
        minLen = len1;
        max = b;
        min = a;
    }
    int i = maxLen - 1;
    int j = minLen - 1;
    int carry = 0;
    int sum;
    char *res = (char *)malloc(maxLen + 2);
    // 防止溢出
    res[maxLen + 1] = '\0';
    while(i >= 0) {
        int x = max[i] - '0';
        int y = j < 0 ? 0 : min[j] - '0';
        sum =  (x + y + carry) % 2;
        carry = (x + y + carry) >= 2 ? 1 : 0;
        res[i + 1] = sum + '0';
        i--;
        j--;
    }
    if(carry == 1) {
        res[0] = '1';
        return res;
    }
    else {
        return res+1;
    }

}
```

## 爬楼梯
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。<br/>
示例 1：<br/>
输入： 2<br/>
输出： 2<br/>
解释： 有两种方法可以爬到楼顶。<br/>
1、1 阶 + 1 阶<br/>
2、2 阶<br/>
示例 2：<br/>
输入： 3<br/>
输出： 3<br/>
解释： 有三种方法可以爬到楼顶。<br/>
1、1 阶 + 1 阶 + 1 阶<br/>
2、1 阶 + 2 阶<br/>
3、2 阶 + 1 阶<br/>

## 删除有序链表中的重复元素
给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。<br/>
示例 1:<br/>
输入: 1->1->2<br/>
输出: 1->2<br/>
示例 2:<br/>
输入: 1->1->2->3->3<br/>
输出: 1->2->3<br/>
```java
package leetcode.editor.cn;

@SuppressWarnings("all")
public class RemoveDuplicatesFromSortedList {
    public static void main(String[] args) {
        Solution solution = new RemoveDuplicatesFromSortedList().new Solution();
        ListNode listNode = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3,new ListNode(3, null)))));
        solution.deleteDuplicates(listNode);
    }
    public static class ListNode {
        int val;
        ListNode next;

        ListNode(int x) {
            val = x;
        }
        ListNode(int x, ListNode listNode) {
            val = x;
            next = listNode;
        }
    }
    class Solution {
        public ListNode deleteDuplicates(ListNode head) {
            if(head == null) {
                return head;
            }
            ListNode slow = head;
            ListNode fast = head.next;
            while (slow != null) {
                if (fast == null) {
                    slow.next = fast;
                    break;
                }
                if (slow.val != fast.val) {
                    slow.next = fast;
                    slow = slow.next;
                }
                fast = fast.next;
            }
            return head;
        }
    }
}
```

## 两数之和II-输入有序数组
给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
说明:<br/>
返回的下标值（index1 和 index2）不是从零开始的。
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
示例:<br/>
输入: numbers = [2, 7, 11, 15], target = 9<br/>
输出: [1,2]<br/>
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
```java
package leetcode.editor.cn;

import java.util.Arrays;

@SuppressWarnings("all")
public class TwoSumIiInputArrayIsSorted {
    public static void main(String[] args) {
        Solution solution = new TwoSumIiInputArrayIsSorted().new Solution();
        int[] numbers = {-1, 0};
        System.out.println(Arrays.toString(solution.twoSum(numbers, -1)));
    }
    class Solution {
        public int[] twoSum(int[] numbers, int target) {
            int j = numbers.length - 1;
            int i = 0;
            while (i < j) {
                // 如果两数之和大于目标值，将右标左移，将和变小
                if (numbers[i] + numbers[j] > target) {
                    j--;
                }
                // 如果两数之和小于目标值，将左标右移，将和变大
                else if (numbers[i] + numbers[j] < target) {
                    i++;
                }
                else {
                    return new int[] {i+1, j+1};
                }
            }
            return new int[] {-1, -1};
        }
    }
}

```

## 多数元素
给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。
示例 1:<br/>
输入: [3,2,3]<br/>
输出: 3<br/>
示例 2:<br/>
输入: [2,2,1,1,1,2,2]<br/>
输出: 2
```java 
package leetcode.editor.cn;

@SuppressWarnings("all")
public class MajorityElement {
    public static void main(String[] args) {
        Solution solution = new MajorityElement().new Solution();

    }
    class Solution {
        public int majorityElement(int[] nums) {
            int count = 1;
            int a = nums[0];
            for (int i = 1; i < nums.length; i++) {
                if (a == nums[i]) {
                    count++;
                }else {
                    count--;
                }
                if (count == 0) {
                    a = nums[i];
                    count = 1;
                }
            }
            return a;
        }
    }
}
```
候选人(cand_num)初始化为nums[0]，票数count初始化为1。<br/>
当遇到与cand_num相同的数，则票数count = count + 1，否则票数count = count - 1。<br/>
当票数count为0时，更换候选人，并将票数count重置为1。<br/>
遍历完数组后，cand_num即为最终答案。<br/>
为何这行得通呢？<br/>
投票法是遇到相同的则票数 + 1，遇到不同的则票数 - 1。<br/>
且“多数元素”的个数> ⌊ n/2 ⌋，其余元素的个数总和<= ⌊ n/2 ⌋。<br/>
因此“多数元素”的个数 - 其余元素的个数总和 的结果 肯定 >= 1。<br/>
这就相当于每个“多数元素”和其他元素 两两相互抵消，抵消到最后肯定还剩余至少1个“多数元素”。<br/>
无论数组是1 2 1 2 1，亦或是1 2 2 1 1，总能得到正确的候选人。<br/>
:::tip
玩一个诸侯争霸的游戏，假设你方人口超过总人口一半以上，并且能保证每个人口出去干仗都能一对一同归于尽。最后还有人活下来的国家就是胜利。
那就大混战呗，最差所有人都联合起来对付你（对应你每次选择作为计数器的数都是众数），或者其他国家也会相互攻击（会选择其他数作为计数器的数），但是只要你们不要内斗，最后肯定你赢。
最后能剩下的必定是自己人。
:::

## 快乐数
编写一个算法来判断一个数 n 是不是快乐数。<br/>
「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。<br/>
如果 n 是快乐数就返回 True ；不是，则返回 False 。<br/>
示例：<br/>
输入：19<br/>
输出：true<br/>
解释：<br/>
1^2 + 9^2 = 82<br/>
8^2 + 2^2 = 68<br/>
6^2 + 8^2 = 100<br/>
1^2 + 0^2 + 0^2 = 1<br/>
```java
package leetcode.editor.cn;

@SuppressWarnings("all")
public class HappyNumber {
    public static void main(String[] args) {
        Solution solution = new HappyNumber().new Solution();
        solution.isHappy(19);
    }
    class Solution {
        int trans(int n) {
            int res = 0;
            int num = 0;
            while (n != 0) {
                num = n % 10;
                res += num * num;
                n /= 10;
            }
            return res;
        }
        public boolean isHappy(int n) {
            int slow = trans(n), fast = trans(trans(n));
            while (slow != fast) {
                slow = trans(slow);
                fast = trans(trans(fast));
            }
            return slow == 1;
        }
    }
}

```

## 找到所有数组中消失的数字
给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
找到所有在 [1, n] 范围之间没有出现在数组中的数字。<br/>
示例:<br/>
输入:<br/>
[4,3,2,7,8,2,3,1]<br/>
输出:<br/>
[5,6]<br/>
```java
package leetcode.editor.cn;

import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("all")
public class FindAllNumbersDisappearedInAnArray {
    public static void main(String[] args) {
        Solution solution = new FindAllNumbersDisappearedInAnArray().new Solution();
        int[] nums = {4, 3, 2, 7, 8, 2, 3, 1};
        solution.findDisappearedNumbers(nums);
    }
    class Solution {
        public List<Integer> findDisappearedNumbers(int[] nums) {
            //用来存放结果
            List<Integer> res = new ArrayList<>();
            //1. 遍历下数组的元素，对对应的索引位置的元素作标记
            int len = nums.length;
            for (int i = 0; i < len; i++) {
                //由于数组的元素有可能被*-1，所以取绝对值
                int num = Math.abs(nums[i]);  
                int index = num - 1;
                if (nums[index] > 0) {
                    nums[index] *= -1;
                }
            }
            // 寻找没有标记的索引位置
            for (int i = 0; i < len; i++) {
                if (nums[i] > 0) {
                    //将索引转化为对应的元素
                    int num = i + 1;  
                    res.add(num);
                }
            }
            return res;
        }
    }
}
```

## 最长回文串
给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。<br/>
注意:<br/>
假设字符串的长度不会超过 1010。<br/>
示例 1:<br/>
输入:<br/>
"abccccdd"<br/>
输出:<br/>
7<br/>
解释:<br/>
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。<br/>
```java
package leetcode.editor.cn;

@SuppressWarnings("all")
public class LongestPalindrome {
    public static void main(String[] args) {
        Solution solution = new LongestPalindrome().new Solution();
        System.out.println(solution.longestPalindrome("abccccdd"));
    }
    class Solution {
        public int longestPalindrome(String s) {
            char[] chars = s.toCharArray();
            int[] hash = new int[52];
            for (int i = 0; i < chars.length; i++) {
                if (chars[i] >= 'a' && chars[i] <= 'z') {
                    hash[chars[i] - 'a']++;
                } else {
                    hash[chars[i] - 'A' + 26]++;
                }
            }
            int len = 0;
            for (int i = 0; i < 52; i++) {
                len = len + hash[i] - (hash[i] & 1);
            }
            return len == chars.length ? len : len + 1;
        }
    }
}
```
（x & 1）的结果要么为0，要么为1——取决于x的二进制数的最后一位是0还是1； 2 奇数的二进制数最后一位总是1，偶数的二进制数最后一位总是0； 所以,如果x为偶数，(x & 1)就为0； 如果x为奇数， （x & 1）就为1； --- x表示某个字符出现次数的计数器； 如果某个字符在原始字符串中出现了偶数次，那么这x个字符都可以用来组成回文字符串； 如果出现了奇数次，那就需要去掉其中一个字符，才能保证剩下的字符都可以用来组成回文字符串；

最终，回文字符串的长度 ans += x & (x-1);

## 压缩数组
给定一组字符，使用原地算法将其压缩。压缩后的长度必须始终小于或等于原数组长度。数组的每个元素应该是长度为1 的字符（不是 int 整数类型）。<br/>
在完成原地修改输入数组后，返回数组的新长度。<br/>
示例 1：<br/>
输入：<br/>
["a","a","b","b","c","c","c"]<br/>
输出：<br/>
返回 6 ，输入数组的前 6 个字符应该是：["a","2","b","2","c","3"]<br/>
说明：<br/>
"aa" 被 "a2" 替代。"bb" 被 "b2" 替代。"ccc" 被 "c3" 替代。<br/>
示例 2：<br/>
输入：<br/>
["a","b","b","b","b","b","b","b","b","b","b","b","b"]<br/>
输出：<br/>
返回 4 ，输入数组的前4个字符应该是：["a","b","1","2"]。<br/>
解释：<br/>
由于字符 "a" 不重复，所以不会被压缩。"bbbbbbbbbbbb" 被 “b12” 替代。<br/>
注意每个数字在数组中都有它自己的位置。
```java
package leetcode.editor.cn;

@SuppressWarnings("all")
public class StringCompression {
    public static void main(String[] args) {
        Solution solution = new StringCompression().new Solution();

        char[] chars = "abc".toCharArray();
        int len = solution.compress(chars);
        for (int i = 0; i < len; i++) {
            System.out.print(chars[i] + " ");
        }
    }

    class Solution {
        public int compress(char[] chars) {
            if (chars.length == 1) {
                return 1;
            }
            int slow = 0;
            int fast = 0;
            char ch = chars[slow];
            int len = 0;
            while (fast < chars.length) {
                while (fast < chars.length && chars[fast] == ch) {
                    fast++;
                    len++;
                }
                chars[slow++] = ch;
                if (len > 1) {
                    char[] num = String.valueOf(len).toCharArray();
                    for (int i = 0; i < num.length; i++) {
                        chars[slow++] = num[i];
                    }
                }

                len = 0;
                if (fast < chars.length) {
                    ch = chars[fast];
                }
            }
            return slow;
        }
    }
}

```

## 不用加号的加法
设计一个函数把两个数字相加。不得使用 + 或者其他算术运算符。<br/>
示例:<br/>
输入: a = 1, b = 1<br/>
输出: 2<br/>
```java
package leetcode.editor.cn;

@SuppressWarnings("all")
public class AddWithoutPlusLcci {
    public static void main(String[] args) {
        Solution solution = new AddWithoutPlusLcci().new Solution();
        System.out.println(solution.add(3, 3));
    }
    class Solution {
        public int add(int a, int b) {
            while (b != 0) {
                int temp = a;
                a = (a ^ b);
                b = ((temp & b) << 1);
            }
            return a;
        }
    }
}
```

## 查找常用字符
给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。<br/>
你可以按任意顺序返回答案。<br/>
示例 1：<br/>
输入：["bella","label","roller"]<br/>
输出：["e","l","l"]<br/>
示例 2：<br/>
输入：["cool","lock","cook"]<br/>
输出：["c","o"]<br/>
```java
package leetcode.editor.cn;

import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("all")
public class FindCommonCharacters {
    public static void main(String[] args) {
        Solution solution = new FindCommonCharacters().new Solution();
        String[] A = {"bella", "label", "roller"};
        System.out.println(solution.commonChars(A).toString());
    }
    class Solution {
        public List<String> commonChars(String[] A) {
            List<String> list = new ArrayList<>();
            int[] res = new int[26];
            for (char c : A[0].toCharArray()) {
                res[c - 'a']++;
            }
            for (int i = 1; i < A.length; i++) {
                int[] temp = new int[26];
                for (char c : A[i].toCharArray()) {
                    temp[c - 'a']++;
                }
                for (int j = 0; j < 26; j++) {
                    res[j] = Math.min(res[j], temp[j]);
                }
            }
            for (int i = 0; i < res.length; i++) {
                if (res[i] > 0) {
                    for (int j = 0; j < res[i]; j++) {
                        list.add(((char) ('a' + i) + ""));
                    }
                }
            }
            return list;
        }
    }
}
```
先将第一个字符串的字符数量统计 a-1、b-1、e-2、l-2、o-0、r-0<br/>
在遍历其他字符串的字符数量统计 a-1、b-1、e-2、l-2、o-0、r-0<br/>
　　　　　　　　　　　　　　　 a-0、b-0、e-1、l-2、o-1、r-2<br/>
依次取交集：第一个字符串和第二个字符串与它们的交集相同，第二个和第三个交集为<br/>
　　　　　　　　　　　　　　　 a-0、b-0、e-1、l-2、o-0、r-0

## 十进制整数的反码
每个非负整数 N 都有其二进制表示。例如， 5 可以被表示为二进制 "101"，11 可以用二进制 "1011" 表示，依此类推。注意，除 N = 0 外，任何二进制表示中都不含前导零。<br/>
二进制的反码表示是将每个 1 改为 0 且每个 0 变为 1。例如，二进制数 "101" 的二进制反码为 "010"。
给你一个十进制数 N，请你返回其二进制表示的反码所对应的十进制整数。<br/>
示例 1：<br/>
输入：5<br/>
输出：2<br/>
解释：5 的二进制表示为 "101"，其二进制反码为 "010"，也就是十进制中的 2 。<br/>
示例 2：<br/>
输入：10<br/>
输出：5<br/>
解释：10 的二进制表示为 "1010"，其二进制反码为 "0101"，也就是十进制中的 5 。
```java
package leetcode.editor.cn;

@SuppressWarnings("all")
public class ComplementOfBase10Integer {
    public static void main(String[] args) {
        Solution solution = new ComplementOfBase10Integer().new Solution();
        System.out.println(solution.bitwiseComplement(6));
    }
    class Solution {
        public int bitwiseComplement(int N) {
//            if (N == 0) {
//                return 1;
//            }
//            int i = 1;
//            int sum = 0;
//            while (N != 0) {
//                int r = (N % 2) ^ 1;
//                N >>= 1;
//                sum = sum + i * r;
//                i *= 2;
//            }
//            return sum;
            int num = 1;
            while(num < N){
                num = (num << 1) + 1;
            }
            return N ^ num;
        }
    }
}
```