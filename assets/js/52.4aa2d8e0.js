(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{317:function(s,a,e){"use strict";e.r(a);var r=e(19),t=Object(r.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker-常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-常用命令"}},[s._v("#")]),s._v(" Docker 常用命令")]),s._v(" "),e("h2",{attrs:{id:"查看-docker-版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看-docker-版本"}},[s._v("#")]),s._v(" 查看 Docker 版本")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker version\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"从-docker-文件构建-docker-映像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从-docker-文件构建-docker-映像"}},[s._v("#")]),s._v(" 从 Docker 文件构建 Docker 映像")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker build -t image-name docker-file-location\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"运行-docker-映像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行-docker-映像"}},[s._v("#")]),s._v(" 运行 Docker 映像")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker run -d image-name\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"查看可用的-docker-映像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看可用的-docker-映像"}},[s._v("#")]),s._v(" 查看可用的 Docker 映像")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker images\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"查看最近的运行容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看最近的运行容器"}},[s._v("#")]),s._v(" 查看最近的运行容器")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -l\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"查看所有正在运行的容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看所有正在运行的容器"}},[s._v("#")]),s._v(" 查看所有正在运行的容器")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"停止运行容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#停止运行容器"}},[s._v("#")]),s._v(" 停止运行容器")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker stop container_id\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"删除一个镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除一个镜像"}},[s._v("#")]),s._v(" 删除一个镜像")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker rmi image-name\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"删除所有镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除所有镜像"}},[s._v("#")]),s._v(" 删除所有镜像")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker rmi "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker images -q"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"强制删除所有镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强制删除所有镜像"}},[s._v("#")]),s._v(" 强制删除所有镜像")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker rmi -r "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker images -q"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"删除所有虚悬镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除所有虚悬镜像"}},[s._v("#")]),s._v(" 删除所有虚悬镜像")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker rmi "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker images -q -f "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dangling")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"删除所有容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除所有容器"}},[s._v("#")]),s._v(" 删除所有容器")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a -q"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"进入-docker-容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入-docker-容器"}},[s._v("#")]),s._v(" 进入 Docker 容器")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it container-id /bin/bash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"查看所有数据卷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看所有数据卷"}},[s._v("#")]),s._v(" 查看所有数据卷")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker volume "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"删除指定数据卷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除指定数据卷"}},[s._v("#")]),s._v(" 删除指定数据卷")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker volume "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("volume_name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"删除所有未关联的数据卷"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除所有未关联的数据卷"}},[s._v("#")]),s._v(" 删除所有未关联的数据卷")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("docker volume "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker volume "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -qf "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dangling")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"从主机复制文件到容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从主机复制文件到容器"}},[s._v("#")]),s._v(" 从主机复制文件到容器")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" host_path containerID:container_path\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"从容器复制文件到主机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从容器复制文件到主机"}},[s._v("#")]),s._v(" 从容器复制文件到主机")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" containerID:container_path host_path\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);