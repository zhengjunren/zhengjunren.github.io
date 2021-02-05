const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['Redis'];

const childrenData = [
    ['', '五大数据类型'],
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
