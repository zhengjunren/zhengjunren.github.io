(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{273:function(s,a,e){"use strict";e.r(a);var n=e(2),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"fedora-安装-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fedora-安装-docker"}},[s._v("#")]),s._v(" Fedora 安装 Docker")]),s._v(" "),e("blockquote",[e("p",[s._v("警告：切勿在没有配置 Docker dnf 源的情况下直接使用 dnf 命令安装 Docker.")])]),s._v(" "),e("h2",{attrs:{id:"准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),e("h3",{attrs:{id:"系统要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统要求"}},[s._v("#")]),s._v(" 系统要求")]),s._v(" "),e("p",[s._v("Docker CE 支持以下版本的 "),e("a",{attrs:{href:"https://fedoraproject.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Fedora"),e("OutboundLink")],1),s._v(" 操作系统：")]),s._v(" "),e("ul",[e("li",[s._v("28")]),s._v(" "),e("li",[s._v("29")]),s._v(" "),e("li",[s._v("30")])]),s._v(" "),e("h3",{attrs:{id:"卸载旧版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本"}},[s._v("#")]),s._v(" 卸载旧版本")]),s._v(" "),e("p",[s._v("旧版本的 Docker 称为 "),e("code",[s._v("docker")]),s._v(" 或者 "),e("code",[s._v("docker-engine")]),s._v("，使用以下命令卸载旧版本：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf remove docker "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-client "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-client-latest "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-common "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-latest "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-latest-logrotate "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-logrotate "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-selinux "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-engine-selinux "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  docker-engine\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h2",{attrs:{id:"使用-dnf-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-dnf-安装"}},[s._v("#")]),s._v(" 使用 dnf 安装")]),s._v(" "),e("p",[s._v("执行以下命令安装依赖包：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" dnf-plugins-core\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("鉴于国内网络问题，强烈建议使用国内源，官方源请在注释中查看。")]),s._v(" "),e("p",[s._v("执行下面的命令添加 "),e("code",[s._v("dnf")]),s._v(" 软件源：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf config-manager "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --add-repo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    https://mirrors.ustc.edu.cn/docker-ce/linux/fedora/docker-ce.repo\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 官方源")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $ sudo dnf config-manager \\")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    --add-repo \\")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    https://download.docker.com/linux/fedora/docker-ce.repo")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("如果需要测试版本的 Docker CE 请使用以下命令：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf config-manager --set-enabled docker-ce-test\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果需要每日构建版本的 Docker CE 请使用以下命令：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf config-manager --set-enabled docker-ce-nightly\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("你也可以禁用测试版本的 Docker CE")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf config-manager --set-disabled docker-ce-test\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"安装-docker-ce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-ce"}},[s._v("#")]),s._v(" 安装 Docker CE")]),s._v(" "),e("p",[s._v("更新 "),e("code",[s._v("dnf")]),s._v(" 软件源缓存，并安装 "),e("code",[s._v("docker-ce")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf update\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("你也可以使用以下命令安装指定版本的 Docker")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ dnf list docker-ce  --showduplicates "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -r\n\ndocker-ce.x86_64          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.06")]),s._v(".1.ce-3.fc28                     docker-ce-stable\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce-18.06.1.ce\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"使用脚本自动安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用脚本自动安装"}},[s._v("#")]),s._v(" 使用脚本自动安装")]),s._v(" "),e("p",[s._v("在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，Debian 系统上可以使用这套脚本安装，另外可以通过 "),e("code",[s._v("--mirror")]),s._v(" 选项使用国内源进行安装：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL get.docker.com -o get-docker.sh\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" get-docker.sh --mirror Aliyun\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $ sudo sh get-docker.sh --mirror AzureChinaCloud")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker CE 最新稳定(stable)版本安装在系统中。")]),s._v(" "),e("h2",{attrs:{id:"启动-docker-ce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动-docker-ce"}},[s._v("#")]),s._v(" 启动 Docker CE")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"建立-docker-用户组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立-docker-用户组"}},[s._v("#")]),s._v(" 建立 docker 用户组")]),s._v(" "),e("p",[s._v("默认情况下，"),e("code",[s._v("docker")]),s._v(" 命令会使用 "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Unix_domain_socket",target:"_blank",rel:"noopener noreferrer"}},[s._v("Unix socket"),e("OutboundLink")],1),s._v(" 与 Docker 引擎通讯。而只有 "),e("code",[s._v("root")]),s._v(" 用户和 "),e("code",[s._v("docker")]),s._v(" 组的用户才可以访问 Docker 引擎的 Unix socket。出于安全考虑，一般 Linux 系统上不会直接使用 "),e("code",[s._v("root")]),s._v(" 用户。因此，更好地做法是将需要使用 "),e("code",[s._v("docker")]),s._v(" 的用户加入 "),e("code",[s._v("docker")]),s._v(" 用户组。")]),s._v(" "),e("p",[s._v("建立 "),e("code",[s._v("docker")]),s._v(" 组：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将当前用户加入 "),e("code",[s._v("docker")]),s._v(" 组：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -aG docker "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("退出当前终端并重新登录，进行如下测试。")]),s._v(" "),e("h2",{attrs:{id:"测试-docker-是否安装正确"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试-docker-是否安装正确"}},[s._v("#")]),s._v(" 测试 Docker 是否安装正确")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker run hello-world\n\nUnable to "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" image "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello-world:latest'")]),s._v(" locally\nlatest: Pulling from library/hello-world\nd1725b59e92d: Pull complete\nDigest: sha256:0add3ace90ecb4adbf7777e9aacf18357296e799f81cabc9fde470971e499788\nStatus: Downloaded newer image "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" hello-world:latest\n\nHello from Docker"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". The Docker client contacted the Docker daemon.\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". The Docker daemon pulled the "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello-world"')]),s._v(" image from the Docker Hub.\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("amd64"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". The Docker daemon created a new container from that image "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" runs the\n    executable that produces the output you are currently reading.\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(". The Docker daemon streamed that output to the Docker client, "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" sent it\n    to your terminal.\n\nTo try something "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\nShare images, automate workflows, and "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" with a "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" Docker ID:\n https://hub.docker.com/\n\nFor "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" examples and ideas, visit:\n https://docs.docker.com/get-started/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br")])]),e("p",[s._v("若能正常输出以上信息，则说明安装成功。")]),s._v(" "),e("h2",{attrs:{id:"镜像加速"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#镜像加速"}},[s._v("#")]),s._v(" 镜像加速")]),s._v(" "),e("p",[s._v("如果在使用过程中发现拉取 Docker 镜像十分缓慢，可以配置 Docker "),e("router-link",{attrs:{to:"/docker/install/mirror.html"}},[s._v("国内镜像加速")]),s._v("。")],1),s._v(" "),e("h2",{attrs:{id:"参考文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/fedora",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker 官方 Fedora 安装文档"),e("OutboundLink")],1),s._v("。")])])])}),[],!1,null,null,null);a.default=t.exports}}]);