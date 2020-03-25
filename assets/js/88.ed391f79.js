(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{350:function(s,a,e){"use strict";e.r(a);var n=e(19),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"centos-搭建邮件服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos-搭建邮件服务器"}},[s._v("#")]),s._v(" CentOS 搭建邮件服务器")]),s._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),e("p",[e("strong",[s._v("注意：在搭建此服务器之前，请准备一台干净的centos，在安装时，将主机名设置为localhost！！！！！！！！！！不然很有可能失败！")])]),s._v(" "),e("p",[s._v("本文中，dns服务器使用的是"),e("code",[s._v("bind")]),s._v("，邮件服务器使用的是"),e("code",[s._v("sendmail")]),s._v("，"),e("code",[s._v("dovecot")]),s._v("。\n其中"),e("code",[s._v("centos")]),s._v("的 IP 地址为："),e("code",[s._v("192.168.223.131")])]),s._v(" "),e("h2",{attrs:{id:"关闭防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关闭防火墙"}},[s._v("#")]),s._v(" 关闭防火墙")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 临时关闭")]),s._v("\nsystemctl stop firewalld\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 永久关闭")]),s._v("\nsystemctl disable firewalld \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看防火墙状态")]),s._v("\nsystemctl status  firewalld \n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"安装配置-dns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装配置-dns"}},[s._v("#")]),s._v(" 安装配置 DNS")]),s._v(" "),e("p",[s._v("首先，查看系统中是否已经安装了"),e("code",[s._v("bind")]),s._v(",查看命令如下：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果安装了则显示如下：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/linux/bind1.PNG",alt:"已经安装bind",title:"已经安装bind"}})]),s._v(" "),e("p",[s._v("如果无显示，则表示未安装，输入下面的命令安装：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("bind")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("安装完成之后就可以开始配置了：")]),s._v(" "),e("p",[s._v("打开"),e("code",[s._v("/etc/named.conf")]),s._v("，找到下图中圈中的地方")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/named.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/linux/bind2.PNG",alt:"配置bind",title:"配置bind"}}),s._v("\n修改为：（注意：只用改这三处，其他别改）")]),s._v(" "),e("div",{staticClass:"language-conf line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("listen-on port 53 { any; };\n        listen-on-v6 port 53 { any; };\n/*\n...\n*/\nallow-query     { any; };\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("接着，打开"),e("code",[s._v("/etc/named.rfc1912.zones")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/named.rfc1912.zones\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("打开之后，你会看见有很多这种格式的配置，你可以将它清空，使用下面这个模板：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('zone "localhost.localdomain" IN {\n        type master;\n        file "named.localhost";\n        allow-update { none; };\n};\n\n\nzone "1.0.0.127.in-addr.arpa" IN {\n        type master;\n        file "named.loopback";\n        allow-update { none; };\n};\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("将模板内容更改为：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('zone "zjr.com" IN {\n        type master;\n        file "zjr.localhost";\n        allow-update { none; };\n};\nzone "223.168.192.in-addr.arpa" {\n        type master;\n        file "zjr.loopback";\n        allow-update { none; };\n};\n')])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("其中高亮行的数字是本网段反过来写，如你的网段是"),e("code",[s._v("192.168.76")]),s._v("，则将第六行数字改为"),e("code",[s._v("76.168.192")]),s._v("。")]),s._v(" "),e("p",[s._v("修改完成后，进入到"),e("code",[s._v("/var/named")]),s._v("目录下，执行如下两条复制命令：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cp -a named.localhost zjr.localhost\ncp -a named.localhost zjr.loopback\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("打开"),e("code",[s._v("zjr.localhost")]),s._v(",可以看到：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$TTL 1D\n@       IN SOA  @ rname.invalid. (\n                                        0       ; serial\n                                        1D      ; refresh\n                                        1H      ; retry\n                                        1W      ; expire\n                                        3H )    ; minimum\n        NS      @\n        A       127.0.0.1\n        AAAA    ::1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("将其修改为：("),e("strong",[s._v("注意高亮行的 . 不能少")]),s._v(")")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$TTL 1D\n@       IN SOA  zjr.com. rname.invalid. (\n                                        0       ; serial\n                                        1D      ; refresh\n                                        1H      ; retry\n                                        1W      ; expire\n                                        3H )    ; minimum\n        NS      dns.zjr.com.\n        IN MX 10 pop.zjr.com.\n        IN MX 10 smtp.zjr.com.\ndns     A       192.168.223.131\n@       A       192.168.223.131\nwww     A       192.168.223.131\npop     A       192.168.223.131\nsmtp    A       192.168.223.131\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("p",[s._v("接着打开"),e("code",[s._v("zjr.loopback")]),s._v(",可以看到：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$TTL 1D\n@       IN SOA  @ rname.invalid. (\n                                        0       ; serial\n                                        1D      ; refresh\n                                        1H      ; retry\n                                        1W      ; expire\n                                        3H )    ; minimum\n        NS      @\n        A       127.0.0.1\n        AAAA    ::1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("修改为：("),e("strong",[s._v("注意域名后面的.不能少，此外"),e("code",[s._v("131")]),s._v("是我的主机号，即ip地址的最后一个字段")]),s._v(")")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$TTL 1D\n@       IN SOA  zjr.com. rname.invalid. (\n                                        0       ; serial\n                                        1D      ; refresh\n                                        1H      ; retry\n                                        1W      ; expire\n                                        3H )    ; minimum\n        NS      dns.zjr.com.\n131     PTR     dns.zjr.com.\n131     PTR     pop.zjr.com.\n131     PTR     smtp.zjr.com.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("其次，打开"),e("code",[s._v("/etc/sysconfig/network-scripts/ifcfg-ens33")]),s._v("文件，(ens33是网卡名称)\n在文件中增加如下一行配置：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('DNS1 = "127.0.0.1"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("最后，检查是否配置成功：")]),s._v(" "),e("p",[s._v("先重启"),e("code",[s._v("named")]),s._v("和"),e("code",[s._v("network")]),s._v("服务：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" named restart\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" network restart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("再执行如下命令：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nslookup")]),s._v(" zjr.com\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("若输出如下命令，则表示配置成功：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Server:\t\t127.0.0.1\nAddress:\t127.0.0.1#53\n\nName:\tzjr.com\nAddress: 192.168.223.131\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("打开"),e("code",[s._v("/etc/sysconfig/network")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/network\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("增加：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("localhost.localdomain\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("修改主机名：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("hostnamectl set-hostname zjr.com\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"安装配置-sendmail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装配置-sendmail"}},[s._v("#")]),s._v(" 安装配置 sendmail")]),s._v(" "),e("p",[s._v("首先，查看系统中是否已经安装了"),e("code",[s._v("sendmail")]),s._v(",查看命令如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("rpm -qa | grep sendmail\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("安装命令：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendmail")]),s._v(" sendmail-cf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("进入"),e("code",[s._v("/etc/mail")]),s._v("目录，打开"),e("code",[s._v("access")]),s._v("文件")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/mail\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" access\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("修改为：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Connect:localhost.localdomain           RELAY\nConnect:localhost                       RELAY\nConnect:127.0.0.1                       RELAY\nConnect:zjr.com                         RELAY\nConnect:192.168.223.*                   RELAY\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("在执行如下命令：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("makemap "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("hash")]),s._v(" access.db "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" access\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("打开"),e("code",[s._v("sendmail.mc")]),s._v(",找到下图中处：\n"),e("img",{attrs:{src:"/linux/sendmail1.PNG",alt:"sendmail1",title:"sendmail1"}}),s._v("\n改为：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("DAEMON_OPTIONS(`Port=smtp,Addr=0.0.0.0, Name=MTA')dnl\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("再执行下面这条命令：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("m4  sendmail.mc  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sendmail.cf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("检查：先重新启动，在查看端口监听：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl restart sendmail.service\n\nnetstat -an | grep 25\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("结果如下：\n"),e("img",{attrs:{src:"/linux/sendmail2.PNG",alt:"sendmail1",title:"sendmail1"}})]),s._v(" "),e("h2",{attrs:{id:"安装配置-dovecot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装配置-dovecot"}},[s._v("#")]),s._v(" 安装配置 dovecot")]),s._v(" "),e("p",[s._v("首先，查看系统中是否已经安装了"),e("code",[s._v("dovecot")]),s._v(",查看命令如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("rpm -qa | grep dovecot\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("安装命令：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" dovecot\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("接着打开"),e("code",[s._v("/etc/dovecot/dovecot.conf")])]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/dovecot/dovecot.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("找到下图中圈出的那条配置，将"),e("code",[s._v("#")]),s._v("删除")]),s._v(" "),e("p",[e("img",{attrs:{src:"/linux/dovecot1.PNG",alt:"dovecot",title:"dovecot"}})]),s._v(" "),e("p",[s._v("进入"),e("code",[s._v("/etc/dovecot/conf.d")]),s._v("文件夹：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/dovecot/conf.d\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("打开"),e("code",[s._v("10-auth.conf")]),s._v(",将下图圈起的地方改为：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("-auth.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/linux/dovecot2.PNG",alt:"dovecot",title:"dovecot"}})]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("disable_plaintext_auth = no\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("再打开"),e("code",[s._v("10-mail.conf")]),s._v(",将下图圈起的地方改为(就是把"),e("code",[s._v("#")]),s._v("去掉）：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("-mail.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/linux/dovecot3.PNG",alt:"dovecot",title:"dovecot"}})]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mail_location = mbox:~/mail:INBOX=/var/mail/%u\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("打开"),e("code",[s._v("10-ssl.conf")]),s._v(",将下图圈起的地方改为：\n"),e("img",{attrs:{src:"/linux/dovecot4.PNG",alt:"dovecot",title:"dovecot"}})]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ssl = no\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"测试和结果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试和结果"}},[s._v("#")]),s._v(" 测试和结果")]),s._v(" "),e("p",[s._v("重启"),e("code",[s._v("sendmail")]),s._v("和"),e("code",[s._v("dovecot")]),s._v("服务")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("systemctl restart sendmail.service\n\n\nsystemctl restart dovecot.service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("新增用户两个用户"),e("code",[s._v("user1")]),s._v("和"),e("code",[s._v("user2")]),s._v(":")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" user1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("设置密码：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" user1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),e("p",[s._v("在设置密码过程中，会提示密码不符合规范等什么鬼的原因，直接忽略，只用两次密码相同即可。")])]),s._v(" "),e("p",[s._v("再创建 "),e("code",[s._v("/home/user1/mail/.imap/INBOX")]),s._v("和"),e("code",[s._v("/home/user2/mail/.imap/INBOX")]),s._v("文件夹，如果不能一次创建，请一级一级创建。\n在"),e("strong",[s._v("分别")]),s._v("进入到两"),e("code",[s._v("INBOX")]),s._v("文件夹，"),e("strong",[s._v("分别")]),s._v("执行如下两条命令：")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R user1 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R user2 "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("此时，打开windows系统的虚拟机，将windows中的DNS服务器设置为"),e("code",[s._v("192.168.223.131")]),s._v("。打开"),e("code",[s._v("Foxmail")]),s._v(":\n"),e("img",{attrs:{src:"/linux/result1.PNG",alt:"result",title:"result"}})])])}),[],!1,null,null,null);a.default=t.exports}}]);