# compose 搭建 apache 服务器

镜像地址：<https://hub.docker.com/_/httpd>

```yaml
version: "3.1"
services:
  httpd:
    image: httpd
    container_name: "httpd"
    ports:
      - 80:80
    volumes:
      #- $PWD/www/:/usr/local/apache2/htdocs/
      - /usr/local/docker/httpd/www:/usr/local/apache2/htdocs
      #- $PWD/logs/:/usr/local/apache2/logs/
      - /usr/local/docker/httpd/logs/:/usr/local/apache2/logs/
```
