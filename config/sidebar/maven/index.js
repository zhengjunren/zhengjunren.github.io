const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['maven'];

const childrenData = [
    ['', 'pom', 'maven的安装及环境变量配置', '修改本地仓库', 'maven常用命令']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
