const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['指南', '工具'];

const childrenData = [
    ['java基础', '',],
    ['vuepress','markdown']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
