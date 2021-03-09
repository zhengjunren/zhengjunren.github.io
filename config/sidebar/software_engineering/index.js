const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['软件工程', '真题'];

const childrenData = [
    ['1', '2', '3', '4', '5', '6', '8', '10', '11', '12', '13'],
    ['test/2015']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
