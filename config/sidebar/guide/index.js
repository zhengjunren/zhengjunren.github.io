const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['指南', '编程','工具', '面试', '补充'];

const childrenData = [
    [''],
    ['java基础','javaweb'],
    ['vuepress','markdown'],
    ['interview'],
    ['bug']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
