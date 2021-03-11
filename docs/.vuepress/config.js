const pluginsConf = require('../../config/pluginsConf.js');
const sidebarConf = require('../../config/sidebarConf.js');
const navConf = require('../../config/navConf.js');

module.exports = {
    port: 8080,
    title: '小郑',
    description: '郑俊仁的博客,zjr,zhengjunren,郑俊仁,郑俊仁博客',
    markdown: {
        lineNumbers: true,
    },
    head: [
        ['link', { rel: 'icon', href: '/hero1.jpg' }],
        ['meta', { name: 'Keywords', content: '郑俊仁的博客,zjr,zhengjunren,郑俊仁,郑俊仁博客' }],
        ['meta', { name: 'baidu-site-verification', content: '23vTtJSRjT' }]
    ],
    plugins: pluginsConf,
    themeConfig: {
        nav: navConf,
        logo: '/hero1.jpg',
        smoothScroll: true,
        lastUpdated: '上次更新',
        sidebar: sidebarConf,
        repo: 'zhengjunren/zhengjunren.github.io',
        repoLabel: 'GitHub',
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'blog-source',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页！'
    },
    evergreen: true
};