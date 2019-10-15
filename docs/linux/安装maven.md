# Linux 安装 Maven

## 概述
此处以 Maven 3.5.3 为例

下载地址：
<http://maven.apache.org/download.cgi>

## 解压缩并移动到指定目录

### 解压缩
```sh
tar -zxvf apache-maven-3.5.3-bin.tar.gz
```

### 创建目录
```sh
mkdir -p /usr/local/maven
```
### 移动安装包
```
mv apache-maven-3.5.3 /usr/local/maven/
```

## 配置环境变量

### 配置系统环境变量
> 注意：本文中安装 maven 是在安装 java 的基础上进行的。

```sh
vi /etc/environment
```

添加第一行，将原先的`path`修改为第五行：
```{1,5}
export MAVEN_HOME=/usr/local/maven/apache-maven-3.5.3
export JAVA_HOME=/usr/local/java/jdk1.8.0_152
export JRE_HOME=/usr/local/java/jdk1.8.0_152/jre
export CLASSPATH=$CLASSPATH:$JAVA_HOME/lib:$JAVA_HOME/jre/lib
export PATH=$JAVA_HOME/bin:$JAVA_HOME/jre/bin:$MAVEN_HOME/bin:$PATH:$HOME/bin
```

### 配置用户环境变量
```sh
vi /etc/profile
```

#### 修改如下语句
```{17,18,19,20,21}
if [ "$PS1" ]; then
  if [ "$BASH" ] && [ "$BASH" != "/bin/sh" ]; then
    # The file bash.bashrc already sets the default PS1.
    # PS1='\h:\w\$ '
    if [ -f /etc/bash.bashrc ]; then
      . /etc/bash.bashrc
    fi
  else
    if [ "`id -u`" -eq 0 ]; then
      PS1='# '
    else
      PS1='$ '
    fi
  fi
fi

export MAVEN_HOME=/usr/local/maven/apache-maven-3.5.3
export JAVA_HOME=/usr/local/java/jdk1.8.0_152
export JRE_HOME=/usr/local/java/jdk1.8.0_152/jre
export CLASSPATH=$CLASSPATH:$JAVA_HOME/lib:$JAVA_HOME/jre/lib
export PATH=$JAVA_HOME/bin:$JAVA_HOME/jre/bin:$MAVEN_HOME/bin:$PATH:$HOME/bin

if [ -d /etc/profile.d ]; then
  for i in /etc/profile.d/*.sh; do
    if [ -r $i ]; then
      . $i
    fi
  done
  unset i
fi
```

### 使用户环境变量生效

```sh
source /etc/profile
```

## 测试是否安装成功

```
root@ubuntu:~# mvn -v
Apache Maven 3.5.3 (3383c37e1f9e9b3bc3df5050c29c8aff9f295297; 2018-02-25T03:49:05+08:00)
Maven home: /usr/local/maven/apache-maven-3.5.3
Java version: 1.8.0_152, vendor: Oracle Corporation
Java home: /usr/local/java/jdk1.8.0_152/jre
Default locale: en_US, platform encoding: UTF-8
OS name: "linux", version: "4.4.0-142-generic", arch: "amd64", family: "unix"
```