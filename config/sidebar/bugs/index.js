const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['BUG', '积累'];

const childrenData = [
    [''],
    ['java.lang.StackOverflowError']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
