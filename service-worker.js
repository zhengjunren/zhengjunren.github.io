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
    "revision": "5b51cf14c77a43188d8392c55bfa187f"
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
    "url": "assets/js/21.3052ace8.js",
    "revision": "8315c02389bec9dd8313c304fa4d35bd"
  },
  {
    "url": "assets/js/22.42f1b06f.js",
    "revision": "098e69bbfbacd56b187f483f32e08ff5"
  },
  {
    "url": "assets/js/23.ca23dff0.js",
    "revision": "b1cee880002a4fd00b65e763cc44ead5"
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
    "url": "assets/js/26.f4aa9c3a.js",
    "revision": "02da7af97b0bfa035ea15e1609b12996"
  },
  {
    "url": "assets/js/27.5b8b86fa.js",
    "revision": "db62cfd84a5d35a1030c92d2b5d97497"
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
    "url": "assets/js/app.0cc7d8a3.js",
    "revision": "716b7fcaba4d2fcacd4f519894a1cc30"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "07b976372efa647441cec8c052c699be"
  },
  {
    "url": "changelog/index.html",
    "revision": "25df44155fe6f2907c815f26123cd621"
  },
  {
    "url": "guide/index.html",
    "revision": "a58b700f14e92c851b5175db9e74e855"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "d7d31cc3fc634c7f9ce850e66e23a3a4"
  },
  {
    "url": "guide/java基础.html",
    "revision": "8dc02d9f3cbfc7d3902af41ae0e4e5d1"
  },
  {
    "url": "guide/markdown.html",
    "revision": "8643d2b55f10173f6032dcf2c4876d3a"
  },
  {
    "url": "guide/vuepress.html",
    "revision": "2bd005a9a5f78d264fe81e198638be8c"
  },
  {
    "url": "hero.jpg",
    "revision": "de38e0eb0581734e90de58c3061c0784"
  },
  {
    "url": "index.html",
    "revision": "d91f02bec55efec05b44cf935bac5a18"
  },
  {
    "url": "logoko.png",
    "revision": "2a3913b14bd308aaf07a0a0a6fe4843f"
  },
  {
    "url": "markdown/index.html",
    "revision": "8d9058242f9dcbc8e492d9a312f14dca"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "c2aabdc240647466bbb02636a7b4d816"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "fd8b9fcdb9eb92e409de3e1ed5a16411"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "86c82b8482ac85e1f8857748d085eda0"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "70facca756ae18ae00d9d86d2bef7b18"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "0ac5672f7771498abbf53e464775377d"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "076a0bdae7adfc687098ca8e0dd6901d"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "91afcb499082890c0cd3a3b97a38a31d"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "80440554bd46c0230e767e7d1b11f6e3"
  },
  {
    "url": "maven/index.html",
    "revision": "2c55e954ddba48b7809790e37f84392b"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "c55dd74ebc6d7b38fdee06be00f78cdf"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "cee791d4af3a4f55846981b12747c81c"
  },
  {
    "url": "maven/pom.html",
    "revision": "78f5b0c2171478a56809124ae65c666e"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "67ac8466c5247284275edff95d2d3b59"
  },
  {
    "url": "mvc/index.html",
    "revision": "b8d434c07b4786faa2781c524ccaed0b"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "9e60a4da00ada00bef211e0d51e33583"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "d1fcd5240cda971dd311487ce59d12af"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "16792a10ac8340ac1fee2d3f2c934340"
  },
  {
    "url": "spring/index.html",
    "revision": "aa1bf83f3fddb0204c15184a52267178"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "173d375f8d72db0c327747abba1f2553"
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
    "revision": "dba19b30dfeaddf77d3e002747bf5aeb"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "cf8a642d4f9cf504c24c6f97db9a6750"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "204a7078a98daa3353448de569d48db6"
  },
  {
    "url": "vuepress/vuepress的部署.html",
    "revision": "d92e7d81020b9f0f144bbff00a0cec71"
  },
  {
    "url": "vuepress/vuepress的配置.html",
    "revision": "b0018b8beddbd8e118b551a868370d08"
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
