(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{586:function(a,s,t){"use strict";t.r(s);var e=t(6),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"docker-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-常用命令"}},[a._v("#")]),a._v(" Docker 常用命令")]),a._v(" "),t("h2",{attrs:{id:"查看-docker-版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看-docker-版本"}},[a._v("#")]),a._v(" 查看 Docker 版本")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker version\n")])])]),t("h2",{attrs:{id:"从-docker-文件构建-docker-映像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从-docker-文件构建-docker-映像"}},[a._v("#")]),a._v(" 从 Docker 文件构建 Docker 映像")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker build -t image-name docker-file-location\n")])])]),t("h2",{attrs:{id:"运行-docker-映像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行-docker-映像"}},[a._v("#")]),a._v(" 运行 Docker 映像")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker run -d image-name\n")])])]),t("h2",{attrs:{id:"查看可用的-docker-映像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看可用的-docker-映像"}},[a._v("#")]),a._v(" 查看可用的 Docker 映像")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker images\n")])])]),t("h2",{attrs:{id:"查看最近的运行容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看最近的运行容器"}},[a._v("#")]),a._v(" 查看最近的运行容器")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" -l\n")])])]),t("h2",{attrs:{id:"查看所有正在运行的容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看所有正在运行的容器"}},[a._v("#")]),a._v(" 查看所有正在运行的容器")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" -a\n")])])]),t("h2",{attrs:{id:"停止运行容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止运行容器"}},[a._v("#")]),a._v(" 停止运行容器")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker stop container_id\n")])])]),t("h2",{attrs:{id:"删除一个镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除一个镜像"}},[a._v("#")]),a._v(" 删除一个镜像")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker rmi image-name\n")])])]),t("h2",{attrs:{id:"删除所有镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除所有镜像"}},[a._v("#")]),a._v(" 删除所有镜像")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker rmi "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker images -q"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),t("h2",{attrs:{id:"强制删除所有镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强制删除所有镜像"}},[a._v("#")]),a._v(" 强制删除所有镜像")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker rmi -r "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker images -q"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),t("h2",{attrs:{id:"删除所有虚悬镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除所有虚悬镜像"}},[a._v("#")]),a._v(" 删除所有虚悬镜像")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker rmi "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker images -q -f "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("dangling")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),t("h2",{attrs:{id:"删除所有容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除所有容器"}},[a._v("#")]),a._v(" 删除所有容器")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" -a -q"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),t("h2",{attrs:{id:"进入-docker-容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进入-docker-容器"}},[a._v("#")]),a._v(" 进入 Docker 容器")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it container-id /bin/bash\n")])])]),t("h2",{attrs:{id:"查看所有数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看所有数据卷"}},[a._v("#")]),a._v(" 查看所有数据卷")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker volume "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n")])])]),t("h2",{attrs:{id:"删除指定数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除指定数据卷"}},[a._v("#")]),a._v(" 删除指定数据卷")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker volume "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("volume_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h2",{attrs:{id:"删除所有未关联的数据卷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除所有未关联的数据卷"}},[a._v("#")]),a._v(" 删除所有未关联的数据卷")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker volume "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("docker volume "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" -qf "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("dangling")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),t("h2",{attrs:{id:"从主机复制文件到容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从主机复制文件到容器"}},[a._v("#")]),a._v(" 从主机复制文件到容器")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" host_path containerID:container_path\n")])])]),t("h2",{attrs:{id:"从容器复制文件到主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从容器复制文件到主机"}},[a._v("#")]),a._v(" 从容器复制文件到主机")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" containerID:container_path host_path\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);