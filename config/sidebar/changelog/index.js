const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['更新日志', '我的更新'];

const childrenData = [
    [''],
    ['2020-10', '2020-09', '2020-08', '2019-11', '2019-10', '2019-09', '2019-08'],
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
