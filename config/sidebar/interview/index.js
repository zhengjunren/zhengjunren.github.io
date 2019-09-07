const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['面试介绍', 'JavaSE', 'JavaEE'];

const childrenData = [
    [''],
    [
        'JavaSE/&和&&的区别', 
        'JavaSE/try-catch-finally和return', 
        'JavaSE/重载和重写的区别', 
        'JavaSE/类初始化顺序', 
        'JavaSE/final、finally和finalize的区别', 
    ],
    ['JavaEE/HTTP请求的GET与POST方式的区别', 'JavaEE/httpstatus',]
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
