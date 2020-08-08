(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{539:function(a,s,e){"use strict";e.r(s);var n=e(29),t=Object(n.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"linux-安装-maven"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-安装-maven"}},[a._v("#")]),a._v(" Linux 安装 Maven")]),a._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),e("p",[a._v("此处以 Maven 3.5.3 为例")]),a._v(" "),e("p",[a._v("下载地址：\n"),e("a",{attrs:{href:"http://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://maven.apache.org/download.cgi"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"解压缩并移动到指定目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解压缩并移动到指定目录"}},[a._v("#")]),a._v(" 解压缩并移动到指定目录")]),a._v(" "),e("h3",{attrs:{id:"解压缩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解压缩"}},[a._v("#")]),a._v(" 解压缩")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf apache-maven-3.5.3-bin.tar.gz\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"创建目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建目录"}},[a._v("#")]),a._v(" 创建目录")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /usr/local/maven\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"移动安装包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移动安装包"}},[a._v("#")]),a._v(" 移动安装包")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mv apache-maven-3.5.3 /usr/local/maven/\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"配置环境变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量"}},[a._v("#")]),a._v(" 配置环境变量")]),a._v(" "),e("blockquote",[e("p",[a._v("注意：本文中安装 maven 是在安装 java 的基础上进行的。")])]),a._v(" "),e("h3",{attrs:{id:"配置用户环境变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置用户环境变量"}},[a._v("#")]),a._v(" 配置用户环境变量")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/profile\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"修改如下语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改如下语句"}},[a._v("#")]),a._v(" 修改如下语句")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('if [ "$PS1" ]; then\n  if [ "$BASH" ] && [ "$BASH" != "/bin/sh" ]; then\n    # The file bash.bashrc already sets the default PS1.\n    # PS1=\'\\h:\\w\\$ \'\n    if [ -f /etc/bash.bashrc ]; then\n      . /etc/bash.bashrc\n    fi\n  else\n    if [ "`id -u`" -eq 0 ]; then\n      PS1=\'# \'\n    else\n      PS1=\'$ \'\n    fi\n  fi\nfi\n\nexport MAVEN_HOME=/usr/local/maven/apache-maven-3.5.3\nexport JAVA_HOME=/usr/local/java/jdk1.8.0_152\nexport JRE_HOME=/usr/local/java/jdk1.8.0_152/jre\nexport CLASSPATH=$CLASSPATH:$JAVA_HOME/lib:$JAVA_HOME/jre/lib\nexport PATH=$JAVA_HOME/bin:$JAVA_HOME/jre/bin:$MAVEN_HOME/bin:$PATH:$HOME/bin\n\nif [ -d /etc/profile.d ]; then\n  for i in /etc/profile.d/*.sh; do\n    if [ -r $i ]; then\n      . $i\n    fi\n  done\n  unset i\nfi\n')])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br"),e("span",{staticClass:"line-number"},[a._v("26")]),e("br"),e("span",{staticClass:"line-number"},[a._v("27")]),e("br"),e("span",{staticClass:"line-number"},[a._v("28")]),e("br"),e("span",{staticClass:"line-number"},[a._v("29")]),e("br"),e("span",{staticClass:"line-number"},[a._v("30")]),e("br")])]),e("h3",{attrs:{id:"使用户环境变量生效"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用户环境变量生效"}},[a._v("#")]),a._v(" 使用户环境变量生效")]),a._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"测试是否安装成功"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试是否安装成功"}},[a._v("#")]),a._v(" 测试是否安装成功")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('root@ubuntu:~# mvn -v\nApache Maven 3.5.3 (3383c37e1f9e9b3bc3df5050c29c8aff9f295297; 2018-02-25T03:49:05+08:00)\nMaven home: /usr/local/maven/apache-maven-3.5.3\nJava version: 1.8.0_152, vendor: Oracle Corporation\nJava home: /usr/local/java/jdk1.8.0_152/jre\nDefault locale: en_US, platform encoding: UTF-8\nOS name: "linux", version: "4.4.0-142-generic", arch: "amd64", family: "unix"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);