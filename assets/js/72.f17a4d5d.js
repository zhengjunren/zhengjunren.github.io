(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{264:function(s,a,t){"use strict";t.r(a);var e=t(5),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"获取镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取镜像"}},[s._v("#")]),s._v(" 获取镜像")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://hub.docker.com/explore/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Hub"),t("OutboundLink")],1),s._v(" 上有大量的高质量的镜像可以用，这里我们就说一下怎么获取这些镜像。")]),s._v(" "),t("p",[s._v("从 Docker 镜像仓库获取镜像的命令是 "),t("code",[s._v("docker pull")]),s._v("。其命令格式为：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("docker pull "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("选项"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Docker Registry 地址"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":端口号"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("仓库名"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":标签"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("具体的选项可以通过 "),t("code",[s._v("docker pull --help")]),s._v(" 命令看到，这里我们说一下镜像名称的格式。")]),s._v(" "),t("ul",[t("li",[s._v("Docker 镜像仓库地址：地址的格式一般是 "),t("code",[s._v("<域名/IP>[:端口号]")]),s._v("。默认地址是 Docker Hub。")]),s._v(" "),t("li",[s._v("仓库名：如之前所说，这里的仓库名是两段式名称，即 "),t("code",[s._v("<用户名>/<软件名>")]),s._v("。对于 Docker Hub，如果不给出用户名，则默认为 "),t("code",[s._v("library")]),s._v("，也就是官方镜像。")])]),s._v(" "),t("p",[s._v("比如：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker pull ubuntu:18.04\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v(": Pulling from library/ubuntu\nbf5d46315322: Pull complete\n9f13e0ac480c: Pull complete\ne8988b5b3097: Pull complete\n40af181810e7: Pull complete\ne6f7c7e5c03e: Pull complete\nDigest: sha256:147913621d9cdea08853f6ba9116c2e27a3ceffecf3b492983ae97c3d643fbbe\nStatus: Downloaded newer image "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" ubuntu:18.04\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("上面的命令中没有给出 Docker 镜像仓库地址，因此将会从 Docker Hub 获取镜像。而镜像名称是 "),t("code",[s._v("ubuntu:18.04")]),s._v("，因此将会获取官方镜像 "),t("code",[s._v("library/ubuntu")]),s._v(" 仓库中标签为 "),t("code",[s._v("18.04")]),s._v(" 的镜像。")]),s._v(" "),t("p",[s._v("从下载过程中可以看到我们之前提及的分层存储的概念，镜像是由多层存储所构成。下载也是一层层的去下载，并非单一文件。下载过程中给出了每一层的 ID 的前 12 位。并且下载结束后，给出该镜像完整的 "),t("code",[s._v("sha256")]),s._v(" 的摘要，以确保下载一致性。")]),s._v(" "),t("p",[s._v("在使用上面命令的时候，你可能会发现，你所看到的层 ID 以及 "),t("code",[s._v("sha256")]),s._v(" 的摘要和这里的不一样。这是因为官方镜像是一直在维护的，有任何新的 bug，或者版本更新，都会进行修复再以原来的标签发布，这样可以确保任何使用这个标签的用户可以获得更安全、更稳定的镜像。")]),s._v(" "),t("p",[t("em",[s._v("如果从 Docker Hub 下载镜像非常缓慢，可以参照 "),t("RouterLink",{attrs:{to:"/docker/Docker镜像加速.html"}},[s._v("镜像加速器")]),s._v(" 一节配置加速器。")],1)]),s._v(" "),t("h2",{attrs:{id:"运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),t("p",[s._v("有了镜像后，我们就能够以这个镜像为基础启动并运行一个容器。以上面的 "),t("code",[s._v("ubuntu:18.04")]),s._v(" 为例，如果我们打算启动里面的 "),t("code",[s._v("bash")]),s._v(" 并且进行交互式操作的话，可以执行下面的命令。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ docker run -it --rm "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    ubuntu:18.04 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\nroot@e7009c6ce357:/"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /etc/os-release")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ubuntu"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VERSION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"18.04.1 LTS (Bionic Beaver)"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("ubuntu\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ID_LIKE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("debian\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PRETTY_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ubuntu 18.04.1 LTS"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VERSION_ID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"18.04"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HOME_URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://www.ubuntu.com/"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SUPPORT_URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://help.ubuntu.com/"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BUG_REPORT_URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://bugs.launchpad.net/ubuntu/"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PRIVACY_POLICY_URL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VERSION_CODENAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bionic\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UBUNTU_CODENAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bionic\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[t("code",[s._v("docker run")]),s._v(" 就是运行容器的命令，具体格式我们会在 "),t("a",{attrs:{href:"../container"}},[s._v("容器")]),s._v(" 一节进行详细讲解，我们这里简要的说明一下上面用到的参数。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("-it")]),s._v("：这是两个参数，一个是 "),t("code",[s._v("-i")]),s._v("：交互式操作，一个是 "),t("code",[s._v("-t")]),s._v(" 终端。我们这里打算进入 "),t("code",[s._v("bash")]),s._v(" 执行一些命令并查看返回结果，因此我们需要交互式终端。")]),s._v(" "),t("li",[t("code",[s._v("--rm")]),s._v("：这个参数是说容器退出后随之将其删除。默认情况下，为了排障需求，退出的容器并不会立即删除，除非手动 "),t("code",[s._v("docker rm")]),s._v("。我们这里只是随便执行个命令，看看结果，不需要排障和保留结果，因此使用 "),t("code",[s._v("--rm")]),s._v(" 可以避免浪费空间。")]),s._v(" "),t("li",[t("code",[s._v("ubuntu:18.04")]),s._v("：这是指用 "),t("code",[s._v("ubuntu:18.04")]),s._v(" 镜像为基础来启动容器。")]),s._v(" "),t("li",[t("code",[s._v("bash")]),s._v("：放在镜像名后的是 "),t("strong",[s._v("命令")]),s._v("，这里我们希望有个交互式 Shell，因此用的是 "),t("code",[s._v("bash")]),s._v("。")])]),s._v(" "),t("p",[s._v("进入容器后，我们可以在 Shell 下操作，执行任何所需的命令。这里，我们执行了 "),t("code",[s._v("cat /etc/os-release")]),s._v("，这是 Linux 常用的查看当前系统版本的命令，从返回的结果可以看到容器内是 "),t("code",[s._v("Ubuntu 18.04.1 LTS")]),s._v(" 系统。")]),s._v(" "),t("p",[s._v("最后我们通过 "),t("code",[s._v("exit")]),s._v(" 退出了这个容器。")])])}),[],!1,null,null,null);a.default=n.exports}}]);