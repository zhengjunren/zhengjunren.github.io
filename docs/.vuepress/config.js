const pluginsConf = require('../../config/pluginsConf.js');
const sidebarConf = require('../../config/sidebarConf.js');
const navConf = require('../../config/navConf.js');

module.exports = {
    port: 8080,
    title: '郑俊仁',
    description: '郑俊仁的博客,zjr,zhengjunren,郑俊仁,郑俊仁博客',
    markdown: {
        lineNumbers: true,
    },
    head: [
        ['link', { rel: 'icon', href: '/icon.png' }],
        ['meta', { name: 'Keywords', content: '郑俊仁的博客,zjr,zhengjunren,郑俊仁,郑俊仁博客'}],
        ['meta', { name: 'baidu-site-verification', content: '23vTtJSRjT'}]
    ],
    plugins: pluginsConf,
    themeConfig: {
        nav: navConf,
        lastUpdated: '上次更新',
        sidebar: sidebarConf
    }
};
