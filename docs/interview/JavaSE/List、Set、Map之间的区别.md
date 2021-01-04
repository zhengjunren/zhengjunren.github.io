---
title: List、Set、Map 之间的区别
date: 2021-01-04
---

## List(列表)
`List`的元素以线性方式存储，可以存放重复对象，List主要有以下两个实现类：

`ArrayList` : 长度可变的数组，可以对元素进行随机的访问，向`ArrayList`中插入与删除元素的速度慢。 JDK8 中`ArrayList`扩容的实现是通过`grow()`方法里使用语句`newCapacity = oldCapacity + (oldCapacity >> 1)`（即1.5倍扩容）计算容量，然后调用`Arrays.copyof()`方法进行对原数组进行复制。
`LinkedList`: 采用链表数据结构，插入和删除速度快，但访问速度慢。

## Set(集合)
`Set`中的对象不按特定(HashCode)的方式排序，并且没有重复对象，`Set`主要有以下两个实现类：

`HashSet`： `HashSet`按照哈希算法来存取集合中的对象，存取速度比较快。当`HashSet`中的元素个数超过数组大小*loadFactor（默认值为0.75）时，就会进行近似两倍扩容`(newCapacity = (oldCapacity << 1) + 1)`。
`TreeSet` ：`TreeSet`实现了`SortedSet`接口，能够对集合中的对象进行排序。


## Map(映射)
`Map`是一种把键对象和值对象映射的集合，它的每一个元素都包含一个键对象和值对象。 Map主要有以下两个实现类：

`HashMap`：`HashMap`基于散列表实现，其插入和查询`<K,V>`的开销是固定的，可以通过构造器设置容量和负载因子来调整容器的性能。
`LinkedHashMap`：类似于HashMap，但是迭代遍历它时，取得`<K,V>`的顺序是其插入次序，或者是最近最少使用(LRU)的次序。
`TreeMap`：`TreeMap`基于红黑树实现。查看`<K,V>`时，它们会被排序。`TreeMap`是唯一的带有`subMap()`方法的`Map`，`subMap()`可以返回一个子树。



## 原文链接
<https://blog.csdn.net/u012102104/java/article/details/79235938>
