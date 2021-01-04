---
title: 介绍
date: 2021-01-04
---

> "VuePress is much more than that." —— ULIVZ

![vuepress](/vuepress/hero.png)


[VuePress](https://v1.vuepress.vuejs.org/zh/) 由两部分组成：一部分是支持用 Vue 开发主题的极简静态网站生成器，另一个部分是为书写技术文档而优化的默认主题。它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。

## 它是如何工作的？

事实上，一个 VuePress 网站是一个由 [Vue](https://vuejs.org/)、[Vue Router](https://github.com/vuejs/vue-router) 和 [webpack](https://webpack.js.org/) 驱动的单页应用。如果你以前使用过 Vue 的话，当你在开发一个自定义主题的时候，你会感受到非常熟悉的开发体验，你甚至可以使用 Vue DevTools 去调试你的自定义主题。

在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML。这种做法的灵感来源于 [Nuxt](https://nuxtjs.org/) 的 ```nuxt generate``` 命令，以及其他的一些项目，比如 Gatsby。

::: tip 备注
以上就是[官方网站](https://v1.vuepress.vuejs.org/zh/)内容，自行去阅读。下面介绍如何使用
:::
