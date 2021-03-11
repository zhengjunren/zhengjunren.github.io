#  JUC

## 线程与进程
进程：一个程序，QQ.exe Music.exe 程序的集合；

一个进程往往可以包含多个线程，至少包含一个！

Java默认有几个线程？ 2 个 mian、GC

线程：开了一个进程 Typora，写字，自动保存（线程负责的）

对于Java而言：Thread、Runnable、Callable

## 并发、并行
并发编程：并发、并行
+ 并发（多线程操作同一个资源）
    + CPU 一核 ，模拟出来多条线程，天下武功，唯快不破，快速交替
+ 并行（多个人一起行走）
    + CPU 多核 ，多个线程可以同时执行； 线程池

# 线程状态
```java
public enum State {
    /**
     * Thread state for a thread which has not yet started.
     */
    NEW,

    /**
     * Thread state for a runnable thread.  A thread in the runnable
     * state is executing in the Java virtual machine but it may
     * be waiting for other resources from the operating system
     * such as processor.
     */
    // 运行
    RUNNABLE,

    /**
     * Thread state for a thread blocked waiting for a monitor lock.
     * A thread in the blocked state is waiting for a monitor lock
     * to enter a synchronized block/method or
     * reenter a synchronized block/method after calling
     * {@link Object#wait() Object.wait}.
     */
    // 阻塞
    BLOCKED,

    /**
     * Thread state for a waiting thread.
     * A thread is in the waiting state due to calling one of the
     * following methods:
     * <ul>
     *   <li>{@link Object#wait() Object.wait} with no timeout</li>
     *   <li>{@link #join() Thread.join} with no timeout</li>
     *   <li>{@link LockSupport#park() LockSupport.park}</li>
     * </ul>
     *
     * <p>A thread in the waiting state is waiting for another thread to
     * perform a particular action.
     *
     * For example, a thread that has called <tt>Object.wait()</tt>
     * on an object is waiting for another thread to call
     * <tt>Object.notify()</tt> or <tt>Object.notifyAll()</tt> on
     * that object. A thread that has called <tt>Thread.join()</tt>
     * is waiting for a specified thread to terminate.
     */
    // 等待，死死地等
    WAITING,

    /**
     * Thread state for a waiting thread with a specified waiting time.
     * A thread is in the timed waiting state due to calling one of
     * the following methods with a specified positive waiting time:
     * <ul>
     *   <li>{@link #sleep Thread.sleep}</li>
     *   <li>{@link Object#wait(long) Object.wait} with timeout</li>
     *   <li>{@link #join(long) Thread.join} with timeout</li>
     *   <li>{@link LockSupport#parkNanos LockSupport.parkNanos}</li>
     *   <li>{@link LockSupport#parkUntil LockSupport.parkUntil}</li>
     * </ul>
     */
    // 超市等待
    TIMED_WAITING,

    /**
     * Thread state for a terminated thread.
     * The thread has completed execution.
     */
    // 终止
    TERMINATED;
    }
```

## wait 和 sleep 区别
1. 来自不用的类
    + wait() 方法是 Object 类
    + sleep() 方法是 Thread 类
2. 锁的释放
    + wait() 会释放锁
    + sleep() 不会释放锁
3. 使用范围
    + wait() 必须在同步代码块中调用
    + sleep() 可以在任意处调用
4.  捕获异常
    + wait() 不用捕获异常
    + sleep() 不用捕获异常
    



## Lock 

实现类：ReentrantLock, ReentrantReadWriteLock.ReadLock, ReentrantReadWriteLock.WriteLock

![image-20210122161818218](/interview/image-20210122161818218.png)

公平锁： 先来后到

非公平锁：可以插队（默认）

### synchronized 和 Lock 的区别

1. synchronized 内置java关键字，Lock 是一个类
2. synchronized 无法判断获取锁的状态， Lock 可以判断是否获取到了锁
3. synchronized 会自动释放锁，lock 必须要手动释放锁（如果不释放，就会死锁）
4. synchronized 线程1（获得锁，阻塞）、线程2（等待、傻傻的等）；Lock锁不一定会等待下去
5. synchronized 可重入锁，不可中断的，非公平；Lock 可重入锁，可以判断，可以自己设置是否公平
6. synchronized 适合少量的代码同步问题，Lock 适合大量代码

> 锁是什么，如何判断锁的是谁

### LockSupport

用于创建锁和其他同步类的基本线程阻塞原语，线程等待唤醒机制的改良版

LockSupport 中的 park() 和 unpark() 的作用分别是阻塞线程和解除阻塞线程

LockSupport 和每个它使用的线程有一个许可关联。 permit 相当于 0 1 开关，默认是0

调用一次 unpark() 就会 加 1 变成 1

调用一次 park() 就会消费 permit 将 1 变成 0，同时 park() 立即返回

如果再次调用 park() 就会被阻塞在这里，直至 permit 变为 1 

每个线程都有一个相关的 permit，permit 最多只有一个，重复调用 unpar() 也不会积累 permit

## 生产者和消费者问题

### synchronized 版

```java
package org.example.juc.pc;

/**
 * <p>
 * Description:
 * </p>
 *
 * @author ZhengJunren
 * @version v1.0.0
 * @see org.example.juc.pc
 * @since 2021-01-22 16:45
 */
public class A {
    public static void main(String[] args) throws InterruptedException {
        Data data = new Data();

        new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                try {
                    data.increment();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }, "A").start();
        new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                try {
                    data.decrement();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }, "B").start();
    }
}

// 判断等待、业务、通知

class Data {
    private int number = 0;

    public synchronized void increment() throws InterruptedException {
        if (number != 0) {
           // 等待
            this.wait();
        }
        number++;
        // 通知其他线程，我 +1 完毕
        System.out.println(Thread.currentThread().getName() + "=>" + number);
        this.notifyAll();
    }

    public synchronized void decrement() throws InterruptedException {
        if (number == 0) {
            // 等待
            this.wait();
        }
        number--;
        // 通知其他线程，我 -1 完毕
        System.out.println(Thread.currentThread().getName() + "=>" + number);
        this.notifyAll();
    }
}
```

> 问题存在 A B C D 4 个线程虚假唤醒

线程可以唤醒，而不会被通知，中断或超时，即所谓的**虚假唤醒**，虽然在实践中中很少发生，但应用程序必须通过测试应该使用线程唤醒的条件来防范，并且如果条件不满足则继续等待，换句话说，**等待应该总是出现在循环中**，就像这样

```java
synchronized (obj) {
    while(<condition does not hold>) {
        obj.wait();
    }
}
```

```java
package org.example.juc.pc;

/**
 * <p>
 * Description:
 * </p>
 *
 * @author ZhengJunren
 * @version v1.0.0
 * @see org.example.juc.pc
 * @since 2021-01-22 16:45
 */
public class A {
    public static void main(String[] args) throws InterruptedException {
        Data data = new Data();

        new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                try {
                    data.increment();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }, "A").start();
        new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                try {
                    data.decrement();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }, "B").start();
        new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                try {
                    data.increment();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }, "C").start();
        new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                try {
                    data.decrement();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }, "D").start();
    }
}

// 判断等待、业务、通知

class Data {
    private int number = 0;

    public synchronized void increment() throws InterruptedException {
        while (number != 0) {
           // 等待
            this.wait();
        }
        number++;
        // 通知其他线程，我 +1 完毕
        System.out.println(Thread.currentThread().getName() + "=>" + number);
        this.notifyAll();
    }

    public synchronized void decrement() throws InterruptedException {
        while (number == 0) {
            // 等待
            this.wait();
        }
        number--;
        // 通知其他线程，我 -1 完毕
        System.out.println(Thread.currentThread().getName() + "=>" + number);
        this.notifyAll();
    }
}
```

### JUC 版

通过 Lock 找到 await() 方法，和 signal() 方法

```java
package org.example.juc.pc;

import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

/**
 * <p>
 * Description:
 * </p>
 *
 * @author ZhengJunren
 * @version v1.0.0
 * @see org.example.juc.pc
 * @since 2021-01-22 17:25
 */
public class B {
    public static void main(String[] args) throws InterruptedException {
        Data2 data = new Data2();
        new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                try {
                    data.increment();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }, "A").start();
        new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                try {
                    data.decrement();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }, "B").start();
        new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                try {
                    data.increment();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }, "C").start();
        new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                try {
                    data.decrement();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }, "D").start();
    }
}

// 判断等待、业务、通知

class Data2 {
    private int number = 0;
    Lock lock = new ReentrantLock();
    Condition condition = lock.newCondition();

    //condition.await(); 等待
    //condition.signalAll(); 唤醒
    public void increment() throws InterruptedException {
        lock.lock();
        try {
            while (number != 0) {
                // 等待
                condition.await();
            }
            number++;
            // 通知其他线程，我 +1 完毕
            System.out.println(Thread.currentThread().getName() + "=>" + number);
            condition.signalAll();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            lock.unlock();
        }

    }

    public void decrement() throws InterruptedException {
        lock.lock();
        try {
            while (number == 0) {
                // 等待
                condition.await();
            }
            number--;
            // 通知其他线程，我 -1 完毕
            System.out.println(Thread.currentThread().getName() + "=>" + number);
            condition.signalAll();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            lock.unlock();
        }
    }
}
```

> Condition 精准的通知和唤醒线程

![image-20210122173648331](/interview/image-20210122173648331.png)

代码测试：

```java
package org.example.juc.lock8;

import java.util.concurrent.TimeUnit;

/**
 * <p>
 * Description:
 * </p>
 * 1. 标准情况下，两个线程谁先打印 -> 发短信 -> 打电话
 * 2. sendSms 延迟4秒，两个线程谁先打印 -> 发短信 -> 打电话
 * @author ZhengJunren
 * @version v1.0.0
 * @see org.example.juc.lock8
 * @since 2021-01-22 19:21
 */
@SuppressWarnings("all")
public class Test1 {
    public static void main(String[] args) throws InterruptedException {
        Phone phone = new Phone();
        new Thread(()-> {
            phone.sendSms();
        }, "A").start();

        TimeUnit.SECONDS.sleep(1);

        new Thread(()-> {
            phone.call();
        }, "B").start();

    }
}


class Phone {

    // synchronized 锁的对象是方法的调用者
    // 两个方法用的是用一个所，谁先拿到谁执行

    public synchronized void sendSms() {
        try {
            TimeUnit.SECONDS.sleep(4);
            System.out.println("发短信");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public synchronized void call() {
        System.out.println("打电话");
    }
}

public class Test2 {
    public static void main(String[] args) throws InterruptedException {
        Phone2 phone1 = new Phone2();
        Phone2 phone2 = new Phone2();
        new Thread(()-> {
            phone1.sendSms();
        }, "A").start();

        TimeUnit.SECONDS.sleep(1);

        new Thread(()-> {
            phone2.call();
        }, "B").start();

    }
}


class Phone2 {

    // synchronized 锁的对象是方法的调用者
    // 两个方法用的是用一个所，谁先拿到谁执行

    public synchronized void sendSms() {
        try {
            TimeUnit.SECONDS.sleep(4);
            System.out.println("发短信");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public synchronized void call() {
        System.out.println("打电话");
    }

    // 没有锁，不是同步方法不受锁的影响

    public void hello() {
        System.out.println("hello");
    }
}


public class Test3 {
    public static void main(String[] args) throws InterruptedException {
        // 两个对象的 Class 类模板只有一个 static 锁的是 Class
        Phone3 phone1 = new Phone3();
        Phone3 phone2 = new Phone3();

        new Thread(()-> {
            phone1.sendSms();
        }, "A").start();

        TimeUnit.SECONDS.sleep(1);

        new Thread(()-> {
            phone2.call();
        }, "B").start();

    }
}


class Phone3 {

    // synchronized 锁的对象是方法的调用者
    // 两个方法用的是用一个所，谁先拿到谁执行
    // 静态方法，类一加载就有了，锁的是 Class

    public static synchronized void sendSms() {
        try {
            TimeUnit.SECONDS.sleep(4);
            System.out.println("发短信");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public synchronized void call() {
        System.out.println("打电话");
    }
}

public class Test4 {
    public static void main(String[] args) throws InterruptedException {
        // 两个对象的 Class 类模板只有一个 static 锁的是 Class
        Phone4 phone = new Phone4();

        new Thread(()-> {
            phone.sendSms();
        }, "A").start();

        TimeUnit.SECONDS.sleep(1);

        new Thread(()-> {
            phone.call();
        }, "B").start();

    }
}


class Phone4 {

    // synchronized 锁的对象是方法的调用者
    // 两个方法用的是用一个所，谁先拿到谁执行
    // 静态方法，类一加载就有了，锁的是 Class

    public static synchronized void sendSms() {
        try {
            TimeUnit.SECONDS.sleep(4);
            System.out.println("发短信");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    public static synchronized void call() {
        System.out.println("打电话");
    }
}

```

new this 具体的一个对象

static 唯一的类模板



## 集合类不安全

### List 不安全

```java
package org.example.juc.unsafe;

import java.util.List;
import java.util.UUID;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * <p>
 * Description:
 * </p>
 * java.util.ConcurrentModificationException
 * @author ZhengJunren
 * @version v1.0.0
 * @see org.example.juc.unsafe
 * @since 2021-01-22 20:06
 */
@SuppressWarnings("all")
public class ListTest {
    public static void main(String[] args) {
        // 解决方案
        // 1. Vector
        // 2. Collections.synchronizedList(new ArrayList<>());
        // 3. List list = new CopyOnWriteArrayList();
//        List<String> list = new ArrayList<>();
//        List<String> list = new Vector<>();
//        List<Object> list = Collections.synchronizedList(new ArrayList<>());
        // 写入时复制， COW 计算机程序设计领域的一钟优化策略
        // 多线程调用时，list 读取的时候是固定的，写入时（覆盖）
        // 在写入的时候避免覆盖，造成数据问题

        List list = new CopyOnWriteArrayList();
        for (int i = 0; i < 20000; i++) {
            new Thread(()-> {
                list.add(UUID.randomUUID().toString().substring(0, 5));
                System.out.println(list);
            }, String.valueOf(i)).start();
        }
    }
}

```

### Set 不安全

```java
public class SetTest {
    public static void main(String[] args) {
//        Set<String> set = new HashSet<>();
//        Set<String> set = Collections.synchronizedSet(new HashSet<>());
        Set<String> set = new CopyOnWriteArraySet<>();
        for (int i = 0; i < 30; i++) {
            new Thread(()->{
                set.add(UUID.randomUUID().toString().substring(0, 5));
                System.out.println(set);
            }, String.valueOf(i)).start();
        }
    }
}
```

### Map 不安全

```java
public class MapTest {
    public static void main(String[] args) {
//        Map<String, String> map = new HashMap<>();
//        Map<String, String> map =  Collections.synchronizedMap(new HashMap<>());
        ConcurrentHashMap<String, String> map = new ConcurrentHashMap<>();
        for (int i = 0; i < 30; i++) {
            new Thread(()->{
                map.put(Thread.currentThread().getName(),UUID.randomUUID().toString().substring(0, 5));
                System.out.println(map);
            }, String.valueOf(i)).start();
        }

    }
}

```



写时复制，往一个容器里添加元素的时候，不直接往当前容器 Object[] 中添加，而是先将当前容器 Object[] 进行复制，复制出一个新的容器 Object[] newElements，然后往新的容器中添加元素，添加完元素之后，再将原容器的引用指向新的容器。这样做的好处是可以对其进行并发的读，而不需要加锁，因为当前容器不会添加任何元素 

```java
    public boolean add(E e) {
        final ReentrantLock lock = this.lock;
        lock.lock();
        try {
            Object[] elements = getArray();
            int len = elements.length;
            Object[] newElements = Arrays.copyOf(elements, len + 1);
            newElements[len] = e;
            setArray(newElements);
            return true;
        } finally {
            lock.unlock();
        }
    }

```



## Callable

![image-20210122204907084](/interview/image-20210122204907084.png)

1. 可以由返回值
2. 可以跑出异常
3. 方法不同 run()/call()



![image-20210122210218835](/interview/image-20210122210218835.png)

```java
package org.example.juc.callable;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.FutureTask;

/**
 * <p>
 * Description:
 * </p>
 *
 * @author ZhengJunren
 * @version v1.0.0
 * @see org.example.juc.callable
 * @since 2021-01-22 20:50
 */
@SuppressWarnings("all")
public class CallableTest {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
//        new Thread(new MyThread()).start();
        MyThread thread = new MyThread();
        FutureTask<Integer> futureTask = new FutureTask<>(thread);
        // 结果会被缓存
        new Thread(futureTask, "A").start();
        new Thread(futureTask, "B").start(); 
        // 获取返回结果
        // get方法会可能会阻塞
        // 放到最后一行，或者异步通信
        Integer o = futureTask.get();
        System.out.println(o);
    }
}
class MyThread implements Callable<Integer> {
    @Override
    public Integer call() {
        System.out.println("call()");
        return 1024;
    }
}

```

## 常用辅助类

### CountDownLatch

![image-20210122211311444](/interview/image-20210122211311444.png)

```java
package org.example.juc.add;

import java.util.concurrent.CountDownLatch;

/**
 * <p>
 * Description:
 * </p>
 * 计数器
 * @author ZhengJunren
 * @version v1.0.0
 * @see org.example.juc.add
 * @since 2021-01-22 21:10
 */
public class CountDownLatchDemo {
    public static void main(String[] args) throws InterruptedException {
        // 总数是 6，必须要执行任务的时候再使用
        CountDownLatch countDownLatch = new CountDownLatch(6);
        for (int i = 0; i < 6; i++) {
            new Thread(()->{
                System.out.println(Thread.currentThread().getName() + " Go out");
                countDownLatch.countDown();
            }, String.valueOf(i)).start();
        }
        // 等待计数器归零，然后在向下执行
        countDownLatch.await();
        System.out.println("close the door");
    }
}
```

每次有线程调用 countDown()数量减一，假设计数器变为0，countDownLatch.await() 就会被唤醒，继续执行

### CyclicBarrier

![image-20210122212106873](/interview/image-20210122212106873.png)

```java
@SuppressWarnings("all")
public class CyclicBarrierDemo {
    public static void main(String[] args) {
        CyclicBarrier cyclicBarrier = new CyclicBarrier(7, ()->{
            System.out.println("success");
        });
        for (int i = 0; i < 7; i++) {
            final int temp = i;
            new Thread(()->{
                System.out.println(Thread.currentThread().getName() + temp);
                try {
                    cyclicBarrier.await();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                } catch (BrokenBarrierException e) {
                    e.printStackTrace();
                }
            }, String.valueOf(i)).start();
        }
    }
}
```

### Semaphore

```java
package org.example.juc.add;

import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

/**
 * <p>
 * Description:
 * </p>
 * 信号量
 * @author ZhengJunren
 * @version v1.0.0
 * @since 2021-01-22 21:32
 * @see org.example.juc.add
 */
@SuppressWarnings("all")
public class SemaphoreDemo {
    public static void main(String[] args) {
        // 线程数量
        Semaphore semaphore = new Semaphore(3);

        for (int i = 0; i < 6; i++) {
            new Thread(()->{
                try {
                    semaphore.acquire();
                    System.out.println(Thread.currentThread().getName() + "抢到车位");
                    TimeUnit.SECONDS.sleep(2);
                    System.out.println(Thread.currentThread().getName() + "离开车位");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                } finally {
                    // 释放
                    semaphore.release();
                }
            }, String.valueOf(i)).start();
        }
    }
}
```

aqcuire() 假设如果满了，等待，直至有信号量被释放为止

release() 释放，会将当前的信号量释放1，并唤醒等待的线程

## 锁

### 公平锁&非公平锁

公平锁：是指多个线程按照申请锁的顺序来获取锁，先来后到

非公平锁：是指多个线程获取锁的顺序并不是按照申请锁的顺序，有可能后申请的线程比先申请的线程优先获取锁，在高并发的情况下，有可能会造成优先级翻转或者饥饿现象

并发包中的 ReentrantLock 默认是不公平锁，非公平锁的优点在于吞吐量比公平锁大

对于 synchronized 而言，也是非公平锁

### 可重入锁

又名递归锁，指的是同一线程外层函数获得锁之后，内层递归函数仍然能获取该锁的代码，在同一线程在外层方法获得锁之后，进入内层方法会自动获取锁，也就是说，线程可以进入任何一个它已经拥有锁所同步着的代码块。

ReentrantLock 和 synchronized 就是可重入锁，可重入锁的最大作用就是避免死锁

```java
public class ReenterLockDemo {
    public static void main(String[] args) {
        Phone phone = new Phone();
        new Thread(() -> {
            try {
                phone.sendSms();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }, "t1").start();
        new Thread(() -> {
            try {
                phone.sendSms();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }, "t2").start();


        try {
            TimeUnit.SECONDS.sleep(2);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Thread t3 = new Thread(phone);
        Thread t4 = new Thread(phone);
        System.out.println();
        System.out.println();
        t3.start();
        t4.start();
    }
}

class Phone implements Runnable {
    public synchronized void sendSms() throws Exception {
        System.out.println(Thread.currentThread().getName() + "\t invoke sendSms()");
        sendEmail();
    }

    public synchronized void sendEmail() throws Exception {
        System.out.println(Thread.currentThread().getName() + "\t ###invoke sendEmail()");
    }

    Lock lock = new ReentrantLock();

    @Override
    public void run() {
        get();
    }

    public void get() {
        lock.lock();
        try {
            System.out.println(Thread.currentThread().getName() + "\t invoke get()");
            set();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            lock.unlock();
        }
    }

    public void set() {
        lock.lock();
        try {
            System.out.println(Thread.currentThread().getName() + "\t invoke set()");
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            lock.unlock();
        }
    }
}

```

![image-20210124144325080](/interview/image-20210124144325080.png)

### 自旋锁

是指尝试获取锁的线程不会立即阻塞，而是采用循环的方式尝试获取锁，这样的好处是减少线程上下文切换的消耗，缺点是循环会消耗 CPU

![image-20210123162326311](/interview/image-20210123162326311.png)

```java
@SuppressWarnings("all")
public class SpinLockDemo {
    AtomicReference<Thread> atomicReference = new AtomicReference<>();

    public void myLock() {
        Thread thread = Thread.currentThread();
        System.out.println(Thread.currentThread().getName() + "\t come in");
        while (!atomicReference.compareAndSet(null, thread)) {

        }
    }

    public void myUnlock() {
        Thread thread = Thread.currentThread();
        atomicReference.compareAndSet(thread, null);
        System.out.println(Thread.currentThread().getName() + "\t invoke myUnlock()");
    }

    public static void main(String[] args) {
        // 原子引用线程
        SpinLockDemo spinLockDemo = new SpinLockDemo();
        new Thread(()->{
            spinLockDemo.myLock();
            try {
                TimeUnit.SECONDS.sleep(5);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            spinLockDemo.myUnlock();
        }, "AA").start();

        try {
            TimeUnit.SECONDS.sleep(1);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        new Thread(()->{
            spinLockDemo.myLock();
            try {
                TimeUnit.SECONDS.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            spinLockDemo.myUnlock();
        }, "BB").start();
    }
}
```

![image-20210124150927978](/interview/image-20210124150927978.png)

### 读写锁

```java
package org.example.juc.rw;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.locks.ReentrantReadWriteLock;

/**
 * <p>
 * Description:
 * </p>
 * 独占锁（写锁） 一个只能被一次线程占有
 * 共享锁（读锁） 多个线程可以通知占有
 * @author ZhengJunren
 * @version v1.0.0
 * @see org.example.juc.rw
 * @since 2021-01-22 21:42
 */
@SuppressWarnings("all")
public class ReadWriteLockDemo {
    public static void main(String[] args) {
        MyCache myCache = new MyCache();
        for (int i = 0; i < 5; i++) {
            final int temp = i;
            new Thread(()->{
                myCache.put(temp+"", temp);
            }, String.valueOf(i)).start();
        }
        for (int i = 0; i < 5; i++) {
            final int temp = i;
            new Thread(()->{
                myCache.get(temp+"");
            }, String.valueOf(i)).start();
        }
    }
}

class MyCache {
    private volatile Map<String, Object> map = new HashMap<>();
    // 读写锁，更加细粒度的控制
    ReentrantReadWriteLock readWriteLock = new ReentrantReadWriteLock();
    // 写入时，只有一个线程写
    public void put(String key, Object value) {
        readWriteLock.writeLock().lock();
        try {
            System.out.println(Thread.currentThread().getName() + "写入" + key);
            map.put(key, value);
            System.out.println(Thread.currentThread().getName() + "写入ok");
        } finally {
            readWriteLock.writeLock().unlock();
        }

    }
    //读取时，所有线程都可以读
    public void get(String key) {
        readWriteLock.readLock().lock();
        try {
            System.out.println(Thread.currentThread().getName() + "读取" + key);
            map.get(key);
            System.out.println(Thread.currentThread().getName() + "读取ok");
        } finally {
            readWriteLock.readLock().unlock();
        }

    }
}
```

### 死锁

死锁是指两个或两个以上的进程在执行过程中，因争夺资源而造成的一种相互等待的现象，若无外力干涉那他们将无法推进下去，如果系统资源充足，进程的资源都能够得到满足，死锁的出现的可能性就很低，否则就会因为争夺有限的资源而陷入死锁



## 队列

### 阻塞队列

![image-20210122223243171](/interview/image-20210122223243171.png)

多线程并发处理，线程池

### 四组 API

1. 抛出异常
2. 不会抛出异常
3. 阻塞等待
4. 超时等待

| 方式       | 抛出异常  | 不抛异常，有返回值 | 阻塞等待 | 超时等待        |
| ---------- | --------- | ------------------ | -------- | --------------- |
| 添加       | add()     | offer()            | put()    | offer()（带参） |
| 移除       | remove()  | poll()             | take()   | poll()（带参）  |
| 判断队列首 | element() | peek()             |          |                 |

```java
    /**
     * 抛出异常
     */
    public static void test1() {
        ArrayBlockingQueue blockingQueue = new ArrayBlockingQueue<>(3);
        System.out.println(blockingQueue.add("a"));
        System.out.println(blockingQueue.add("b"));
        System.out.println(blockingQueue.add("c"));

        // java.lang.IllegalStateException 队列已经满了
//        System.out.println(blockingQueue.add("d"));
        System.out.println(blockingQueue.remove());
        System.out.println(blockingQueue.remove());
        System.out.println(blockingQueue.remove());
        // java.util.NoSuchElementException
//        System.out.println(blockingQueue.remove());
    }
```

```java
    /**
     * 有返回值，不抛出异常
     */
    public static void test2() {
        ArrayBlockingQueue blockingQueue = new ArrayBlockingQueue<>(3);
        System.out.println(blockingQueue.offer("a"));
        System.out.println(blockingQueue.offer("b"));
        System.out.println(blockingQueue.offer("c"));
        // 返回false， 不抛出异常
//        System.out.println(blockingQueue.offer("d"));
        System.out.println(blockingQueue.poll());
        System.out.println(blockingQueue.poll());
        System.out.println(blockingQueue.poll());
        // 返回 null
        System.out.println(blockingQueue.poll());
    }
```

```java
    /**
     * 等待，阻塞（一直阻塞）
     */
    public static void test3() throws InterruptedException {
        ArrayBlockingQueue blockingQueue = new ArrayBlockingQueue<>(3);
        // 一直阻塞
        blockingQueue.put("a");
        blockingQueue.put("b");
        blockingQueue.put("c");

        // 队列没有位置了，一直等待
//        blockingQueue.put("d");
        System.out.println(blockingQueue.take());
        System.out.println(blockingQueue.take());
        System.out.println(blockingQueue.take());
        // 没有元素，一直等待
        System.out.println(blockingQueue.take());
    }

```

```java
    /**
     * 等待，阻塞（等待超时）
     */
    public static void test4() throws InterruptedException {
        ArrayBlockingQueue blockingQueue = new ArrayBlockingQueue<>(3);

        blockingQueue.offer("a");
        blockingQueue.offer("b");
        blockingQueue.offer("c");
        blockingQueue.offer("d", 2, TimeUnit.SECONDS);
        System.out.println("=====");
        System.out.println(blockingQueue.poll());
        System.out.println(blockingQueue.poll());
        System.out.println(blockingQueue.poll());
        System.out.println(blockingQueue.poll(2, TimeUnit.SECONDS));
    }
```

### 同步队列

没有容量，进去一个元素，必须等待取出来之后，才能在放元素

```java
package org.example.juc.bq;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.SynchronousQueue;
import java.util.concurrent.TimeUnit;

/**
 * <p>
 * Description:
 * </p>
 *
 * @author ZhengJunren
 * @version v1.0.0
 * @see org.example.juc.bq
 * @since 2021-01-22 23:02
 */
public class SynchronousQueueDemo {
    public static void main(String[] args) {
        // 同步队列
        BlockingQueue<String> synchronousQueue = new SynchronousQueue<>();
        new Thread(()->{
            try {
                System.out.println(Thread.currentThread().getName() +" put 1");
                synchronousQueue.put("1");
                System.out.println(Thread.currentThread().getName() +" put 2");
                synchronousQueue.put("2");
                System.out.println(Thread.currentThread().getName() +" put 3");
                synchronousQueue.put("3");
            } catch (Exception e) {
                e.printStackTrace();
            }
        }, "T1").start();
        new Thread(()->{
            try {
                TimeUnit.SECONDS.sleep(3);
                System.out.println(Thread.currentThread().getName()+ " = "+synchronousQueue.take());
                TimeUnit.SECONDS.sleep(3);
                System.out.println(Thread.currentThread().getName()+ " = "+synchronousQueue.take());
                TimeUnit.SECONDS.sleep(3);
                System.out.println(Thread.currentThread().getName()+ " = "+synchronousQueue.take());
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }, "T2").start();

    }
}

```

## 线程池

线程池的好处：

1. 降低资源的消耗
2. 提高响应的速度
3. 方便管理

线程复用、可以控制最大并发数、管理线程

### 三大方法

![image-20210122231855065](/interview/image-20210122231855065.png)

### 七大参数

```java
	public static ExecutorService newSingleThreadExecutor() {
        return new FinalizableDelegatedExecutorService
            (new ThreadPoolExecutor(1, 1,
                                    0L, TimeUnit.MILLISECONDS,
                                    new LinkedBlockingQueue<Runnable>()));
	}

    public static ExecutorService newFixedThreadPool(int nThreads) {
        return new ThreadPoolExecutor(nThreads, nThreads,
                                      0L, TimeUnit.MILLISECONDS,
                                      new LinkedBlockingQueue<Runnable>());
    }

    public static ExecutorService newCachedThreadPool() {
        return new ThreadPoolExecutor(0, Integer.MAX_VALUE,
                                      60L, TimeUnit.SECONDS,
                                      new SynchronousQueue<Runnable>());
    }
	/**
     * Creates a new {@code ThreadPoolExecutor} with the given initial
     * parameters.
     *
     * @param corePoolSize the number of threads to keep in the pool, even
     *        if they are idle, unless {@code allowCoreThreadTimeOut} is set
     *		  核心线程池大小
     * @param maximumPoolSize the maximum number of threads to allow in the
     *        pool
     *        最大核心线程池大小
     * @param keepAliveTime when the number of threads is greater than
     *        the core, this is the maximum time that excess idle threads
     *        will wait for new tasks before terminating.
     *        超时了没有人调用就会释放
     * @param unit the time unit for the {@code keepAliveTime} argument
     *		  超时单位
     * @param workQueue the queue to use for holding tasks before they are
     *        executed.  This queue will hold only the {@code Runnable}
     *        tasks submitted by the {@code execute} method.
     *        阻塞队列
     * @param threadFactory the factory to use when the executor
     *        creates a new thread
     *        创建线程，线程工厂
     * @param handler the handler to use when execution is blocked
     *        because the thread bounds and queue capacities are reached
     *		  拒绝策略
     * @throws IllegalArgumentException if one of the following holds:<br>
     *         {@code corePoolSize < 0}<br>
     *         {@code keepAliveTime < 0}<br>
     *         {@code maximumPoolSize <= 0}<br>
     *         {@code maximumPoolSize < corePoolSize}
     * @throws NullPointerException if {@code workQueue}
     *         or {@code threadFactory} or {@code handler} is null
     */
    public ThreadPoolExecutor(int corePoolSize,
                              int maximumPoolSize,
                              long keepAliveTime,
                              TimeUnit unit,
                              BlockingQueue<Runnable> workQueue,
                              ThreadFactory threadFactory,
                              RejectedExecutionHandler handler) {
        if (corePoolSize < 0 ||
            maximumPoolSize <= 0 ||
            maximumPoolSize < corePoolSize ||
            keepAliveTime < 0)
            throw new IllegalArgumentException();
        if (workQueue == null || threadFactory == null || handler == null)
            throw new NullPointerException();
        this.acc = System.getSecurityManager() == null ?
                null :
                AccessController.getContext();
        this.corePoolSize = corePoolSize;
        this.maximumPoolSize = maximumPoolSize;
        this.workQueue = workQueue;
        this.keepAliveTime = unit.toNanos(keepAliveTime);
        this.threadFactory = threadFactory;
        this.handler = handler;
    }
```

### 四种拒绝策略



![image-20210122234400245](/interview/image-20210122234400245.png)

new ThreadPoolExecutor.AbortPolicy() // 银行满了还有人进来，不处理，抛异常

new ThreadPoolExecutor.CallerRunsPolicy() // 哪来去哪里

new ThreadPoolExecutor.DiscardPolicy() // 队列满了，丢掉任务，不会抛出异常

new ThreadPoolExecutor.DiscardOldestPolicy() // 队列满了，尝试和最早的竞争，如果失败，抛弃最老的，自己进入，也不会抛出异常

### IO密集和CPU密集

手动创建线程池

```java
public class Demo01 {
    public static void main(String[] args) {
        // 最大线程如何定义
        // 1. CPU 密集型 几核就是几
        // 2. IO 密集型 判断程序中十分消耗IO的线程，大于该线程数
        //  程序 15个大型任务 IO 十分占用资源，
        // 获取 cpu 的核数
        System.out.println(Runtime.getRuntime().availableProcessors());
        ExecutorService threadPool = new ThreadPoolExecutor(2, // 一开始两个窗口
                5, // 最多 5 个窗口
                3,  // 超过三秒钟
                TimeUnit.SECONDS,
                new LinkedBlockingQueue<>(3),
                Executors.defaultThreadFactory(),
                new ThreadPoolExecutor.DiscardOldestPolicy()
                );
        // 单一线程
//        ExecutorService threadPool = Executors.newSingleThreadExecutor();
        // 创建一个固定的线程池的大小
//       ExecutorService threadPool = Executors.newFixedThreadPool(5);
        // 可伸缩
//       ExecutorService threadPool = Executors.newCachedThreadPool();
        try {
            // 最大承载：队列+最大
            for (int i = 0; i < 9; i++) {
                threadPool.execute(() -> {
                    System.out.println(Thread.currentThread().getName() + " ok");
                });
            }
        } finally {
            threadPool.shutdown();
        }

    }
}
```

## ForkJoin

特点：将大任务，分成小任务2，工作窃取



## 异步回调





## JMM

volatile 是 java 虚拟机提供**轻量级的同步机制**

1. 保证可见性
2. 不保证原子性
3. 禁止指令重排

JMM java 内存模型

1. 线程解锁前：必须把共享变量立刻刷回主存

2. 线程加锁前：必须读取主存中的最新值到工作内存

3. 加锁和解锁必须是同一把锁

工作内存、主内存

![image-20210123114523066](/interview/image-20210123114523066.png)

![image-20210123114609101](/interview/image-20210123114609101.png)

内存交互操作有8种，虚拟机必须保证每个操作都是原子的，不可再分的（对于double 和 long 类型的变量来说，load、store、read 和 write 操作在某些平台允许例外）

+ lock：作用于主内存中的变量，把一个变量表标识为线程独占状态
+ unlock：作用于主内存中的变量，它把一个处于锁定状态的变量释放出来，释放后的变量才可以被其他线程锁定
+ read：作用于主内存中的变量，它把一个变量的值从主内存传输到线程的工作内存中，以便随后的 load 动作使用
+ load：作用于工作内存中的变量，它把 read 操作从主内存中的变量放入工作内存中
+ use：作用于工作内存中的变量，它把工作内存中的变量传输给执行引擎，每当虚拟机遇到一个需要使用到变量的值，就会使用这个指令
+ assign：作用于工作内存中的变量，它把一个从执行引擎接受的值放入到工作内存的变量副本中
+ store：作用于主内存中的变量，它把一个工作内存中一个变量的值传送到主内存中，以便后续的 write 使用
+ write：作用于主内存中的变量，它把 store 操作从工作内存中得到的变量的值放入到主内存的变量中

规则：

+ 不允许 read 和 load、store 和 write 操作之一单独出现，即使用了 read 必须 load、使用了 store 必须 write
+ 不允许线程丢弃它最近的 assign 操作，即工作内存变量的数据改变之后，必须告知主内存
+ 不允许一个线程将将没有 assign 的数据从工作内存同步回主内存
+ 一个新的变量必须在主内存中诞生，不允许工作内存直接使用一个未被初始化的变量，就是对变量实施use、store 操作前，必须经过 load 和 assign 操作
+ 一个变量同一时间只有一个线程对其进行 lock ，多次 lock后，必须执行相同次数的 unlock 才能解锁
+ 如果对一个变量进行 lock 操作，会清空工作内存中此变量的值，在执行引擎使用这个变量前，必须重新 load 或 assign 
+ 如果一个变量没有被 lock，就不能对其进行 unlock 操作，也不能 unlock 一个被其他线程锁住的变量
+ 对一个变量进行 unlock 操作之前，必须把此变量同步会主内存

线程不知道变量值被改变了

## volatile

1. 保证可见性

```java
package org.example.juc.tvolatile;

import java.util.concurrent.TimeUnit;

/**
 * <p>
 * Description:
 * </p>
 *
 * @author ZhengJunren
 * @version v1.0.0
 * @see org.example.juc.tvolatile
 * @since 2021-01-23 14:28
 */
@SuppressWarnings("all")
public class JMMDemo {
    // 不加 volatile 该程序会死循环
    private volatile static int num = 0;

    public static void main(String[] args) {

        // 线程1 对主内存的变化是不知道的
        new Thread(()->{
            while (num == 0) {

            }
        }).start();
        try {
            TimeUnit.SECONDS.sleep(1);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        num = 1;
        System.out.println(num);
    }
}
```

2. 原子性

线程 A 在执行任务的时候，不能被打扰，要么全部成功，要么全部失败

![image-20210123144335878](/interview/image-20210123144335878.png)



原子类

```java
package org.example.juc.tvolatile;

import java.util.concurrent.atomic.AtomicInteger;

/**
 * <p>
 * Description:
 * </p>
 * 不保证原子性
 * @author ZhengJunren
 * @version v1.0.0
 * @see org.example.juc.tvolatile
 * @since 2021-01-23 14:36
 */
@SuppressWarnings("all")
public class VDemo02 {

//    private static int number = 0;
    private volatile static AtomicInteger number = new AtomicInteger();
    public static void add() {
        number.getAndIncrement();
    }

    public static void main(String[] args) {
        for (int i = 0; i < 20; i++) {
            new Thread(()-> {
                for (int j = 0; j < 1000; j++) {
                    add();
                }
            }).start();
        }
        while (Thread.activeCount() > 2) {
            Thread.yield();
        }
        System.out.println(Thread.currentThread().getName() + " " +number);
    }
}

```

这些类的底层都直接和操作系统资源相关，在内存中修改值，Unsafe 类

3. 禁止指令重排

源代码  -> 编译器优化的重排 ->指令并行也可能会重排 -> 执行

处理器在进行指令重排的时候，考虑数据间的依赖性

## CAS 
```java
package org.example.juc.cas;

import java.util.concurrent.atomic.AtomicInteger;

/**
 * <p>
 * Description:
 * </p>
 * 比较并交换
 * @author ZhengJunren
 * @version v1.0.0
 * @see org.example.juc.cas
 * @since 2021-01-23 15:31
 */
public class CASDemo {
    public static void main(String[] args) {
        AtomicInteger atomicInteger = new AtomicInteger(5);
        System.out.println(atomicInteger.compareAndSet(5, 2019));
        System.out.println(atomicInteger.get());

        System.out.println(atomicInteger.compareAndSet(5, 1024));
        System.out.println(atomicInteger.get());
    }
}
```

![image-20210123155619733](/interview/image-20210123155619733.png)

![image-20210123160402103](/interview/image-20210123160402103.png)

**Unsafe 是 CAS 的核心类**，由于 Java 方法无法直接访问底层系统，需要通过本地方法来访问，Unsafe 相当于一个后门，基于该类可以直接操作特定内存的数据。Unsafe 类处于 sun.misc 包中，其内部方法操作可以像 C 的指针一样操作内存。

变量 valueOffset，表示该变量在内存中的偏移地址，

变量 value 用 volatile 修饰，保证了多线程之间的内存可见性

CAS 的全称为 CompareAndSwap，它是一条 CPU 并发原语，判断内存某个位置的值是否为预期值，如果是则更改为新的值，这个过程是原子的

![image-20210123162326311](/interview/image-20210123162326311.png)

var1：AtomicInteger 对象本身

var2：该对象值的引用地址

var4：需要变动的数量

var5: 是用过 var1、var2 找出的主内存中真实的值

用该对象当前的值域 var5 进行比较：

如果相同，更新 var5 + var4 并且返回 true

如果不同，继续取值比较，直至更新完成

### 缺点

如果 CAS 失败，会一直进行尝试，如果长时间不成功，可能会给 CPU 带来很大的开销

只能保证一个共享变量的原子性

ABA 问题

### ABA问题

狸猫换太子

CAS 算法实现一个重要前提需要取出内存中某时刻的数据并在当下时刻比较并替换，那么在这个时间差内会导致数据的变化

线程1从内存位置 V 中取出 A，这个时候另一个线程2也从内存中取出 A ，并且线程2进行了一些操作将值变为了 B，然后线程2又将 V 位置的数据变为 A，这时候线程1进行 CAS 操作发现内存中仍是 A，然后线程1操作成功

尽管线程1的 CAS 操作成功，但是不代表这个过程是没有问题的

### 原子引用

```java
package org.example.juc.cas;

import java.util.concurrent.atomic.AtomicReference;

/**
 * <p>
 * Description:
 * </p>
 *
 * @author ZhengJunren
 * @version v1.0.0
 * @see org.example.juc.cas
 * @since 2021-01-23 17:00
 */
public class AtomicReferenceDemo {

    public static void main(String[] args) {
        User z3 = new User("z3",22);
        User li4 = new User("li4", 25);

        AtomicReference<User> atomicReference = new AtomicReference<>();
        atomicReference.set(z3);
        System.out.println(atomicReference.compareAndSet(z3, li4) + "\t" + atomicReference.get().toString());
        System.out.println(atomicReference.compareAndSet(z3, li4) + "\t" + atomicReference.get().toString());
    }

}

class User {
    String userName;
    int age;

    public User(String userName, int age) {
        this.userName = userName;
        this.age = age;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User{" +
                "userName='" + userName + '\'' +
                ", age=" + age +
                '}';
    }
}
```



```java
package org.example.juc.cas;

import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;
import java.util.concurrent.atomic.AtomicStampedReference;

/**
 * <p>
 * Description:
 * </p>
 *
 * @author ZhengJunren
 * @version v1.0.0
 * @see org.example.juc.cas
 * @since 2021-01-24 10:43
 */
@SuppressWarnings("all")
public class ABADemo {
    static AtomicReference<Integer> atomicReference = new AtomicReference<>(100);

    static AtomicStampedReference<Integer> atomicStampedReference = new AtomicStampedReference<>(100, 1);

    public static void main(String[] args) {
        System.out.println("========ABA问题产生===========");
        new Thread(() -> {
            atomicReference.compareAndSet(100, 101);
            atomicReference.compareAndSet(101, 100);
        }, "t1").start();
        new Thread(() -> {
            try {
                TimeUnit.SECONDS.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(atomicReference.compareAndSet(100, 2019) + "\t" + atomicReference.get());
        }, "t2").start();
        try {
            TimeUnit.SECONDS.sleep(2);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("========ABA问题解决===========");
        new Thread(() -> {
            int stamp = atomicStampedReference.getStamp();
            System.out.println(Thread.currentThread().getName() + "\t第1次版本号：" + stamp);
            try {
                TimeUnit.SECONDS.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            atomicStampedReference.compareAndSet(100, 101, atomicStampedReference.getStamp(), atomicStampedReference.getStamp() + 1);
            System.out.println(Thread.currentThread().getName() + "\t第2次版本号：" + atomicStampedReference.getStamp());

            atomicStampedReference.compareAndSet(101, 100, atomicStampedReference.getStamp(), atomicStampedReference.getStamp() + 1);
            System.out.println(Thread.currentThread().getName() + "\t第3次版本号：" + atomicStampedReference.getStamp());
        }, "t3").start();
        new Thread(() -> {
            int stamp = atomicStampedReference.getStamp();
            System.out.println(Thread.currentThread().getName() + "\t第1次版本号：" + stamp);
            try {
                TimeUnit.SECONDS.sleep(3);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            boolean result = atomicStampedReference.compareAndSet(100, 2019, stamp, stamp + 1);

            System.out.println(Thread.currentThread().getName() + "\t修改是否成功：" + result + "版本号为：" + atomicStampedReference.getStamp());
            System.out.println(Thread.currentThread().getName() + "\t当前最新结果：" + result);
        }, "t4").start();
    }
}
```
