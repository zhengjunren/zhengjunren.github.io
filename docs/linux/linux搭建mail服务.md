---
title: Ubuntu搭建Postfix邮箱服务器
date: 2021-01-04
---

## 安装

在ubuntu服务器上运行下面的命令：

```sh
sudo apt-get update
sudo apt-get install postfix -y
```

安装过程中会让你选择一种Postfix配置类型。一般情况下，我们需要选择第二种类型：Internet Site，如图

![在这里插入图片描述](https://img-blog.csdnimg.cn/20191021165255964.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNDk1MzQw,size_16,color_FFFFFF,t_70)

说明：

No configuration 表示不要做任何配置；

Internet Site 表示直接使用本地SMTP服务器发送和接收邮件；

Internet with smarthost 表示使用本地SMTP服务器接收邮件，但发送邮件时不直接使用本地SMTP服务器，而是使用第三方smart host来转发邮件；

Satellite system 表示邮件的发送和接收都是由第三方smarthost来完成。

Local only 表示邮件只能在本机用户之间发送和接收。



![在这里插入图片描述](https://img-blog.csdnimg.cn/2019102116543736.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNDk1MzQw,size_16,color_FFFFFF,t_70)在上图中`System mail name`中填入你的域名，也就是邮箱地址@符号后面的域名，比如，我可以填`Ubuntu`。当发件人的域名地址没有指定时，Postfix会自动将这个域名添加到发件人的地址中。

## 发送测试邮件
实际上，现在我们就能用命令行发送和接收邮件了。如果你的服务器有一个用户名是`user1`，那么这个用户的邮箱地址就是`user1@Ubuntu.com`。你可以发送一封邮件给`root`用户: `root@Ubuntu`。也可以向Gmail，Yahoo，QQ，网易等邮箱用户发送邮件。不过现在我们只能在服务器上用命令行发送和查看邮件。

Postfix在安装时，会同时安装一个sendmail的程序（`/usr/sbin/sendmail`）。你可以用这个`sendmail`二进制程序向你的`Gmail`邮箱发送一封测试邮件。在服务器上输入下面的命令：

```sh
echo "test email" | sendmail your-account@gmail.com
```

这是一条很简单的命令， `sendmail`从标准输入读取到`test email`，将`test email`作为邮件正文，然后发送到`Gmail`邮箱。现在你可以查看你的Gmail邮箱，应该会看见你的测试邮件。尽管我们没有指明发件人地址，但`Postfix`会自动将你的域名添加到发送人地址中。你也可以在`Gmail`中回复这封测试邮件，然后在邮箱服务器上查看是否可以收到`Gmail`发来的邮件。

每个用户的邮件保存在`/var/spool/mail<username>`和`/var/mail/<username>`文件中。如果你不知道收件箱保存在哪里，运行这条命令：

```sh
postconf mail_spool_directory
```

Postfix的收发日志保存在`/var/log/mail.log`文件中。Postfix本身的运行错误日志保存在`/var/log/mail.err`文件中。

**我的测试**
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191021170253173.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191021170539541.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNDk1MzQw,size_16,color_FFFFFF,t_70)

参考链接: 

<https://blog.csdn.net/oolocal/article/details/52861583>
