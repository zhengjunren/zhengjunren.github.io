const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['Java'];

const childrenData = [
    ['', 'yc', 'fx'],
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
