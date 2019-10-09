(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{367:function(v,_,e){"use strict";e.r(_);var o=e(24),c=Object(o.a)({},function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"docker-命令查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-命令查询","aria-hidden":"true"}},[v._v("#")]),v._v(" Docker 命令查询")]),v._v(" "),e("h2",{attrs:{id:"基本语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本语法","aria-hidden":"true"}},[v._v("#")]),v._v(" 基本语法")]),v._v(" "),e("p",[v._v("Docker 命令有两大类，客户端命令和服务端命令。前者是主要的操作接口，后者用来启动 Docker Daemon。")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("客户端命令：基本命令格式为 "),e("code",[v._v("docker [OPTIONS] COMMAND [arg...]")]),v._v("；")])]),v._v(" "),e("li",[e("p",[v._v("服务端命令：基本命令格式为 "),e("code",[v._v("dockerd [OPTIONS]")]),v._v("。")])])]),v._v(" "),e("p",[v._v("可以通过 "),e("code",[v._v("man docker")]),v._v(" 或 "),e("code",[v._v("docker help")]),v._v(" 来查看这些命令。")]),v._v(" "),e("h2",{attrs:{id:"客户端命令选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端命令选项","aria-hidden":"true"}},[v._v("#")]),v._v(" 客户端命令选项")]),v._v(" "),e("ul",[e("li",[e("code",[v._v('--config=""')]),v._v("：指定客户端配置文件，默认为 "),e("code",[v._v("~/.docker")]),v._v("；")]),v._v(" "),e("li",[e("code",[v._v("-D=true|false")]),v._v("：是否使用 debug 模式。默认不开启；")]),v._v(" "),e("li",[e("code",[v._v("-H, --host=[]")]),v._v("：指定命令对应 Docker 守护进程的监听接口，可以为 unix 套接字 "),e("code",[v._v("unix:///path/to/socket")]),v._v("，文件句柄 "),e("code",[v._v("fd://socketfd")]),v._v(" 或 tcp 套接字 "),e("code",[v._v("tcp://[host[:port]]")]),v._v("，默认为 "),e("code",[v._v("unix:///var/run/docker.sock")]),v._v("；")]),v._v(" "),e("li",[e("code",[v._v('-l, --log-level="debug|info|warn|error|fatal"')]),v._v("：指定日志输出级别；")]),v._v(" "),e("li",[e("code",[v._v("--tls=true|false")]),v._v("：是否对 Docker 守护进程启用 TLS 安全机制，默认为否；")]),v._v(" "),e("li",[e("code",[v._v("--tlscacert=/.docker/ca.pem")]),v._v("：TLS CA 签名的可信证书文件路径；")]),v._v(" "),e("li",[e("code",[v._v("--tlscert=/.docker/cert.pem")]),v._v("：TLS 可信证书文件路径；")]),v._v(" "),e("li",[e("code",[v._v("--tlscert=/.docker/key.pem")]),v._v("：TLS 密钥文件路径；")]),v._v(" "),e("li",[e("code",[v._v("--tlsverify=true|false")]),v._v("：启用 TLS 校验，默认为否。")])]),v._v(" "),e("h2",{attrs:{id:"dockerd-命令选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerd-命令选项","aria-hidden":"true"}},[v._v("#")]),v._v(" dockerd 命令选项")]),v._v(" "),e("ul",[e("li",[e("code",[v._v('--api-cors-header=""')]),v._v('：CORS 头部域，默认不允许 CORS，要允许任意的跨域访问，可以指定为 "*"；')]),v._v(" "),e("li",[e("code",[v._v('--authorization-plugin=""')]),v._v("：载入认证的插件；")]),v._v(" "),e("li",[e("code",[v._v('-b=""')]),v._v("：将容器挂载到一个已存在的网桥上。指定为 "),e("code",[v._v("none")]),v._v(" 时则禁用容器的网络，与 "),e("code",[v._v("--bip")]),v._v(" 选项互斥；")]),v._v(" "),e("li",[e("code",[v._v('--bip=""')]),v._v("：让动态创建的 "),e("code",[v._v("docker0")]),v._v(" 网桥采用给定的 CIDR 地址; 与 "),e("code",[v._v("-b")]),v._v(" 选项互斥；")]),v._v(" "),e("li",[e("code",[v._v('--cgroup-parent=""')]),v._v("：指定 cgroup 的父组，默认 fs cgroup 驱动为 "),e("code",[v._v("/docker")]),v._v("，systemd cgroup 驱动为 "),e("code",[v._v("system.slice")]),v._v("；")]),v._v(" "),e("li",[e("code",[v._v('--cluster-store=""')]),v._v("：构成集群（如 "),e("code",[v._v("Swarm")]),v._v("）时，集群键值数据库服务地址；")]),v._v(" "),e("li",[e("code",[v._v('--cluster-advertise=""')]),v._v("：构成集群时，自身的被访问地址，可以为 "),e("code",[v._v("host:port")]),v._v(" 或 "),e("code",[v._v("interface:port")]),v._v("；")]),v._v(" "),e("li",[e("code",[v._v('--cluster-store-opt=""')]),v._v("：构成集群时，键值数据库的配置选项；")]),v._v(" "),e("li",[e("code",[v._v('--config-file="/etc/docker/daemon.json"')]),v._v("：daemon 配置文件路径；")]),v._v(" "),e("li",[e("code",[v._v('--containerd=""')]),v._v("：containerd 文件的路径；")]),v._v(" "),e("li",[e("code",[v._v("-D, --debug=true|false")]),v._v("：是否使用 Debug 模式。缺省为 false；")]),v._v(" "),e("li",[e("code",[v._v('--default-gateway=""')]),v._v("：容器的 IPv4 网关地址，必须在网桥的子网段内；")]),v._v(" "),e("li",[e("code",[v._v('--default-gateway-v6=""')]),v._v("：容器的 IPv6 网关地址；")]),v._v(" "),e("li",[e("code",[v._v("--default-ulimit=[]")]),v._v("：默认的 ulimit 值；")]),v._v(" "),e("li",[e("code",[v._v("--disable-legacy-registry=true|false")]),v._v("：是否允许访问旧版本的镜像仓库服务器；")]),v._v(" "),e("li",[e("code",[v._v('--dns=""')]),v._v("：指定容器使用的 DNS 服务器地址；")]),v._v(" "),e("li",[e("code",[v._v('--dns-opt=""')]),v._v("：DNS 选项；")]),v._v(" "),e("li",[e("code",[v._v("--dns-search=[]")]),v._v("：DNS 搜索域；")]),v._v(" "),e("li",[e("code",[v._v("--exec-opt=[]")]),v._v("：运行时的执行选项；")]),v._v(" "),e("li",[e("code",[v._v('--exec-root=""')]),v._v("：容器执行状态文件的根路径，默认为 "),e("code",[v._v("/var/run/docker")]),v._v("；")]),v._v(" "),e("li",[e("code",[v._v('--fixed-cidr=""')]),v._v("：限定分配 IPv4 地址范围；")]),v._v(" "),e("li",[e("code",[v._v('--fixed-cidr-v6=""')]),v._v("：限定分配 IPv6 地址范围；")]),v._v(" "),e("li",[e("code",[v._v('-G, --group=""')]),v._v("：分配给 unix 套接字的组，默认为 "),e("code",[v._v("docker")]),v._v("；")]),v._v(" "),e("li",[e("code",[v._v('-g, --graph=""')]),v._v("：Docker 运行时的根路径，默认为 "),e("code",[v._v("/var/lib/docker")]),v._v("；")]),v._v(" "),e("li",[e("code",[v._v("-H, --host=[]")]),v._v("：指定命令对应 Docker daemon 的监听接口，可以为 unix 套接字 "),e("code",[v._v("unix:///path/to/socket")]),v._v("，文件句柄 "),e("code",[v._v("fd://socketfd")]),v._v(" 或 tcp 套接字 "),e("code",[v._v("tcp://[host[:port]]")]),v._v("，默认为 "),e("code",[v._v("unix:///var/run/docker.sock")]),v._v("；")]),v._v(" "),e("li",[e("code",[v._v("--icc=true|false")]),v._v("：是否启用容器间以及跟 daemon 所在主机的通信。默认为 true。")]),v._v(" "),e("li",[e("code",[v._v("--insecure-registry=[]")]),v._v("：允许访问给定的非安全仓库服务；")]),v._v(" "),e("li",[e("code",[v._v('--ip=""')]),v._v("：绑定容器端口时候的默认 IP 地址。缺省为 "),e("code",[v._v("0.0.0.0")]),v._v("；")]),v._v(" "),e("li",[e("code",[v._v("--ip-forward=true|false")]),v._v("：是否检查启动在 Docker 主机上的启用 IP 转发服务，默认开启。注意关闭该选项将不对系统转发能力进行任何检查修改；")]),v._v(" "),e("li",[e("code",[v._v("--ip-masq=true|false")]),v._v("：是否进行地址伪装，用于容器访问外部网络，默认开启；")]),v._v(" "),e("li",[e("code",[v._v("--iptables=true|false")]),v._v("：是否允许 Docker 添加 iptables 规则。缺省为 true；")]),v._v(" "),e("li",[e("code",[v._v("--ipv6=true|false")]),v._v("：是否启用 IPv6 支持，默认关闭；")]),v._v(" "),e("li",[e("code",[v._v('-l, --log-level="debug|info|warn|error|fatal"')]),v._v("：指定日志输出级别；")]),v._v(" "),e("li",[e("code",[v._v('--label="[]"')]),v._v("：添加指定的键值对标注；")]),v._v(" "),e("li",[e("code",[v._v('--log-driver="json-file|syslog|journald|gelf|fluentd|awslogs|splunk|etwlogs|gcplogs|none"')]),v._v("：指定日志后端驱动，默认为 "),e("code",[v._v("json-file")]),v._v("；")]),v._v(" "),e("li",[e("code",[v._v("--log-opt=[]")]),v._v("：日志后端的选项；")]),v._v(" "),e("li",[e("code",[v._v("--mtu=VALUE")]),v._v("：指定容器网络的 "),e("code",[v._v("mtu")]),v._v("；")]),v._v(" "),e("li",[e("code",[v._v('-p=""')]),v._v("：指定 daemon 的 PID 文件路径。缺省为 "),e("code",[v._v("/var/run/docker.pid")]),v._v("；")]),v._v(" "),e("li",[e("code",[v._v("--raw-logs")]),v._v("：输出原始，未加色彩的日志信息；")]),v._v(" "),e("li",[e("code",[v._v("--registry-mirror=<scheme>://<host>")]),v._v("：指定 "),e("code",[v._v("docker pull")]),v._v(" 时使用的注册服务器镜像地址；")]),v._v(" "),e("li",[e("code",[v._v('-s, --storage-driver=""')]),v._v("：指定使用给定的存储后端；")]),v._v(" "),e("li",[e("code",[v._v("--selinux-enabled=true|false")]),v._v("：是否启用 SELinux 支持。缺省值为 false。SELinux 目前尚不支持 overlay 存储驱动；")]),v._v(" "),e("li",[e("code",[v._v("--storage-opt=[]")]),v._v("：驱动后端选项；")]),v._v(" "),e("li",[e("code",[v._v("--tls=true|false")]),v._v("：是否对 Docker daemon 启用 TLS 安全机制，默认为否；")]),v._v(" "),e("li",[e("code",[v._v("--tlscacert=/.docker/ca.pem")]),v._v("：TLS CA 签名的可信证书文件路径；")]),v._v(" "),e("li",[e("code",[v._v("--tlscert=/.docker/cert.pem")]),v._v("：TLS 可信证书文件路径；")]),v._v(" "),e("li",[e("code",[v._v("--tlscert=/.docker/key.pem")]),v._v("：TLS 密钥文件路径；")]),v._v(" "),e("li",[e("code",[v._v("--tlsverify=true|false")]),v._v("：启用 TLS 校验，默认为否；")]),v._v(" "),e("li",[e("code",[v._v("--userland-proxy=true|false")]),v._v("：是否使用用户态代理来实现容器间和出容器的回环通信，默认为 true；")]),v._v(" "),e("li",[e("code",[v._v("--userns-remap=default|uid:gid|user:group|user|uid")]),v._v("：指定容器的用户命名空间，默认是创建新的 UID 和 GID 映射到容器内进程。")])]),v._v(" "),e("h2",{attrs:{id:"客户端命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端命令","aria-hidden":"true"}},[v._v("#")]),v._v(" 客户端命令")]),v._v(" "),e("p",[v._v("可以通过 "),e("code",[v._v("docker COMMAND --help")]),v._v(" 来查看这些命令的具体用法。")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("attach")]),v._v("：依附到一个正在运行的容器中；")]),v._v(" "),e("li",[e("code",[v._v("build")]),v._v("：从一个 Dockerfile 创建一个镜像；")]),v._v(" "),e("li",[e("code",[v._v("commit")]),v._v("：从一个容器的修改中创建一个新的镜像；")]),v._v(" "),e("li",[e("code",[v._v("cp")]),v._v("：在容器和本地宿主系统之间复制文件中；")]),v._v(" "),e("li",[e("code",[v._v("create")]),v._v("：创建一个新容器，但并不运行它；")]),v._v(" "),e("li",[e("code",[v._v("diff")]),v._v("：检查一个容器内文件系统的修改，包括修改和增加；")]),v._v(" "),e("li",[e("code",[v._v("events")]),v._v("：从服务端获取实时的事件；")]),v._v(" "),e("li",[e("code",[v._v("exec")]),v._v("：在运行的容器内执行命令；")]),v._v(" "),e("li",[e("code",[v._v("export")]),v._v("：导出容器内容为一个 "),e("code",[v._v("tar")]),v._v(" 包；")]),v._v(" "),e("li",[e("code",[v._v("history")]),v._v("：显示一个镜像的历史信息；")]),v._v(" "),e("li",[e("code",[v._v("images")]),v._v("：列出存在的镜像；")]),v._v(" "),e("li",[e("code",[v._v("import")]),v._v("：导入一个文件（典型为 "),e("code",[v._v("tar")]),v._v(" 包）路径或目录来创建一个本地镜像；")]),v._v(" "),e("li",[e("code",[v._v("info")]),v._v("：显示一些相关的系统信息；")]),v._v(" "),e("li",[e("code",[v._v("inspect")]),v._v("：显示一个容器的具体配置信息；")]),v._v(" "),e("li",[e("code",[v._v("kill")]),v._v("：关闭一个运行中的容器 (包括进程和所有相关资源)；")]),v._v(" "),e("li",[e("code",[v._v("load")]),v._v("：从一个 tar 包中加载一个镜像；")]),v._v(" "),e("li",[e("code",[v._v("login")]),v._v("：注册或登录到一个 Docker 的仓库服务器；")]),v._v(" "),e("li",[e("code",[v._v("logout")]),v._v("：从 Docker 的仓库服务器登出；")]),v._v(" "),e("li",[e("code",[v._v("logs")]),v._v("：获取容器的 log 信息；")]),v._v(" "),e("li",[e("code",[v._v("network")]),v._v("：管理 Docker 的网络，包括查看、创建、删除、挂载、卸载等；")]),v._v(" "),e("li",[e("code",[v._v("node")]),v._v("：管理 swarm 集群中的节点，包括查看、更新、删除、提升/取消管理节点等；")]),v._v(" "),e("li",[e("code",[v._v("pause")]),v._v("：暂停一个容器中的所有进程；")]),v._v(" "),e("li",[e("code",[v._v("port")]),v._v("：查找一个 nat 到一个私有网口的公共口；")]),v._v(" "),e("li",[e("code",[v._v("ps")]),v._v("：列出主机上的容器；")]),v._v(" "),e("li",[e("code",[v._v("pull")]),v._v("：从一个Docker的仓库服务器下拉一个镜像或仓库；")]),v._v(" "),e("li",[e("code",[v._v("push")]),v._v("：将一个镜像或者仓库推送到一个 Docker 的注册服务器；")]),v._v(" "),e("li",[e("code",[v._v("rename")]),v._v("：重命名一个容器；")]),v._v(" "),e("li",[e("code",[v._v("restart")]),v._v("：重启一个运行中的容器；")]),v._v(" "),e("li",[e("code",[v._v("rm")]),v._v("：删除给定的若干个容器；")]),v._v(" "),e("li",[e("code",[v._v("rmi")]),v._v("：删除给定的若干个镜像；")]),v._v(" "),e("li",[e("code",[v._v("run")]),v._v("：创建一个新容器，并在其中运行给定命令；")]),v._v(" "),e("li",[e("code",[v._v("save")]),v._v("：保存一个镜像为 tar 包文件；")]),v._v(" "),e("li",[e("code",[v._v("search")]),v._v("：在 Docker index 中搜索一个镜像；")]),v._v(" "),e("li",[e("code",[v._v("service")]),v._v("：管理 Docker 所启动的应用服务，包括创建、更新、删除等；")]),v._v(" "),e("li",[e("code",[v._v("start")]),v._v("：启动一个容器；")]),v._v(" "),e("li",[e("code",[v._v("stats")]),v._v("：输出（一个或多个）容器的资源使用统计信息；")]),v._v(" "),e("li",[e("code",[v._v("stop")]),v._v("：终止一个运行中的容器；")]),v._v(" "),e("li",[e("code",[v._v("swarm")]),v._v("：管理 Docker swarm 集群，包括创建、加入、退出、更新等；")]),v._v(" "),e("li",[e("code",[v._v("tag")]),v._v("：为一个镜像打标签；")]),v._v(" "),e("li",[e("code",[v._v("top")]),v._v("：查看一个容器中的正在运行的进程信息；")]),v._v(" "),e("li",[e("code",[v._v("unpause")]),v._v("：将一个容器内所有的进程从暂停状态中恢复；")]),v._v(" "),e("li",[e("code",[v._v("update")]),v._v("：更新指定的若干容器的配置信息；")]),v._v(" "),e("li",[e("code",[v._v("version")]),v._v("：输出 Docker 的版本信息；")]),v._v(" "),e("li",[e("code",[v._v("volume")]),v._v("：管理 Docker volume，包括查看、创建、删除等；")]),v._v(" "),e("li",[e("code",[v._v("wait")]),v._v("：阻塞直到一个容器终止，然后输出它的退出符。")])])])},[],!1,null,null,null);_.default=c.exports}}]);