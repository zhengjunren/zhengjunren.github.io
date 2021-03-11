#  VuePress配置

::: tip 备注
个人使用习惯，参照官网的[默认主题配置](https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html)。
:::

## 导航栏

在```.vuepress```目录下创建```config.js```文件：
```js
module.exports = {
    title: '郑俊仁',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: '站点',
                items: [
                    {text: 'GitHub', link: 'https://zhengjunren.github.io/'},
                    {text: 'Gitee', link: 'https://zhengjunren.gitee.io/'}
                ]
            },
        ]
    }
};
```
+ ```title``` 是网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
+ ```description``` 是网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
+  导航栏配置可以通过```themeConfig.nav```增加一些导航栏链接。当你提供了一个 items 数组而不是一个单一的 link 时，它将显示为一个 下拉列表
此外，你还可以通过嵌套的```items```来在 下拉列表 中设置分组。

效果如下：
![vuepress使用2](/vuepress/vuepress使用2.png)

## 侧边栏
::: tip 提示
这里演示一种复杂一点的用法，
具体可以参考官方默认主题配置，链接在本页上方。
:::
+ 在```config.js```的```themeConfig.sidebar```中添加
```js
sidebar: {
    '/guide/': [
        {
            title: '指南',
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                '/guide/'
            ]
        }
    ]
}
```
效果如下
![vuepress使用3](/vuepress/vuepress使用3.PNG)

## 插件

+ 演示```back-to-top```插件（即回到顶部）：

### 安装
```sh
yarn add -D @vuepress/plugin-back-to-top@next
# OR npm install -D @vuepress/plugin-back-to-top@next
```

### 使用

```sh
module.exports = {
  plugins: ['@vuepress/back-to-top']
}
```

## 最后更新时间

::: warning 使用须知
由于```lastUpdated```是基于```git```的, 所以你只能在一个基于```git```的项目中启用它。
此外，由于使用的时间戳来自```git commit```，因此它将仅在给定页的第一次提交之后显示，
并且仅在该页面后续提交更改时更新。如果你使用默认主题，你无需安装本插件，因为```VuePress```的```core```中已经包含此插件，
:::

+ 在```config.js```的```themeConfig.lastUpdated```下使用：

```js
module.exports = {
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
  }
}
```
请注意，```themeConfig.lastUpdated```默认是关闭的，如果给定一个字符串，它将会作为前缀显示（默认值是：Last Updated）。

## 其他 <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/> <Badge text="默认主题"/>

+ Props:
  + `text` - string
  + `type` - string, 可选值： `"tip"|"warn"|"error"`，默认值是： `"tip"`
  + `vertical` - string, 可选值： `"top"|"middle"`，默认值是： `"top"`
+ Usage:
你可以在标题中，使用这个组件来为某些 API 添加一些状态：
```md
## 其他 <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/> <Badge text="默认主题"/>
```
