---
title: maven的安装及环境变量配置
date: 2021-01-04
---

## 概述

安装maven首先需要java环境，在cmd命令台中输入```java -version```显示出如下图
![jdk安装](/maven/javainstall.PNG)

## 下载 Apache Maven

下载链接为：[maven下载地址](http://maven.apache.org/download.cgi)

![maven安装](/maven/mavendownload.PNG)

下载 Maven 的 zip 文件，例如： apache-maven-3.6.0-bin.zip，将它解压到你要安装 Maven 的文件夹。假设你解压缩到文件夹 – G:\apache-maven-3.6.0

![maven解压](/maven/unzipmaven.PNG)

## 添加 MAVEN_HOME

### 回到桌面，右键此电脑，点击属性

### 点击左侧高级系统设置

![maven环境变量配置1](/maven/configuration1.PNG)

### 点击下方环境变量

![maven环境变量配置1](/maven/configuration2.PNG)

### 新建MAVEN_HOEM

![maven环境变量配置1](/maven/configuration3.PNG)

### 再到PATH中配置

![maven环境变量配置1](/maven/configuration4.PNG)

### 检验

在cmd命令台中输入```mvn -v```命令
![maven环境变量配置1](/maven/configurationsuccess.PNG)

若出现上图样式，则配置成功！
