(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{571:function(a,e,t){"use strict";t.r(e);var s=t(7),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("在使用 "),t("code",[a._v("-d")]),a._v(" 参数时，容器启动后会进入后台。")]),a._v(" "),t("p",[a._v("某些时候需要进入容器进行操作，包括使用 "),t("code",[a._v("docker attach")]),a._v(" 命令或 "),t("code",[a._v("docker exec")]),a._v(" 命令，推荐大家使用 "),t("code",[a._v("docker exec")]),a._v(" 命令，原因会在下面说明。")]),a._v(" "),t("h2",{attrs:{id:"attach-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#attach-命令"}},[a._v("#")]),a._v(" "),t("code",[a._v("attach")]),a._v(" 命令")]),a._v(" "),t("p",[a._v("下面示例如何使用 "),t("code",[a._v("docker attach")]),a._v(" 命令。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker run -dit ubuntu\n243c32535da7d142fb0e6df616a3c3ada0b8ab417937c853a9e1c251f499f550\n\n$ docker container "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES\n243c32535da7        ubuntu:latest       "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/bin/bash"')]),a._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("18")]),a._v(" seconds ago      Up "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("17")]),a._v(" seconds                           nostalgic_hypatia\n\n$ docker attach 243c\nroot@243c32535da7:/"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#")]),a._v("\n")])])]),t("p",[t("em",[a._v("注意：")]),a._v(" 如果从这个 stdin 中 exit，会导致容器的停止。")]),a._v(" "),t("h2",{attrs:{id:"exec-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exec-命令"}},[a._v("#")]),a._v(" "),t("code",[a._v("exec")]),a._v(" 命令")]),a._v(" "),t("h3",{attrs:{id:"i-t-参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-t-参数"}},[a._v("#")]),a._v(" -i -t 参数")]),a._v(" "),t("p",[t("code",[a._v("docker exec")]),a._v(" 后边可以跟多个参数，这里主要说明 "),t("code",[a._v("-i")]),a._v(" "),t("code",[a._v("-t")]),a._v(" 参数。")]),a._v(" "),t("p",[a._v("只用 "),t("code",[a._v("-i")]),a._v(" 参数时，由于没有分配伪终端，界面没有我们熟悉的 Linux 命令提示符，但命令执行结果仍然可以返回。")]),a._v(" "),t("p",[a._v("当 "),t("code",[a._v("-i")]),a._v(" "),t("code",[a._v("-t")]),a._v(" 参数一起使用时，则可以看到我们熟悉的 Linux 命令提示符。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ docker run -dit ubuntu\n69d137adef7a8a689cbcb059e94da5489d3cddd240ff675c640c8d96e84fe1f6\n\n$ docker container "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES\n69d137adef7a        ubuntu:latest       "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/bin/bash"')]),a._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("18")]),a._v(" seconds ago      Up "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("17")]),a._v(" seconds                           zealous_swirles\n\n$ docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -i 69d1 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\nbin\nboot\ndev\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n\n$ docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it 69d1 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\nroot@69d137adef7a:/"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#")]),a._v("\n")])])]),t("p",[a._v("如果从这个 stdin 中 exit，不会导致容器的停止。这就是为什么推荐大家使用 "),t("code",[a._v("docker exec")]),a._v(" 的原因。")]),a._v(" "),t("p",[a._v("更多参数说明请使用 "),t("code",[a._v("docker exec --help")]),a._v(" 查看。")])])}),[],!1,null,null,null);e.default=n.exports}}]);