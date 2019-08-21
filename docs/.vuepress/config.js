const pluginsConf = require('../../config/pluginsConf.js');
const sidebarConf = require('../../config/sidebarConf.js');
const navConf = require('../../config/navConf.js');

module.exports = {
    port: 8080,
    title: '郑俊仁',
    description: 'Just playing around',
    markdown: {
        lineNumbers: true
    },
    head: [
        ['link', { rel: 'icon', href: '/logoko.png' }],
        ['meta', { name: 'keyword', content: '郑俊仁的博客,zjr,zhengjunren,郑俊仁,郑俊仁博客'}]
    ],
    plugins: pluginsConf,
    themeConfig: {
        repo: 'zhengjunren/zhengjunren.github.io',
        repoLabel: '查看源码',
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在GitHub上编辑此页！',
        nav: navConf,
        lastUpdated: '上次更新',
        sidebar: sidebarConf
    }
};
