const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['C语言', '真题', '示例代码'];

const childrenData = [
    ['', 'operator', 'varcon',
        'macrohead', 'circulate',
        'array', 'pointer', 'allocation',
        'struct', 'switch', 'prisca',
        'exsta', '优先级', 'question'
    ],
    ['test/2000'],
    ['case/']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
