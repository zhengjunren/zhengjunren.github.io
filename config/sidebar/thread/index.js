const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['进程与线程', 'Java线程', '补充'];

const childrenData = [
    [''],
    ['thread的创建', 'thread方法', 'thread同步', 'thread死锁', '线程池', 'sleep()、join()、yield()有什么区别'],
    ['wait()、notify()、notifyAll()方法']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
