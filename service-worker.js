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
    "revision": "b6afe27d55d194ff801e5d5f597fd7f0"
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
    "url": "assets/js/10.41c70707.js",
    "revision": "0832f53bee48f60354d96e38c905e75c"
  },
  {
    "url": "assets/js/11.09277ccd.js",
    "revision": "89607a00038e88c6c2a274913157f63c"
  },
  {
    "url": "assets/js/12.c23da9f6.js",
    "revision": "a458e8e04ac223921e821823b7531319"
  },
  {
    "url": "assets/js/13.4028b46c.js",
    "revision": "b0e79b08ef7a872cfb506ee6907e4989"
  },
  {
    "url": "assets/js/14.f9d7aa0c.js",
    "revision": "14ea2ab5c733d16fefad293dc3801f0c"
  },
  {
    "url": "assets/js/15.7c7f998a.js",
    "revision": "e73316b8e37b47b2aa64ab728de9ea09"
  },
  {
    "url": "assets/js/16.b3482a0b.js",
    "revision": "0fa923ee9797c025214f8ac2c2e2f28f"
  },
  {
    "url": "assets/js/17.e4b721db.js",
    "revision": "30e83592c5fbf6101be16ba4e4229708"
  },
  {
    "url": "assets/js/18.e1f33951.js",
    "revision": "665786fd6080f2ead34abf0b7f9e1d45"
  },
  {
    "url": "assets/js/19.067c3fcc.js",
    "revision": "cafdf3884bb33e35cba440d92d3be3d7"
  },
  {
    "url": "assets/js/2.2ef0ec1d.js",
    "revision": "42b010e155483ac775845f02f0befba8"
  },
  {
    "url": "assets/js/20.2e988a60.js",
    "revision": "e0928353ffc0f373b6a7433122fc48db"
  },
  {
    "url": "assets/js/21.96b3f829.js",
    "revision": "9f47aa78cdc0dc0bafba2566ee89f81b"
  },
  {
    "url": "assets/js/22.ff48682a.js",
    "revision": "16bc717421ac269fa6c4049d362f4bad"
  },
  {
    "url": "assets/js/23.68c3eeff.js",
    "revision": "1eaa4cd5c2c517b8a1befc9b2945a946"
  },
  {
    "url": "assets/js/24.f0a8f559.js",
    "revision": "ba681fc1185252044e052d42e47b9fac"
  },
  {
    "url": "assets/js/25.3072c474.js",
    "revision": "02e397443a841df509a5469ea1b64a5d"
  },
  {
    "url": "assets/js/26.84a21561.js",
    "revision": "44959b3bae5f675c68abc3e85fc248c6"
  },
  {
    "url": "assets/js/27.13f73ec2.js",
    "revision": "06ac7c799bd5d9d1844c856712421f31"
  },
  {
    "url": "assets/js/28.f414b820.js",
    "revision": "9a660e197e359ea08e27b20caab0c39f"
  },
  {
    "url": "assets/js/29.e73e9f57.js",
    "revision": "72a48dec13e7df393a6a6170d18499fc"
  },
  {
    "url": "assets/js/3.689dc195.js",
    "revision": "1b2d953593898a46d5e3b8e2558cff58"
  },
  {
    "url": "assets/js/30.598ffe2c.js",
    "revision": "8c40e81ebd8d3c69ed4dbd7b9d62c621"
  },
  {
    "url": "assets/js/31.68ee9589.js",
    "revision": "793ad460861be0cf42e35a2354821299"
  },
  {
    "url": "assets/js/32.77453a72.js",
    "revision": "4a138e84df5890ff6f5ad4d57bff9f31"
  },
  {
    "url": "assets/js/33.2f22e119.js",
    "revision": "bf1280bb6a378b05335953607e410e8f"
  },
  {
    "url": "assets/js/34.ec6ffd56.js",
    "revision": "b66ab65b22ef6ea984edf32306c4913f"
  },
  {
    "url": "assets/js/35.683f4069.js",
    "revision": "2bd9b67c1d0604ef8b54526ef282d844"
  },
  {
    "url": "assets/js/36.dcddec70.js",
    "revision": "aca096e033d9c5f29e29b8adf106ad11"
  },
  {
    "url": "assets/js/37.aab2c544.js",
    "revision": "f706f4dbd2a6ac896be1ceebe20aaa82"
  },
  {
    "url": "assets/js/38.3043ad1f.js",
    "revision": "fe2ad839faecbe719ad0929fc3dc1dae"
  },
  {
    "url": "assets/js/39.fda5e84e.js",
    "revision": "e31ae2745c5d1b29605ac26a9cd366a0"
  },
  {
    "url": "assets/js/4.4e054601.js",
    "revision": "ecf77ced2224ff1ba8d145f7c728f350"
  },
  {
    "url": "assets/js/5.a3d17bac.js",
    "revision": "b6859b2b4c84e6e3af29e61f9f116cd9"
  },
  {
    "url": "assets/js/6.97d5e457.js",
    "revision": "fd8e5b923113a186b893d0a6da4cf0f3"
  },
  {
    "url": "assets/js/7.07d27e86.js",
    "revision": "f29139593ad9514f95f3413fa6276568"
  },
  {
    "url": "assets/js/8.3b02fd85.js",
    "revision": "6e19486077e9ceee2a941acc55729cda"
  },
  {
    "url": "assets/js/9.b71eaadf.js",
    "revision": "06f3404169b557c51263150f05eacb0a"
  },
  {
    "url": "assets/js/app.6a3c5d0c.js",
    "revision": "b13fd65239373396ee7b4fc0f8c68b76"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "a391a387f0796c7d0be8056781185d56"
  },
  {
    "url": "changelog/index.html",
    "revision": "160abddccc010cdf2846fa6a496d5c1f"
  },
  {
    "url": "guide/index.html",
    "revision": "6a031d01c32362bbe372e02e98ea400b"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "70c73361a5f8f847e9cd6ad1ed9c25c4"
  },
  {
    "url": "guide/java基础.html",
    "revision": "26f328494c89c0b18503aeb3161bcada"
  },
  {
    "url": "guide/markdown.html",
    "revision": "399e77bc122311374adacf4c984593a3"
  },
  {
    "url": "guide/vuepress.html",
    "revision": "35a513cd55a4d934ab73212c9002bed6"
  },
  {
    "url": "hero.jpg",
    "revision": "de38e0eb0581734e90de58c3061c0784"
  },
  {
    "url": "index.html",
    "revision": "bd4ef246aeff7d6b6a48317b4d0a0915"
  },
  {
    "url": "logoko.png",
    "revision": "2a3913b14bd308aaf07a0a0a6fe4843f"
  },
  {
    "url": "markdown/index.html",
    "revision": "3555460d4ca2cb70cab138fcf79ccdbd"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "798e6ef2c88ce09d26dbf4eee26997cb"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "a3ca5cfb313776958516dc9ea5645e76"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "0eb9d1c41b4d39018d9e8e7a61bb2123"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "6741b1db06f5b186557d6640d93f3a99"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "422fe1bf12055c26692be8c637861dd7"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "fbbdd145c4992faa3a6de52cce906d3c"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "b59b12a28f083977fd79b372a0da4a15"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "1ad4e90735fa7e055d740175397080dd"
  },
  {
    "url": "maven/index.html",
    "revision": "6bc7d9b05da49b343b8b49ae5bcae1ae"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "f2278ef67700c43accecf68801bf6593"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "970695cb0f793bfdd051c5fb66c2e83c"
  },
  {
    "url": "maven/pom.html",
    "revision": "725b8b481e54d398d3ab05f9be2cbec5"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "997c9e8357402bb010d92ab6d2b88e93"
  },
  {
    "url": "mvc/index.html",
    "revision": "6a3c97d6af34f7870eda403ca4f12440"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "6fd0eaaa28f08c051610c39d12b66b8f"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "43257786b4d966bb0c5f928e35deea97"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "8bd2e33871cbcc5f66306ef763328b12"
  },
  {
    "url": "spring/index.html",
    "revision": "b644cdc0ee25824dd21c3b8919a7f3f4"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "e6363e503218d80b201f70e68e38a32d"
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
    "revision": "a71128011d0baf6c807ea1b6c73db6c8"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "9d751a9f9da709dab38c7063bc722697"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "ce90a14c094e0c73f36351c6284d36be"
  },
  {
    "url": "vuepress/vuepress的部署.html",
    "revision": "7be2cf7610ce3c8feaf3e784a34d8080"
  },
  {
    "url": "vuepress/vuepress的配置.html",
    "revision": "62029eb53b4b137c11009f54f6a72fa2"
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
