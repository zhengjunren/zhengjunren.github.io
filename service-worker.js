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
    "revision": "d603f1cf133259fc96b18cf06f0303be"
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
    "url": "assets/js/12.d3883b4b.js",
    "revision": "bafca687d1c5f94901c3a1a4149118bd"
  },
  {
    "url": "assets/js/13.081ba8f7.js",
    "revision": "189c8e4e1a4fbfcf42e6c3bf33f387de"
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
    "url": "assets/js/25.b9d45d50.js",
    "revision": "161779821890964ee5126294e8a72635"
  },
  {
    "url": "assets/js/26.23ec1ace.js",
    "revision": "28c99acd4274dc6cbef4c98de757b98a"
  },
  {
    "url": "assets/js/27.c4a5abb7.js",
    "revision": "b40d97676a293113abf07bd3e2e9402d"
  },
  {
    "url": "assets/js/28.68bcc4f6.js",
    "revision": "c0ed3de3622d675fd80fc37d872b4bba"
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
    "url": "assets/js/34.3d493846.js",
    "revision": "98eb994577dff3a7f2e9068b2d55cb68"
  },
  {
    "url": "assets/js/35.5656a50d.js",
    "revision": "2653df46d5c17b86c300df92b7ae35e6"
  },
  {
    "url": "assets/js/36.c89f057d.js",
    "revision": "19929298f7f30205463b57c7681dcd13"
  },
  {
    "url": "assets/js/37.8a82a45a.js",
    "revision": "a76c81adc3e8894b4eb1813a58c6cdf3"
  },
  {
    "url": "assets/js/38.eccbbcf0.js",
    "revision": "ebae37f2f92f2572ce64a3e7f8de99cb"
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
    "url": "assets/js/6.4d57a62f.js",
    "revision": "579f85a39491b6f5726b5d39a04c5b9e"
  },
  {
    "url": "assets/js/7.23973f46.js",
    "revision": "1ac40e7223cc5aafd4eabf62d5ff72f8"
  },
  {
    "url": "assets/js/8.7e7f1bfc.js",
    "revision": "91f78b87a81d695b2345e16e4db43363"
  },
  {
    "url": "assets/js/9.79f664db.js",
    "revision": "9e75cd3d16f12ddcfddab05fce23ac01"
  },
  {
    "url": "assets/js/app.f98867d0.js",
    "revision": "6460f784c79a8a747cee15ac617824a6"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "c2beb52ceef13046375eef6c9a86980d"
  },
  {
    "url": "changelog/index.html",
    "revision": "bc6ad57858ab69edb6a56696581e40ac"
  },
  {
    "url": "guide/index.html",
    "revision": "884fa330a8ac80f5cf6dbd158205e03c"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "3e8f164cf6ceea98099d7d4717df72c8"
  },
  {
    "url": "guide/java基础.html",
    "revision": "e3372ccfa7019c1ef60179c1a0f20325"
  },
  {
    "url": "guide/markdown.html",
    "revision": "a6fbbd94e4bac7c7cec0f20f6b14bfc3"
  },
  {
    "url": "guide/vuepress.html",
    "revision": "f783f243d997133682fa8d41e6a1c603"
  },
  {
    "url": "hero.jpg",
    "revision": "de38e0eb0581734e90de58c3061c0784"
  },
  {
    "url": "index.html",
    "revision": "62deb9a9b1ac8d28eadee302142acd86"
  },
  {
    "url": "logoko.png",
    "revision": "2a3913b14bd308aaf07a0a0a6fe4843f"
  },
  {
    "url": "markdown/index.html",
    "revision": "64a75c1e10bad1f1eccd3ecd248c3a4c"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "1e51b3289dc1abe1e4389aa5ebe76a36"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "cefacb91317738370c2a510114aabdf0"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "15254f889214f3502f061e258a30ff71"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "89b16a8eeb432f121e9a8c219cd5be8d"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "ea4b23f73148445d009391295d6223eb"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "997ab5546cf397d206ec452392f408d1"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "365480da3448d28246f40c3f7e4543ad"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "4f3c1d487f0baab8fce03bb634f3647d"
  },
  {
    "url": "maven/index.html",
    "revision": "5722d0d7b1b0123758477a3dfa9fd64b"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "9ceb7108a5386f2b18a337dc691b35b4"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "580f04dc827e9265406bb67e64c4eba8"
  },
  {
    "url": "maven/pom.html",
    "revision": "70cfeb1cd7921cba5cbbc7de772098b3"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "a563fcc7d135d0509c36a4e2cca7bfba"
  },
  {
    "url": "mvc/index.html",
    "revision": "27c6f0c423cad5119ce65bbe1d6f64d8"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "80828f6c2f92f21b5d4828f5945abee3"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "8652dd10c113f833e52fb574b5e0b703"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "0c7a4350ba221e6000dfdce5d93387b4"
  },
  {
    "url": "spring/index.html",
    "revision": "e1e895443f0efbf07616389b6dddddc1"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "2044c9467da551e8e782d02312d9586f"
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
    "revision": "ad4120a1ac1497c9bbec01b624b50e66"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "eed71638b611502dce396011d2a36270"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "073b617ad84faff6183bece363a1ac0e"
  },
  {
    "url": "vuepress/vuepress的部署.html",
    "revision": "44c0a54f69d413a29a9d81fc352fea78"
  },
  {
    "url": "vuepress/vuepress的配置.html",
    "revision": "44372926cb57adf1394c0a651630e36a"
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
