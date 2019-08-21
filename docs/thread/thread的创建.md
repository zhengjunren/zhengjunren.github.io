# Java线程的创建

+ 新建名为```hello-thread```的项目，再创建```com.example.hello.thread包。

## 继承 Thread 类创建线程类

+ 创建```ThreadTest.java```文件
```java
public class ThreadTest {

    public static void main(String[] args) {
        MyThread1 myThread1 = new MyThread1();
        myThread1.start();
    }
}

class MyThread1 extends Thread {

    @Override
    public void run() {
        for (int i = 0; i < 50; i++) {
            System.out.println(Thread.currentThread().getName()+"-"+i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
```
+ ```Thread.sleep()```方法在接下来的文章里介绍。

部分运行结果如下：

![运行结果](/thread/创建线程1.PNG)

## 通过实现 Runnable 接口来创建线程

+ 接着在```ThreadTest.java```中添加如下代码

```java
class MyThread implements Runnable{
    @Override
    public void run() {
        for (int i = 0; i < 50; i++) {
            System.out.println(Thread.currentThread().getName()+"-"+i);
            try {
                Thread.sleep(1000);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
```
+ 修改```main```方法

```java
public class ThreadTest {
    public static void main(String[] args) {
            MyThread myThread = new MyThread();
            Thread thread1 = new Thread(myThread);
            Thread thread2 = new Thread(myThread);
            thread1.start();
            thread2.start();
        }
}
```

结果如下：

![运行结果](/thread/创建线程1.PNG)


## 通过 Callable 和 Future 创建线程

+ 创建 Callable 接口的实现类，并实现```call()```方法，该```call()```方法将作为线程执行体，并且有返回值。
+ 创建 Callable 实现类的实例，使用 FutureTask 类来包装 Callable 对象，该 FutureTask 对象封装了该 Callable 对象的```call()```方法的返回值。
+ 使用 FutureTask 对象作为 Thread 对象的 target 创建并启动新线程。
+ 调用 FutureTask 对象的```get()```方法来获得子线程执行结束后的返回值

## 对比

### 采用实现 Runnable、Callable 接口的方式创见多线程

+ 优势是：线程类只是实现了 Runnable 接口或 Callable 接口，还可以继承其他类。在这种方式下，多个线程可以共享同一个 target 对象，所以非常适合多个相同线程来处理同一份资源的情况，从而可以将 CPU、代码和数据分开，形成清晰的模型，较好地体现了面向对象的思想。

+ 劣势是：编程稍微复杂，如果要访问当前线程，则必须使用 Thread.currentThread() 方法。

### 使用继承 Thread 类的方式创建多线程

+ 优势是：编写简单，如果需要访问当前线程，则无需使用 Thread.currentThread() 方法，直接使用 this 即可获得当前线程。

+ 劣势是：线程类已经继承了 Thread 类，所以不能再继承其他父类。
