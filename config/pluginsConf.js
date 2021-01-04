module.exports = {

    '@vuepress/medium-zoom': true,
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
        }
    },
    // 回到顶部插件
    '@vuepress-reco/vuepress-plugin-back-to-top': true,


    'mathjax': {
        target: 'svg',
        macros: {
            '*': '\\times',
        },
    }
};
