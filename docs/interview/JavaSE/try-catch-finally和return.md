# finally和return谁先执行

## try{reurn;}finally{return;}
```java
private int print1() {
    int result = 0;
    try {
        return result++;
    }finally{
        System.out.print("this is finally");
        return 2;
    }
}
```
此情况为测试类中的```print1()```方法，即：```try```语句块中没有异常。
![运行了return语句中的表达式运算](/interview/1-1.png "运行了return语句中的表达式运算")

输出结果
> this is finally + print1：2

先执行了```int result = 0;```,在执行了```return```语句中的表达式运算```result++```，
再执行```finally```块中的代码，返回值为 2。

![输出结果](/interview/1-2.png "输出结果")


## try{return;}catch{return;}finally{}
```java
private int print2() {
    int result = 0;
    try {
        int i = 10 / 0;
        return 1;
    }catch (Exception e) {
        return result++;
    }finally{
        System.out.print("this is finally");
    }
}
```

```try```代码块中出现异常，没有执行其中的```return```语句和其中的表达式，
再接着执行```catch```中的```return```语句中的表达式运算，
![try代码块中报错catch有returnfinally无return](/interview/1-3.png "try代码块中报错catch有returnfinally无return")

再执行```finally```代码块，最后执行```catch```中的```return```语句，而且此时又执行```return```语句中的表达式运算。

![输出结果](/interview/1-4.png "输出结果")

## try{return;}catch{return;}finally{return;}
```java
private int print3() {
    int test = 0;
    try {
        int i = 10 / 0;
        return 1;
    }catch (Exception e) {
        test = 2;
        return test == 2 ? test++ : test--;
    }finally{
        System.out.print("this is finally");
        //test = 5;
        return test;
    }
}
```
```try```代码块出现异常，未执行其中```return```，再值```catch```代码块，
并且执行了其中的```return```语句中的表达式运算，最后执行了```finally```代码块，
即最后执行了```finally```中的```return```语句。

输出结果：
>this is finally + print3：3

## try{return;}finally{}
```java
private int print4() {
    int result = -1;
    try {
        result++;
        return ++result;
    }finally{
        System.out.print("this is finally");
        result = 2;
    }
}
```
在```try```代码块执行```return```语句，返回一个变量，在```finally```中再对变量赋值值，
再执行```try```代码块执行```return```语句。但```finally```中并没有真正修改变量值。

输出结果：
> this is finally + print4：1

## 测试源码

```java
package xyz.zzz989.hello.java.tests;

import org.junit.Test;

/**
 * <p>ClassName: TestTryCatch</p>
 * <p>Description: </p>
 *
 * @author ZhengJunren
 * @version 1.0.0
 * @date 2019/8/31 21:59
 */
public class TestTryCatch {

    @Test
    public void test() {
        System.out.println(" + print1：" + print1());
//        System.out.println(" + print2：" + print2());
//        System.out.println(" + print3：" + print3());
//        System.out.println(" + print4：" + print4());

    }

    private int print1() {
        int result = 0;
        try {
            return result++;
        }finally{
            System.out.print("this is finally");
            return 2;
        }
    }

    private int print2() {
        int result = 0;
        try {
            int i = 10 / 0;
            return 1;
        }catch (Exception e) {
            return result++;
        }finally{
            System.out.print("this is finally");
        }
    }

    private int print3() {
        int test = 0;
        try {
            int i = 10 / 0;
            return 1;
        }catch (Exception e) {
            test = 2;
            return test == 2 ? test++ : test--;
        }finally{
            System.out.print("this is finally");
//            test = 5;
            return test;
        }
    }

    private int print4() {
        int result = -1;
        try {
            result++;
            return ++result;
        }finally{
            System.out.print("this is finally");
            result = 2;
        }
    }
}
```
