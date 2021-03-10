const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['软件工程', '练习', '真题'];

const childrenData = [
    ['1', '2', '3', '4', '5', '6', '8', '10', '11', '12', '13', 'uml'],
    ['exercise/综合1', 'exercise/简答题'],
    ['test/2015', 'test/2016']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
