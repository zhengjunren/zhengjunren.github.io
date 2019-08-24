const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['指南', '编程','工具', '面试'];

const childrenData = [
    [''],
    ['java基础','javaweb'],
    ['vuepress','markdown'],
    ['interview']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
