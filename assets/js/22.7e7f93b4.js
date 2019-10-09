(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{311:function(s,a,t){"use strict";t.r(a);var e=t(24),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ubuntu-安装-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-安装-docker","aria-hidden":"true"}},[s._v("#")]),s._v(" Ubuntu 安装 Docker")]),s._v(" "),t("h2",{attrs:{id:"准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#准备工作","aria-hidden":"true"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),t("h3",{attrs:{id:"系统要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统要求","aria-hidden":"true"}},[s._v("#")]),s._v(" 系统要求")]),s._v(" "),t("p",[s._v("Docker CE 支持以下版本的 Ubuntu 操作系统：")]),s._v(" "),t("ul",[t("li",[s._v("Disco 19.04")]),s._v(" "),t("li",[s._v("Cosmic 18.10")]),s._v(" "),t("li",[s._v("Bionic 18.04 (LTS)")]),s._v(" "),t("li",[s._v("Xenial 16.04 (LTS)")])]),s._v(" "),t("p",[s._v("Docker CE 可以安装在 64 位的 x86 平台或 ARM 平台上。Ubuntu发行版中，LTS（Long-Term-Support）长期支持版本，会获得 5 年的升级维护支持，这样的版本会更稳定，因此在生产环境中推荐使用 LTS 版本。")]),s._v(" "),t("h3",{attrs:{id:"卸载旧版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本","aria-hidden":"true"}},[s._v("#")]),s._v(" 卸载旧版本")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" remove docker "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               docker-engine "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               docker.io\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"使用-apt-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-apt-安装","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用 APT 安装")]),s._v(" "),t("p",[s._v("由于 apt 源使用 HTTPS 以确保软件下载过程中不被篡改。因此，我们首先需要添加使用 HTTPS 传输的软件包以及 CA 证书。")]),s._v(" "),t("h3",{attrs:{id:"修改数据源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改数据源","aria-hidden":"true"}},[s._v("#")]),s._v(" 修改数据源")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/apt/sources.list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("删除全部内容并修改为")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("deb http://mirrors.aliyun.com/ubuntu/ xenial main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted universe multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"更新数据源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新数据源","aria-hidden":"true"}},[s._v("#")]),s._v(" 更新数据源")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("由于 apt 源使用 HTTPS 以确保软件下载过程中不被篡改。因此，我们首先需要添加使用 HTTPS 传输的软件包以及 CA 证书。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" apt-transport-https ca-certificates "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" software-properties-common\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"安装-gpg-证书"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-gpg-证书","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 GPG 证书")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"写入软件源信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写入软件源信息","aria-hidden":"true"}},[s._v("#")]),s._v(" 写入软件源信息")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu '),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release -cs"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' stable"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"更新并安装-docker-ce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新并安装-docker-ce","aria-hidden":"true"}},[s._v("#")]),s._v(" 更新并安装 Docker CE")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" -y update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"测试-docker-是否安装正确"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试-docker-是否安装正确","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试 Docker 是否安装正确")]),s._v(" "),t("p",[s._v("运行如下命令")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker run hello-world\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("若能输出如下信息，则安装成功")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("Unable to "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" image "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello-world:latest'")]),s._v(" locally\nlatest: Pulling from library/hello-world\n1b930d010525: Pull complete \nDigest: sha256:b8ba256769a0ac28dd126d584e0a2011cd2877f3f76e093a7ae560f2a5301c00\nStatus: Downloaded newer image "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" hello-world:latest\n\nHello from Docker"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". The Docker client contacted the Docker daemon.\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". The Docker daemon pulled the "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello-world"')]),s._v(" image from the Docker Hub.\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("amd64"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". The Docker daemon created a new container from that image "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" runs the\n    executable that produces the output you are currently reading.\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(". The Docker daemon streamed that output to the Docker client, "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" sent it\n    to your terminal.\n\nTo try something "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\nShare images, automate workflows, and "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" with a "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" Docker ID:\n https://hub.docker.com/\n\nFor "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" examples and ideas, visit:\n https://docs.docker.com/get-started/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])])])},[],!1,null,null,null);a.default=n.exports}}]);