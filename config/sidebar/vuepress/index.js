const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['vuepress', '安装', '使用'];

const childrenData = [
    [''],
    ['vuepress的安装'],
    ['vuepress的初步使用', 'vuepress的使用']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
