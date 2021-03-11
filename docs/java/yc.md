#  异常

## Java 异常类层次结构图

![简单的网络和由网络构成的互连网](/java/Java异常类层次结构图.png)
![简单的网络和由网络构成的互连网](/java/Java异常类层次结构图2.png)

在 Java 中，所有的异常都有一个共同的父类 `java.lang` 包中的 `Throwable` 类。`Throwable` 类有两个重要的子类 `Exception`（异常）和 `Error`（错误）。`Exception` 能被程序本身处理(try-catch)， `Error` 是无法处理的(只能尽量避免)。

`Exception` 和 `Error` 二者都是 `Java` 异常处理的重要子类，各自都包含大量子类。

`Exception` :程序本身可以处理的异常，可以通过 `catch` 来进行捕获。`Exception` 又可以分为 受检查异常(必须处理) 和 不受检查异常(可以不处理)。
`Error` ：`Error` 属于程序无法处理的错误 ，我们没办法通过 `catch` 来进行捕获 。例如，`Java` 虚拟机运行错误（Virtual MachineError）、虚拟机内存不够错误(`OutOfMemoryError`)、类定义错误（`NoClassDefFoundError`）等 。这些异常发生时，Java 虚拟机（JVM）一般会选择线程终止。

## Throwable 类常用方法
+ `public string getMessage()`:返回异常发生时的简要描述
+ `public string toString()`:返回异常发生时的详细信息
+ `public string getLocalizedMessage()`:返回异常对象的本地化信息。使用 `Throwable` 的子类覆盖这个方法，可以生成本地化信息。如果子类没有覆盖该方法，则该方法返回的信息与 `getMessage()` 返回的结果相同
+ `public void printStackTrace()`:在控制台上打印 Throwable 对象封装的异常信息
