(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{651:function(a,s,t){"use strict";t.r(s);var r=t(7),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" 概述")]),a._v(" "),t("p",[a._v("此处以 JDK 1.8.0_152 为例")]),a._v(" "),t("p",[a._v("下载地址：\n"),t("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://www.oracle.com/technetwork/java/javase/downloads/index.html"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"解压缩并移动到指定目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压缩并移动到指定目录"}},[a._v("#")]),a._v(" 解压缩并移动到指定目录")]),a._v(" "),t("h3",{attrs:{id:"解压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压缩"}},[a._v("#")]),a._v(" 解压缩")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf jdk-8u152-linux-x64.tar.gz\n")])])]),t("h3",{attrs:{id:"创建目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建目录"}},[a._v("#")]),a._v(" 创建目录")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p /usr/local/java\n")])])]),t("h3",{attrs:{id:"移动安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动安装包"}},[a._v("#")]),a._v(" 移动安装包")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mv jdk1.8.0_152/ /usr/local/java/\n")])])]),t("h3",{attrs:{id:"设置所有者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置所有者"}},[a._v("#")]),a._v(" 设置所有者")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" -R root:root /usr/local/java/\n")])])]),t("h2",{attrs:{id:"配置环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置环境变量"}},[a._v("#")]),a._v(" 配置环境变量")]),a._v(" "),t("h3",{attrs:{id:"配置系统环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置系统环境变量"}},[a._v("#")]),a._v(" 配置系统环境变量")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/environment\n")])])]),t("h4",{attrs:{id:"添加如下语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加如下语句"}},[a._v("#")]),a._v(" 添加如下语句")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games"\nexport JAVA_HOME=/usr/local/java/jdk1.8.0_152\nexport JRE_HOME=/usr/local/java/jdk1.8.0_152/jre\nexport CLASSPATH=$CLASSPATH:$JAVA_HOME/lib:$JAVA_HOME/jre/lib\n')])])]),t("h3",{attrs:{id:"配置用户环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置用户环境变量"}},[a._v("#")]),a._v(" 配置用户环境变量")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vi")]),a._v(" /etc/profile\n")])])]),t("h4",{attrs:{id:"添加如下语句-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加如下语句-2"}},[a._v("#")]),a._v(" 添加如下语句")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('if [ "$PS1" ]; then\n  if [ "$BASH" ] && [ "$BASH" != "/bin/sh" ]; then\n    # The file bash.bashrc already sets the default PS1.\n    # PS1=\'\\h:\\w\\$ \'\n    if [ -f /etc/bash.bashrc ]; then\n      . /etc/bash.bashrc\n    fi\n  else\n    if [ "`id -u`" -eq 0 ]; then\n      PS1=\'# \'\n    else\n      PS1=\'$ \'\n    fi\n  fi\nfi\n\nexport JAVA_HOME=/usr/local/java/jdk1.8.0_152\nexport JRE_HOME=/usr/local/java/jdk1.8.0_152/jre\nexport CLASSPATH=$CLASSPATH:$JAVA_HOME/lib:$JAVA_HOME/jre/lib\nexport PATH=$JAVA_HOME/bin:$JAVA_HOME/jre/bin:$PATH:$HOME/bin\n\nif [ -d /etc/profile.d ]; then\n  for i in /etc/profile.d/*.sh; do\n    if [ -r $i ]; then\n      . $i\n    fi\n  done\n  unset i\nfi\n')])])]),t("h3",{attrs:{id:"使用户环境变量生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用户环境变量生效"}},[a._v("#")]),a._v(" 使用户环境变量生效")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n")])])]),t("h2",{attrs:{id:"测试是否安装成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试是否安装成功"}},[a._v("#")]),a._v(" 测试是否安装成功")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('root@ubuntu:/usr/local/java# java -version\njava version "1.8.0_152"\nJava(TM) SE Runtime Environment (build 1.8.0_152-b16)\nJava HotSpot(TM) 64-Bit Server VM (build 25.152-b16, mixed mode)\n')])])]),t("h2",{attrs:{id:"为其他用户更新用户环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为其他用户更新用户环境变量"}},[a._v("#")]),a._v(" 为其他用户更新用户环境变量")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("su")]),a._v(" zjr\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);