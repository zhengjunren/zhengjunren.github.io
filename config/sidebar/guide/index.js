const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['指南', '编程','工具'];

const childrenData = [
    [''],
    ['java基础','javaweb'],
    ['vuepress','markdown']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
