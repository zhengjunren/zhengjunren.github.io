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