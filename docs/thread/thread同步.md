# 线程同步

## 多线程共享数据
在多线程的操作中，多个线程有可能处理一个资源，这就是多线程中的共享数据
### 同步
解决数据共享问题，必须使用同步，所谓同步就是指多个线程在同一个时间段只能有一个线程执行
指定代码，其他线程要等待此线程完成之后才可以执行。

## 同步代码块

例子（买票）：
+ 新建```ThreadSynchronized```类：

```java
import com.example.hello.thread;

public class ThreadSynchronized {

    public static void main(String[] args) {
        MyRunnable3 myRunnable3 = new MyRunnable3();
        Thread t1 = new Thread(myRunnable3);
        Thread t2 = new Thread(myRunnable3);
        t1.start();
        t2.start();
    }
}

class MyRunnable3 implements Runnable {
    private int ticket = 10;

    @Override
    public void run() {
        for (int i = 0; i < 300; i++) {
            synchronized (this){
            if (ticket > 0){
                try {
                    System.out.println("您正在购买第"+ticket + "张，正在购买中");
                    ticket--;
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("购买成功，还有" + ticket + "张未售出");
                }
            }
        }
    }
}
```
**调用```sleep()```方法不会丢失任何显示器的所有权。即不会释放锁**

运行结果：

![运行结果](/thread/线程同步1.PNG)

如果将```synchronized(){}```删除，会出现线程不安全
效果如下：

![运行结果](/thread/线程不安全.PNG)

## 同步方法

+ 将上面同步代码块中的代码抽象出来，改为同步方法

:::tip 提示
同步方法的同步对象是当前对象
:::
```java
//同步方法的同步对象是当前对象
private synchronized void sell(){
    if (ticket > 0){
        try {
            System.out.println("您正在购买第"+ticket + "张，正在购买中");
            ticket--;
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("购买成功，还有" + ticket + "张未售出");
    }
}
```

修改```MyRunnable3```中的```run()```方法

```java
@Override
public void run() {
    for (int i = 0; i < 300; i++) {
        sell();
    }
}
```
结果和上面一样。

## Lock

+ 在```MyRunnable3```中添加：

```java
//互斥锁
private ReentrantLock lock = new ReentrantLock();

//Lock实现同步
private void sellByLock(){
    //获取锁
    lock.lock();
    try {
        if (ticket > 0){
            try {
                System.out.println("您正在购买第"+ticket + "张，正在购买中");
                ticket--;
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("购买成功");
        }
    } finally {
        //释放锁
        lock.unlock();
    }
}
```
修改```MyRunnable3```中的```run()```方法
```java
@Override
public void sellByLock() {
    for (int i = 0; i < 300; i++) {
        sell();
    }
}
```

## 区别
**```synchronized``` 和```lock```的用法区别**

```synchronized```(隐式锁)：在需要同步的对象中加入此控制，```synchronized``` 可以加在方法上，也可以加在特定代码块中，括号中表示需要锁的对象。
```lock```（显示锁）：需要显示指定起始位置和终止位置。一般使用```ReentrantLock```类做为锁，多个线程中必须要使用一个```ReentrantLock```类做为对象才能保证锁的生效。且在加锁和解锁处需要通过```lock()```和```unlock()```显示指出。所以一般会在```finally```块中写```unlock()```以防死锁。
```synchronized``` 和```lock```性能区别 ```synchronized``` 是托管给 JVM 执行的，而 lock 是 Java 写的控制锁的代码。在 JDK 1.5 中，```synchronize```是性能低效的。因为这是一个重量级操作，需要调用操作接口，导致有可能加锁消耗的系统时间比加锁以外的操作还多。相比之下使用 Java 提供的```Lock```对象，性能更高一些。但是到了 JDK 1.6，发生了变化。```synchronize```在语义上很清晰，可以进行很多优化，有适应自旋，锁消除，锁粗化，轻量级锁，偏向锁等等。导致在 JDK 1.6 上```synchronize```的性能并不比```Lock```差。

**```synchronized``` 和```lock```机制区别**

```synchronized``` 原始采用的是 CPU 悲观锁机制，即线程获得的是独占锁。独占锁意味着其 他线程只能依靠阻塞来等待线程释放锁。
```Lock```用的是乐观锁方式。所谓乐观锁就是，每次不加锁而是假设没有冲突而去完成某项操作，如果因为冲突失败就重试，直到成功为止。乐观锁实现的机制就是 CAS 操作（Compare and Swap）。

## 同步准则
在编写```synchronized```块时，有几个简单的准则可以遵循，这些准则在避免死锁和
性能危险的风险方面大有帮助。

1. 使代码块保持简短，把不随线程变化的预处理和后处理移除。
2. 不要阻塞，如```InputStream.read()```。
3. 在持有锁的时候，不要对其他对象调用方法。
