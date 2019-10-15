const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['Linux', '部署应用'];

const childrenData = [
    ['', '目录管理', '系统管理', 'vim编辑器', '软件包管理','用户和组管理', '文件权限管理'],
    ['安装java', '安装maven','安装tomcat']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
