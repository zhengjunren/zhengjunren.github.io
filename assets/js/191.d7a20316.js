(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{764:function(s,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语句"}},[s._v("#")]),s._v(" 语句")]),s._v(" "),t("ol",[t("li",[s._v("切换数据库："),t("code",[s._v("select index")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("REDIS:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("select "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换数据库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OK"')]),s._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("查看数据库大小："),t("code",[s._v("DBSIZE")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("REDIS:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">")]),s._v("DBSIZE\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("查看数据库所有的 key："),t("code",[s._v("key *")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("REDIS:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">")]),s._v("keys *\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v("\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("清除当前数据库："),t("code",[s._v("flushdb")]),s._v("，清除全部："),t("code",[s._v("flushall")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("REDIS:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("3")]),s._v(">")]),s._v("flushdb\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OK"')]),s._v("\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("判断 key 是否存在："),t("code",[s._v("exists key")])]),s._v(" "),t("li",[s._v("移动 key 至其他数据库 ："),t("code",[s._v("move key 1")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("REDIS:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("MOVE name "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("\n")])])]),t("ol",{attrs:{start:"7"}},[t("li",[s._v("设置 key 的存活时间："),t("code",[s._v("EXPIRE KEY 10")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("REDIS:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("SET name ZHENGJUNREN\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OK"')]),s._v("\nREDIS:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("EXPIRE name "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("\nREDIS:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("TTL name\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-2"')]),s._v("\n")])])]),t("ol",{attrs:{start:"8"}},[t("li",[s._v("查询 key 的存活时间")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("REDIS:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("TTL name\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-2"')]),s._v("\n")])])]),t("ol",{attrs:{start:"9"}},[t("li",[s._v("删除 key："),t("code",[s._v("del key")])]),s._v(" "),t("li",[s._v("查看 key 数据类型："),t("code",[s._v("TYPE KEY")])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("REDIS:"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("TYPE name\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string"')]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("Redis` 是单线程的")])]),s._v(" "),t("p",[t("code",[s._v("Redis")]),s._v("是基于内存操作的，CPU 不是"),t("code",[s._v("Redis")]),s._v("的性能瓶颈，而是机器内存和网络带宽，既然可以使用单线程实现，就使用了单线程。为什么单线程内存还这么快？")]),s._v(" "),t("p",[s._v("redis 将所有的数据放在内存中的，所以使用单线程去操作效率最高，多线程会产生上下文切换（耗时的操作），对于内存系统来说，如果没有上下文切换，效率就是最高的，多次读写都是在一个 CPU 上的。")]),s._v(" "),t("p",[s._v("误区 1：高性能的服务器一定是多线程的")]),s._v(" "),t("p",[s._v("误区 2：多线程一定比单线程效率高")])])}),[],!1,null,null,null);a.default=r.exports}}]);