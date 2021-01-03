(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{568:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"挂载主机目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载主机目录"}},[t._v("#")]),t._v(" 挂载主机目录")]),t._v(" "),a("h2",{attrs:{id:"挂载一个主机目录作为数据卷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载一个主机目录作为数据卷"}},[t._v("#")]),t._v(" 挂载一个主机目录作为数据卷")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("--mount")]),t._v(" 标记可以指定挂载一个本地主机的目录到容器中去。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ docker run -d -P "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --name web "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -v /src/webapp:/opt/webapp \\")]),t._v("\n    --mount "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bind,source"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/src/webapp,target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/webapp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    training/webapp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    python app.py\n")])])]),a("p",[t._v("上面的命令加载主机的 "),a("code",[t._v("/src/webapp")]),t._v(" 目录到容器的 "),a("code",[t._v("/opt/webapp")]),t._v("目录。这个功能在进行测试的时候十分方便，比如用户可以放置一些程序到本地目录中，来查看容器是否正常工作。本地目录的路径必须是绝对路径，以前使用 "),a("code",[t._v("-v")]),t._v(" 参数时如果本地目录不存在 Docker 会自动为你创建一个文件夹，现在使用 "),a("code",[t._v("--mount")]),t._v(" 参数时如果本地目录不存在，Docker 会报错。")]),t._v(" "),a("p",[t._v("Docker 挂载主机目录的默认权限是 "),a("code",[t._v("读写")]),t._v("，用户也可以通过增加 "),a("code",[t._v("readonly")]),t._v(" 指定为 "),a("code",[t._v("只读")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ docker run -d -P "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --name web "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -v /src/webapp:/opt/webapp:ro \\")]),t._v("\n    --mount "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bind,source"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/src/webapp,target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/opt/webapp,readonly "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    training/webapp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    python app.py\n")])])]),a("p",[t._v("加了 "),a("code",[t._v("readonly")]),t._v(" 之后，就挂载为 "),a("code",[t._v("只读")]),t._v(" 了。如果你在容器内 "),a("code",[t._v("/opt/webapp")]),t._v(" 目录新建文件，会显示如下错误")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("/opt/webapp "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# touch new.txt")]),t._v("\ntouch: new.txt: Read-only "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" system\n")])])]),a("h2",{attrs:{id:"查看数据卷的具体信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看数据卷的具体信息"}},[t._v("#")]),t._v(" 查看数据卷的具体信息")]),t._v(" "),a("p",[t._v("在主机里使用以下命令可以查看 "),a("code",[t._v("web")]),t._v(" 容器的信息")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ docker inspect web\n")])])]),a("p",[a("code",[t._v("挂载主机目录")]),t._v(' 的配置信息在 "Mounts" Key 下面')]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Mounts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bind"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Source"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/src/webapp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Destination"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/opt/webapp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Mode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"RW"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Propagation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rprivate"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"挂载一个本地主机文件作为数据卷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载一个本地主机文件作为数据卷"}},[t._v("#")]),t._v(" 挂载一个本地主机文件作为数据卷")]),t._v(" "),a("p",[a("code",[t._v("--mount")]),t._v(" 标记也可以从主机挂载单个文件到容器中")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ docker run --rm -it "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -v $HOME/.bash_history:/root/.bash_history \\")]),t._v("\n   --mount "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bind,source"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/.bash_history,target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/root/.bash_history "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n   ubuntu:18.04 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n\nroot@2affd44b4667:/"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# history")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("  diskutil list\n")])])]),a("p",[t._v("这样就可以记录在容器输入过的命令了。")])])}),[],!1,null,null,null);s.default=n.exports}}]);