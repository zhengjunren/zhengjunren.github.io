module.exports = {

    '@vuepress/medium-zoom': {
        selector: 'img',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
            margin: 16
        }
    },
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
