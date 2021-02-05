---
title: redis
date: 2021-01-27
---

## 语句

1.  切换数据库：`select index`

```bash
REDIS:0>select 3 # 切换数据库
"OK"
```

2. 查看数据库大小：`DBSIZE`

```bash
REDIS:3>DBSIZE
"0"
```

3. 查看数据库所有的 key：`key *`

```bash
REDIS:3>keys *
 1)  "name"
```

4. 清除当前数据库：`flushdb`，清除全部：`flushall`

```bash
REDIS:3>flushdb
"OK"
```

5. 判断 key 是否存在：`exists key`
6. 移动 key 至其他数据库 ：`move key 1`

```bash
REDIS:0>MOVE name 1
"1"
```

7. 设置 key 的存活时间：`EXPIRE KEY 10`

```bash
REDIS:0>SET name ZHENGJUNREN
"OK"
REDIS:0>EXPIRE name 10
"1"
REDIS:0>TTL name
"-2"
```

8. 查询 key 的存活时间

```bash
REDIS:0>TTL name
"-2"
```

9. 删除 key：`del key`
10.  查看 key 数据类型：`TYPE KEY`

```bash
REDIS:0>TYPE name
"string"
```



> Redis` 是单线程的

`Redis`是基于内存操作的，CPU 不是`Redis`的性能瓶颈，而是机器内存和网络带宽，既然可以使用单线程实现，就使用了单线程。为什么单线程内存还这么快？

redis 将所有的数据放在内存中的，所以使用单线程去操作效率最高，多线程会产生上下文切换（耗时的操作），对于内存系统来说，如果没有上下文切换，效率就是最高的，多次读写都是在一个 CPU 上的。

误区 1：高性能的服务器一定是多线程的

误区 2：多线程一定比单线程效率高

