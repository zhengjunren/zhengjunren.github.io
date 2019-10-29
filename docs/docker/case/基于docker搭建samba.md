# compose 搭建 samba 服务器

镜像地址：<https://hub.docker.com/r/dperson/samba>
+ 注意修改`command`属性

```yaml
version: '3.4'

services:
  samba:
    image: dperson/samba
    container_name: samba
    environment:
      TZ: 'EST5EDT'
    networks:
      - default
    ports:
      - "137:137/udp"
      - "138:138/udp"
      - "139:139/tcp"
      - "445:445/tcp"
    read_only: true
    tmpfs:
      - /tmp
    restart: unless-stopped
    stdin_open: true
    tty: true
    volumes:
      - /usr/local/docker/samba/mnt:/mnt:z
      - /mnt2:/mnt2:z
    command: '-p -s "zhengjunren Volume;/mnt;yes;no;no;zhengjunren" -u "zhengjunren;123456"'

networks:
  default:
```