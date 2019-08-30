# java.lang.StackOverflowError

## 介绍

堆栈溢出错误
在程序栈空间耗尽时抛出，通常是深度递归导致
本来是出现了这这个类型的错误，然后在网上寻找答案，忘了记录，下面的例子是转发的。

:::tip 备注
从[这里](https://blog.csdn.net/Mr_faded/article/details/78275091)转载
:::

## 例子

![bug1](/bugs/bug1.png)

![bug2](/bugs/bug2.png)

![bug3](/bugs/bug3.png)

## 总结

这种问题是由于自己调用自己的方法，然后一直递归。
我出现的问题就是，在```Service```层：
```java {9}
public class UmsAdminServiceImpl implements UmsAdminService {
    
    @Resource
    private UmsAdminService umsAdminService;
    
    @Override
    public int insert(UmsAdmin umsAdmin) {
        //...
        return umsAdminService.insert(umsAdmin);
    }

    //...
}
```
然后在别处调用了这个方法，然后就报内存溢出的错误！！！
