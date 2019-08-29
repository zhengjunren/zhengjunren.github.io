# 线程通信

:::tip 备注
从这篇[博客](https://github.com/yangchong211/YCBlogs)转载
:::

## 线程间通信的两种方式
### wait()/notify()
- Object类中相关的方法有```notify```方法和```wait```方法。因为```wait```和```notify```方法定义在```Object```类中，因此会被所有的类所继承。这些方法都是**```final```**的，即它们都是不能被重写的，不能通过子类覆写去改变它们的行为。
    - **```wait()```方法：** 让当前线程进入等待，并释放锁。
    - **```wait(long)```方法：** 让当前线程进入等待，并释放锁，不过等待时间为```long```，超过这个时间没有对当前线程进行唤醒，将**自动唤醒**。
    - **```notify()```方法：** 让当前线程通知那些处于等待状态的线程，当前线程执行完毕后释放锁，并从其他线程中唤醒其中一个继续执行。
    - **```notifyAll()```方法：** 让当前线程通知那些处于等待状态的线程，当前线程执行完毕后释放锁，将唤醒所有等待状态的线程。



### ```wait()```方法使用注意事项
- 当前的线程必须拥有当前对象的```monitor```，也即```lock```，就是锁，才能调用```wait()```方法，否则将抛出异常```java.lang.IllegalMonitorStateException```。
- 线程调用```wait()```方法，释放它对锁的拥有权，然后等待另外的线程来通知它（通知的方式是```notify()```或者```notifyAll()```方法），这样它才能重新获得锁的拥有权和恢复执行。
- 要确保调用```wait()```方法的时候拥有锁，即，```wait()```方法的调用必须放在```synchronized```方法或```synchronized```块中。
- **```wait()```与```sleep()```比较**
    - 当线程调用了```wait()```方法时，它会释放掉对象的锁。
    - ```Thread.sleep()```，它会导致线程睡眠指定的毫秒数，但线程在睡眠的过程中是不会释放掉对象的锁的。



### ```notify()```方法使用注意事项
- 如果多个线程在等待，它们中的一个将会选择被唤醒。这种选择是随意的，和具体实现有关。（线程等待一个对象的锁是由于调用了```wait()```方法）。
- 被唤醒的线程是不能被执行的，需要等到当前线程放弃这个对象的锁，当前线程会在方法执行完毕后释放锁。



### ```wait()```/```notify()```协作
- ```wait()```/```notify()```协作的两个注意事项


### 通知过早
- 如果通知过早，则会打乱程序的运行逻辑。
    ```java
    public class MyRun {
        private String lock = new String("");
        public Runnable runnableA = new Runnable() {
    
            @Override
            public void run() {
                try {
                    synchronized (lock) {
                        System.out.println("begin wait");
                        lock.wait();
                        System.out.println("end wait");
                    }
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
    
            }
        };
        public Runnable runnableB = new Runnable() {
            @Override
            public void run() {
                synchronized (lock) {
                    System.out.println("begin notify");
                    lock.notify();
                    System.out.println("end notify");
                }
            }
        };
    }
    ```
    - 两个方法，分别执行```wait()```/```notify()```方法。
    ```java
    public static void main(String[] args) throws InterruptedException {
        MyRun run = new MyRun();
        Thread bThread = new Thread(run.runnableB);
        bThread.start();
        Thread.sleep(100);
        Thread aThread = new Thread(run.runnableA);
        aThread.start();
    }
    ```
    - 如果```notify()```方法先执行，将导致```wait()```方法释放锁进入等待状态后，永远无法被唤醒，影响程序逻辑。应避免这种情况。



### 等待wait的条件发生变化
- 在使用wait/notify模式时，还需要注意另外一种情况，也就是wait等待条件发生了变化，也容易造成程序逻辑的混乱。
    - **Add类，执行加法操作，然后通知Subtract类**
    ```java
    public class Add {
        private String lock;
    
        public Add(String lock) {
            super();
            this.lock = lock;
        }
        public void add(){
            synchronized (lock) {
                ValueObject.list.add("anyThing");
                lock.notifyAll();
            }
        }
    }
    ```
    - **Subtract类，执行减法操作，执行完后进入等待状态，等待Add类唤醒notify**
    ```java
    public class Subtract {
        private String lock;
    
        public Subtract(String lock) {
            super();
            this.lock = lock;
        }
        public void subtract(){
            try {
                synchronized (lock) {
                    if(ValueObject.list.size()==0){
                        System.out.println("wait begin ThreadName="+Thread.currentThread().getName());
                        lock.wait();
                        System.out.println("wait end ThreadName="+Thread.currentThread().getName());
                    }
                    ValueObject.list.remove(0);
                    System.out.println("list size ="+ValueObject.list.size());
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
    ```
    - **线程ThreadAdd**
    ```java
    public class ThreadAdd extends Thread{
        private Add pAdd;
    
        public ThreadAdd(Add pAdd) {
            super();
            this.pAdd = pAdd;
        }
        @Override
        public void run() {
            pAdd.add();
        }
    
    }
    ```
    - **线程ThreadSubtract**
    ```java
    public class ThreadSubtract extends Thread{
        private Subtract rSubtract;
    
        public ThreadSubtract(Subtract rSubtract) {
            super();
            this.rSubtract = rSubtract;
        }
        @Override
        public void run() {
            rSubtract.subtract();
        }
    }
    ```
- **先开启两个ThreadSubtract线程，由于list中没有元素，进入等待状态。再开启一个ThreadAdd线程，向list中增加一个元素，然后唤醒两个ThreadSubtract线程。**
    ```java
    public static void main(String[] args) throws InterruptedException {
        String lock = new String("");
        Add add = new Add(lock);
        Subtract subtract = new Subtract(lock);
        ThreadSubtract subtractThread1 = new ThreadSubtract(subtract);
        subtractThread1.setName("subtractThread1");
        subtractThread1.start();
        ThreadSubtract subtractThread2 = new ThreadSubtract(subtract);
        subtractThread2.setName("subtractThread2");
        subtractThread2.start();
        Thread.sleep(1000);
        ThreadAdd addThread = new ThreadAdd(add);
        addThread.setName("addThread");
        addThread.start();
    }
    ```
    - 输出结果

    > wait begin ThreadName=subtractThread1  
    > wait begin ThreadName=subtractThread2  
    > wait end ThreadName=subtractThread2  
    > Exception in thread "subtractThread1" list size =0  
    > wait end ThreadName=subtractThread1  
    > java.lang.IndexOutOfBoundsException: Index: 0, Size: 0  
    >     at java.util.ArrayList.rangeCheck\(Unknown Source\)  
    >     at java.util.ArrayList.remove\(Unknown Source\)  
    >     at com.lvr.communication.Subtract.subtract\(Subtract.java:18\)  
    >     at com.lvr.communication.ThreadSubtract.run\(ThreadSubtract.java:12\)

- **当第二个ThreadSubtract线程执行减法操作时，抛出下标越界异常。**
    - **原因分析：一开始两个ThreadSubtract线程等待状态，当ThreadAdd线程添加一个元素并唤醒所有线程后，第一个ThreadSubtract线程接着原来的执行到的地点开始继续执行，删除一个元素并输出集合大小。同样，第二个ThreadSubtract线程也如此，可是此时集合中已经没有元素了，所以抛出异常。**
    - **解决办法：从等待状态被唤醒后，重新判断条件，看看是否扔需要进入等待状态，不需要进入再进行下一步操作。即把if\(\)判断，改成while\(\)。**
    ```java
    public void subtract(){
        try {
            synchronized (lock) {
                while(ValueObject.list.size()==0){
                    System.out.println("wait begin ThreadName="+Thread.currentThread().getName());
                    lock.wait();
                    System.out.println("wait end ThreadName="+Thread.currentThread().getName());
                }
                ValueObject.list.remove(0);
                System.out.println("list size ="+ValueObject.list.size());
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    ```
    - 这是线程间协作中经常出现的一种情况，需要避免。




## Condition实现等待/通知
### Condition简单介绍
- 关键字```synchronized```与```wait()```和```notify()```/```notifyAll()```方法相结合可以实现等待/通知模式，类似```ReentrantLock```也可以实现同样的功能，但需要借助于```Condition```对象。
- 关于Condition实现等待/通知就不详细介绍了，可以完全类比```wait()```/```notify()```，基本使用和注意事项完全一致。  
- 就只简单介绍下类比情况：
    - **condition.a```wait()```————&gt;lock.```wait()```**
    - **condition.await\(long time, TimeUnit unit\)————&gt;lock.wait\(long timeout\)**
    - **condition.signal\(\)————&gt;lock.```notify()```**
    - **condition.signaAll\(\)————&gt;lock.notifyAll\(\)**


#### 2.2 Condition实现方式
- **特殊之处：synchronized相当于整个ReentrantLock对象只有一个单一的Condition对象情况。而一个ReentrantLock却可以拥有多个Condition对象，来实现通知部分线程。**
- **具体实现方式：**  
    - 假设有两个Condition对象：ConditionA和ConditionB。那么由ConditionA.a```wait()```方法进入等待状态的线程，由ConditionA.signalAll\(\)通知唤醒；由ConditionB.a```wait()```方法进入等待状态的线程，由ConditionB.signalAll\(\)通知唤醒。篇幅有限，代码示例就不写了。
