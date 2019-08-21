/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "223d3c69592136c22eaa8100d4985525"
  },
  {
    "url": "assets/css/0.styles.902c90ab.css",
    "revision": "41ef4cbb072e78849ff41015461042a1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8f2c3b07.js",
    "revision": "d2adc8d06f738c466f8b1b415e916109"
  },
  {
    "url": "assets/js/11.b0a64574.js",
    "revision": "237e6288e81f37264f27fcab9e6efba7"
  },
  {
    "url": "assets/js/12.acf1dcfc.js",
    "revision": "8cc32700343ac574db1058d9b07e7173"
  },
  {
    "url": "assets/js/13.b39b0103.js",
    "revision": "0f6ad391ed7568317ca7ac2f70407324"
  },
  {
    "url": "assets/js/14.7719b309.js",
    "revision": "4190b376fa433b64005d7ce74654de0b"
  },
  {
    "url": "assets/js/15.476f2e11.js",
    "revision": "b5396aa91930e9f6afc4c1aa6110da39"
  },
  {
    "url": "assets/js/16.dedd3fca.js",
    "revision": "f8c85e51d573a78d69b9724cc453b6ee"
  },
  {
    "url": "assets/js/17.dbd3fe06.js",
    "revision": "2dce56af6cfa53fb042c9ae5aaf94219"
  },
  {
    "url": "assets/js/18.d55ced40.js",
    "revision": "91a8961a3d67def8e90efa1d988693a8"
  },
  {
    "url": "assets/js/19.f8dcc67b.js",
    "revision": "3ac2481b1d9d521be307b002d2e2dc19"
  },
  {
    "url": "assets/js/2.896ef9cc.js",
    "revision": "25d98d1e3ef5db321e1035e433fb3c69"
  },
  {
    "url": "assets/js/20.df664ddb.js",
    "revision": "a5cf3551c824408b9c6f63d7be5397df"
  },
  {
    "url": "assets/js/21.49ce1935.js",
    "revision": "28541c9bae62b8824b33b6c61af66faf"
  },
  {
    "url": "assets/js/22.42f1b06f.js",
    "revision": "098e69bbfbacd56b187f483f32e08ff5"
  },
  {
    "url": "assets/js/23.ca23dff0.js",
    "revision": "b1cee880002a4fd00b65e763cc44ead5"
  },
  {
    "url": "assets/js/24.f17be4e4.js",
    "revision": "f0e782dff9e270a5bc447f3192bd1521"
  },
  {
    "url": "assets/js/25.1bcf3742.js",
    "revision": "7cd43b698d4e93d1c8d50f5c62c0bd46"
  },
  {
    "url": "assets/js/26.eb90287e.js",
    "revision": "984b22706c1a67a282ed64d080a02778"
  },
  {
    "url": "assets/js/27.5b8b86fa.js",
    "revision": "db62cfd84a5d35a1030c92d2b5d97497"
  },
  {
    "url": "assets/js/28.98f263fa.js",
    "revision": "a43593244a706ad137ee7eee1d20792a"
  },
  {
    "url": "assets/js/29.78eea0eb.js",
    "revision": "8135e37f5f04436b3fb62ffcf806925f"
  },
  {
    "url": "assets/js/3.9183d77a.js",
    "revision": "287236010f3de57d054a4e95b8bfe12e"
  },
  {
    "url": "assets/js/30.ae4499d2.js",
    "revision": "6116fa6afb8601c28687bf13edbfcfa6"
  },
  {
    "url": "assets/js/31.010133f0.js",
    "revision": "a34fe6f15cb291c33354de9b245bf0dd"
  },
  {
    "url": "assets/js/32.57533d78.js",
    "revision": "8e6f781461e50b866de36e21dacf795e"
  },
  {
    "url": "assets/js/33.eb86b1ed.js",
    "revision": "44b5c1994111d5aaf2ac9d32e0bbf323"
  },
  {
    "url": "assets/js/34.20f6233a.js",
    "revision": "11f2ab4c98f47b7b809cc434bd7c4d94"
  },
  {
    "url": "assets/js/35.0ad85b6e.js",
    "revision": "9d7885295287a9b1c95403e84ae11a32"
  },
  {
    "url": "assets/js/36.f7387dc7.js",
    "revision": "7396b3171c2781b98901b898a0f6f71b"
  },
  {
    "url": "assets/js/37.aa652120.js",
    "revision": "970ebea1468eb78af47c437e38b3222b"
  },
  {
    "url": "assets/js/38.99e02b7b.js",
    "revision": "fafbcb02d533c6a68e475bca281c7f6e"
  },
  {
    "url": "assets/js/39.bba714a4.js",
    "revision": "f5b32838ca587e209cec3106812a27a1"
  },
  {
    "url": "assets/js/4.e6ce257e.js",
    "revision": "52acfc312384f1a229016da8ac7fc3c5"
  },
  {
    "url": "assets/js/40.cedd9882.js",
    "revision": "cc2eccdd677eaf58e4e4cfef8517c907"
  },
  {
    "url": "assets/js/41.553fee6c.js",
    "revision": "7d40b1b94349c31df5e3153c9f6148f9"
  },
  {
    "url": "assets/js/5.33408379.js",
    "revision": "f3b4af2dc6baa6d6eed9958c654e0085"
  },
  {
    "url": "assets/js/6.a22187ca.js",
    "revision": "fdff876fa104bf724fa011571135909a"
  },
  {
    "url": "assets/js/7.29f5df44.js",
    "revision": "76a645b5c827ea23f60cd2cdd9b7a719"
  },
  {
    "url": "assets/js/8.68aff262.js",
    "revision": "beb431b49cace26269ba7b4f4fda7e9e"
  },
  {
    "url": "assets/js/9.39f15f78.js",
    "revision": "e225711604483f330598454ffa9537ea"
  },
  {
    "url": "assets/js/app.d341b9fd.js",
    "revision": "02091707d731e26fc8d25631f26a41c2"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "c742f1c0c5273cb26d4c84a28aac6a74"
  },
  {
    "url": "changelog/index.html",
    "revision": "6850aeb15710df354b6383f512fd0461"
  },
  {
    "url": "guide/index.html",
    "revision": "6cb3853955aa5073b745093ab3764927"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "08f9b16e75af8d6b9e5ed8d6f6dc9249"
  },
  {
    "url": "guide/java基础.html",
    "revision": "7b86431624109d00ef06f3438b26c527"
  },
  {
    "url": "guide/markdown.html",
    "revision": "9997156a331d44ba34748b5a89826d9d"
  },
  {
    "url": "guide/vuepress.html",
    "revision": "3b3898e9e92286bf83b294673f165f50"
  },
  {
    "url": "hero.jpg",
    "revision": "de38e0eb0581734e90de58c3061c0784"
  },
  {
    "url": "index.html",
    "revision": "d87ac805a8eae43eb549488472b71d66"
  },
  {
    "url": "logoko.png",
    "revision": "2a3913b14bd308aaf07a0a0a6fe4843f"
  },
  {
    "url": "markdown/index.html",
    "revision": "c7fd760b46d4c36fcfd8f92b33e77400"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "539b0bbd9256d0dcaf9fb2acf0f47e72"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "11c6e6bb419e5d4fcb9d49d8b734b8a9"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "f60a6722f3805058c1848ad723bd2099"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "ff993cc76aef433de147d8ffb329e691"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "276b8241540ee1968a8c505af51bd593"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "69db086b6da9a12d88986dbbd9d66a3a"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "2ae8e85c9a79e8ffd7a8f98392bbc0e1"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "3ca9f32232af70956817a67267576214"
  },
  {
    "url": "maven/index.html",
    "revision": "ac9bb6b178b6259fce39dcbb77fe06db"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "af973aa14596a33d7f9a5eb196397897"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "945492c70c634a14e1f676b7606633b5"
  },
  {
    "url": "maven/pom.html",
    "revision": "b0e3cab528f74b8fae0851d935d0d719"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "ac20c38b199aee0a685e8c4924adcdc0"
  },
  {
    "url": "mvc/index.html",
    "revision": "14bc16256e39d070142edc812d4e2d33"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "27e87fe023da7c35743b34b6d2c2a8b7"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "b8618894b45cb7d1ad8a79a7ed97d618"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "d346d90faa4d8fce10726f954b131e5c"
  },
  {
    "url": "spring/index.html",
    "revision": "fb07edec04bd5698a51663625e77fc69"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "079c4e849b82721c9eb04874e1257fd2"
  },
  {
    "url": "vuepress/vuepress使用1.png",
    "revision": "0e538b3f94159d5b541d19cd8bb36842"
  },
  {
    "url": "vuepress/vuepress使用2.png",
    "revision": "fb681a515d8b61dc5edfc65e1e20f8f6"
  },
  {
    "url": "vuepress/vuepress安装第一步.png",
    "revision": "a7544b85285c404c9c1b7f62a0ec8411"
  },
  {
    "url": "vuepress/vuepress安装第三步.png",
    "revision": "70b6d676be192609b2c8f0f43404f22e"
  },
  {
    "url": "vuepress/vuepress安装第二步.png",
    "revision": "05c07b4941c5beb097335e6eda4bb8ec"
  },
  {
    "url": "vuepress/vuepress安装第四步.png",
    "revision": "c0d926872434ed5c843a1dbdb279e599"
  },
  {
    "url": "vuepress/vuepress的使用.html",
    "revision": "1a832e5b71431bff19637b6a50435bb7"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "bbd5b26b9473b14390f95cdbf5717b07"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "8c892de54c26bebcf67ee405a69a9c86"
  },
  {
    "url": "vuepress/vuepress的部署.html",
    "revision": "72bb4a8d60c08b2d55a38e61551d56aa"
  },
  {
    "url": "vuepress/vuepress的配置.html",
    "revision": "f9eab5bde3e6e164a01005bdd33aa705"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
