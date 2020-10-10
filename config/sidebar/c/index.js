const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['C语言', '补充', '真题', '示例代码'];

const childrenData = [
    ['', 'operator', 'varcon',
        'macrohead', 'circulate',
        'array', 'pointer', 'allocation',
        'struct', 'list', 'file', 'sort'
    ],
    [
        'switch', 'prisca',
        'exsta', '优先级',
        'bitwise', 'question',
        'error-question-collections'
    ],
    ['test/2000', 'test/2007', 'test/2009', 'test/2011'],
    ['case/', 'case/case1', 'case/case2', 'case/case3', 'case/case4']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
