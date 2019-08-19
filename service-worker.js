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
    "revision": "94d5ed965e555e3f12814ca012130dcd"
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
    "url": "assets/js/10.83bb3d3e.js",
    "revision": "75c2680c18440b19a5b78a61399db414"
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
    "url": "assets/js/15.ae4924ff.js",
    "revision": "a8aa6cce299c2f464e61d96e7da9cccf"
  },
  {
    "url": "assets/js/16.75dccb87.js",
    "revision": "47af300e5665f0ad66a4f523a3a9bad4"
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
    "url": "assets/js/34.86839ed5.js",
    "revision": "5a11ec34e02334dc4c12ee324674c6dd"
  },
  {
    "url": "assets/js/35.bd2daa9b.js",
    "revision": "18ee21042ca69dcd6d1dd3e1c82b602a"
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
    "url": "assets/js/7.da671400.js",
    "revision": "4b9c8793f7552f5aef043d97ef666e07"
  },
  {
    "url": "assets/js/8.63b0ddc1.js",
    "revision": "a073c0f8ad9787615c9f5b7064c1a90d"
  },
  {
    "url": "assets/js/9.78621cef.js",
    "revision": "d09b5d9153be6d09d9ebfda4e5677c1f"
  },
  {
    "url": "assets/js/app.e4cc892b.js",
    "revision": "68de547fc0a0f3c5a034a7e5c0b66fcb"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "a4f356522434d4bc15412e7060f65f6b"
  },
  {
    "url": "changelog/index.html",
    "revision": "7292180e4eba13e89941bcb2c3cc768b"
  },
  {
    "url": "guide/index.html",
    "revision": "d9e8aa349f12c2f59a49ebed17e64ef6"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "c0f9db61534badbcbe8c93518c1d0117"
  },
  {
    "url": "guide/java基础.html",
    "revision": "4a00e5d70437f1d05ddc73c49d7b1b1a"
  },
  {
    "url": "guide/markdown.html",
    "revision": "77217f6399413aa8b4e782abbaf516a3"
  },
  {
    "url": "guide/vuepress.html",
    "revision": "e9f26dbe0234ebc395f093e5d7d1aa92"
  },
  {
    "url": "hero.jpg",
    "revision": "de38e0eb0581734e90de58c3061c0784"
  },
  {
    "url": "index.html",
    "revision": "9041b2a5a6102e7bdc9623eec1b617d1"
  },
  {
    "url": "markdown/index.html",
    "revision": "a625e1fc8610bed4b4d899cc226c02bd"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "988a0ced28d954f389278147d3608d2c"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "e4012e191e1bd4601917a76eb8a74019"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "d001c118e900b21eac3c75afca0f5e5f"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "f8f16a34ad54f4513b62d9e302470cfc"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "5445522f24e2686e7deadc00f33d3326"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "0ca2b91722c35f236388083ad4f6d973"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "82d666459013cbb588b631ee4a8381df"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "625d44a37ab0e3b92d2737f1dfe8651e"
  },
  {
    "url": "maven/index.html",
    "revision": "789a6925286783d30d113a965d93c477"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "c954f5d7f100fa44d7075291b4f242d0"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "a1f39f300a2af3787f4b79df62a5a14c"
  },
  {
    "url": "maven/pom.html",
    "revision": "8bfb5c8b3787ff00ea972d5a42d7eaf2"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "bfa6678590d578ebd3c6ff801955775e"
  },
  {
    "url": "mvc/index.html",
    "revision": "13b26b15d1e52b344e66693b250e96a5"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "6eb7cce936871376e5821d0936aaca63"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "a8265491f74f10bba588270796b9ceb8"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "513dd0a6569e97b02c7794940d8787c8"
  },
  {
    "url": "spring/index.html",
    "revision": "6575b00a944fd18bafc8192d485f3ab7"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "112249fd6095dc9a7a5daeadc408eb93"
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
    "revision": "5eeee9ae466520bf2c2fa0866ca71876"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "a62a4e2ea330220ca7d5b632ff098406"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "66254ad1c7895e0fb6ce6454394629c0"
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
