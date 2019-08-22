module.exports = {
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
        }
    },
    // 回到顶部插件
    '@vuepress/back-to-top': true,
    '@vuepress/medium-zoom': {
        selector: 'img.zoom-custom-imgs',
        options: {
            margin: 16
        }
    }
};
