const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['面试介绍', 'JavaSE', 'JavaEE', '前端', '数据库', 'Other'];

const childrenData = [
    [''],
    [
        'JavaSE/&和&&的区别',
        'JavaSE/try-catch-finally和return',
        'JavaSE/重载和重写的区别',
        'JavaSE/类初始化顺序',
        'JavaSE/final、finally和finalize的区别',
        'JavaSE/Java四种引用类型',
        'JavaSE/Collection和Collections有什么区别？',
        'JavaSE/List、Set、Map之间的区别',
        'JavaSE/ArrayList 与 LinkedList 区别',
        'JavaSE/HashMap',
        'JavaSE/异常',
        'JavaSE/String、StringBulider、StringBuffer'
    ],
    [
        'JavaEE/HTTP请求的GET与POST方式的区别', 'JavaEE/httpstatus',
        'JavaEE/SpringAOP'
    ],
    ['frontend/前端'],
    ['sql/Btree和B+tree的区别'],
    ['other/零散面试题']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
