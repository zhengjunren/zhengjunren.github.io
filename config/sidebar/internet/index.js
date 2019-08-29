const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['计算机网络', '重要概念'];

const childrenData = [
    ['', '物理层'],
    ['重要概念/', '重要概念/物理层']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
