const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['指南', '基础理论', '开发', '大杂烩'];

const childrenData = [
    [''],
    ['basic-theory'],
    ['java基础','javaweb', '开发环境'],
    ['interview','bug', 'tool', '优秀网站收集']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
