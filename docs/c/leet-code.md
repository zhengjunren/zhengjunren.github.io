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
## 最小覆盖子串
给你一个字符串 S、一个字符串 T 。请你设计一种算法，可以在 O(n) 的时间复杂度内，从字符串 S 里面找出：包含 T 所有字符的最小子串。
示例：

输入：S = "ADOBECODEBANC", T = "ABC"
输出："BANC"