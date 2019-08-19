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
    "revision": "656b80c7dc5d67e33ebff5c11b2be89b"
  },
  {
    "url": "assets/css/0.styles.ccd4db4c.css",
    "revision": "41ef4cbb072e78849ff41015461042a1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.be520216.js",
    "revision": "264f7210f21061179cc2aa44f8fdbf99"
  },
  {
    "url": "assets/js/11.9b284505.js",
    "revision": "458b8d77afb29cd2b2637d689a8eb530"
  },
  {
    "url": "assets/js/12.d8e1357f.js",
    "revision": "a458e8e04ac223921e821823b7531319"
  },
  {
    "url": "assets/js/13.9a87a39d.js",
    "revision": "b0e79b08ef7a872cfb506ee6907e4989"
  },
  {
    "url": "assets/js/14.ef7657a4.js",
    "revision": "d0e82188485e655f3f98b45a72f735eb"
  },
  {
    "url": "assets/js/15.ad77812b.js",
    "revision": "e73316b8e37b47b2aa64ab728de9ea09"
  },
  {
    "url": "assets/js/16.67cbdf8a.js",
    "revision": "0fa923ee9797c025214f8ac2c2e2f28f"
  },
  {
    "url": "assets/js/17.46dddac6.js",
    "revision": "30e83592c5fbf6101be16ba4e4229708"
  },
  {
    "url": "assets/js/18.366c2efc.js",
    "revision": "7ecd7588040d6f06ff3df918eb4f51f8"
  },
  {
    "url": "assets/js/19.f2878f57.js",
    "revision": "f4d30f31915ca8dc9d3f1ce6883288cf"
  },
  {
    "url": "assets/js/2.b25455ce.js",
    "revision": "42b010e155483ac775845f02f0befba8"
  },
  {
    "url": "assets/js/20.9270a4dc.js",
    "revision": "5b82a0ec18488d6a7f6353edeae67b20"
  },
  {
    "url": "assets/js/21.bc4c9dbd.js",
    "revision": "700c0a4557a1c881b568bb5d683ed7eb"
  },
  {
    "url": "assets/js/22.42d80cb9.js",
    "revision": "419fdab89310a36c56b5e07a53fe4018"
  },
  {
    "url": "assets/js/23.40d78e57.js",
    "revision": "6937b957276333d981464367a4bccfc0"
  },
  {
    "url": "assets/js/24.9080e68f.js",
    "revision": "6ef4048e6a963ad72b3874d58fb31752"
  },
  {
    "url": "assets/js/25.94f3e2a5.js",
    "revision": "ab69c21a120bffd5d42d084a64d0aa24"
  },
  {
    "url": "assets/js/26.ea87b9ef.js",
    "revision": "0ecfe1644b673c5b3dae56f782fec121"
  },
  {
    "url": "assets/js/27.be9c1057.js",
    "revision": "eb57721cbef674e60ee7ac90269a56ec"
  },
  {
    "url": "assets/js/28.5f52f507.js",
    "revision": "9d63a564588b1369672eec3f10a8c3a4"
  },
  {
    "url": "assets/js/29.75802ff8.js",
    "revision": "7561e1c0eea728725d337d0ee7e95e35"
  },
  {
    "url": "assets/js/3.9e6a689a.js",
    "revision": "1b2d953593898a46d5e3b8e2558cff58"
  },
  {
    "url": "assets/js/30.916f6873.js",
    "revision": "e831732e4286bd87c8e3fc66c187779a"
  },
  {
    "url": "assets/js/31.5e141436.js",
    "revision": "7bec9cead76d98917ac8bfeaa0364a95"
  },
  {
    "url": "assets/js/32.d270c852.js",
    "revision": "c6985dbe9eb696d68eb99286d63b649e"
  },
  {
    "url": "assets/js/33.4b23a1fd.js",
    "revision": "5cceecf41cd9df82ea6d6a52c45721fe"
  },
  {
    "url": "assets/js/34.f17272a1.js",
    "revision": "ce47fd3515719c1d759d6da935f46b66"
  },
  {
    "url": "assets/js/35.9a81b828.js",
    "revision": "2653df46d5c17b86c300df92b7ae35e6"
  },
  {
    "url": "assets/js/36.f7704458.js",
    "revision": "aca096e033d9c5f29e29b8adf106ad11"
  },
  {
    "url": "assets/js/37.97640ba9.js",
    "revision": "a93bbadfa50d4ac8786887637f5d057d"
  },
  {
    "url": "assets/js/4.99d923b9.js",
    "revision": "3b42ece9b8149f78f2320479c20b28df"
  },
  {
    "url": "assets/js/5.3e7b2f07.js",
    "revision": "b6859b2b4c84e6e3af29e61f9f116cd9"
  },
  {
    "url": "assets/js/6.b43e4944.js",
    "revision": "b7ba06757dc5b9627e1898d400d60112"
  },
  {
    "url": "assets/js/7.95c0314b.js",
    "revision": "6ce7009b45c4a9e51021b52ae0510748"
  },
  {
    "url": "assets/js/8.5b85eaa0.js",
    "revision": "91f78b87a81d695b2345e16e4db43363"
  },
  {
    "url": "assets/js/9.f2a53aca.js",
    "revision": "e98004db6aabe124e301f9445af6c598"
  },
  {
    "url": "assets/js/app.0460abde.js",
    "revision": "94204c52ae74219977f77095594e125f"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "5daf85d730444b88f4eed789d753e131"
  },
  {
    "url": "changelog/index.html",
    "revision": "557d24f3a548020747ea1e5d217db3f8"
  },
  {
    "url": "guide/index.html",
    "revision": "fdfa01326dd7948400fba71b50d69f73"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "ae9af586e99ebffa96ea1ec6dac7dd3f"
  },
  {
    "url": "guide/java基础.html",
    "revision": "5f961b3fad9309438945f8da32ff25f1"
  },
  {
    "url": "guide/markdown.html",
    "revision": "d7186e7c1f1c1b25b7b8e5f7db4b97cd"
  },
  {
    "url": "guide/vuepress.html",
    "revision": "cf495b0e448f0ec087361f3fd7115ca8"
  },
  {
    "url": "hero.jpg",
    "revision": "de38e0eb0581734e90de58c3061c0784"
  },
  {
    "url": "index.html",
    "revision": "ed56d59260d60928604e302ce72e9cf4"
  },
  {
    "url": "markdown/index.html",
    "revision": "0db9e4caabfee75c670bdd710ac257ec"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "c65f615440009d7ea4ef6a34a6ff939d"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "33be7ade22dbdf0e12971d550bdb5b95"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "d5347725f917d2a39753006000b8f719"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "f857f153110358a01d1b371026225759"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "ff8563547b1a3fa6364f86f1bd66b5fa"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "3bb56f89fa9da2f5586dc05218cd8a65"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "6d83c3d1e146492c2ea834c92a71be21"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "5e09c5399aef2db98aa28ef2dde1002f"
  },
  {
    "url": "maven/index.html",
    "revision": "866ac4ae0d305cdd468626d399ef12f2"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "f8d1d33f36d2b5015d27105df15812be"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "7007348391fa6e273bebdcde2addb51f"
  },
  {
    "url": "maven/pom.html",
    "revision": "d3cb0ba73397e5d6f3ed4ee0c3fd846c"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "dbc2ce94be75be671d6359f34f203117"
  },
  {
    "url": "mvc/index.html",
    "revision": "cfe3b7f2bd76c1c6f5deb80568a951dd"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "b8820dfbe7ada56bc161dc0e25eda7be"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "1aadeae790c54264ff08319556c3fd5e"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "87d093ec12c3d8cdb3de19413f568da5"
  },
  {
    "url": "spring/index.html",
    "revision": "da7250f15026226cd3e359891b94ada4"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "2df524ab0816efaa69a53a9d726ab45b"
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
    "revision": "8f627f17869108483ed49595827f68eb"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "da477a5b5413971d5731ac48c2a5eabb"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "d9329dc34c3a2adb1796b3d2bf0890ba"
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
