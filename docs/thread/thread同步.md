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

## 同步准则
在编写```synchronized```块时，有几个简单的准则可以遵循，这些准则在避免死锁和
性能危险的风险方面大有帮助。

1. 使代码块保持简短，把不随线程变化的预处理和后处理移除。
2. 不要阻塞，如```InputStream.read()```。
3. 在持有锁的时候，不要对其他对象调用方法。
