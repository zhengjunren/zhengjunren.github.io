const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['指南', '基础理论', '编程', '大杂烩'];

const childrenData = [
    [''],
    ['basic-theory'],
    ['java基础','javaweb', 'bug'],
    ['interview', 'tool', '优秀网站收集']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
