---
title: java8新特性
date: 2021-01-23
---

## 函数式接口

只有一个方法的接口

![image-20210123000612219](F:\哈哈哈\zhengjunren.github.io\docs\.vuepress\public\interview\image-20210123000612219.png)

<img src="F:\哈哈哈\zhengjunren.github.io\docs\.vuepress\public\interview\image-20210123001337168.png" alt="image-20210123001337168" style="zoom:150%;" />

```java
package org.example.juc.function;

import java.util.function.Function;

/**
 * <p>
 * Description:
 * </p>
 * 函数型接口,有一个输入参数，有一个输出
 *
 * @author ZhengJunren
 * @version v1.0.0
 * @see org.example.juc.function
 * @since 2021-01-23 0:09
 */
public class Demo01 {
    public static void main(String[] args) {

//        Function<String, String> function = new Function<String, String>() {
//            @Override
//            public String apply(String o) {
//                return o;
//            }
//        };
        Function<String, String> function = (str) -> {
            return str;
        };
        System.out.println(function.apply("abc"));
    }
}
```

## 断言型接口

![image-20210123001650749](F:\哈哈哈\zhengjunren.github.io\docs\.vuepress\public\interview\image-20210123001650749.png)

```java
package org.example.juc.function;

import java.util.function.Predicate;

/**
 * <p>
 * Description:
 * </p>
 * 断定型接口 有一个传入参数，返回值只能是boolean
 * @author ZhengJunren
 * @version v1.0.0
 * @see org.example.juc.function
 * @since 2021-01-23 0:15
 */
public class Demo02 {
    public static void main(String[] args) {
        // 判断字符串是否为空
//        Predicate<String> predicate = new Predicate<String>() {
//            @Override
//            public boolean test(String o) {
//                return o.isEmpty();
//            }
//        };
        Predicate<String> predicate = (str)->{
            return str.isEmpty();
        };
        System.out.println(predicate.test(""));
    }
}
```

## 消费型接口

<img src="F:\哈哈哈\zhengjunren.github.io\docs\.vuepress\public\interview\image-20210123002236628.png" alt="image-20210123002236628" style="zoom:150%;" />

## 供给型接口

```java
public class Demo04 {
    public static void main(String[] args) {

        Supplier<String> supplier = () -> {
            return "1024";
        };
        System.out.println(supplier.get());
    }
}
```

