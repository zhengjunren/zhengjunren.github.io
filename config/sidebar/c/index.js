const sidebarUtils = require('../../../utils/sidebarUtils');

const titles = ['C语言', '补充', '真题', '示例代码'];

const childrenData = [
    ['', 'operator', 'varcon',
        'macrohead', 'circulate',
        'array', 'pointer', 'allocation',
        'struct', 'file'
    ],
    [
        'switch', 'prisca',
        'exsta', '优先级',
        'bitwise', 'question',
        'error-question-collections'
    ],
    ['test/2000', 'test/2007', 'test/2009'],
    ['case/', 'case/case1']
];

module.exports = sidebarUtils.simpleGenSidebar(titles, childrenData);
