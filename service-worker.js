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
    "revision": "1324de77ec8d1e4e8cbfbeae24a6159f"
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
    "url": "assets/js/9.c4391c2e.js",
    "revision": "b36c0b39a0ffc0969c47a99d3786ef83"
  },
  {
    "url": "assets/js/app.b7acaf8c.js",
    "revision": "40103032a4218c27f194434faace09bf"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "b5f4c482b14ab95243c071e9fe3efc2f"
  },
  {
    "url": "changelog/index.html",
    "revision": "09f28def98d26d9c01f3e4f65583e866"
  },
  {
    "url": "guide/index.html",
    "revision": "9143b4cf8b4a413724f9c382a2a5491d"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "946c58f2a42ec708264e5cf222f1f642"
  },
  {
    "url": "guide/java基础.html",
    "revision": "78ecd11f09b1707a2692d5d8b24be0da"
  },
  {
    "url": "guide/markdown.html",
    "revision": "dc8224c3882d9c183cc36ae784595c19"
  },
  {
    "url": "guide/vuepress.html",
    "revision": "5d4e89e7a370d9fbc1386bfcf61ac533"
  },
  {
    "url": "hero.jpg",
    "revision": "de38e0eb0581734e90de58c3061c0784"
  },
  {
    "url": "index.html",
    "revision": "ae18fafb3ab72c306f2b66baa67708a9"
  },
  {
    "url": "markdown/index.html",
    "revision": "988c034cf5b041a9bd0acebeb384df26"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "c091d25718fb1d2e48c58b96e742056b"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "17539687c2b75e1f325252fcc1938fce"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "1aa5e3c846636d342c1bcb19b67a609e"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "4f1f8a76f4f0557c34d8e7f51525876e"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "eb5caad6362f25ea27a9acd159bac87c"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "b9e3b6b2700ec6b15e76ddaaa6ca4b6c"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "4784faa96f69d1c4598175a90bc46258"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "85efe7d8ac129df6daecdcf111bb2166"
  },
  {
    "url": "maven/index.html",
    "revision": "61fc6635f87516a704f5f642ed7b6785"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "b12482faf036ec4d79a8ea336900893c"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "14f04dbfb814a53024a29092fb20f575"
  },
  {
    "url": "maven/pom.html",
    "revision": "7af69f4c589b342a287c0c374ab1adf2"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "27f2fcce6d0f108de8bd2fd0355b8340"
  },
  {
    "url": "mvc/index.html",
    "revision": "0659fb2bcff66afbe4a8d3367fc374f5"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "1cc887949289bdad2422248be1278c56"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "8bad079797a15c43e64d529846e87e0e"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "b4f9cd78392a1de89c6f59c67c453695"
  },
  {
    "url": "spring/index.html",
    "revision": "cc42255ed17ba651eac2a416b51bf8cc"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "50d722ba6232935e1af0060b0538501e"
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
    "revision": "da0bdea2e19f2d690f6f11f7335df30a"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "26edad2aafc84da2aeed9f8e2a28df05"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "d9ba7916beeb9d063892933d7b036376"
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
