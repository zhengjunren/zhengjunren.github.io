# Linux 配置 DHCP
## DHCP服务

1. 安装isc-dhcp-server：

```powershell
$ sudo apt install isc-dhcp-server
```
2. 查找目标主机的网卡名称：

```sh
$ ifconfig
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191021160115110.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNDk1MzQw,size_16,color_FFFFFF,t_70)

3. 接下来配置 /etc/default/isc-dhcp-server 文件：

```powershell
$ sudo vim /etc/default/isc-dhcp-server
```
将INTERFACES的内容补充为目标主机的网卡名称ens33
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191021160439503.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNDk1MzQw,size_16,color_FFFFFF,t_70)

4. 配置/etc/dhcp/dhcpd.conf文件：
```sh
$ sudo vim /etc/dhcp/dhcpd.conf
```
文件内容中需要配置的是域名和子网IP等信息，对于第一文件片段中的
option domain-name “example.org” 不用修改，下一行的domain-name-server需要注释掉在第二文件片段中补充。对于第二文件片段中的白色部分，全是新添加的信息。目标主机的子网IP为192.168.182.134，因此subnet为192.168.182.0，DHCP分配范围设置为10-100，其余地址留给广播和静态IP。网关和DNS均设置为192.168.182.1，广播地址为192.168.182.255，ntp-servers和netbios-name-servers设置与DNS一致，netbios-node-type默认为8
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191021161151349.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNDk1MzQw,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191021161003802.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNDk1MzQw,size_16,color_FFFFFF,t_70)

5. 配置完成之后重启DHCP服务,查看效果：

```sh
$ sudo service isc-dhcp-server restart
```
查看dhcp是否正常运行：

```sh
$ sudo netstat -uap
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20191021161702545.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNDk1MzQw,size_16,color_FFFFFF,t_70)

参考链接: 

<https://blog.csdn.net/u010177634/article/details/53044777>