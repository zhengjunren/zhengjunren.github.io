const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['简介', '语法'];

const childrenData = [
    [''],
    [
        '语法/markdown标题',
        '语法/markdown字体',
        '语法/markdown列表',
        '语法/markdown区块',
        '语法/markdown代码',
        '语法/markdown链接',
        '语法/markdown表格'
    ]
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
