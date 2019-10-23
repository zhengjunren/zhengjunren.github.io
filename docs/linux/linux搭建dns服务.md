# Linux 配置 DNS

这里我们使用`Bind9`

## 卸载和安装

+ 卸载`Bind9`
```sh
sudo apt-get purge bind9
```

+ 安装`Bind9`

```sh
sudo apt-get -y install bind9
```

## 配置 DNS

+ 创建正向`Zone`文件
正向Zone文件是用来做正向解析的，即将域名解析为IP地址：

首先，修改`/etc/bind/named.conf.local`文件，在里面添加以下信息:

```sh
sudo cp /etc/bind/named.conf.local /etc/bind/named.conf.local-bak
sudo vim /etc/bind/named.conf.local
```

```sh
zone "zjr.com" {
    type master;
    file "db.zjr.com";
};
```
该配置指定`Bind`作为`zjr.com`域的主域名服务器，`db.zjr.com`文件包含所有`*.zjr.com`形式的域名转换数据。文件`db.zjr.com`没有指定路径，所以默认是`/var/cache/bind/`。
然后，我们复制一个现有的文件作为`Zone`文件的模板：

```sh
sudo cp /etc/bind/db.local /var/cache/bind/db.zjr.com
```
接下来修改该Zone文件：

```sh
sudo vim /var/cache/bind/db.zjr.com
```
改为如下内容（其中的`192.168.223.128`是我的局域网IP地址，通过命令`ifconfig`可查看主机的局域网IP地址），**将下图中的`192.168.182.134`改为`192.168.223.128`**

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191021163753146.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNDk1MzQw,size_16,color_FFFFFF,t_70)

+ 创建反向`Zone`文件,反向`Zone`文件是用来做反向解析的，即把IP地址解析为域名。

首先，修改`/etc/bind/named.conf.local`文件

```sh
sudo vim /etc/bind/named.conf.local
```

添加下列信息：

```sh
zone "223.168.192.in-addr.arpa" {
    type master;
    file "db.192.168.223";
};
```
然后，我们复制一个现有的文件作为`Zone`文件的模板（注意**文件名是局域网IP地址前三个字节的倒写**，我的局域网IP是`192.168.223.128`);

```sh
sudo cp /etc/bind/db.127 /var/cache/bind/db.223.168.192
```
修改该`Zone`文件

```sh
sudo vim /var/cache/bind/db.223.168.192
```
改成如下内容:

```sh
;
; BIND reverse data file for local loopback interface
;
$TTL   604800
@   IN  SOA localhost. root.localhost. (
                  1     ; Serial
             604800     ; Refresh
              86400     ; Retry
            2419200     ; Expire
             604800 )   ; Negative Cache TTL
;
@      IN  NS  ns.
128    IN  PTR www.zjr.com
1.0.0  IN  PTR localhost.
```
左下角中的`128`代表 IP 的最后一个字节号，例如，我的局域网 IP 地址是`192.168.223.128`，那么最后一个字节就是`128`

4. 修改主机域名解析地址，重启`Bind9`

（1）修改主机域名解析地址

```sh
sudo vim /etc/resolv.conf
```
修改为
```sh
search zjr.com
nameserver 192.168.223.128
```
（2）重启Bind9

```sh
sudo service bind9 restart
```

5. 测试

```sh
ping zjr.com
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191021164536638.png)
![用**nslookup指令查看网址IP**](https://img-blog.csdnimg.cn/20191021164656891.png)


## DNS失效
### 解决办法

```sh
vi /etc/resolvconf/resolv.conf.d/base
```
增加以下内容
```
search zjr.com
nameserver 192.168.223.128
```
保存并退出，在执行下面命令
```sh
resolvconf -u

/etc/init.d/networking restart
```



参考链接: 

<https://blog.csdn.net/jin970505/article/details/78932963>