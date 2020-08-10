(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{540:function(s,e,a){"use strict";a.r(e);var t=a(29),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux-配置-dhcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-配置-dhcp"}},[s._v("#")]),s._v(" Linux 配置 DHCP")]),s._v(" "),a("h2",{attrs:{id:"dhcp服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dhcp服务"}},[s._v("#")]),s._v(" DHCP服务")]),s._v(" "),a("ol",[a("li",[s._v("安装isc-dhcp-server：")])]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("$ sudo apt install isc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dhcp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("查找目标主机的网卡名称：")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191021160115110.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNDk1MzQw,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("接下来配置 /etc/default/isc-dhcp-server 文件：")])]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("$ sudo vim "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("default"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("isc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dhcp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("将INTERFACES的内容补充为目标主机的网卡名称ens33\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191021160439503.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNDk1MzQw,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("配置/etc/dhcp/dhcpd.conf文件：")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/dhcp/dhcpd.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("文件内容中需要配置的是域名和子网IP等信息，对于第一文件片段中的\n"),a("code",[s._v("option domain-name “example.org”")]),s._v("不用修改，下一行的"),a("code",[s._v("domain-name-server")]),s._v("需要注释掉在第二文件片段中补充。对于第二文件片段中的白色部分，全是新添加的信息。目标主机的子网IP为"),a("code",[s._v("192.168.182.134")]),s._v("，因此subnet为"),a("code",[s._v("192.168.182.0")]),s._v("，DHCP分配范围设置为10-100，其余地址留给广播和静态IP。网关和DNS均设置为"),a("code",[s._v("192.168.182.1")]),s._v("，广播地址为"),a("code",[s._v("192.168.182.255")]),s._v("，"),a("code",[s._v("ntp-servers和netbios-name-servers")]),s._v("设置与DNS一致，"),a("code",[s._v("netbios-node-type")]),s._v("默认为 8")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191021161151349.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNDk1MzQw,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("添加如下内容：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('subnet 192.168.182.0 netmask 255.255.255.0 {\nrange 192.168.182.10 192.168.182.100;\noption domain-name-servers 202.206.192.33, 223.5.5.5;\noption domain-name "zxc.com";\noption subnet-mask 255.255.255.0;\noption routers 192.168.182.1;\noption broadcast-address 192.168.182.255;\ndefault-lease-time 600;\nmax-lease-time 7200;\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191021161003802.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNDk1MzQw,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[s._v("配置完成之后重启DHCP服务,查看效果：")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" isc-dhcp-server restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查看dhcp是否正常运行：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -uap\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20191021161702545.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNDk1MzQw,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("参考链接:")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/u010177634/article/details/53044777",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/u010177634/article/details/53044777"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);