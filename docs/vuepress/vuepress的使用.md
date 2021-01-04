---
title:  VuePress的使用
date: 2021-01-04
---

::: tip 备注
个人使用习惯，参照官网的[默认主题配置](https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html)。
:::

## 初始化

打开cmd命令台，进入F:/test目录下，运行下面的代码。
```sh
yarn init
yarn add -D vuepress
```
+ ```yarn init```后需要确认一些选项，可点击回车。

## 目录结构

```
.
├── docs
│   ├── .vuepress (可选的)
│   │   ├── public (可选的)
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   └── guide
│        └── README.md
│ 
└── package.json
```

+ ```docs```目录下的```README.md```文件为网站首页。
+ ```public```文件夹作用为静态资源文件的存放。
+ ```config.js```是配置文件。
+ ```guide```文件夹是放置指南页的位置。

## 首页

+ 默认的主题提供了一个首页（Homepage）的布局 (用于这个网站的主页)。想要使用它，需要在你的根级 README.md 的 YAML front matter 指定 home: true。以下是一个如何使用的例子：

``` yaml

---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

## 指南页
+ 即```guide```目录下的```README.md```文件中输入如下：
```
# 指南

## 这是指南页
```

+ 在package.json加入如下脚本：

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

目前```package.json```为

```json
{
  "name": "test",
  "version": "1.0.0",
  "main": "index.js",
  "author": "zjr",
  "license": "MIT",
  "devDependencies": {
    "vuepress": "^1.0.3"
  },
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

+ 在cmd命令台中运行：
```sh
yarn docs:dev
```

在浏览器中输入```http://localhost:8080```, 结果如下：

![vuepress使用1](/vuepress/vuepress使用1.png)

:::tip 提示
图片没有显示出来的原因是在```public```文件夹中没有```hero.png```图片。
:::
