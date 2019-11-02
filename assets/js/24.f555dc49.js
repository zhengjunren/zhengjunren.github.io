(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{254:function(s,a,e){"use strict";e.r(a);var t=e(2),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"安装与卸载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装与卸载"}},[s._v("#")]),s._v(" 安装与卸载")]),s._v(" "),e("p",[e("code",[s._v("Compose")]),s._v(" 支持 Linux、macOS、Windows 10 三大平台。")]),s._v(" "),e("p",[e("code",[s._v("Compose")]),s._v(" 可以通过 Python 的包管理工具 "),e("code",[s._v("pip")]),s._v(" 进行安装，也可以直接下载编译好的二进制文件使用，甚至能够直接在 Docker 容器中运行。")]),s._v(" "),e("p",[e("code",[s._v("Docker Desktop for Mac/Windows")]),s._v(" 自带 "),e("code",[s._v("docker-compose")]),s._v(" 二进制文件，安装 Docker 之后可以直接使用。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker-compose --version\n\ndocker-compose version "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.24")]),s._v(".1, build 4667896b\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("Linux 系统请使用以下介绍的方法安装。")]),s._v(" "),e("h2",{attrs:{id:"二进制包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二进制包"}},[s._v("#")]),s._v(" 二进制包")]),s._v(" "),e("p",[s._v("在 Linux 上的也安装十分简单，从 "),e("a",{attrs:{href:"https://github.com/docker/compose/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方 GitHub Release"),e("OutboundLink")],1),s._v(" 处直接下载编译好的二进制文件即可。")]),s._v(" "),e("p",[s._v("例如，在 Linux 64 位系统上直接下载对应的二进制包。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L https://github.com/docker/compose/releases/download/1.24.1/docker-compose-"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -s"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("-"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -m"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /usr/local/bin/docker-compose\n\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"pip-安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pip-安装"}},[s._v("#")]),s._v(" PIP 安装")]),s._v(" "),e("p",[e("em",[s._v("注：")]),s._v(" "),e("code",[s._v("x86_64")]),s._v(" 架构的 Linux 建议按照上边的方法下载二进制包进行安装，如果您计算机的架构是 "),e("code",[s._v("ARM")]),s._v(" (例如，树莓派)，再使用 "),e("code",[s._v("pip")]),s._v(" 安装。")]),s._v(" "),e("p",[s._v("这种方式是将 Compose 当作一个 Python 应用来从 pip 源中安装。")]),s._v(" "),e("p",[s._v("执行安装命令：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pip "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -U docker-compose\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("可以看到类似如下输出，说明安装成功。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Collecting docker-compose\n  Downloading docker-compose-1.24.1.tar.gz "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("149kB"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": 149kB downloaded\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nSuccessfully installed docker-compose cached-property requests texttable websocket-client docker-py dockerpty six enum34 backports.ssl-match-hostname ipaddress\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"bash-补全命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bash-补全命令"}},[s._v("#")]),s._v(" bash 补全命令")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L https://raw.githubusercontent.com/docker/compose/1.24.1/contrib/completion/bash/docker-compose "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/bash_completion.d/docker-compose\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"卸载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[s._v("#")]),s._v(" 卸载")]),s._v(" "),e("p",[s._v("如果是二进制包方式安装的，删除二进制文件即可。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" /usr/local/bin/docker-compose\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果是通过 "),e("code",[s._v("pip")]),s._v(" 安装的，则执行如下命令即可删除。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pip uninstall docker-compose\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);