const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['Java'];

const childrenData = [
    ['', 'yc', 'fx', 'java虚拟机'],
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
