---
title: switch
date: 2021-01-04
---

## 格式

```c
switch (表达式1) {
    case 常量表达式1:
        printf("A");
        break;
    case 常量表达式2:
        printf("B");
        break;
    default:
        printf("NONE");
        break;
    }
```

## 流程

首先，先计算switch后面括号里的表达式的值，再将这个值与每一个case后的常量或常量表达式比较。

若一致，执行该case语句后的语句，遇到break就跳出switch语句； 

若表达式的值与每一个case后的值都不一样，则执行default里的语句，然后跳出switch语句。

:::tip 注意

如果进入了一个`case`,它的代码块中没有`break`，且之后的`case`的代码块里也没有`break`语句，那么会执行下面所有的`case`的代码块,如果`default`语句也在该`case`后，那么也会执行`default`中的代码，如果`defaut`在该`case`之前，那么不会执行`default`中代码。

:::

```c
#include <stdio.h>

int main() {
    char a;
    scanf("%c", &a);
    switch (a) {
    case 'A':
        printf("A");
        break;
    case 'B':
        printf("B");
        break;
    default:
        printf("NONE");
        break;
    }
    return 0;
}
```

## 注意事项

+ switch（表达式） 表达式的值的类型应该是整型或是可以转换为整型的数值类型，例如：int，char，枚举。但是，long和string不能作用于switch语句。
+  关键字break是可选的，break语句会立即终止switch语句的执行。
+ default语句是可选的可以没有，作用是当switch表达式的值没有与之匹配的case时，执行default后的语句。如果没有default语句，出现这种情况就自动执行switch后的语句，跳出switch语句。 
+ switch语句是顺序检查，但每种情况的次序是无关紧要的，例如，可以先出现default语句，在出现case语句。 
+ switch（表达式）后面没有分号！case 常量：后面是冒号，不是分号！
+ case 常量或者表达式，若是表达式用单引号。
+ case语句之后即使需要执行多条语句，也不需要加大括号。
+ 多个case可以共用一条输入语句。
+ 每一个case的常量比必须都各不相同，否则就会出现相互矛盾的情况。
