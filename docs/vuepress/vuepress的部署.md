---
title: VuePress部署
date: 2021-01-04
---

## 部署GithubPages

:::tip 提示
这里演示发布至```https://<USERNAME>.github.io/```。
:::

+ 在你的GitHub上创建一个仓库名为```<USERNAME>.github.io```的仓库,例如，我的GitHub用户名为```zhengjunren```，则创建名为```zhengjunren.github.io```的仓库

+ 在项目下创建```deploy.sh```文件

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:zhengjunren/zhengjunren.github.io.git master

cd -
```

在cmd命令台中运行```deploy.sh```脚本。

## 部署GiteePages

:::warning 注意
由于```gitee pages```不支持免费地推送后重新部署，建议使用```GitHub Pages```。
:::

+ 创建仓库，仓库名为用户名，
例如用户名为```zhengjunren```，创建名为```zhengjunren```的仓库
其余步骤相同，**注意```deploy.sh```中```git push```命令不同哦**！
