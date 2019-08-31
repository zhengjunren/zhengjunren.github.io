module.exports = [
    { text: '首页', link: '/' },
    { text: '指南', link: '/guide/' },
    { text: '站点',
        items: [
            {text: 'GitHub', link: 'https://zhengjunren.github.io/'},
            {text: 'Gitee(暂不更新)', link: 'https://zhengjunren.gitee.io/'}
        ]
    },
    {
        text: '开发工具',
        items: [
            {
                text: '在线编辑',
                items: [
                    { text: 'JSON格式化', link: 'https://www.bejson.com/jsoneditoronline' },
                    { text: 'MD表格生成', link: 'https://tableconvert.com/' },
                    { text: 'CORN表达式', link: 'http://cron.qqe2.com/' },
                    { text: '正则表达式测试', link: 'https://www.bejson.com/othertools/regex/' },
                    { text: '代码格式化', link: 'https://www.bejson.com/jshtml_format/' },
                    { text: '二维码生成器', link: 'https://cli.im/' },
                    { text: 'YAML <--> Properties', link: 'https://www.toyaml.com/index.html' },
                    { text:  'TeX使用', link: 'http://latex.codecogs.com/eqneditor/editor.php'},
                ]
            },
            {
                text: '在线服务',
                items: [
                    { text: 'Boot CDN', link: 'https://www.bootcdn.cn/' },
                    { text: '微信 CDN', link: 'https://qydev.weixin.qq.com/cdn/cdnjs.html' },
                ]
            },
            {
                text: '开源镜像',
                items: [
                    { text: 'OPSX', link: 'https://opsx.alibaba.com/' },
                    { text: 'AZURE', link: 'https://mirror.azure.cn/' },
                    { text: 'Docker HUB', link: 'https://hub.docker.com/' },
                ]
            },
            {
                text: '趋势分析',
                items: [
                    { text: '谷歌趋势', link: 'https://trends.google.com/trends/?geo=US' },
                    { text: '百度指数', link: 'http://index.baidu.com/v2/index.html#/' },
                    { text: '百度流量研究院', link: 'https://tongji.baidu.com/data/browser' },
                ]
            },
        ],
    },
    { text: 'GitHub', link: 'https://github.com/zhengjunren' },
    { text: 'ChangeLog', link: '/changelog/'}
];
