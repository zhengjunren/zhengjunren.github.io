const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['Docker', 'Docker 安装', 'Docker 镜像', 'Docker 容器', 'Docker 数据管理', 'Docker Compose', '服务搭建', '常用命令'];

const childrenData = [
    ['', 'why'],
    ['install/ubuntu','install/centos', 'install/mac', 'install/windows',  'install/debian', 'install/fedora', 'install/raspberry-pi','install/mirror'],
    ['image/', 'image/获取镜像', 'image/列出镜像', 'image/删除本地镜像', 'image/使用Dockerfile定制镜像', 'image/Dockerfile指令'],
    ['container/', 'container/run', 'container/daemon', 'container/stop', 'container/attach_exec'],
    ['data-management/' ,'data-management/volume', 'data-management/bind-mounts'],
    ['compose/', 'compose/install', 'compose/usage', 'compose/commands', 'compose/compose_file','compose/net'],
    ['case/基于docker搭建mysql', 'case/基于docker搭建apache','case/基于docker搭建samba', 'case/基于docker搭建ftp'],
    ['other/Docker常用命令',  'other/Docker命令查询', 'other/Docker-Compose常用命令']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
