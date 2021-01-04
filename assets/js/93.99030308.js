(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{666:function(t,s,r){"use strict";r.r(s);var e=r(7),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("国内从 Docker Hub 拉取镜像有时会遇到困难，此时可以配置镜像加速器。国内很多云服务商都提供了国内加速器服务，例如：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/Azure/container-service-for-azure-china/blob/master/aks/README.md#22-container-registry-proxy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure 中国镜像 "),r("code",[t._v("https://dockerhub.azk8s.cn")]),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://cr.console.aliyun.com/cn-hangzhou/mirrors",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里云加速器(需登录账号获取)"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://kirk-enterprise.github.io/hub-docs/#/user-guide/mirror",target:"_blank",rel:"noopener noreferrer"}},[t._v("七牛云加速器 "),r("code",[t._v("https://reg-mirror.qiniu.com")]),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("由于镜像服务可能出现宕机，建议同时配置多个镜像。")])]),t._v(" "),r("blockquote",[r("p",[t._v("国内各大云服务商均提供了 Docker 镜像加速服务，建议根据运行 Docker 的云平台选择对应的镜像加速服务，具体请参考官方文档。")])]),t._v(" "),r("p",[t._v("本节我们以 Azure 中国镜像 "),r("code",[t._v("https://dockerhub.azk8s.cn")]),t._v(" 为例进行介绍。")]),t._v(" "),r("h2",{attrs:{id:"ubuntu-16-04-、debian-8-、centos-7"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-16-04-、debian-8-、centos-7"}},[t._v("#")]),t._v(" Ubuntu 16.04+、Debian 8+、CentOS 7")]),t._v(" "),r("p",[t._v("对于使用 "),r("a",{attrs:{href:"https://www.freedesktop.org/wiki/Software/systemd/",target:"_blank",rel:"noopener noreferrer"}},[t._v("systemd"),r("OutboundLink")],1),t._v(" 的系统，请在 "),r("code",[t._v("/etc/docker/daemon.json")]),t._v(" 中写入如下内容（如果文件不存在请新建该文件）")]),t._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"registry-mirrors"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://dockerhub.azk8s.cn"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://reg-mirror.qiniu.com"')]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("blockquote",[r("p",[t._v("注意，一定要保证该文件符合 json 规范，否则 Docker 将不能启动。")])]),t._v(" "),r("p",[t._v("之后重新启动服务。")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart docker\n")])])]),r("blockquote",[r("p",[t._v("注意：如果您之前查看旧教程，修改了 "),r("code",[t._v("docker.service")]),t._v(" 文件内容，请去掉您添加的内容（"),r("code",[t._v("--registry-mirror=https://dockerhub.azk8s.cn")]),t._v("）。")])]),t._v(" "),r("h2",{attrs:{id:"windows-10"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-10"}},[t._v("#")]),t._v(" Windows 10")]),t._v(" "),r("p",[t._v("对于使用 "),r("code",[t._v("Windows 10")]),t._v(" 的用户，在任务栏托盘 Docker 图标内右键菜单选择 "),r("code",[t._v("Settings")]),t._v("，打开配置窗口后在左侧导航菜单选择 "),r("code",[t._v("Docker Engine")]),t._v("，在右侧像下边一样编辑 json 文件，之后点击 "),r("code",[t._v("Apply & Restart")]),t._v(" 保存后 Docker 就会重启并应用配置的镜像地址了。")]),t._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"registry-mirrors"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://dockerhub.azk8s.cn"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://reg-mirror.qiniu.com"')]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("h2",{attrs:{id:"macos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#macos"}},[t._v("#")]),t._v(" macOS")]),t._v(" "),r("p",[t._v("对于使用 macOS 的用户，在任务栏点击 Docker Desktop 应用图标 -> "),r("code",[t._v("Perferences")]),t._v("，在左侧导航菜单选择 "),r("code",[t._v("Docker Engine")]),t._v("，在右侧像下边一样编辑 json 文件。修改完成之后，点击 "),r("code",[t._v("Apply & Restart")]),t._v(" 按钮，Docker 就会重启并应用配置的镜像地址了。")]),t._v(" "),r("div",{staticClass:"language-json extra-class"},[r("pre",{pre:!0,attrs:{class:"language-json"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v('"registry-mirrors"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://dockerhub.azk8s.cn"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://reg-mirror.qiniu.com"')]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("h2",{attrs:{id:"检查加速器是否生效"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#检查加速器是否生效"}},[t._v("#")]),t._v(" 检查加速器是否生效")]),t._v(" "),r("p",[t._v("执行 "),r("code",[t._v("$ docker info")]),t._v("，如果从结果中看到了如下内容，说明配置成功。")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("Registry Mirrors:\n https://dockerhub.azk8s.cn/\n")])])]),r("h2",{attrs:{id:"gcr-io-镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gcr-io-镜像"}},[t._v("#")]),t._v(" gcr.io 镜像")]),t._v(" "),r("p",[t._v("国内无法直接获取 "),r("code",[t._v("gcr.io/*")]),t._v(" 镜像，我们可以将 "),r("code",[t._v("gcr.io/<repo-name>/<image-name>:<version>")]),t._v(" 替换为 "),r("code",[t._v("gcr.azk8s.cn/<repo-name>/<image-name>:<version>")]),t._v(" ,例如")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $ docker pull gcr.io/google_containers/hyperkube-amd64:v1.9.2")]),t._v("\n\n$ docker pull gcr.azk8s.cn/google_containers/hyperkube-amd64:v1.9.2\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);