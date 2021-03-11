#  VuePress的安装

## 环境要求
::: warning 注意
 请确保你的 Node.js 版本 >= 8。
:::
- 请确保安装了nodejs或yarm ，并且请确保你的 Node.js 版本 >= 8。

## 起步 helloworld


``` sh
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 新建一个 docs 文件夹
mkdir docs

# 新建一个 markdown 文件
echo '# Hello VuePress!' > docs/README.md

# 启动测试环境
vuepress dev ./docs

# 构建静态文件
vuepress build ./docs
```

::: warning 注意
如果你的现有项目依赖了 webpack 3.x，推荐使用 [Yarn](https://yarnpkg.com/zh-Hans/) 而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。
:::

::: tip
## 安装过程
:::

+ 在F盘下新建```test```文件夹

+ 在cmd命令台下进入该文件夹，进入之后运行，在本例中以```yarn```运行

```sh
yarn global add vuepress # 或者：npm install -g vuepress
```
+ 另外，安装时间与网速有关耐心等吧！

如图所示

![安装第一步](/vuepress/vuepress安装第一步.png)

至此，vuepress的安装大功告成
