const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['计算机网络', '重要概念'];

const childrenData = [
    ['', '物理层', '数据链路层1', '数据链路层2', '网络层1', '网络层2', "运输层1", "运输层2", ],
    ['重要概念/概述', '重要概念/物理层', '重要概念/数据链路层', '重要概念/网络层']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
