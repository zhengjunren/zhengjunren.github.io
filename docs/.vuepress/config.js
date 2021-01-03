const pluginsConf = require('../../config/pluginsConf.js');
const sidebarConf = require('../../config/sidebarConf.js');
const navConf = require('../../config/navConf.js');
module.exports = {
    // 插件
    plugins: pluginsConf,
    // 头部
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'icon', href: '/logo/small.png' }]
    ],
    // 网站标题及描述
    theme: 'reco',
    title: '小郑',
    description: '程序员博客',
    // 主题配置
    themeConfig: {
        // 提取markdown中h2 和 h3 标题，显示在侧边栏上。
        sidebarDepth: 2,
        // 文档更新时间
        lastUpdated: '上次更新',
        // logo
        subSidebar: 'auto',
        logo: '/hero1.jpg',
        author: 'ZhengJunren',
        // 备案
        // 项目开始时间，只填写年份
        startYear: '2019',
        nav: navConf,
        sidebar: sidebarConf,
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'elunez/eladmin-doc',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        docsBranch: 'new-theme',
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页！',
        repo: 'zhengjunren/zhengjunren.github.io'
    }
}

