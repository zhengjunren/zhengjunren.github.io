#  compose 搭建 ftp 服务器

## vsftpd
镜像地址：<https://hub.docker.com/r/fauria/vsftpd>

+ **注意修改`PASV_ADDRESS`属性**

```yaml {18}
version: "3"
services:
  ftp:
    image: fauria/vsftpd
    container_name: vsftpd
    restart: always
    volumes:
      - /usr/local/docker/ftp/data:/home/vsftpd
      - /usr/local/docker/ftp/data/pub:/var/ftp/pub
      - /usr/local/docker/ftp/conf/vsftpd.conf:/etc/vsftpd/vsftpd.conf
    ports:
      - 0.0.0.0:20:20
      - 0.0.0.0:21:21
      - 21100-21110:21100-21110
    environment:
      FTP_USER: zhengjunren
      FTP_PASS: 123456
      PASV_ADDRESS: 192.168.223.128
      PASV_MIN_PORT: 21100
      PASV_MAX_PORT: 21110
```

## 配置文件

+ `vsftpd.conf`:
+ **注意修改`pasv_address`属性**
```{50,58}
# Run in the foreground to keep the container running:
background=NO

# Allow anonymous FTP? (Beware - allowed by default if you comment this out).
anonymous_enable=YES

# Uncomment this to allow local users to log in.
local_enable=YES

## Enable virtual users
guest_enable=YES

## Virtual users will use the same permissions as anonymous
virtual_use_local_privs=YES

# Uncomment this to enable any form of FTP write command.
write_enable=YES

## PAM file name
pam_service_name=vsftpd_virtual

## Home Directory for virtual users
user_sub_token=$USER
local_root=/home/vsftpd/$USER

# You may specify an explicit list of local users to chroot() to their home
# directory. If chroot_local_user is YES, then this list becomes a list of
# users to NOT chroot().
chroot_local_user=YES

# Workaround chroot check.
# See https://www.benscobie.com/fixing-500-oops-vsftpd-refusing-to-run-with-writable-root-inside-chroot/
# and http://serverfault.com/questions/362619/why-is-the-chroot-local-user-of-vsftpd-insecure
allow_writeable_chroot=YES

## Hide ids from user
hide_ids=YES

## Enable logging
xferlog_enable=YES
xferlog_file=/var/log/vsftpd/vsftpd.log

## Enable active mode
port_enable=YES
connect_from_port_20=YES
ftp_data_port=20

## Disable seccomp filter sanboxing
seccomp_sandbox=NO
pasv_address=192.168.223.128
pasv_max_port=21110
pasv_min_port=21100
pasv_addr_resolve=NO
pasv_enable=YES
file_open_mode=0666
local_umask=077
xferlog_std_format=NO
pasv_address=192.168.223.128
pasv_max_port=21110
pasv_min_port=21100
pasv_addr_resolve=NO
pasv_enable=YES
file_open_mode=0666
local_umask=077
xferlog_std_format=NO
```
