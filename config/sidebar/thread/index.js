const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['进程与线程', 'Java线程'];

const childrenData = [
    [''],
    ['thread的创建', 'thread方法', 'thread同步死锁', '线程池', 'sleep()、join()、yield()有什么区别']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
