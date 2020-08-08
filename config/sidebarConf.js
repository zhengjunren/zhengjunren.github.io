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
const git = require('./sidebar/git/index');
const dataStructure = require('./sidebar/data-structure/index');
const c = require('./sidebar/c/index');
const mydoc = require('./sidebar/mydoc/index');
const docker = require('./sidebar/docker/index');
const linux = require('./sidebar/linux/index');
const resume = require('./sidebar/resume/index');
module.exports = {
    '/guide/': guide,
    '/resume/': resume,
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
    '/git/': git,
    '/data-structure/': dataStructure,
    '/c/': c,
    '/mydoc/': mydoc,
    '/docker/': docker,
    '/linux/': linux,
    '/': [
        {
            title: '首页',
            path: '/',
            collapsable: false
        },
        '/guide/'
    ]
};
