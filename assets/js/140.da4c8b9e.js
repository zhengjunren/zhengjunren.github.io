(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{403:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"持续集成-ci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持续集成-ci"}},[t._v("#")]),t._v(" 持续集成 CI")]),t._v(" "),a("ol",[a("li",[t._v("在"),a("code",[t._v("marketplace")]),t._v("中搜索 "),a("a",{attrs:{href:"https://github.com/marketplace/travis-ci",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis CI"),a("OutboundLink")],1),t._v("、安装并且设置其访问仓库的权限。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/vuepress/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90.PNG",alt:"安装"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("点击头像下拉框中的"),a("code",[t._v("settings")]),t._v("进入，再点击左侧边栏下方的"),a("code",[t._v("Developer settings")]),t._v("。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/vuepress/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%902.PNG",alt:"安装"}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("再进入"),a("code",[t._v("Personal access tokens")]),t._v("，然后点击"),a("code",[t._v("Generate new token")]),t._v("，\n并且按照下图填写"),a("code",[t._v("note")]),t._v("、勾选"),a("code",[t._v("repo")]),t._v("。（只用勾选它哦！）,生成的令牌待会要用哦。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/vuepress/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%903.png",alt:"安装"}})]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("进入"),a("a",{attrs:{href:"https://travis-ci.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis-CI官网"),a("OutboundLink")],1),t._v("，点击下图中的"),a("code",[t._v("settings")]),t._v("。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/vuepress/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%904.PNG",alt:"安装"}})]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("在 Name 中填写"),a("code",[t._v("GITHUB_TOKEN")]),t._v("，在 Value 中填写上一步生成的令牌。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/vuepress/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%905.png",alt:"安装"}})]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("然后回到 Github，在你仓库中新建一个分支，分支名字随意，例如："),a("code",[t._v("blog-source")]),t._v("。\n此时你的项目有两个分支，一个"),a("code",[t._v("master")]),t._v("分支、"),a("code",[t._v("blog-source")]),t._v("分支。（我多建了一个，你不用）")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/vuepress/%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%906.PNG",alt:"安装"}})]),t._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[t._v("在你本地项目中，切换分支，切换到"),a("code",[t._v("blog-source")]),t._v("分支，将项目全部复制到这个分支，\n然后在根目录下创建"),a("code",[t._v(".travis.yml")]),t._v("文件。你也可以看看"),a("a",{attrs:{href:"https://docs.travis-ci.com/user/deployment/pages/",target:"_blank",rel:"noopener noreferrer"}},[t._v("travis-ci官方文档"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_js\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node_js")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" lts/*\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm run docs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("build "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建命令")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("before_install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" export TZ='Asia/Shanghai' "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置时区")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保已skip_cleanup设置为true，否则Travis CI将删除在构建期间创建的所有文件，这可能会删除您尝试上传的内容。")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip-cleanup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local_dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" docs/.vuepress/dist "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 需要展示在 zhengjunren.github.io上的目录")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github-token")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GITHUB_TOKEN "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里就是步骤5中填写的 name")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keep-history")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target_branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# local_dir里内容推送到的分支")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("source "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 基于blog-source分支构建")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[t._v("然后，你就可以提交项目了，并且不用在本地构建，所以说上篇文章中的"),a("code",[t._v("deploy.sh")]),t._v("可以不要了哦。\n至此大功告成！！")])])}),[],!1,null,null,null);s.default=n.exports}}]);