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
    "revision": "3c3778db6b4d15260f73a808380c711d"
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
    "url": "assets/js/10.1ad7a6bf.js",
    "revision": "0832f53bee48f60354d96e38c905e75c"
  },
  {
    "url": "assets/js/11.2bd9345e.js",
    "revision": "89607a00038e88c6c2a274913157f63c"
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
    "url": "assets/js/14.d175cad0.js",
    "revision": "14ea2ab5c733d16fefad293dc3801f0c"
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
    "url": "assets/js/27.521f07d5.js",
    "revision": "90da48070999c82932e6d70fd39f851f"
  },
  {
    "url": "assets/js/28.94092c2a.js",
    "revision": "8e259d9f3fa2dd152720f3e78dc67b4e"
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
    "url": "assets/js/9.7af3e1d8.js",
    "revision": "9e75cd3d16f12ddcfddab05fce23ac01"
  },
  {
    "url": "assets/js/app.bc98eb05.js",
    "revision": "d2c9475d98ac35d650570a12c587f6d6"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "bac15e8d12f92c1e2d35bbc995c132ac"
  },
  {
    "url": "changelog/index.html",
    "revision": "4bac257d6c929c245a8d586797bcacde"
  },
  {
    "url": "guide/index.html",
    "revision": "21cadc4591664dda0216dae737a7e412"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "acb3bbd721fb936ae6a7c9cbbd6a4519"
  },
  {
    "url": "guide/java基础.html",
    "revision": "3e0d869bb95e509fdc7e97deac0a7b0a"
  },
  {
    "url": "guide/markdown.html",
    "revision": "db1206e86cb4f5584bb5658965b15e5d"
  },
  {
    "url": "guide/vuepress.html",
    "revision": "ff348515e4e6c0efa69b2798b062e9a0"
  },
  {
    "url": "hero.jpg",
    "revision": "de38e0eb0581734e90de58c3061c0784"
  },
  {
    "url": "index.html",
    "revision": "c73121dc27f63fe93a7eeec4b3c1e3b3"
  },
  {
    "url": "markdown/index.html",
    "revision": "65cddbeeffcab1eefd99858760f9dd6a"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "d7615c287b89b4076227fcbfeafe3d3c"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "bf3070dca1bf3f5aefb9aa4dbc1b281c"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "988f5c5de47c8f980796eff55a4de51b"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "b7cd77c41ddf054f22226ba667148465"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "10c18d850e6ed1b6526257c0337da58c"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "4c96f017c6f35c75a9895b35429f0ea6"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "4eb6b3508371fb983ab955f4c95569a5"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "9646cefc3ab84e82225368b7e2ba9f18"
  },
  {
    "url": "maven/index.html",
    "revision": "90c0169929c867f6ebcaa861d28173cb"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "1830e247ecd8b57f6aecbccded299321"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "8e0bf92a881ba3459d8e86bd0f95e136"
  },
  {
    "url": "maven/pom.html",
    "revision": "63c5a28ff7f2624f6db5f0ae37f0766f"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "d2a067dd9262abab013142c17809f777"
  },
  {
    "url": "mvc/index.html",
    "revision": "441397e2f0a7b877e4a1b74d0913a960"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "501528a8ba40d9ad119e04cd1d813072"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "55844c420a71878414ca8bf4c357fc8f"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "f854aa4c128789d4c153f81fd1320a11"
  },
  {
    "url": "spring/index.html",
    "revision": "c62aa66454c6055816b530c9026ca873"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "764b2bab13837ca0cfe5af15b277c8bc"
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
    "revision": "1144ec1d8901e77d8379b11afcf0ef70"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "a8ff3af3392f462c58a5756e3ba57247"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "602f3a56c60b4cbb92daf7da1c0bd489"
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
