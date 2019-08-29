const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['VuePress', '安装', '使用'];

const childrenData = [
    [''],
    ['vuepress的安装'],
    ['vuepress的初步使用', 'vuepress的使用', 'vuepress的配置', 'vuepress的部署', '持续集成']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
