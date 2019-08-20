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
    "revision": "b4ed09b37273e47ff1917c031d8dfebd"
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
    "url": "assets/js/34.194009e2.js",
    "revision": "1770b5e6c2ef9d54a6a45a349d111423"
  },
  {
    "url": "assets/js/35.5656a50d.js",
    "revision": "2653df46d5c17b86c300df92b7ae35e6"
  },
  {
    "url": "assets/js/36.dcddec70.js",
    "revision": "aca096e033d9c5f29e29b8adf106ad11"
  },
  {
    "url": "assets/js/37.80a1cf99.js",
    "revision": "ea3f6e888615aa606d76fd0be7ed2bf5"
  },
  {
    "url": "assets/js/38.69625549.js",
    "revision": "c7bfc94f9d4dd81109538fbbb503fbce"
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
    "url": "assets/js/7.b94a729a.js",
    "revision": "6ce7009b45c4a9e51021b52ae0510748"
  },
  {
    "url": "assets/js/8.30106968.js",
    "revision": "4d0cedcb49559f95ea610b3434a45efe"
  },
  {
    "url": "assets/js/9.b71eaadf.js",
    "revision": "06f3404169b557c51263150f05eacb0a"
  },
  {
    "url": "assets/js/app.5affbfc6.js",
    "revision": "a735f02f44d3606c273937b7897aaad5"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "5ddc51354401eaa8b9dc24f1e81706ad"
  },
  {
    "url": "changelog/index.html",
    "revision": "9d14bd80a51ed7395fdf800b965990d4"
  },
  {
    "url": "guide/index.html",
    "revision": "0cdf5fccbc6d8753cbbe3b5d4e321e52"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "25237225dce36e4e7956e91dcda8bb54"
  },
  {
    "url": "guide/java基础.html",
    "revision": "e9663d40888d47e8ffca4e7b2216375e"
  },
  {
    "url": "guide/markdown.html",
    "revision": "82046cc71a35d05581d9a139d3a90186"
  },
  {
    "url": "guide/vuepress.html",
    "revision": "e4a8335a86eb3d158383192f3a72a55e"
  },
  {
    "url": "hero.jpg",
    "revision": "de38e0eb0581734e90de58c3061c0784"
  },
  {
    "url": "index.html",
    "revision": "004407a2851dd00d7c321eb855b195d4"
  },
  {
    "url": "logoko.png",
    "revision": "2a3913b14bd308aaf07a0a0a6fe4843f"
  },
  {
    "url": "markdown/index.html",
    "revision": "7a384fcbd46e33dc9d18bba77dfc9693"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "f23d845efeaeb3804c98f190eae7c86a"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "0260a270ca05a0a3a6c7bffdda12b4aa"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "67a24a0fc8be5fc8eb35a5a76381a54b"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "f39ddd58c1ade60e300cc373359e52ba"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "3f4b01f857cf6913eb7682bc6e0c49e0"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "e8c7a048e6f57791bf7546b1002c1d58"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "50395672936ad396b6e756133fc6b7e9"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "1b3f4d0bf46f3c4f50227e9e649e07c6"
  },
  {
    "url": "maven/index.html",
    "revision": "1270228ab530fb54397b777a307fc477"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "b72f00fd86e151bef3eff227b9f68add"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "27921ee798de0f3359b3f634dde0a24c"
  },
  {
    "url": "maven/pom.html",
    "revision": "93d888eaf4b5ea4b2cd59cceb1a2a271"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "97720499a950ec4b5463f5d0d9bc9edb"
  },
  {
    "url": "mvc/index.html",
    "revision": "343f524f8f27fddfb797f92d1dafb4e7"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "aa687dd97fb6118fcf63cef928990db6"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "c0201f2820e5d8a34c7186cf3deaa54a"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "013a695b6f0fe8b39d11316534822fa9"
  },
  {
    "url": "spring/index.html",
    "revision": "f82891f156bb364c03872ed0d630d3f4"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "a401de397028a128e6fbb079aa26f11a"
  },
  {
    "url": "vuepress/vuepress使用1.png",
    "revision": "0e538b3f94159d5b541d19cd8bb36842"
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
    "revision": "e59829c9684a7fa14a29f4a4d188212e"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "1397a6d0470771fb503c167438566ea7"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "affea8a17667c143ae9eaaeb385dc00e"
  },
  {
    "url": "vuepress/vuepress的部署.html",
    "revision": "5f5db1416042bf037daf6440c0f042d9"
  },
  {
    "url": "vuepress/vuepress的配置.html",
    "revision": "9c36f31dc6c86f571aebcc309f380c42"
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
