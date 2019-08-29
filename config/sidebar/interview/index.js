const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['面试介绍', 'JavaSE', 'JavaEE'];

const childrenData = [
    [''],
    ['JavaSE/&和&&的区别'],
    ['JavaEE/HTTP请求的GET与POST方式的区别', 'JavaEE/httpstatus']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
