# VuePress的初步使用

## 环境要求
::: warning 注意
 vuepress已经**安装成功**
:::

## 起步 helloworld


``` sh

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

+ 再新建```docs```文件夹，在该文件夹下创建```README.md```文件

+ 在```README.md```文件中输入 ```# hello vue```（即下面两行代码）

```sh
mkdir docs

echo '# Hello VuePress!' > docs/README.md
```

如图所示

![安装第二步](/vuepress/vuepress安装第二步.png)

+ 在cmd命令台中运行下面这行代码

```sh
vuepress dev ./docs
```

如图所示

![安装第三步](/vuepress/vuepress安装第三步.png)

+ 在浏览器中输入http://localhost:8080

![安装第四步](/vuepress/vuepress安装第四步.png)

至此，vuepress的初步使用大功告成
