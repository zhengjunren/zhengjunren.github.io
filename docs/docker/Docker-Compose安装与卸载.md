# Docker-Compose安装与卸载
## 二进制包
在 Linux 上的也安装十分简单，从 官方 [GitHub Release](https://github.com/docker/compose/releases) 处直接下载编译好的二进制文件即可。

例如，在 Linux 64 位系统上直接下载对应的二进制包。
```sh
$ sudo curl -L https://github.com/docker/compose/releases/download/1.24.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose

$ sudo chmod +x /usr/local/bin/docker-compose
```

## PIP 安装
注： ```x86_64``` 架构的 Linux 建议按照上边的方法下载二进制包进行安装，如果您计算机的架构是 ARM (例如，树莓派)，再使用 pip 安装。

这种方式是将 Compose 当作一个 Python 应用来从 pip 源中安装。

执行安装命令：
```sh
$ sudo pip install -U docker-compose
```
可以看到类似如下输出，说明安装成功。
```sh
Collecting docker-compose
  Downloading docker-compose-1.17.1.tar.gz (149kB): 149kB downloaded
...
Successfully installed docker-compose cached-property requests texttable websocket-client docker-py dockerpty six enum34 backports.ssl-match-hostname ipaddress
```

## bash 补全命令
```sh
$ curl -L https://raw.githubusercontent.com/docker/compose/1.24.1/contrib/completion/bash/docker-compose > /etc/bash_completion.d/docker-compose
```
## 卸载
如果是二进制包方式安装的，删除二进制文件即可。
```sh
$ sudo rm /usr/local/bin/docker-compose
```
如果是通过```pip```安装的，则执行如下命令即可删除。
```sh
$ sudo pip uninstall docker-compose
```