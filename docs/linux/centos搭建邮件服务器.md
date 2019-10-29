# CentOS 搭建邮件服务器

## 概述

**注意：在搭建此服务器之前，请准备一台干净的centos，在安装时，将主机名设置为localhost！！！！！！！！！！不然很有可能失败！**

本文中，dns服务器使用的是`bind`，邮件服务器使用的是`sendmail`，`dovecot`。 
其中`centos`的 IP 地址为：`192.168.223.131`
## 关闭防火墙


```sh{2}
# 临时关闭
systemctl stop firewalld

# 永久关闭
systemctl disable firewalld 

# 查看防火墙状态
systemctl status  firewalld 
```

## 安装配置 DNS
首先，查看系统中是否已经安装了`bind`,查看命令如下：
```sh
rpm -qa | grep bind
```
如果安装了则显示如下：

![已经安装bind](/linux/bind1.PNG "已经安装bind")

如果无显示，则表示未安装，输入下面的命令安装：
```sh
yum -y install bind
```
安装完成之后就可以开始配置了：

打开`/etc/named.conf`，找到下图中圈中的地方
```sh
vi /etc/named.conf
```
![配置bind](/linux/bind2.PNG "配置bind")
修改为：（注意：只用改这三处，其他别改）
```conf
listen-on port 53 { any; };
        listen-on-v6 port 53 { any; };
/*
...
*/
allow-query     { any; };
```
接着，打开`/etc/named.rfc1912.zones`
```sh
vi /etc/named.rfc1912.zones
```
打开之后，你会看见有很多这种格式的配置，你可以将它清空，使用下面这个模板：
```
zone "localhost.localdomain" IN {
        type master;
        file "named.localhost";
        allow-update { none; };
};


zone "1.0.0.127.in-addr.arpa" IN {
        type master;
        file "named.loopback";
        allow-update { none; };
};
```
将模板内容更改为：
```{6}
zone "zjr.com" IN {
        type master;
        file "zjr.localhost";
        allow-update { none; };
};
zone "223.168.192.in-addr.arpa" {
        type master;
        file "zjr.loopback";
        allow-update { none; };
};
```
其中高亮行的数字是本网段反过来写，如你的网段是`192.168.76`，则将第六行数字改为`76.168.192`。

修改完成后，进入到`/var/named`目录下，执行如下两条复制命令：
```
cp -a named.localhost zjr.localhost
cp -a named.localhost zjr.loopback
```
打开`zjr.localhost`,可以看到：
```
$TTL 1D
@       IN SOA  @ rname.invalid. (
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
        NS      @
        A       127.0.0.1
        AAAA    ::1
```
将其修改为：(**注意高亮行的 . 不能少**)
```{2,8,9,10}
$TTL 1D
@       IN SOA  zjr.com. rname.invalid. (
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
        NS      dns.zjr.com.
        IN MX 10 pop.zjr.com.
        IN MX 10 smtp.zjr.com.
dns     A       192.168.223.131
@       A       192.168.223.131
www     A       192.168.223.131
pop     A       192.168.223.131
smtp    A       192.168.223.131
```
接着打开`zjr.loopback`,可以看到：
```
$TTL 1D
@       IN SOA  @ rname.invalid. (
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
        NS      @
        A       127.0.0.1
        AAAA    ::1
```
修改为：(**注意域名后面的.不能少，此外`131`是我的主机号，即ip地址的最后一个字段**)
```
$TTL 1D
@       IN SOA  zjr.com. rname.invalid. (
                                        0       ; serial
                                        1D      ; refresh
                                        1H      ; retry
                                        1W      ; expire
                                        3H )    ; minimum
        NS      dns.zjr.com.
131     PTR     dns.zjr.com.
131     PTR     pop.zjr.com.
131     PTR     smtp.zjr.com.
```

其次，打开`/etc/sysconfig/network-scripts/ifcfg-ens33`文件，(ens33是网卡名称)
在文件中增加如下一行配置：
```
DNS1 = "127.0.0.1"
```
最后，检查是否配置成功：

先重启`named`和`network`服务：
```sh
service named restart
service network restart
```
再执行如下命令：
```sh
nslookup zjr.com
```
若输出如下命令，则表示配置成功：
```
Server:		127.0.0.1
Address:	127.0.0.1#53

Name:	zjr.com
Address: 192.168.223.131
```

打开`/etc/sysconfig/network`:
```sh
vi /etc/sysconfig/network
```
增加：
```
localhost.localdomain
```

修改主机名：
```sh
hostnamectl set-hostname zjr.com
```

## 安装配置 sendmail
首先，查看系统中是否已经安装了`sendmail`,查看命令如下：
```
rpm -qa | grep sendmail
```
安装命令：
```sh
yum -y install sendmail sendmail-cf
```

进入`/etc/mail`目录，打开`access`文件
```sh
cd /etc/mail
vi access
```
修改为：
```
Connect:localhost.localdomain           RELAY
Connect:localhost                       RELAY
Connect:127.0.0.1                       RELAY
Connect:zjr.com                         RELAY
Connect:192.168.223.*                   RELAY
```
在执行如下命令：
```sh
makemap hash access.db < access
```

打开`sendmail.mc`,找到下图中处：
![sendmail1](/linux/sendmail1.PNG "sendmail1")
改为：
```
DAEMON_OPTIONS(`Port=smtp,Addr=0.0.0.0, Name=MTA')dnl
```
再执行下面这条命令：
```sh
m4  sendmail.mc  > sendmail.cf
```

检查：先重新启动，在查看端口监听：
```
systemctl restart sendmail.service

netstat -an | grep 25
```
结果如下：
![sendmail1](/linux/sendmail2.PNG "sendmail1")


## 安装配置 dovecot

首先，查看系统中是否已经安装了`dovecot`,查看命令如下：
```
rpm -qa | grep dovecot
```
安装命令：
```sh
yum -y install dovecot
```

接着打开`/etc/dovecot/dovecot.conf`
```sh
vi /etc/dovecot/dovecot.conf
```
找到下图中圈出的那条配置，将`#`删除

![dovecot](/linux/dovecot1.PNG "dovecot")

进入`/etc/dovecot/conf.d`文件夹：
```sh
cd /etc/dovecot/conf.d
```
打开`10-auth.conf`,将下图圈起的地方改为：
```sh
vi 10-auth.conf
```
![dovecot](/linux/dovecot2.PNG "dovecot")
```
disable_plaintext_auth = no
```
再打开`10-mail.conf`,将下图圈起的地方改为(就是把`#`去掉）：
```sh
vi 10-mail.conf
```
![dovecot](/linux/dovecot3.PNG "dovecot")
```
mail_location = mbox:~/mail:INBOX=/var/mail/%u
```
打开`10-ssl.conf`,将下图圈起的地方改为：
![dovecot](/linux/dovecot4.PNG "dovecot")
```
ssl = no
```

## 测试和结果

重启`sendmail`和`dovecot`服务
```
systemctl restart sendmail.service


systemctl restart dovecot.service
```

新增用户两个用户`user1`和`user2`:
```sh
useradd user1
```
设置密码：
```sh
passwd user1
```
:::tip 提示
在设置密码过程中，会提示密码不符合规范等什么鬼的原因，直接忽略，只用两次密码相同即可。
:::

再创建 `/home/user1/mail/.imap/INBOX`和`/home/user2/mail/.imap/INBOX`文件夹，如果不能一次创建，请一级一级创建。
在**分别**进入到两`INBOX`文件夹，**分别**执行如下两条命令：
```sh
chown -R user1 .
chown -R user2 .
```

此时，打开windows系统的虚拟机，将windows中的DNS服务器设置为`192.168.223.131`。打开`Foxmail`:
![result](/linux/result1.PNG "result")