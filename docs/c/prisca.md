# printf&scanf

## printf

```c
#include <stdio.h>

int main() {
    printf("%5d\n", -12);
    printf("%5c\n", 'a');
    printf("%5s\n\n", "abcd");
    printf("%-5dA\n\n", -12);
    printf("%7.2lf\n", 12.345);
    printf("%7.lf\n", 12.345); // %7.0lf 和 %7.lf等价
    printf("%.5f\n", 12.345);
    printf("%-11lf\n", 12.345);
    return 0;
}
```
![运行结果](/c/printf.png)

## scanf

:::tip 提示

scanf 函数中不可以使用`#`,`-`,`m.n`的格式附加字符(m、n属于自然数),

可以使用域宽的格式附加字符

:::

```c
#include <stdio.h>

int main() {
    int a;
    /*
     * 可以使用预宽
     * scanf("%5d", &a); 输入 12345678
     * printf("%d\n", a); 输出 12345
     */
    /*
     * 不可以使用负号
     * scanf("%-5d", &a);
     * printf("%d\n", a); 输出的a是垃圾值
     */
    /*
     * double b;
     * scanf("%7.2d", &b); 
     * printf("%d\n", b); 输出的b是垃圾值
     */
    char ch;
    while ((ch = getchar()) != '\n') {
        putchar(ch);
    }
    putchar('\n');
    return 0;
}
```