(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{265:function(e,s,a){"use strict";a.r(s);var t=a(2),v=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"dockerfile-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-指令"}},[e._v("#")]),e._v(" Dockerfile 指令")]),e._v(" "),a("h2",{attrs:{id:"copy-复制文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy-复制文件"}},[e._v("#")]),e._v(" COPY 复制文件")]),e._v(" "),a("p",[e._v("格式：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("COPY [--chown=<user>:<group>] <源路径>... <目标路径>")])]),e._v(" "),a("li",[a("code",[e._v('COPY [--chown=<user>:<group>] ["<源路径1>",... "<目标路径>"]')])])]),e._v(" "),a("p",[e._v("和 "),a("code",[e._v("RUN")]),e._v(" 指令一样，也有两种格式，一种类似于命令行，一种类似于函数调用。")]),e._v(" "),a("p",[a("code",[e._v("COPY")]),e._v(" 指令将从构建上下文目录中 "),a("code",[e._v("<源路径>")]),e._v(" 的文件/目录复制到新的一层的镜像内的 "),a("code",[e._v("<目标路径>")]),e._v(" 位置。比如：")]),e._v(" "),a("div",{staticClass:"language-Dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("COPY package.json /usr/src/app/\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("code",[e._v("<源路径>")]),e._v(" 可以是多个，甚至可以是通配符，其通配符规则要满足 Go 的 "),a("a",{attrs:{href:"https://golang.org/pkg/path/filepath/#Match",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("filepath.Match")]),a("OutboundLink")],1),e._v(" 规则，如：")]),e._v(" "),a("div",{staticClass:"language-Dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("COPY hom* /mydir/\nCOPY hom?.txt /mydir/\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[a("code",[e._v("<目标路径>")]),e._v(" 可以是容器内的绝对路径，也可以是相对于工作目录的相对路径（工作目录可以用 "),a("code",[e._v("WORKDIR")]),e._v(" 指令来指定）。目标路径不需要事先创建，如果目录不存在会在复制文件前先行创建缺失目录。")]),e._v(" "),a("p",[e._v("此外，还需要注意一点，使用 "),a("code",[e._v("COPY")]),e._v(" 指令，源文件的各种元数据都会保留。比如读、写、执行权限、文件变更时间等。这个特性对于镜像定制很有用。特别是构建相关文件都在使用 Git 进行管理的时候。")]),e._v(" "),a("p",[e._v("在使用该指令的时候还可以加上 "),a("code",[e._v("--chown=<user>:<group>")]),e._v(" 选项来改变文件的所属用户及所属组。")]),e._v(" "),a("div",{staticClass:"language-Dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("COPY --chown=55:mygroup files* /mydir/\nCOPY --chown=bin files* /mydir/\nCOPY --chown=1 files* /mydir/\nCOPY --chown=10:11 files* /mydir/\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h2",{attrs:{id:"add-更高级的复制文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-更高级的复制文件"}},[e._v("#")]),e._v(" ADD 更高级的复制文件")]),e._v(" "),a("p",[a("code",[e._v("ADD")]),e._v(" 指令和 "),a("code",[e._v("COPY")]),e._v(" 的格式和性质基本一致。但是在 "),a("code",[e._v("COPY")]),e._v(" 基础上增加了一些功能。")]),e._v(" "),a("p",[e._v("比如 "),a("code",[e._v("<源路径>")]),e._v(" 可以是一个 "),a("code",[e._v("URL")]),e._v("，这种情况下，Docker 引擎会试图去下载这个链接的文件放到 "),a("code",[e._v("<目标路径>")]),e._v(" 去。下载后的文件权限自动设置为 "),a("code",[e._v("600")]),e._v("，如果这并不是想要的权限，那么还需要增加额外的一层 "),a("code",[e._v("RUN")]),e._v(" 进行权限调整，另外，如果下载的是个压缩包，需要解压缩，也一样还需要额外的一层 "),a("code",[e._v("RUN")]),e._v(" 指令进行解压缩。所以不如直接使用 "),a("code",[e._v("RUN")]),e._v(" 指令，然后使用 "),a("code",[e._v("wget")]),e._v(" 或者 "),a("code",[e._v("curl")]),e._v(" 工具下载，处理权限、解压缩、然后清理无用文件更合理。因此，这个功能其实并不实用，而且不推荐使用。")]),e._v(" "),a("p",[e._v("如果 "),a("code",[e._v("<源路径>")]),e._v(" 为一个 "),a("code",[e._v("tar")]),e._v(" 压缩文件的话，压缩格式为 "),a("code",[e._v("gzip")]),e._v(", "),a("code",[e._v("bzip2")]),e._v(" 以及 "),a("code",[e._v("xz")]),e._v(" 的情况下，"),a("code",[e._v("ADD")]),e._v(" 指令将会自动解压缩这个压缩文件到 "),a("code",[e._v("<目标路径>")]),e._v(" 去。")]),e._v(" "),a("p",[e._v("在某些情况下，这个自动解压缩的功能非常有用，比如官方镜像 "),a("code",[e._v("ubuntu")]),e._v(" 中：")]),e._v(" "),a("div",{staticClass:"language-Dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("FROM scratch\nADD ubuntu-xenial-core-cloudimg-amd64-root.tar.gz /\n...\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("但在某些情况下，如果我们真的是希望复制个压缩文件进去，而不解压缩，这时就不可以使用 "),a("code",[e._v("ADD")]),e._v(" 命令了。")]),e._v(" "),a("p",[e._v("在 Docker 官方的 "),a("router-link",{attrs:{to:"/appendix/best_practices.html"}},[e._v("Dockerfile 最佳实践文档")]),e._v(" 中要求，尽可能的使用 "),a("code",[e._v("COPY")]),e._v("，因为 "),a("code",[e._v("COPY")]),e._v(" 的语义很明确，就是复制文件而已，而 "),a("code",[e._v("ADD")]),e._v(" 则包含了更复杂的功能，其行为也不一定很清晰。最适合使用 "),a("code",[e._v("ADD")]),e._v(" 的场合，就是所提及的需要自动解压缩的场合。")],1),e._v(" "),a("p",[e._v("另外需要注意的是，"),a("code",[e._v("ADD")]),e._v(" 指令会令镜像构建缓存失效，从而可能会令镜像构建变得比较缓慢。")]),e._v(" "),a("p",[e._v("因此在 "),a("code",[e._v("COPY")]),e._v(" 和 "),a("code",[e._v("ADD")]),e._v(" 指令中选择的时候，可以遵循这样的原则，所有的文件复制均使用 "),a("code",[e._v("COPY")]),e._v(" 指令，仅在需要自动解压缩的场合使用 "),a("code",[e._v("ADD")]),e._v("。")]),e._v(" "),a("p",[e._v("在使用该指令的时候还可以加上 "),a("code",[e._v("--chown=<user>:<group>")]),e._v(" 选项来改变文件的所属用户及所属组。")]),e._v(" "),a("div",{staticClass:"language-Dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ADD --chown=55:mygroup files* /mydir/\nADD --chown=bin files* /mydir/\nADD --chown=1 files* /mydir/\nADD --chown=10:11 files* /mydir/\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h2",{attrs:{id:"cmd-容器启动命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmd-容器启动命令"}},[e._v("#")]),e._v(" CMD 容器启动命令")]),e._v(" "),a("p",[a("code",[e._v("CMD")]),e._v(" 指令的格式和 "),a("code",[e._v("RUN")]),e._v(" 相似，也是两种格式：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("shell")]),e._v(" 格式："),a("code",[e._v("CMD <命令>")])]),e._v(" "),a("li",[a("code",[e._v("exec")]),e._v(" 格式："),a("code",[e._v('CMD ["可执行文件", "参数1", "参数2"...]')])]),e._v(" "),a("li",[e._v("参数列表格式："),a("code",[e._v('CMD ["参数1", "参数2"...]')]),e._v("。在指定了 "),a("code",[e._v("ENTRYPOINT")]),e._v(" 指令后，用 "),a("code",[e._v("CMD")]),e._v(" 指定具体的参数。")])]),e._v(" "),a("p",[e._v("之前介绍容器的时候曾经说过，Docker 不是虚拟机，容器就是进程。既然是进程，那么在启动容器的时候，需要指定所运行的程序及参数。"),a("code",[e._v("CMD")]),e._v(" 指令就是用于指定默认的容器主进程的启动命令的。")]),e._v(" "),a("p",[e._v("在运行时可以指定新的命令来替代镜像设置中的这个默认命令，比如，"),a("code",[e._v("ubuntu")]),e._v(" 镜像默认的 "),a("code",[e._v("CMD")]),e._v(" 是 "),a("code",[e._v("/bin/bash")]),e._v("，如果我们直接 "),a("code",[e._v("docker run -it ubuntu")]),e._v(" 的话，会直接进入 "),a("code",[e._v("bash")]),e._v("。我们也可以在运行时指定运行别的命令，如 "),a("code",[e._v("docker run -it ubuntu cat /etc/os-release")]),e._v("。这就是用 "),a("code",[e._v("cat /etc/os-release")]),e._v(" 命令替换了默认的 "),a("code",[e._v("/bin/bash")]),e._v(" 命令了，输出了系统版本信息。")]),e._v(" "),a("p",[e._v("在指令格式上，一般推荐使用 "),a("code",[e._v("exec")]),e._v(" 格式，这类格式在解析时会被解析为 JSON 数组，因此一定要使用双引号 "),a("code",[e._v('"')]),e._v("，而不要使用单引号。")]),e._v(" "),a("p",[e._v("如果使用 "),a("code",[e._v("shell")]),e._v(" 格式的话，实际的命令会被包装为 "),a("code",[e._v("sh -c")]),e._v(" 的参数的形式进行执行。比如：")]),e._v(" "),a("div",{staticClass:"language-Dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("CMD echo $HOME\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("在实际执行中，会将其变更为：")]),e._v(" "),a("div",{staticClass:"language-Dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CMD [ "sh", "-c", "echo $HOME" ]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这就是为什么我们可以使用环境变量的原因，因为这些环境变量会被 shell 进行解析处理。")]),e._v(" "),a("p",[e._v("提到 "),a("code",[e._v("CMD")]),e._v(" 就不得不提容器中应用在前台执行和后台执行的问题。这是初学者常出现的一个混淆。")]),e._v(" "),a("p",[e._v("Docker 不是虚拟机，容器中的应用都应该以前台执行，而不是像虚拟机、物理机里面那样，用 "),a("code",[e._v("systemd")]),e._v(" 去启动后台服务，容器内没有后台服务的概念。")]),e._v(" "),a("p",[e._v("一些初学者将 "),a("code",[e._v("CMD")]),e._v(" 写为：")]),e._v(" "),a("div",{staticClass:"language-Dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("CMD service nginx start\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("然后发现容器执行后就立即退出了。甚至在容器内去使用 "),a("code",[e._v("systemctl")]),e._v(" 命令结果却发现根本执行不了。这就是因为没有搞明白前台、后台的概念，没有区分容器和虚拟机的差异，依旧在以传统虚拟机的角度去理解容器。")]),e._v(" "),a("p",[e._v("对于容器而言，其启动程序就是容器应用进程，容器就是为了主进程而存在的，主进程退出，容器就失去了存在的意义，从而退出，其它辅助进程不是它需要关心的东西。")]),e._v(" "),a("p",[e._v("而使用 "),a("code",[e._v("service nginx start")]),e._v(" 命令，则是希望 upstart 来以后台守护进程形式启动 "),a("code",[e._v("nginx")]),e._v(" 服务。而刚才说了 "),a("code",[e._v("CMD service nginx start")]),e._v(" 会被理解为 "),a("code",[e._v('CMD [ "sh", "-c", "service nginx start"]')]),e._v("，因此主进程实际上是 "),a("code",[e._v("sh")]),e._v("。那么当 "),a("code",[e._v("service nginx start")]),e._v(" 命令结束后，"),a("code",[e._v("sh")]),e._v(" 也就结束了，"),a("code",[e._v("sh")]),e._v(" 作为主进程退出了，自然就会令容器退出。")]),e._v(" "),a("p",[e._v("正确的做法是直接执行 "),a("code",[e._v("nginx")]),e._v(" 可执行文件，并且要求以前台形式运行。比如：")]),e._v(" "),a("div",{staticClass:"language-Dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CMD ["nginx", "-g", "daemon off;"]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"entrypoint-入口点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint-入口点"}},[e._v("#")]),e._v(" ENTRYPOINT 入口点")]),e._v(" "),a("p",[a("code",[e._v("ENTRYPOINT")]),e._v(" 的格式和 "),a("code",[e._v("RUN")]),e._v(" 指令格式一样，分为 "),a("code",[e._v("exec")]),e._v(" 格式和 "),a("code",[e._v("shell")]),e._v(" 格式。")]),e._v(" "),a("p",[a("code",[e._v("ENTRYPOINT")]),e._v(" 的目的和 "),a("code",[e._v("CMD")]),e._v(" 一样，都是在指定容器启动程序及参数。"),a("code",[e._v("ENTRYPOINT")]),e._v(" 在运行时也可以替代，不过比 "),a("code",[e._v("CMD")]),e._v(" 要略显繁琐，需要通过 "),a("code",[e._v("docker run")]),e._v(" 的参数 "),a("code",[e._v("--entrypoint")]),e._v(" 来指定。")]),e._v(" "),a("p",[e._v("当指定了 "),a("code",[e._v("ENTRYPOINT")]),e._v(" 后，"),a("code",[e._v("CMD")]),e._v(" 的含义就发生了改变，不再是直接的运行其命令，而是将 "),a("code",[e._v("CMD")]),e._v(" 的内容作为参数传给 "),a("code",[e._v("ENTRYPOINT")]),e._v(" 指令，换句话说实际执行时，将变为：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("ENTRYPOINT"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<CMD>"')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("那么有了 "),a("code",[e._v("CMD")]),e._v(" 后，为什么还要有 "),a("code",[e._v("ENTRYPOINT")]),e._v(" 呢？这种 "),a("code",[e._v('<ENTRYPOINT> "<CMD>"')]),e._v(" 有什么好处么？让我们来看几个场景。")]),e._v(" "),a("h3",{attrs:{id:"场景一：让镜像变成像命令一样使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景一：让镜像变成像命令一样使用"}},[e._v("#")]),e._v(" 场景一：让镜像变成像命令一样使用")]),e._v(" "),a("p",[e._v("假设我们需要一个得知自己当前公网 IP 的镜像，那么可以先用 "),a("code",[e._v("CMD")]),e._v(" 来实现：")]),e._v(" "),a("div",{staticClass:"language-Dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('FROM ubuntu:18.04\nRUN apt-get update \\\n    && apt-get install -y curl \\\n    && rm -rf /var/lib/apt/lists/*\nCMD [ "curl", "-s", "https://ip.cn" ]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("假如我们使用 "),a("code",[e._v("docker build -t myip .")]),e._v(" 来构建镜像的话，如果我们需要查询当前公网 IP，只需要执行：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker run myip\n当前 IP：61.148.226.66 来自：北京市 联通\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("嗯，这么看起来好像可以直接把镜像当做命令使用了，不过命令总有参数，如果我们希望加参数呢？比如从上面的 "),a("code",[e._v("CMD")]),e._v(" 中可以看到实质的命令是 "),a("code",[e._v("curl")]),e._v("，那么如果我们希望显示 HTTP 头信息，就需要加上 "),a("code",[e._v("-i")]),e._v(" 参数。那么我们可以直接加 "),a("code",[e._v("-i")]),e._v(" 参数给 "),a("code",[e._v("docker run myip")]),e._v(" 么？")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker run myip -i\ndocker: Error response from daemon: invalid header field value "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"oci runtime error: container_linux.go:247: starting container process caused '),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v("exec: "),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[e._v("\\\\")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v("-i"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[e._v("\\\\")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v(": executable file not found in "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$PATH")]),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[e._v("\\n")]),e._v('"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("我们可以看到可执行文件找不到的报错，"),a("code",[e._v("executable file not found")]),e._v("。之前我们说过，跟在镜像名后面的是 "),a("code",[e._v("command")]),e._v("，运行时会替换 "),a("code",[e._v("CMD")]),e._v(" 的默认值。因此这里的 "),a("code",[e._v("-i")]),e._v(" 替换了原来的 "),a("code",[e._v("CMD")]),e._v("，而不是添加在原来的 "),a("code",[e._v("curl -s https://ip.cn")]),e._v(" 后面。而 "),a("code",[e._v("-i")]),e._v(" 根本不是命令，所以自然找不到。")]),e._v(" "),a("p",[e._v("那么如果我们希望加入 "),a("code",[e._v("-i")]),e._v(" 这参数，我们就必须重新完整的输入这个命令：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker run myip "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -s https://ip.cn -i\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这显然不是很好的解决方案，而使用 "),a("code",[e._v("ENTRYPOINT")]),e._v(" 就可以解决这个问题。现在我们重新用 "),a("code",[e._v("ENTRYPOINT")]),e._v(" 来实现这个镜像：")]),e._v(" "),a("div",{staticClass:"language-Dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('FROM ubuntu:18.04\nRUN apt-get update \\\n    && apt-get install -y curl \\\n    && rm -rf /var/lib/apt/lists/*\nENTRYPOINT [ "curl", "-s", "https://ip.cn" ]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("这次我们再来尝试直接使用 "),a("code",[e._v("docker run myip -i")]),e._v("：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker run myip\n当前 IP：61.148.226.66 来自：北京市 联通\n\n$ docker run myip -i\nHTTP/1.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("200")]),e._v(" OK\nServer: nginx/1.8.0\nDate: Tue, "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("22")]),e._v(" Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2016")]),e._v(" 05:12:40 GMT\nContent-Type: text/html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("charset")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("UTF-8\nVary: Accept-Encoding\nX-Powered-By: PHP/5.6.24-1~dotdeb+7.1\nX-Cache: MISS from cache-2\nX-Cache-Lookup: MISS from cache-2:80\nX-Cache: MISS from proxy-2_6\nTransfer-Encoding: chunked\nVia: "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.1")]),e._v(" cache-2:80, "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.1")]),e._v(" proxy-2_6:8006\nConnection: keep-alive\n\n当前 IP：61.148.226.66 来自：北京市 联通\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br")])]),a("p",[e._v("可以看到，这次成功了。这是因为当存在 "),a("code",[e._v("ENTRYPOINT")]),e._v(" 后，"),a("code",[e._v("CMD")]),e._v(" 的内容将会作为参数传给 "),a("code",[e._v("ENTRYPOINT")]),e._v("，而这里 "),a("code",[e._v("-i")]),e._v(" 就是新的 "),a("code",[e._v("CMD")]),e._v("，因此会作为参数传给 "),a("code",[e._v("curl")]),e._v("，从而达到了我们预期的效果。")]),e._v(" "),a("h3",{attrs:{id:"场景二：应用运行前的准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景二：应用运行前的准备工作"}},[e._v("#")]),e._v(" 场景二：应用运行前的准备工作")]),e._v(" "),a("p",[e._v("启动容器就是启动主进程，但有些时候，启动主进程前，需要一些准备工作。")]),e._v(" "),a("p",[e._v("比如 "),a("code",[e._v("mysql")]),e._v(" 类的数据库，可能需要一些数据库配置、初始化的工作，这些工作要在最终的 mysql 服务器运行之前解决。")]),e._v(" "),a("p",[e._v("此外，可能希望避免使用 "),a("code",[e._v("root")]),e._v(" 用户去启动服务，从而提高安全性，而在启动服务前还需要以 "),a("code",[e._v("root")]),e._v(" 身份执行一些必要的准备工作，最后切换到服务用户身份启动服务。或者除了服务外，其它命令依旧可以使用 "),a("code",[e._v("root")]),e._v(" 身份执行，方便调试等。")]),e._v(" "),a("p",[e._v("这些准备工作是和容器 "),a("code",[e._v("CMD")]),e._v(" 无关的，无论 "),a("code",[e._v("CMD")]),e._v(" 为什么，都需要事先进行一个预处理的工作。这种情况下，可以写一个脚本，然后放入 "),a("code",[e._v("ENTRYPOINT")]),e._v(" 中去执行，而这个脚本会将接到的参数（也就是 "),a("code",[e._v("<CMD>")]),e._v("）作为命令，在脚本最后执行。比如官方镜像 "),a("code",[e._v("redis")]),e._v(" 中就是这么做的：")]),e._v(" "),a("div",{staticClass:"language-Dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('FROM alpine:3.4\n...\nRUN addgroup -S redis && adduser -S -G redis redis\n...\nENTRYPOINT ["docker-entrypoint.sh"]\n\nEXPOSE 6379\nCMD [ "redis-server" ]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("可以看到其中为了 redis 服务创建了 redis 用户，并在最后指定了 "),a("code",[e._v("ENTRYPOINT")]),e._v(" 为 "),a("code",[e._v("docker-entrypoint.sh")]),e._v(" 脚本。")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[e._v("#!/bin/sh")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# allow the container to be started with `--user`")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$1")]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'redis-server'")]),e._v(" -a "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("id")]),e._v(" -u"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'0'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("then")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R redis "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" su-exec redis "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$0")]),e._v('"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$@")]),e._v('"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("fi")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$@")]),e._v('"')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("该脚本的内容就是根据 "),a("code",[e._v("CMD")]),e._v(" 的内容来判断，如果是 "),a("code",[e._v("redis-server")]),e._v(" 的话，则切换到 "),a("code",[e._v("redis")]),e._v(" 用户身份启动服务器，否则依旧使用 "),a("code",[e._v("root")]),e._v(" 身份执行。比如：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ docker run -it redis "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("id")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("uid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("gid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("groups")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"env-dockerfile-指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env-dockerfile-指令"}},[e._v("#")]),e._v(" ENV Dockerfile 指令")]),e._v(" "),a("p",[e._v("格式有两种：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("ENV <key> <value>")])]),e._v(" "),a("li",[a("code",[e._v("ENV <key1>=<value1> <key2>=<value2>...")])])]),e._v(" "),a("p",[e._v("这个指令很简单，就是设置环境变量而已，无论是后面的其它指令，如 "),a("code",[e._v("RUN")]),e._v("，还是运行时的应用，都可以直接使用这里定义的环境变量。")]),e._v(" "),a("div",{staticClass:"language-Dockerfie line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ENV VERSION=1.0 DEBUG=on \\\n    NAME="Happy Feet"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("这个例子中演示了如何换行，以及对含有空格的值用双引号括起来的办法，这和 Shell 下的行为是一致的。")]),e._v(" "),a("p",[e._v("定义了环境变量，那么在后续的指令中，就可以使用这个环境变量。比如在官方 "),a("code",[e._v("node")]),e._v(" 镜像 "),a("code",[e._v("Dockerfile")]),e._v(" 中，就有类似这样的代码：")]),e._v(" "),a("div",{staticClass:"language-Dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ENV NODE_VERSION 7.2.0\n\nRUN curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz" \\\n  && curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc" \\\n  && gpg --batch --decrypt --output SHASUMS256.txt SHASUMS256.txt.asc \\\n  && grep " node-v$NODE_VERSION-linux-x64.tar.xz\\$" SHASUMS256.txt | sha256sum -c - \\\n  && tar -xJf "node-v$NODE_VERSION-linux-x64.tar.xz" -C /usr/local --strip-components=1 \\\n  && rm "node-v$NODE_VERSION-linux-x64.tar.xz" SHASUMS256.txt.asc SHASUMS256.txt \\\n  && ln -s /usr/local/bin/node /usr/local/bin/nodejs\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("在这里先定义了环境变量 "),a("code",[e._v("NODE_VERSION")]),e._v("，其后的 "),a("code",[e._v("RUN")]),e._v(" 这层里，多次使用 "),a("code",[e._v("$NODE_VERSION")]),e._v(" 来进行操作定制。可以看到，将来升级镜像构建版本的时候，只需要更新 "),a("code",[e._v("7.2.0")]),e._v(" 即可，"),a("code",[e._v("Dockerfile")]),e._v(" 构建维护变得更轻松了。")]),e._v(" "),a("p",[e._v("下列指令可以支持环境变量展开： "),a("code",[e._v("ADD")]),e._v("、"),a("code",[e._v("COPY")]),e._v("、"),a("code",[e._v("ENV")]),e._v("、"),a("code",[e._v("EXPOSE")]),e._v("、"),a("code",[e._v("LABEL")]),e._v("、"),a("code",[e._v("USER")]),e._v("、"),a("code",[e._v("WORKDIR")]),e._v("、"),a("code",[e._v("VOLUME")]),e._v("、"),a("code",[e._v("STOPSIGNAL")]),e._v("、"),a("code",[e._v("ONBUILD")]),e._v("。")]),e._v(" "),a("p",[e._v("可以从这个指令列表里感觉到，环境变量可以使用的地方很多，很强大。通过环境变量，我们可以让一份 "),a("code",[e._v("Dockerfile")]),e._v(" 制作更多的镜像，只需使用不同的环境变量即可。")]),e._v(" "),a("h2",{attrs:{id:"volume-定义匿名卷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volume-定义匿名卷"}},[e._v("#")]),e._v(" VOLUME 定义匿名卷")]),e._v(" "),a("p",[e._v("格式为：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v('VOLUME ["<路径1>", "<路径2>"...]')])]),e._v(" "),a("li",[a("code",[e._v("VOLUME <路径>")])])]),e._v(" "),a("p",[e._v("之前我们说过，容器运行时应该尽量保持容器存储层不发生写操作，对于数据库类需要保存动态数据的应用，其数据库文件应该保存于卷(volume)中，后面的章节我们会进一步介绍 Docker 卷的概念。为了防止运行时用户忘记将动态文件所保存目录挂载为卷，在 "),a("code",[e._v("Dockerfile")]),e._v(" 中，我们可以事先指定某些目录挂载为匿名卷，这样在运行时如果用户不指定挂载，其应用也可以正常运行，不会向容器存储层写入大量数据。")]),e._v(" "),a("div",{staticClass:"language-Dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("VOLUME /data\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这里的 "),a("code",[e._v("/data")]),e._v(" 目录就会在运行时自动挂载为匿名卷，任何向 "),a("code",[e._v("/data")]),e._v(" 中写入的信息都不会记录进容器存储层，从而保证了容器存储层的无状态化。当然，运行时可以覆盖这个挂载设置。比如：")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker run -d -v mydata:/data xxxx\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("在这行命令中，就使用了 "),a("code",[e._v("mydata")]),e._v(" 这个命名卷挂载到了 "),a("code",[e._v("/data")]),e._v(" 这个位置，替代了 "),a("code",[e._v("Dockerfile")]),e._v(" 中定义的匿名卷的挂载配置。")]),e._v(" "),a("h2",{attrs:{id:"expose-声明端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expose-声明端口"}},[e._v("#")]),e._v(" EXPOSE 声明端口")]),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("EXPOSE <端口1> [<端口2>...]")]),e._v("。")]),e._v(" "),a("p",[a("code",[e._v("EXPOSE")]),e._v(" 指令是声明运行时容器提供服务端口，这只是一个声明，在运行时并不会因为这个声明应用就会开启这个端口的服务。在 Dockerfile 中写入这样的声明有两个好处，一个是帮助镜像使用者理解这个镜像服务的守护端口，以方便配置映射；另一个用处则是在运行时使用随机端口映射时，也就是 "),a("code",[e._v("docker run -P")]),e._v(" 时，会自动随机映射 "),a("code",[e._v("EXPOSE")]),e._v(" 的端口。")]),e._v(" "),a("p",[e._v("要将 "),a("code",[e._v("EXPOSE")]),e._v(" 和在运行时使用 "),a("code",[e._v("-p <宿主端口>:<容器端口>")]),e._v(" 区分开来。"),a("code",[e._v("-p")]),e._v("，是映射宿主端口和容器端口，换句话说，就是将容器的对应端口服务公开给外界访问，而 "),a("code",[e._v("EXPOSE")]),e._v(" 仅仅是声明容器打算使用什么端口而已，并不会自动在宿主进行端口映射。")]),e._v(" "),a("h2",{attrs:{id:"workdir-指定工作目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workdir-指定工作目录"}},[e._v("#")]),e._v(" WORKDIR 指定工作目录")]),e._v(" "),a("p",[e._v("格式为 "),a("code",[e._v("WORKDIR <工作目录路径>")]),e._v("。")]),e._v(" "),a("p",[e._v("使用 "),a("code",[e._v("WORKDIR")]),e._v(" 指令可以来指定工作目录（或者称为当前目录），以后各层的当前目录就被改为指定的目录，如该目录不存在，"),a("code",[e._v("WORKDIR")]),e._v(" 会帮你建立目录。")]),e._v(" "),a("p",[e._v("之前提到一些初学者常犯的错误是把 "),a("code",[e._v("Dockerfile")]),e._v(" 等同于 Shell 脚本来书写，这种错误的理解还可能会导致出现下面这样的错误：")]),e._v(" "),a("div",{staticClass:"language-docker line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" cd /app\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("RUN")]),e._v(" echo "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hello"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v(" world.txt\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("如果将这个 "),a("code",[e._v("Dockerfile")]),e._v(" 进行构建镜像运行后，会发现找不到 "),a("code",[e._v("/app/world.txt")]),e._v(" 文件，或者其内容不是 "),a("code",[e._v("hello")]),e._v("。原因其实很简单，在 Shell 中，连续两行是同一个进程执行环境，因此前一个命令修改的内存状态，会直接影响后一个命令；而在 "),a("code",[e._v("Dockerfile")]),e._v(" 中，这两行 "),a("code",[e._v("RUN")]),e._v(" 命令的执行环境根本不同，是两个完全不同的容器。这就是对 "),a("code",[e._v("Dockerfile")]),e._v(" 构建分层存储的概念不了解所导致的错误。")]),e._v(" "),a("p",[e._v("之前说过每一个 "),a("code",[e._v("RUN")]),e._v(" 都是启动一个容器、执行命令、然后提交存储层文件变更。第一层 "),a("code",[e._v("RUN cd /app")]),e._v(" 的执行仅仅是当前进程的工作目录变更，一个内存上的变化而已，其结果不会造成任何文件变更。而到第二层的时候，启动的是一个全新的容器，跟第一层的容器更完全没关系，自然不可能继承前一层构建过程中的内存变化。")]),e._v(" "),a("p",[e._v("因此如果需要改变以后各层的工作目录的位置，那么应该使用 "),a("code",[e._v("WORKDIR")]),e._v(" 指令。")])])}),[],!1,null,null,null);s.default=v.exports}}]);