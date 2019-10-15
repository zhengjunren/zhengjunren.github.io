# Linux 安装 Tomcat

## 概述
此处以 Tomcat 8.5.23 为例

下载地址：
<https://tomcat.apache.org/>

## 解压缩并移动到指定目录
### 解压缩

```SH
tar -zxvf apache-tomcat-8.5.23.tar.gz
```
### 变更目录名

```sh
mv apache-tomcat-8.5.23 tomcat
```
### 移动目录

```sh
mv tomcat/ /usr/local/
```

## 常用命令

### 启动

```sh
/usr/local/tomcat/bin/startup.sh
```

### 停止

```sh
/usr/local/tomcat/bin/shutdown.sh
```
### 目录内执行脚本

```sh
./startup.sh
```