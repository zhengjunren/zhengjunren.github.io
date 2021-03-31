(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{409:function(e,v,_){"use strict";_.r(v);var o=_(5),t=Object(o.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"sleep-、join-、yield-有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sleep-、join-、yield-有什么区别"}},[e._v("#")]),e._v(" sleep()、join()、yield()有什么区别")]),e._v(" "),_("h2",{attrs:{id:"sleep"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sleep"}},[e._v("#")]),e._v(" sleep()")]),e._v(" "),_("p",[_("code",[e._v("sleep()")]),e._v(" 方法需要指定等待的时间，它可以让当前正在执行的线程在指定的时间内暂停执行，进入阻塞状态，该方法既可以让其他同优先级或者高优先级的线程得到执行的机会，也可以让低优先级的线程得到执行机会。但是 "),_("code",[e._v("sleep()")]),e._v(" 方法不会释放“锁标志”，也就是说如果有"),_("code",[e._v("synchronized")]),e._v("同步块，其他线程仍然不能访问共享数据。")]),e._v(" "),_("h2",{attrs:{id:"wait"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#wait"}},[e._v("#")]),e._v(" wait()")]),e._v(" "),_("p",[_("code",[e._v("wait()")]),e._v(" 方法需要和"),_("code",[e._v("notify()")]),e._v("及"),_("code",[e._v("notifyAll()")]),e._v("两个方法一起介绍，这三个方法用于协调多个线程对共享数据的存取，所以必须在 synchronized 语句块内使用，也就是说，调用 "),_("code",[e._v("wait()")]),e._v("，"),_("code",[e._v("notify()")]),e._v(" 和"),_("code",[e._v("notifyAll()")]),e._v("的任务在调用这些方法前必须拥有对象的锁。注意，它们都是 Object 类的方法，而不是 Thread 类的方法。")]),e._v(" "),_("p",[_("code",[e._v("wait()")]),e._v(" 方法与 "),_("code",[e._v("sleep()")]),e._v(" 方法的不同之处在于，"),_("code",[e._v("wait()")]),e._v(" 方法会释放对象的“锁标志”。当调用某一对象的 "),_("code",[e._v("wait()")]),e._v(" 方法后，会使当前线程暂停执行，并将当前线程放入对象等待池中，直到调用了"),_("code",[e._v("notify()")]),e._v("方法后，将从对象等待池中移出任意一个线程并放入锁标志等待池中，只有锁标志等待池中的线程可以获取锁标志，它们随时准备争夺锁的拥有权。当调用了某个对象的"),_("code",[e._v("notifyAll()")]),e._v("方法，会将对象等待池中的所有线程都移动到该对象的锁标志等待池。")]),e._v(" "),_("p",[e._v("除了使用"),_("code",[e._v("notify()")]),e._v("和"),_("code",[e._v("notifyAll()")]),e._v("方法，还可以使用带毫秒参数的"),_("code",[e._v("wait(long timeout)")]),e._v("方法，效果是在延迟 timeout 毫秒后，被暂停的线程将被恢复到锁标志等待池。")]),e._v(" "),_("p",[e._v("此外，"),_("code",[e._v("wait()")]),e._v("，"),_("code",[e._v("notify()")]),e._v("及"),_("code",[e._v("notifyAll()")]),e._v("只能在"),_("code",[e._v("synchronized")]),e._v("语句中使用，但是如果使用的是 ReenTrantLock 实现同步，该如何达到这三个方法的效果呢？解决方法是使用"),_("code",[e._v("ReenTrantLock.newCondition()")]),e._v("获取一个 Condition 类对象，然后 Condition的 "),_("code",[e._v("await()")]),e._v("，"),_("code",[e._v("signal()")]),e._v("以及"),_("code",[e._v("signalAll()")]),e._v("分别对应上面的三个方法。")]),e._v(" "),_("h2",{attrs:{id:"yield"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#yield"}},[e._v("#")]),e._v(" yield()")]),e._v(" "),_("p",[_("code",[e._v("yield()")]),e._v(" 方法和 "),_("code",[e._v("sleep()")]),e._v(" 方法类似，也不会释放“锁标志”，区别在于，它没有参数，即 "),_("code",[e._v("yield()")]),e._v(" 方法只是使当前线程重新回到可执行状态，所以执行 "),_("code",[e._v("yield()")]),e._v(" 的线程有可能在进入到可执行状态后马上又被执行，另外 "),_("code",[e._v("yield()")]),e._v(" 方法只能使同优先级或者高优先级的线程得到执行机会，这也和 "),_("code",[e._v("sleep()")]),e._v(" 方法不同。")]),e._v(" "),_("h2",{attrs:{id:"join"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#join"}},[e._v("#")]),e._v(" join()")]),e._v(" "),_("p",[_("code",[e._v("join()")]),e._v(" 方法会使当前线程等待调用 "),_("code",[e._v("join()")]),e._v(" 方法的线程结束后才能继续执行")])])}),[],!1,null,null,null);v.default=t.exports}}]);