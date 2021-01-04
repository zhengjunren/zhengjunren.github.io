---
title: 线程方法
date: 2021-01-04
---

## 线程启动
```public void start()```
+ 使该线程开始执行；Java 虚拟机调用该线程的 run 方法。

## 线程休眠

```public static void sleep(long millisec)```
+ 使当前线程正在执行的线程以指定毫秒数暂停，释放CPU的时间片
具体取决于系统定时器和调度程序的精准和准确性，线程不会丢失任何显示器的所有权。

+ ```InterruptedException```：如果任何线程中断当前线程时，会抛出此异常，当前线程中断状态会被清除。

+ 例子：在上一篇文章中有哦！


## 加入线程
```public final void join()```
+ 加入线程，让调用的线程先执行指定时间或执行完毕，再执行其他线程。
例子：
+ 新建```JoinAndInterrupt.java```。
+ 运行```main```方法。
```java
package com.example.hello.thread;

public class JoinAndInterrupt {
    public static void main(String[] args) {
        Thread t = new Thread(new myRunnable());
        t.start();
        for (int i = 0; i < 50; i++) {
            System.out.println(Thread.currentThread().getName()+"=="+i);
            try {
                Thread.sleep(300);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            if (i == 20){
                try {
                    //让t线程执行完毕，等待t完成后，主线程才继续执行
                    t.join();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}


class myRunnable implements Runnable{

    @Override
    public void run() {
        for (int i = 0; i < 50; i++) {
            System.out.println(Thread.currentThread().getName()+"--"+i);
            try {
                Thread.sleep(300);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

        }
    }
}
```
部分运行结果如下：

![运行结果](/thread/加入线程.PNG)

+ **上面例子中，加入线程，让调用的线程先执行指定时间或执行完毕，再执行主线程**

## 中断线程

### interrupt

```public void interrupt()```
+ 中断线程，添加中断标记。

```public static boolean interrupted()```
+ 测试当前线程是否中断，该方法可以清除线程的中断状态。
换句话说，如果这个方法被连续调用两次，那么第二次的调用返回```false```，
除非当前线程再次中断，在第一个调用已经清除其中断状态之后，在第二个调用之前已经检查过

+ 修改```main```方法：
```java
public static void main(String[] args) {
        Thread t = new Thread(new myRunnable());
        t.start();
        for (int i = 0; i < 50; i++) {
            System.out.println(Thread.currentThread().getName()+"=="+i);
            try {
                Thread.sleep(300);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            if (i == 20){
                try {
                   //中断线程，只是做了一个中断标记
                   t.interrupt();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }

```

+ 修改```myRunnable```:
```java
class myRunnable implements Runnable{

    @Override
    public void run() {
        for (int i = 0; i < 50; i++) {
            //测试中断状态。此方法会把中断状态清除
            if (Thread.interrupted()){
                //此处保存数据
                break;
            }
            System.out.println(Thread.currentThread().getName()+"--"+i);
            try {
                Thread.sleep(300);
            } catch (InterruptedException e) {
                e.printStackTrace();
                Thread.currentThread().interrupt();
            }
        }
    }
}

```
部分运行结果如下：

![运行结果](/thread/中断线程.PNG)

:::tip 提示
抛出异常的原因是：线程休眠时，如果任何线程中断当前线程时，会抛出此异常，当前线程中断状态会被清除。
:::

### 自定义标记中断线程

+ 添加```MyRunnable1```类：
```java
class MyRunnable1 implements Runnable{

    public boolean flag = true;

    public MyRunnable1() {
        this.flag = true;
    }

    @Override
    public void run() {
        int i = 0;
        while (flag){
            System.out.println(Thread.currentThread().getName()+"---"+(i++));
            try {
                Thread.sleep(300);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
``` 

+ 修改```main```方法：
```java
public static void main(String[] args) {
//        Thread t = new Thread(new myRunnable());
//        t.start();
        MyRunnable1 myRunnable1 = new MyRunnable1();
        Thread t2 = new Thread(myRunnable1);
        t2.start();
        for (int i = 0; i < 50; i++) {
            System.out.println(Thread.currentThread().getName()+"=="+i);
            try {
                Thread.sleep(300);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            if (i == 20){
                myRunnable1.flag = false;
            }
        }
    }
```
部分运行结果如下：

![运行结果](/thread/中断线程2.PNG)


## 其他方法

```public final void setDaemon(boolean on)```
+ 将该线程标记为守护线程或用户线程。
+ 作用：关闭程序时，可以直接结束其线程。
:::tip 提示
线程可以分为守护线程和用户线程，当进程中没有用户线程时，jvm会退出。
:::

+ 新建```DaemonThread.java```：
```java
package com.example.hello.thread;

public class DaemonThread {
    public static void main(String[] args) {
        MyRunnable2 myRunnable = new MyRunnable2();
        Thread t = new Thread(myRunnable);
        //线程可以分为守护线程和用户线程，当进程中没有用户线程时，jvm会退出
        //把线程设置为守护线程
        t.setDaemon(true);
        //等待cpu调度
        t.start();

        for (int i = 0; i < 50; i++) {
            System.out.println(Thread.currentThread().getName() + "--" + i);
            try {
                Thread.sleep(200);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

}

class MyRunnable2 implements Runnable{

    @Override
    public void run() {
        for (int i = 0; i < 50; i++) {
            System.out.println(Thread.currentThread().getName() + "==" +i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
```

部分运行结果如下：

![运行结果](/thread/守护线程.PNG)

```	public static void yield()```

+ 暂停当前正在执行的线程对象，并执行其他线程。

修改```main```方法：

```java
public static void main(String[] args) {
    MyRunnable2 myRunnable = new MyRunnable2();
    Thread t = new Thread(myRunnable);
    //线程可以分为守护线程和用户线程，当进程中没有用户线程时，jvm会退出
    //把线程设置为守护线程
    t.setDaemon(true);
    //等待cpu调度
    t.start();
    for (int i = 0; i < 50; i++) {
        System.out.println(Thread.currentThread().getName() + "--" + i);
        try {
            Thread.sleep(200);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        if (i == 5){
            //让出本次CPU执行时间片
            Thread.yield();
        }
    }
}
```
