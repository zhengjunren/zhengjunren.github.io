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
    "revision": "f59105b185855ba4fa233097526d608c"
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
    "url": "assets/js/11.b7bb6e03.js",
    "revision": "6a6a661d9760762257e8e0c6ee671102"
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
    "url": "assets/js/9.397298c6.js",
    "revision": "247a088e241c466f37fd7b7c365ca943"
  },
  {
    "url": "assets/js/app.7c627e25.js",
    "revision": "283667f43292a594ea4b210da770f5fe"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "20edacf095ab5eb6b82506fc713cfea5"
  },
  {
    "url": "changelog/index.html",
    "revision": "3608456be9c6c8ea0be8f896d3cc3433"
  },
  {
    "url": "guide/index.html",
    "revision": "b884c799c9063254c41cdff44593b7be"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "811f4453f27770cacc73c9928e53d8b8"
  },
  {
    "url": "guide/java基础.html",
    "revision": "5a09d820328b0b6d7573cbae93c0cbc8"
  },
  {
    "url": "guide/markdown.html",
    "revision": "bee83945c618ca8782f89dfcae6962bc"
  },
  {
    "url": "guide/vuepress.html",
    "revision": "5e10901e024dfd1badb264780d479a98"
  },
  {
    "url": "hero.jpg",
    "revision": "de38e0eb0581734e90de58c3061c0784"
  },
  {
    "url": "index.html",
    "revision": "d7f63eee4a1ebf20e913149597aebca9"
  },
  {
    "url": "logoko.png",
    "revision": "2a3913b14bd308aaf07a0a0a6fe4843f"
  },
  {
    "url": "logoko2.png",
    "revision": "6a0c4ee0228cd644fa72b8f16f8066dd"
  },
  {
    "url": "markdown/index.html",
    "revision": "95acffbce2b58a72eee38391122701bf"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "52501b8eece9a0f7c8eeb309125cf65a"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "9dc712fe1a4be3d9381972f10676d304"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "1f3b8c7548586ea56031a4b2be67313a"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "bcff2c464f5b56ee71b983fb254ba326"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "0efa2b78fa08a7a66739b5caa884bae4"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "f174fbc7ed9c5512885b1ac34a3a1f2d"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "79c75ea8ab3033864b87c082c434473a"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "14cf11ee31360c52cc1cf45c0e79dc0f"
  },
  {
    "url": "maven/index.html",
    "revision": "7ca640b14fb2aaa072d50b2a4723ed48"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "79d1d07f42c95dc24a505759181d7f7b"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "a5371fa13d553a3388707ec1183c0df5"
  },
  {
    "url": "maven/pom.html",
    "revision": "e98745eedb9987021e454606eaf9f863"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "1cde949554e150748306e16058a5d2e9"
  },
  {
    "url": "mvc/index.html",
    "revision": "1323bcd30cd597e8b883ebd305e8862f"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "c78e9553d21a757772843a357f66393e"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "5cbd6429e8cf1ca126cbd78ee400d72b"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "0dfd9443f37a7ce3f5cc935e010947ce"
  },
  {
    "url": "spring/index.html",
    "revision": "eed5731436f889e12c93adb109cd915a"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "6b28030504918b8e8956bbef60af4a8e"
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
    "revision": "64806173059009614394f07218ac1d70"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "340f57616800f1afeb0f742479c4793a"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "0aa91e95ad8a11948120cb1827d5354e"
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
