---
title: Linux 安装 Tomcat
date: 2021-01-04
---

## 概述
此处以 Tomcat 8.5.23 为例

下载地址：
<https://tomcat.apache.org/>

## 解压缩并移动到指定目录
### 解压缩

```SH
tar -zxvf apache-tomcat-8.5.23.tar.gz
```

### 进入文件夹
```sh
cd apache-tomcat-8.5.23
```

## 常用命令

### 启动

```sh
/usr/local/apache-tomcat-8.5.23/bin/startup.sh
```

### 停止

```sh
/usr/local/apache-tomcat-8.5.23/bin/shutdown.sh
```
### 目录内执行脚本

```sh
./startup.sh
```
