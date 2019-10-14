const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['Linux'];

const childrenData = [
    ['', '目录管理', '系统管理', 'linux-vim-编辑器', 'linux-软件包管理','linux-用户和组管理', 'linux-文件权限管理']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
