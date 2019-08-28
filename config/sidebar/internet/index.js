const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['计算机网络'];

const childrenData = [
    ['', '物理层']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
