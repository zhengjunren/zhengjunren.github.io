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
    "revision": "ff008ca9bf219a90c019f76bf5ca7280"
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
    "url": "assets/js/11.8982d563.js",
    "revision": "63c58a7aebbeffc7050e7b772c322edf"
  },
  {
    "url": "assets/js/12.076437b6.js",
    "revision": "bafca687d1c5f94901c3a1a4149118bd"
  },
  {
    "url": "assets/js/13.869a6ae4.js",
    "revision": "544f96c2275bbba1016f5564425d55f4"
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
    "url": "assets/js/22.abebd767.js",
    "revision": "e9c83fdd388dc15fe80559bd6690d84f"
  },
  {
    "url": "assets/js/23.7f238b48.js",
    "revision": "b8afed35046e8af166c4eb91bab9067b"
  },
  {
    "url": "assets/js/24.2f58408e.js",
    "revision": "b9203583782f07046a54321b26947ed4"
  },
  {
    "url": "assets/js/25.37dd87e3.js",
    "revision": "12b15f5ab969cd105d20583038036207"
  },
  {
    "url": "assets/js/26.20bc174c.js",
    "revision": "2c83e9ed5f8228a215ef66cbdb46b900"
  },
  {
    "url": "assets/js/27.276c825b.js",
    "revision": "06ac7c799bd5d9d1844c856712421f31"
  },
  {
    "url": "assets/js/28.5f52f507.js",
    "revision": "9d63a564588b1369672eec3f10a8c3a4"
  },
  {
    "url": "assets/js/29.3240c252.js",
    "revision": "9945d404ecd40b90e44bbc070fdadadb"
  },
  {
    "url": "assets/js/3.9e6a689a.js",
    "revision": "1b2d953593898a46d5e3b8e2558cff58"
  },
  {
    "url": "assets/js/30.a8f6e0c0.js",
    "revision": "67bcf2687498d834815a9c09ba851627"
  },
  {
    "url": "assets/js/31.0cf82319.js",
    "revision": "1065f447f6c7ba5163eefa3bdd160544"
  },
  {
    "url": "assets/js/32.d8debc2f.js",
    "revision": "9db273a9d202c2d6a747e2b075b70c70"
  },
  {
    "url": "assets/js/33.4086fc64.js",
    "revision": "1495c99598f746ea04ec4ac756aa57d6"
  },
  {
    "url": "assets/js/34.56d353da.js",
    "revision": "cf04df80614815af8cd2cb8296fb96ac"
  },
  {
    "url": "assets/js/35.bd2daa9b.js",
    "revision": "18ee21042ca69dcd6d1dd3e1c82b602a"
  },
  {
    "url": "assets/js/36.2a76ff6c.js",
    "revision": "49d5438ec115e266731a2b5e99e8414a"
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
    "url": "assets/js/7.4c8e5df7.js",
    "revision": "d092cc6e327b66f9089bd3ada243c791"
  },
  {
    "url": "assets/js/8.5b85eaa0.js",
    "revision": "91f78b87a81d695b2345e16e4db43363"
  },
  {
    "url": "assets/js/9.d73e0af0.js",
    "revision": "471ae46e8eef423149100ff780defd23"
  },
  {
    "url": "assets/js/app.4db36d2c.js",
    "revision": "1cb4abd8bd5bdb2ee2335db950e4e5a5"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "22ec66fdc3e46ff0773832f7b57fa6e3"
  },
  {
    "url": "changelog/index.html",
    "revision": "ddaeaea6dd1192183859385cf24188b1"
  },
  {
    "url": "guide/index.html",
    "revision": "ab5fe8d2f7460c89ea48627563bd3385"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "962dcf9f10780513b072361fb209fe05"
  },
  {
    "url": "guide/java基础.html",
    "revision": "ade2fcaca725f274c4d652fa39d9d1a8"
  },
  {
    "url": "guide/markdown.html",
    "revision": "ad5a46218ecb435bf997a3ea7821a0c5"
  },
  {
    "url": "guide/vuepress.html",
    "revision": "e206218b8d6542e1b7e347b236eb0fa5"
  },
  {
    "url": "hero.jpg",
    "revision": "de38e0eb0581734e90de58c3061c0784"
  },
  {
    "url": "index.html",
    "revision": "0f943aebd4a255ef668782b000247901"
  },
  {
    "url": "markdown/index.html",
    "revision": "fadf65ef1943b4ca859fbd4952a29c18"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "f15d3e221f7dfe6e273e521d83d3208e"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "6fc15b50e072b0de094481d0e370cf75"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "e77100154f04ba6280635bc536aa8bff"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "fe55755e517119c251d8a79987589065"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "4e3292723250a32b711ecec6dd475931"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "74b9107bbad89dee6e8192bb49dd21ab"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "da1fe09dcc537f5a3437b495b8f3a706"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "0a0f88007bd91b669e6501b005520289"
  },
  {
    "url": "maven/index.html",
    "revision": "67c1fc2088e0f9c0ea2fb461556dbf81"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "ee81dd4229f758a576405fba7a691737"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "a4ff2e2ead34d102347da3586b97188c"
  },
  {
    "url": "maven/pom.html",
    "revision": "1ba6d58e49e54049ab58c53f1cee6ce0"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "8b2a8aa5f7af91499d950d4872e6370a"
  },
  {
    "url": "mvc/index.html",
    "revision": "f28eec69993306902a914d6fe2d8e7e0"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "3931b32653e44afbe67cf43fb2205564"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "4682cca59a81c629853cc936057d38e3"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "524c7321303694c26c17d5e53aec4e9b"
  },
  {
    "url": "spring/index.html",
    "revision": "1e55a4028597c2bc3209c7293391bbf9"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "519132a99ecb336d8830182651867b42"
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
    "revision": "212649f917971079a139801b1e848ee4"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "1bc48a469a0a967de056e1b3d4f50aa8"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "9fe8c6214ae70662ead872a662baa5c4"
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
