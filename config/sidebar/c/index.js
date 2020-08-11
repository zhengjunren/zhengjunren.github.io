const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['C语言', '真题', '示例代码'];

const childrenData = [
    ['', 'operator', 'varcon',
        'macrohead', 'prisca',
        'switch', 'circulate',
        'array', 'pointer',
        '优先级', 'question'],
    ['test/2000'],
    ['case/']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
