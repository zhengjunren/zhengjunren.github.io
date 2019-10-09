# Docker镜像加速
鉴于国内网络问题，后续拉取 Docker 镜像十分缓慢，我们可以需要配置加速器来解决

## 设置
对于使用 systemd 的系统，请在 ```/etc/docker/daemon.json``` 中写入如下内容（如果文件不存在请新建该文件）
```json
{
  "registry-mirrors": [
    "http://hub-mirror.c.163.com"
  ]
}
```
> 注意，一定要保证该文件符合 json 规范，否则 Docker 将不能启动。

之后重新启动服务。
```sh
systemctl daemon-reload
systemctl restart docker
```

## 检查

配置加速器之后，如果拉取镜像仍然十分缓慢，输入如下命令
```sh
docker info
```
如果从结果中看到了有如下这行内容，说明配置成功。
```sh
Registry Mirrors: http://hub-mirror.c.163.com/
```