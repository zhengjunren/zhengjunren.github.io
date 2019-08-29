const guide = require('./sidebar/guide/index')
const mvc = require('./sidebar/mvc/index');
const maven = require('./sidebar/maven/index');
const vuepress = require('./sidebar/vuepress/index');
const markdown = require('./sidebar/markdown/index');
const changelog = require('./sidebar/changelog/index');
const thread = require('./sidebar/thread/index');
const interview = require('./sidebar/interview/index');
const bugs = require('./sidebar/bugs/index');
const site = require('./sidebar/site/index');
const internet = require('./sidebar/internet/index');
module.exports = {
    '/guide/': guide,
    '/maven/': maven,
    '/mvc/': mvc,
    '/spring/': [''],
    '/vuepress/': vuepress,
    '/markdown/': markdown,
    '/changelog/': changelog,
    '/thread/': thread,
    '/interview/': interview,
    '/bugs/': bugs,
    '/site/': site,
    '/internet/': internet,
    '/': [
        {
            title:'首页',
            path:'/',
            collapsable:false
        },
        '/guide/'
    ]
};
