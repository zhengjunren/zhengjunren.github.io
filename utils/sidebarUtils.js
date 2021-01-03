/**
 * 多个标题侧边栏
 * @param {侧边栏标题: 类型Array} titles
 * @param {文件名： 类型Array} children
 * @param {展开状态: 默认true} collapsable
 * @param {标题深度: 默认1最大2禁用0} sidebarDepth
 */
function genSidebar(titles, children, collapsable, sidebarDepth) {
    const sidebarArray = [];
    titles.forEach((el, index) => {
        const option = {
            title: el,
            collapsable: collapsable,
            sidebarDepth: sidebarDepth,
            children: children[index]
        };
        sidebarArray.push(option)
    });
    return sidebarArray
}

// 侧边栏生成通用工具类
const SidebarUtils = {
    simpleGenSidebar: function (titles, children) {
        return genSidebar(titles, children, false, 1)
    },

    complexGenSidebar: function (titles, children, collapsable, sidebarDepth) {
        return genSidebar(titles, children, collapsable, sidebarDepth)
    }
};
// 暴露工具
module.exports = SidebarUtils;