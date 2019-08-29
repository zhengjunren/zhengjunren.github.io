const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['mvc和三层架构', 'mvc模式', '三层架构', '关于三层架构的理解'];

const childrenData = [
    [''],
    ['MVC模式'],
    ['三层架构'],
    ['关于三层架构的理解']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
