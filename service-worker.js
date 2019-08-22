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
    "revision": "5631cbb0a52b0745b348ab23c12313d0"
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
    "url": "assets/js/10.f6bd8928.js",
    "revision": "85e03d8d7b30d1bfd325fb2afb0322d7"
  },
  {
    "url": "assets/js/11.b2259f93.js",
    "revision": "53543e6d0417f2a7eae3ac6ac7e11391"
  },
  {
    "url": "assets/js/12.7adcf1f3.js",
    "revision": "43605f1e20b2fcf74560d2e667db3070"
  },
  {
    "url": "assets/js/13.5b647406.js",
    "revision": "629ddaa0bb22f74aac6906f167006586"
  },
  {
    "url": "assets/js/14.11cb95ef.js",
    "revision": "c9d78bc06b11ad81671477bb2e256171"
  },
  {
    "url": "assets/js/15.e879d638.js",
    "revision": "f6439f87896fa8a70b26760f75871938"
  },
  {
    "url": "assets/js/16.f54648b0.js",
    "revision": "21401fad5b4d6a694e62882d267b0674"
  },
  {
    "url": "assets/js/17.ee6e8aaf.js",
    "revision": "3851bdc86bf50d4ca1eff455c9b28cb7"
  },
  {
    "url": "assets/js/18.e577e894.js",
    "revision": "e812795d91681aba98e58121b4fa766e"
  },
  {
    "url": "assets/js/19.65f4a193.js",
    "revision": "70d6b6b66bae20e8ca2a0a1f09930784"
  },
  {
    "url": "assets/js/2.896ef9cc.js",
    "revision": "25d98d1e3ef5db321e1035e433fb3c69"
  },
  {
    "url": "assets/js/20.df73e4d9.js",
    "revision": "ffd3fd74192bc639c4f50b366795d13f"
  },
  {
    "url": "assets/js/21.c22c2858.js",
    "revision": "22e3600a4ab701754d968706881f7ca0"
  },
  {
    "url": "assets/js/22.ec0aacdb.js",
    "revision": "3ee65c3a77d635d10a3fbbfc9ab29153"
  },
  {
    "url": "assets/js/23.1dded746.js",
    "revision": "1a4e25357b9bf507f7b3029d1de67071"
  },
  {
    "url": "assets/js/24.a212326e.js",
    "revision": "e5aaf53f0d7be403acbd09bb22025246"
  },
  {
    "url": "assets/js/25.64326d69.js",
    "revision": "34f4b746228988518bebbad9a7682f89"
  },
  {
    "url": "assets/js/26.ba845ed7.js",
    "revision": "4c57ffba06493aae7f31b13b42f34560"
  },
  {
    "url": "assets/js/27.33a81305.js",
    "revision": "1c8e6fa17a1ff4b13e8f5f822a6b1e67"
  },
  {
    "url": "assets/js/28.fa54eccd.js",
    "revision": "828f71e079012098cbccbb87b0083ded"
  },
  {
    "url": "assets/js/29.09b6bcb5.js",
    "revision": "66fdfb1b885f64c147c604196e415113"
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
    "url": "assets/js/31.a8e914a6.js",
    "revision": "6d7cd14cdc22e347d7a21e4444a252c6"
  },
  {
    "url": "assets/js/32.fed412ef.js",
    "revision": "d02b633a1eff8a075094b29b41702016"
  },
  {
    "url": "assets/js/33.597d42f9.js",
    "revision": "f540a7474d0b5d3c78c41a6c06d85132"
  },
  {
    "url": "assets/js/34.80f24be7.js",
    "revision": "7379a13ea3112eee70b69b43fcf8b3f2"
  },
  {
    "url": "assets/js/35.3b520996.js",
    "revision": "3736153003f13c621a0bf75b6ec51633"
  },
  {
    "url": "assets/js/36.b18d580d.js",
    "revision": "1f89974c8b454aa83a1d549a8536e6b4"
  },
  {
    "url": "assets/js/37.c59d9a17.js",
    "revision": "59c0cc47a04d89dd2afca3c1c65dd482"
  },
  {
    "url": "assets/js/38.5aa29758.js",
    "revision": "6ff8ba7ce7d8161a98c9b09afe27c143"
  },
  {
    "url": "assets/js/39.d550f9ff.js",
    "revision": "89561e14b0edd21c5aee779a3d26f07b"
  },
  {
    "url": "assets/js/4.e6ce257e.js",
    "revision": "52acfc312384f1a229016da8ac7fc3c5"
  },
  {
    "url": "assets/js/40.f3810fa6.js",
    "revision": "3d9086c4d00871bf3637845b1571ca01"
  },
  {
    "url": "assets/js/41.3cdc09eb.js",
    "revision": "b73857260e009d80756a2e036c4ccfce"
  },
  {
    "url": "assets/js/42.856e4e65.js",
    "revision": "ccbcb5a0f4b95b60db691a5df27fbded"
  },
  {
    "url": "assets/js/43.329093b6.js",
    "revision": "e8e54d6346483a26d2e1fb0ccc20cde0"
  },
  {
    "url": "assets/js/44.590278b7.js",
    "revision": "5b8636f975ceb9c01fc8d4f6e189a040"
  },
  {
    "url": "assets/js/45.c005b0d4.js",
    "revision": "2cfdde07bf1df1246d2ef7f7f26120f1"
  },
  {
    "url": "assets/js/46.9e9f2b23.js",
    "revision": "8215df080c969b96bc40092ae804a6dc"
  },
  {
    "url": "assets/js/47.a28a1352.js",
    "revision": "19fb4731b5f8f0a19f2b5f0869ce4ac7"
  },
  {
    "url": "assets/js/5.1c521599.js",
    "revision": "3e3f1693399b16cb631edddd3a6c93b9"
  },
  {
    "url": "assets/js/6.0d96d063.js",
    "revision": "9ca6ca550023b86e427e363332a6d0e5"
  },
  {
    "url": "assets/js/7.fa6ccc41.js",
    "revision": "836be37fa7c253c67c86da99c129bf00"
  },
  {
    "url": "assets/js/8.2911b6a4.js",
    "revision": "a6e9a1ad473bdb6995cdba936fbf2dc5"
  },
  {
    "url": "assets/js/9.aaf5f179.js",
    "revision": "39fe843e508ca98fb853e9bde4382e86"
  },
  {
    "url": "assets/js/app.a4222903.js",
    "revision": "a21187b1d5b34420ceed0cf8d5c73dcf"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "81e865183a4f47a4a68b543cbd5288e8"
  },
  {
    "url": "changelog/index.html",
    "revision": "1259c0fecb2432a8e1c742588a821e53"
  },
  {
    "url": "guide/index.html",
    "revision": "f5ef4d0a08246028cafcf6c165a11e38"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "8e747384555755b4990538e9a3c3a546"
  },
  {
    "url": "guide/java基础.html",
    "revision": "680a9e4111dd02bf6c41f6814339b310"
  },
  {
    "url": "guide/markdown.html",
    "revision": "b0ff65207dfc3a56c7ef7e1ffeb7f9fc"
  },
  {
    "url": "guide/vuepress.html",
    "revision": "0d676fe3500b148226262e063294d918"
  },
  {
    "url": "hero.jpg",
    "revision": "de38e0eb0581734e90de58c3061c0784"
  },
  {
    "url": "index.html",
    "revision": "c0a5ce888f2ba44a3a7b510cd7c74241"
  },
  {
    "url": "logoko.png",
    "revision": "2a3913b14bd308aaf07a0a0a6fe4843f"
  },
  {
    "url": "markdown/index.html",
    "revision": "3188561e1da7a5456ad9095d65f25205"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "1bfaf1ddcc084ca319eb0d70f9ae3e9d"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "b6ab4deff3396a1ba17cff68808f5b3a"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "dafe1bf747aa84c62fffd774bf558645"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "c07d76498f6bac035a456395852c37d7"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "40b1469a4e88cd797df056fa4baa84b3"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "38ca72ac719ded47649c60c049d3b92d"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "ed83acd842deb1cf347b727df24bf973"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "5cbbd82471f51b476c6e0911c92c6336"
  },
  {
    "url": "maven/index.html",
    "revision": "609169557edce78324c519b28411c6c8"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "aaa584aedae36765da42815d13a4594f"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "cab714fb32a97e03f60caf6cfdd3cc6d"
  },
  {
    "url": "maven/pom.html",
    "revision": "762f9be9300076fef3d61d1f36c36e84"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "c2afae79a9d95d1f38dbdec3f642b8b3"
  },
  {
    "url": "mvc/index.html",
    "revision": "17c3a38f685295dccbeafd30b17c0f40"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "22723b2ab4fec42bfb01733742df7ceb"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "6311a6cb94296bd8d05278c6b6cd6a66"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "f5e33815e08188fe4faa6a04df2080d6"
  },
  {
    "url": "spring/index.html",
    "revision": "ccb05c3227c754fbfe680202fa5e557b"
  },
  {
    "url": "thread/index.html",
    "revision": "6eaa14ef0adef64c1cc1edc3a2fe5b45"
  },
  {
    "url": "thread/sleep()、join()、yield()有什么区别.html",
    "revision": "36c461540b75ddd6a3e4a3f3679ab7d6"
  },
  {
    "url": "thread/thread同步死锁.html",
    "revision": "ea98f107a171cd4e73b935efd5b42670"
  },
  {
    "url": "thread/thread方法.html",
    "revision": "3dacfba21cdbfebb841950f337007a41"
  },
  {
    "url": "thread/thread的创建.html",
    "revision": "af43772878f1571917aa37ee265ab520"
  },
  {
    "url": "thread/线程池.html",
    "revision": "cd1ada97578cea03c6ae3898c07e5c5f"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "843c0e071541e274a003bb74e23e923a"
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
    "revision": "074576dcb576784e3d8a4302fd722749"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "a4ee4bf7999694763e041f8661d89116"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "123cab15aa3c96f3255a11e019c395b5"
  },
  {
    "url": "vuepress/vuepress的部署.html",
    "revision": "b2dc1ab7fbbfa30d091696a279a0cfb1"
  },
  {
    "url": "vuepress/vuepress的配置.html",
    "revision": "8eaea0c56a06f662b916256f48726241"
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
