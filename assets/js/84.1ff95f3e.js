(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{359:function(v,_,t){"use strict";t.r(_);var r=t(24),e=Object(r.a)({},function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"linux-文件权限管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-文件权限管理","aria-hidden":"true"}},[v._v("#")]),v._v(" Linux 文件权限管理")]),v._v(" "),t("h2",{attrs:{id:"查看文件和目录的权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看文件和目录的权限","aria-hidden":"true"}},[v._v("#")]),v._v(" 查看文件和目录的权限")]),v._v(" "),t("p",[t("code",[v._v("ls –al")]),v._v("使用"),t("code",[v._v("ls")]),v._v("不带参数只显示文件名称，通过"),t("code",[v._v("ls –al")]),v._v("可以显示文件或者目录的权限信息。")]),v._v(" "),t("p",[t("code",[v._v("ls -l")]),v._v("文件名 显示信息包括：文件类型 ("),t("code",[v._v("d")]),v._v("目录，"),t("code",[v._v("-")]),v._v("普通文件，"),t("code",[v._v("l")]),v._v("链接文件)，文件权限，文件的用户，文件的所属组，文件的大小，文件的创建时间，文件的名称")]),v._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[v._v("-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("1")]),v._v(" zjr zjr "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("807")]),v._v(" Apr  "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("4")]),v._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[v._v("2018")]),v._v(" .profile\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br")])]),t("ul",[t("li",[t("code",[v._v("-")]),v._v("：普通文件")]),v._v(" "),t("li",[t("code",[v._v("rw-")]),v._v("：说明用户"),t("code",[v._v("zjr")]),v._v("有读写权限，没有运行权限")]),v._v(" "),t("li",[t("code",[v._v("r--")]),v._v("：表示用户组"),t("code",[v._v("zjr")]),v._v("只有读权限，没有写和运行的权限")]),v._v(" "),t("li",[t("code",[v._v("r--")]),v._v("：其他用户只有读权限，没有写权限和运行的权限")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("-rw-r--r--")]),v._v(" "),t("th",[v._v("1")]),v._v(" "),t("th",[v._v("zjr")]),v._v(" "),t("th",[v._v("zjr")]),v._v(" "),t("th",[v._v("807")]),v._v(" "),t("th",[v._v("Apr  4  2018")]),v._v(" "),t("th",[v._v(".profile")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("文档类型及权限")]),v._v(" "),t("td",[v._v("连接数")]),v._v(" "),t("td",[v._v("文档所属用户")]),v._v(" "),t("td",[v._v("文档所属组")]),v._v(" "),t("td",[v._v("文档大小")]),v._v(" "),t("td",[v._v("文档最后被修改日期")]),v._v(" "),t("td",[v._v("文档名称")])])])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("-")]),v._v(" "),t("th",[v._v("rw-")]),v._v(" "),t("th",[v._v("r--")]),v._v(" "),t("th",[v._v("r--")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("文档类型")]),v._v(" "),t("td",[v._v("文档所有者权限（user）")]),v._v(" "),t("td",[v._v("文档所属用户组权限（group）")]),v._v(" "),t("td",[v._v("其他用户权限（other）")])])])]),v._v(" "),t("h3",{attrs:{id:"文档类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文档类型","aria-hidden":"true"}},[v._v("#")]),v._v(" 文档类型")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("d")]),v._v(" 表示目录")]),v._v(" "),t("li",[t("code",[v._v("l")]),v._v(" 表示软连接")]),v._v(" "),t("li",[t("code",[v._v("–")]),v._v(" 表示文件")]),v._v(" "),t("li",[t("code",[v._v("c")]),v._v(" 表示串行端口字符设备文件")]),v._v(" "),t("li",[t("code",[v._v("b")]),v._v(" 表示可供存储的块设备文件")]),v._v(" "),t("li",[v._v("余下的字符 3 个字符为一组。"),t("code",[v._v("r")]),v._v("只读，"),t("code",[v._v("w")]),v._v("可写，"),t("code",[v._v("x")]),v._v("可执行，"),t("code",[v._v("-")]),v._v("表示无此权限")])]),v._v(" "),t("h3",{attrs:{id:"连接数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接数","aria-hidden":"true"}},[v._v("#")]),v._v(" 连接数")]),v._v(" "),t("p",[v._v("指有多少个文件指向同一个索引节点。")]),v._v(" "),t("h3",{attrs:{id:"文档所属用户和所属组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文档所属用户和所属组","aria-hidden":"true"}},[v._v("#")]),v._v(" 文档所属用户和所属组")]),v._v(" "),t("p",[v._v("就是文档属于哪个用户和用户组。文件所属用户和组是可以更改的")]),v._v(" "),t("h3",{attrs:{id:"文档大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文档大小","aria-hidden":"true"}},[v._v("#")]),v._v(" 文档大小")]),v._v(" "),t("p",[v._v("默认是 bytes")]),v._v(" "),t("h2",{attrs:{id:"更改操作权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更改操作权限","aria-hidden":"true"}},[v._v("#")]),v._v(" 更改操作权限")]),v._v(" "),t("h3",{attrs:{id:"chown"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chown","aria-hidden":"true"}},[v._v("#")]),v._v(" chown")]),v._v(" "),t("p",[v._v("是 change owner 的意思，主要作用就是改变文件或者目录所有者，所有者包含用户和用户组")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("chown [-R] 用户名称 文件或者目录")])]),v._v(" "),t("li",[t("code",[v._v("chown [-R] 用户名称 用户组名称 文件或目录")])])]),v._v(" "),t("blockquote",[t("p",[v._v("-R： 进行递归式的权限更改，将目录下的所有文件、子目录更新为指定用户组权限")])]),v._v(" "),t("h3",{attrs:{id:"chmod"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#chmod","aria-hidden":"true"}},[v._v("#")]),v._v(" chmod")]),v._v(" "),t("p",[v._v("改变访问权限")]),v._v(" "),t("p",[t("code",[v._v("chmod [who] [+ | - | =] [mode] 文件名")])])])},[],!1,null,null,null);_.default=e.exports}}]);