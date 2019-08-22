# 补充问题

:::tip 备注
从[这](https://github.com/yangchong211/YCBlogs)转载！！！
:::

## start和run区别
- 线程中```start```和```run```方法有什么区别？
    - 为什么我们调用```start()```方法时会执行```run()```方法，为什么我们不能直接调用```run()```方法？这是一个非常经典的java多线程面试问题。当你调用start()方法时你将创建新的线程，并且执行在```run()```方法里的代码。但是如果你直接调用```run()```方法，它不会创建新的线程也不会执行调用线程的代码。


## 为何不能重复start
- 如下所示，可以发现即使多次调用```start```方法，线程只会被执行一次。那么这个究竟是怎么做到的呢？
    ``` java
    public class ThreadDemo {
    	public static void main(String[] args) {
    		// 创建对象
    		MyThread t1 = new MyThread() ;
    		// 启动线程: 需要使用start方法启动线程, 如果我们在这里调用的是run方法,那么我们只是把该方法作为普通方法进行执行
    //		t1.run() ;
    		t1.start() ;		// 告诉jvm开启一个线程调用run方法
    		// t1.start() ;		// 一个线程只能被启动一次
    	}
    }
    
    public class MyThread extends Thread {
    	@Override
    	public void run() {
    	    System.out.println("小杨逗比");
    	}
    }
    ```
- 然后查看一下```start```方法的源码，如下：
    ``` java
    boolean started = false;
    public synchronized void start() {
        // Android-changed: throw if 'started' is true
        if (threadStatus != 0 || started)
            throw new IllegalThreadStateException();
        group.add(this);
        started = false;
        try {
            nativeCreate(this, stackSize, daemon);
            started = true;
        } finally {
            try {
                if (!started) {
                    group.threadStartFailed(this);
                }
            } catch (Throwable ignore) {
                /* do nothing. If start0 threw a Throwable then
                  it will be passed up the call stack */
            }
        }
    }
    ```
- 一个线程多次start会出现什么情况？

    - 会直接抛出异常




## wait和sleep方法
- ```wait```和```sleep```方法的区别
    - 最大的不同是在等待时```wait```会释放锁，而```sleep```一直持有锁。```Wait```通常被用于线程间交互，```sleep```通常被用于暂停执行。[博客](https://github.com/yangchong211/YCBlogs)
- ```wait()```和```sleep()```其他区别
    - ```sleep```来自```Thread```类，和```wait```来自```Object```类 
    - 调用```sleep()```方法的过程中，线程不会释放对象锁。而 调用```wait```方法线程会释放对象锁 
    - ```sleep```睡眠后不出让系统资源，```wait```让出系统资源其他线程可以占用CPU 
    - ```sleep(milliseconds)```需要指定一个睡眠时间，时间一到会自动唤醒。
- 通俗解释
    - Java程序中```wait```和```sleep```都会造成某种形式的暂停，它们可以满足不同的需要。```wait()```方法用于线程间通信，如果等待条件为真且其它线程被唤醒时它会释放锁，而```sleep()```方法仅仅释放CPU资源或者让当前线程停止执行一段时间，但不会释放锁。




## run方法的作用
- **为什么要重写```run```方法**
    - 可以在定义的类中,定义多个方法,而方法中的代码并不是所有的都需要线程来进行执行;如果我们想让某一个段代码被线程,那么我们只需要将那一段代码放在```run```方法中。那么也就是说```run```方法中封装的都是要被线程执行的代码 ; 
- ```run```方法中的代码的特点: 
    - 封装的都是一些比较耗时的代码



## Runnable和Callable
- Runnable和Callable区别
    - ```Runnable```接口中的```run()```方法的返回值是```void```，它做的事情只是纯粹地去执行```run()```方法中的代码而已；```Callable```接口中的```call()```方法是有返回值的，是一个泛型，和```Future```、```FutureTask```配合可以用来获取异步执行的结果。[博客](https://github.com/yangchong211/YCBlogs)
    - 这其实是很有用的一个特性，因为多线程相比单线程更难、更复杂的一个重要原因就是因为多线程充满着未知性，某条线程是否执行了？某条线程执行了多久？某条线程执行的时候我们期望的数据是否已经赋值完毕？无法得知，我们能做的只是等待这条多线程的任务执行完毕而已。而```Callable+Future/FutureTask```却可以获取多线程运行的结果，可以在等待时间太长没获取到需要的数据的情况下取消该线程的任务，真的是非常有用。
