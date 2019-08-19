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
    plugins: pluginsConf,
    themeConfig: {
        nav: navConf,
        lastUpdated: '上次更新',
        // displayAllHeaders: true,
        sidebar: sidebarConf
    }
};
