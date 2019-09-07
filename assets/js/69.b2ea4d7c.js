(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{304:function(t,a,e){"use strict";e.r(a);var i=e(24),o=Object(i.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"wait-、notify-、notifyall-方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wait-、notify-、notifyall-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" wait()、notify()、notifyAll()方法")]),t._v(" "),e("p",[t._v("在Java的"),e("code",[t._v("Object")]),t._v("类中有三个"),e("code",[t._v("final")]),t._v("的方法允许线程之间进行资源对象锁的通信，他们分别是： "),e("code",[t._v("wait()")]),t._v(", "),e("code",[t._v("notify()")]),t._v(" and "),e("code",[t._v("notifyAll()")]),t._v("。")]),t._v(" "),e("p",[t._v("调用这些方法的当前线程必须拥有此对象监视器，否则将会报"),e("code",[t._v("java.lang.IllegalMonitorStateException exception")]),t._v("异常。")]),t._v(" "),e("h2",{attrs:{id:"wait"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wait","aria-hidden":"true"}},[t._v("#")]),t._v(" wait()")]),t._v(" "),e("p",[e("code",[t._v("Object")]),t._v("的"),e("code",[t._v("wait")]),t._v("方法有三个重载方法，其中一个方法"),e("code",[t._v("wait()")]),t._v("是无限期(一直)等待，直到其它线程调用notify或notifyAll方法唤醒当前的线程；另外两个方法"),e("code",[t._v("wait(long timeout)")]),t._v(" 和"),e("code",[t._v("wait(long timeout, int nanos)")]),t._v("允许传入 当前线程在被唤醒之前需要等待的时间，"),e("code",[t._v("timeout")]),t._v("为毫秒数，"),e("code",[t._v("nanos")]),t._v("为纳秒数。\n"),e("code",[t._v("wait()")]),t._v("方法会释放对象的“锁标志”。当调用某一对象的"),e("code",[t._v("wait()")]),t._v("方法后，会使当前线程暂停执行，并将当前线程放入对象等待池中，直到调用了"),e("code",[t._v("notify()")]),t._v("方法后，将从对象等待池中移出任意一个线程并放入锁标志等待池中，只有锁标志等待池中的线程可以获取锁标志，它们随时准备争夺锁的拥有权。")]),t._v(" "),e("h2",{attrs:{id:"notify"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notify","aria-hidden":"true"}},[t._v("#")]),t._v(" notify()")]),t._v(" "),e("p",[e("code",[t._v("notify")]),t._v("方法只唤醒一个等待（对象的）线程并使该线程开始执行。所以如果有多个线程等待一个对象，这个方法只会唤醒其中一个线程，选择哪个线程取决于操作系统对多线程管理的实现。")]),t._v(" "),e("h2",{attrs:{id:"notifyall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notifyall","aria-hidden":"true"}},[t._v("#")]),t._v(" notifyAll()")]),t._v(" "),e("p",[e("code",[t._v("notifyAll")]),t._v("会唤醒所有等待(对象的)线程，尽管哪一个线程将会第一个处理取决于操作系统的实现。")])])},[],!1,null,null,null);a.default=o.exports}}]);