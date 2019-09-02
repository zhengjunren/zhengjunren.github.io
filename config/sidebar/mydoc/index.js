const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['我的工具'];

const childrenData = [
    ['无课表工具使用']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
