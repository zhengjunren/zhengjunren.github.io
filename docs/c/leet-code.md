# 刷题！
## 检查替换后的词是否有效
给定有效字符串 "abc"。

对于任何有效的字符串 V，我们可以将 V 分成两个部分 X 和 Y，使得 X + Y（X 与 Y 连接）等于 V。（X 或 Y 可以为空。）那么，X + "abc" + Y 也同样是有效的。

例如，如果 S = "abc"，则有效字符串的示例是："abc"，"aabcbc"，"abcabc"，"abcabcababcc"。无效字符串的示例是："abccba"，"ab"，"cababc"，"bac"。

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
```java
//给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
//
// 有效字符串需满足：
//
//
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//
//
// 注意空字符串可被认为是有效字符串。
//
// 示例 1:
// 输入: "()[]{}"
//输出: true
// 示例 3:
// 输入: "(]"
//输出: false
// 示例 4:
// 输入: "([)]"
//输出: false
// {()}}{


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