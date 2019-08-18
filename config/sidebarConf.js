const guide = require('./sidebar/guide/index')
const mvc = require('./sidebar/mvc/index');
const maven = require('./sidebar/maven/index');
const vuepress = require('./sidebar/vuepress/index');
const markdown = require('./sidebar/markdown/index');
const changelog = require('./sidebar/changelog/index');
module.exports = {
    '/guide/': guide,
    '/maven/': maven,
    '/mvc/': mvc,
    '/spring/': [''],
    '/vuepress/': vuepress,
    '/markdown/': markdown,
    '/changelog/': changelog,
    '/': [
        '',
        '/guide/',
    ]
};
