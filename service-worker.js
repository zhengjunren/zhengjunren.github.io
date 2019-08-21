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
    "revision": "a70b66ff6984ae8039844ad88ded0121"
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
    "url": "assets/js/10.683a7a09.js",
    "revision": "9cb2ed59a6dc94b573e60f444b59afe4"
  },
  {
    "url": "assets/js/11.02e19df2.js",
    "revision": "de24e89290864147206083c95dbc795a"
  },
  {
    "url": "assets/js/12.15e9f39b.js",
    "revision": "8bcf154030b137831bf6cf5e6ffc3c56"
  },
  {
    "url": "assets/js/13.3d7494cf.js",
    "revision": "24967dd9d821f4dd681cf88aecc203f3"
  },
  {
    "url": "assets/js/14.77320007.js",
    "revision": "9803ebcc31edffd0af311bdafbb6f998"
  },
  {
    "url": "assets/js/15.e0ce8eec.js",
    "revision": "dd255b66d6dc396fe21d2089e19f5c26"
  },
  {
    "url": "assets/js/16.79f5c7ac.js",
    "revision": "4ee1090ce2a3ebda62a6ad949b5bc9e9"
  },
  {
    "url": "assets/js/17.403dbaee.js",
    "revision": "47ff4fb1bb5f8b83ce933bc4006321a4"
  },
  {
    "url": "assets/js/18.adc292b8.js",
    "revision": "177e5df5a435817f638e481257b902f7"
  },
  {
    "url": "assets/js/19.1bc4deaf.js",
    "revision": "c4d24769befc724cd18d3ae55519ea53"
  },
  {
    "url": "assets/js/2.896ef9cc.js",
    "revision": "25d98d1e3ef5db321e1035e433fb3c69"
  },
  {
    "url": "assets/js/20.0eaacb9d.js",
    "revision": "2584fd74e62cff1e7e231df8b85cd432"
  },
  {
    "url": "assets/js/21.afe96be5.js",
    "revision": "22d6aadbc5fb79934aeb0757ab08fdea"
  },
  {
    "url": "assets/js/22.77ad381a.js",
    "revision": "021f35abb251b4b2ecddb6f6e0e192ed"
  },
  {
    "url": "assets/js/23.33063fa8.js",
    "revision": "47faf268ec55861d5640aba2e4558222"
  },
  {
    "url": "assets/js/24.2793c62e.js",
    "revision": "e59519c7f32ab4599157eb923040d96a"
  },
  {
    "url": "assets/js/25.64326d69.js",
    "revision": "34f4b746228988518bebbad9a7682f89"
  },
  {
    "url": "assets/js/26.daf41a9a.js",
    "revision": "552c25bfcf55e549f98479eed5b64663"
  },
  {
    "url": "assets/js/27.203216ae.js",
    "revision": "dcb2b09244f57f62340e59e223136302"
  },
  {
    "url": "assets/js/28.9e6cd535.js",
    "revision": "82729d8a94f119ecc9a7dd4ec2a2ad14"
  },
  {
    "url": "assets/js/29.73dc153b.js",
    "revision": "f7a6749a794e3e793c11c6983659f7c6"
  },
  {
    "url": "assets/js/3.9183d77a.js",
    "revision": "287236010f3de57d054a4e95b8bfe12e"
  },
  {
    "url": "assets/js/30.438e5d44.js",
    "revision": "13fa94247e2c46f938a3be603c5d4eb9"
  },
  {
    "url": "assets/js/31.dea86ffc.js",
    "revision": "a0883446ad36399af02c4fc0b0bf169a"
  },
  {
    "url": "assets/js/32.0987eefe.js",
    "revision": "9189aac79c6af0b3237dae67f1cd8de6"
  },
  {
    "url": "assets/js/33.fb627cd9.js",
    "revision": "df2c5630f30d553537807ab348fb44eb"
  },
  {
    "url": "assets/js/34.97fcc041.js",
    "revision": "44c2280dbef93ccec1df62725b4ac6d1"
  },
  {
    "url": "assets/js/35.8f041e68.js",
    "revision": "039b720999f9451372dd9091fbe62dae"
  },
  {
    "url": "assets/js/36.26004aab.js",
    "revision": "624c05f5081f828ff34d7b58b05c4f76"
  },
  {
    "url": "assets/js/37.220b980b.js",
    "revision": "071c1c851f275d52624a0f2f9342ad32"
  },
  {
    "url": "assets/js/38.af606729.js",
    "revision": "a27aed7e4d40c8d1ba71d51a864d240d"
  },
  {
    "url": "assets/js/39.75dd8222.js",
    "revision": "f52747372421b6581a1e3892a5cff2b5"
  },
  {
    "url": "assets/js/4.e6ce257e.js",
    "revision": "52acfc312384f1a229016da8ac7fc3c5"
  },
  {
    "url": "assets/js/40.25932975.js",
    "revision": "61fb69f86a3a0f677aacb69976894144"
  },
  {
    "url": "assets/js/41.553fee6c.js",
    "revision": "7d40b1b94349c31df5e3153c9f6148f9"
  },
  {
    "url": "assets/js/5.33408379.js",
    "revision": "f3b4af2dc6baa6d6eed9958c654e0085"
  },
  {
    "url": "assets/js/6.a22187ca.js",
    "revision": "fdff876fa104bf724fa011571135909a"
  },
  {
    "url": "assets/js/7.29f5df44.js",
    "revision": "76a645b5c827ea23f60cd2cdd9b7a719"
  },
  {
    "url": "assets/js/8.9cb42ca3.js",
    "revision": "f20d9758ced295499da808bc4147187b"
  },
  {
    "url": "assets/js/9.0e92e3a0.js",
    "revision": "d649a5a5893e6923fdbe09ac936dc5f5"
  },
  {
    "url": "assets/js/app.e89d12ab.js",
    "revision": "eeda61c16de225c96a2eb9ae40ad825b"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "0848d0796423bafe614d3958cda7a40c"
  },
  {
    "url": "changelog/index.html",
    "revision": "5a8de971ef1f481962a8eb9d49646d8e"
  },
  {
    "url": "guide/index.html",
    "revision": "2c23e06ee9341b69b908e82837afcd83"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "f8248fcdb0ebc10e573cd1b5721cde78"
  },
  {
    "url": "guide/java基础.html",
    "revision": "1bbc090d8ec75e0b25a57180faf2866c"
  },
  {
    "url": "guide/markdown.html",
    "revision": "0bb6f6605e781821b06c7816ac118ccd"
  },
  {
    "url": "guide/vuepress.html",
    "revision": "b86f126aee3a89f613960f3afac8ad28"
  },
  {
    "url": "hero.jpg",
    "revision": "de38e0eb0581734e90de58c3061c0784"
  },
  {
    "url": "index.html",
    "revision": "c7141a32dce9f259bb071bd334044562"
  },
  {
    "url": "logoko.png",
    "revision": "2a3913b14bd308aaf07a0a0a6fe4843f"
  },
  {
    "url": "markdown/index.html",
    "revision": "c4bfa1cae1a50c93985a201c1d54af92"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "5343ca286190faa331070facb83ef7be"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "a5888b00da05c437938edb4f5beecd0d"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "19fa7196013f4e402a9acdbdcc92753f"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "24dcf44730c3ca9b985d54d74ad10ecf"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "b5332a934a855806927c77c1a8d9d619"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "382c010aaf1bd15df561ab81e4e10d08"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "6bb45d4236380ab5acda7262df6d215b"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "2cf2e0e2528cf7e1aba4dfd72158f08e"
  },
  {
    "url": "maven/index.html",
    "revision": "7e7db5f44666cb498b9e41f005070b23"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "1b02863d98d57281013a39da957f0b51"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "6b69adce7c72d44302173a530a97806a"
  },
  {
    "url": "maven/pom.html",
    "revision": "efce9809ad39920395de6b6820dba5c8"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "6b0e808f47ef90b0ee3db214ade53c4e"
  },
  {
    "url": "mvc/index.html",
    "revision": "c68801529b0eb2cf7e9ba7739bebf1dc"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "a2ae235920a25f2f7464296deb296e99"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "6b80eb1299901a8f888fe5177c673c20"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "a36669c2b3f8e4118d5160c73f48c0b8"
  },
  {
    "url": "spring/index.html",
    "revision": "9976d7539e0ea80e57b4480ca8df5493"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "58b103d1ea8c131ceeda7743cb646bdf"
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
    "revision": "66c1e3a7993370e49f1062a94640eff1"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "cf18b2363228fe18d207f0dc16912dd1"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "f926fc27dabcb04d273e555b1b29c001"
  },
  {
    "url": "vuepress/vuepress的部署.html",
    "revision": "51bdbb0e27429a7ea1837ef04df24852"
  },
  {
    "url": "vuepress/vuepress的配置.html",
    "revision": "50ebe8cb126f88eb73f242d557bbe642"
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
