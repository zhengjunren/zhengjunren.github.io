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
    "revision": "2c4bebf0ed5ef4ec00d03fe468d443ae"
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
    "url": "assets/js/10.d813a5d0.js",
    "revision": "8b79ac261dfacb05cd84a3209be8f75e"
  },
  {
    "url": "assets/js/11.647c00e0.js",
    "revision": "196aa679a003a9727736b777312584d3"
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
    "url": "assets/js/17.1977f169.js",
    "revision": "d9fe752551040024135d99b1de46425e"
  },
  {
    "url": "assets/js/18.d55ced40.js",
    "revision": "91a8961a3d67def8e90efa1d988693a8"
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
    "url": "assets/js/app.f7b2aa76.js",
    "revision": "a6541e4d42443572486785782b71f234"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "36547fa01d651cf02c72fac5cd7dd9e1"
  },
  {
    "url": "changelog/index.html",
    "revision": "f0e0c49c7b58ccc5f5670e275fe9905a"
  },
  {
    "url": "guide/index.html",
    "revision": "5a5077df548ab80c4ba94b23b7d9a86e"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "1e3dcca87a632a1aed5b0491b781175d"
  },
  {
    "url": "guide/java基础.html",
    "revision": "7dda312ea29e28cdcba00db5c361e4f4"
  },
  {
    "url": "guide/markdown.html",
    "revision": "c8c0c7d2b05efb01445c87d13b9bdd52"
  },
  {
    "url": "guide/vuepress.html",
    "revision": "9af5c0e58dc061d76435eb4a9f93a5ff"
  },
  {
    "url": "hero.jpg",
    "revision": "de38e0eb0581734e90de58c3061c0784"
  },
  {
    "url": "index.html",
    "revision": "aad18e2e3654f3869b931c6f8e39bc7b"
  },
  {
    "url": "logoko.png",
    "revision": "2a3913b14bd308aaf07a0a0a6fe4843f"
  },
  {
    "url": "markdown/index.html",
    "revision": "7c96382cb7e91ebdadcfbe195de5c60c"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "43653a0c42d8dfdbaf403a2b8c2526d1"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "e5f798c93d568d643c3d217db5aa7259"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "05db2e1965587aca59011547d44c415f"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "5422c51764a1edf6c9693e90e469e5ed"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "1f0527f08af694e80c75a9454f914540"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "0b501c1b55a046143bd05fc06c6281bb"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "66a6e5a4762434b72cfa5dd6f9fe4e5c"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "a60529a9189e22ad23b49b7365a3539d"
  },
  {
    "url": "maven/index.html",
    "revision": "184d956ccbc37937a05e8ea36bce0507"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "343f89fd58d26c109b3eaba76ac14e34"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "dce5cee5340f5c28cacf3c8b78fb7ff7"
  },
  {
    "url": "maven/pom.html",
    "revision": "4b04d04f5b6bb37884385534f1a6b834"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "f64b83f0ca5db792cc30d7931f76d78e"
  },
  {
    "url": "mvc/index.html",
    "revision": "d00390229a18fc439c47f08155f54a02"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "95fb9860c8aa6800467f662bc768e15a"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "e98592f0d97f03dd659c478ea3b9fd61"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "f1a06191e8f597aefa48d19926858156"
  },
  {
    "url": "spring/index.html",
    "revision": "c2c79bb76061ce2644417f9b0d6ff99f"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "8f4eb3a535833458c44cf4e031ea8bd6"
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
    "revision": "309180671339f9aeda5e2619d2d32ef1"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "3e386407cfd1bf466f95977313158527"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "2cde2ba2cb9b3278be55701edc9441b6"
  },
  {
    "url": "vuepress/vuepress的部署.html",
    "revision": "d568eebba6d9b61cebfb8f42ac7b7f94"
  },
  {
    "url": "vuepress/vuepress的配置.html",
    "revision": "09ea64bbc20f239e504e7e0f016eb005"
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
