const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['Docker', '命令大全'];

const childrenData = [
    ['Ubuntu安装Docker','Docker镜像加速','Docker-Compose安装与卸载'],
    ['Docker常用命令',  'Docker命令查询', 'Docker-Compose模板文件', 'Docker-Compose命令说明']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
