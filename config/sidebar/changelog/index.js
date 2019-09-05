const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['更新日志', '我的更新'];

const childrenData = [
    [''],
    ['2019-09', '2019-08'],
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
