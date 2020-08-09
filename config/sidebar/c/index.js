const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['C语言', '真题', '示例代码'];

const childrenData = [
    ['', 'question', 'data-type', '优先级'],
    ['test/2000'],
    ['case/']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
