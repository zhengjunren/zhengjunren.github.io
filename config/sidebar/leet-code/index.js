const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['LeetCode', '简单部分'];

const childrenData = [
    [''],
    ['article-1', 'article-2'],
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
