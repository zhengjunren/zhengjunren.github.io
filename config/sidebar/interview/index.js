const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['面试介绍', '基础篇'];

const childrenData = [
    [''],
    ['basis/HTTP请求的GET与POST方式的区别', 'basis/httpstatus']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);