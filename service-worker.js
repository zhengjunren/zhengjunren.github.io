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
    "revision": "6ea75e30b1637908b641d7283e86091b"
  },
  {
    "url": "alipay.jpg",
    "revision": "731a42f469a2e47a073e9fed44272c92"
  },
  {
    "url": "assets/css/0.styles.6366eef6.css",
    "revision": "05ac85935d34709cd0e895b5b666740d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c014f22c.js",
    "revision": "6a9cae5582796d75ded63afb4be7e591"
  },
  {
    "url": "assets/js/11.b9712a02.js",
    "revision": "070e6144e2d3c273fa4515f3c2ccc34c"
  },
  {
    "url": "assets/js/12.d71e5d28.js",
    "revision": "c06f0678a2813038293fba48fe33e083"
  },
  {
    "url": "assets/js/13.74614f05.js",
    "revision": "01812518238be2c159d314604eaa77a6"
  },
  {
    "url": "assets/js/14.444a1e90.js",
    "revision": "f9d1e26c020d855d26ec07dbe2de34c1"
  },
  {
    "url": "assets/js/15.5a9d385b.js",
    "revision": "f38508457b41c023fec29d6f17396998"
  },
  {
    "url": "assets/js/16.1644a238.js",
    "revision": "c5828efb6e3b092631f9f8ea6c2bf05d"
  },
  {
    "url": "assets/js/17.440bf3a1.js",
    "revision": "24fb992ea8dec83471bf3ebcd1b2dd78"
  },
  {
    "url": "assets/js/18.e4f423ce.js",
    "revision": "64335b111e2ca8f13689e336f43bdff7"
  },
  {
    "url": "assets/js/19.510c1f6b.js",
    "revision": "07c60d79a2f276a95cb43d83db81f520"
  },
  {
    "url": "assets/js/2.61805da1.js",
    "revision": "28e2558162a5129487aab6cb23e721db"
  },
  {
    "url": "assets/js/20.8562ad5c.js",
    "revision": "5833c5e34e73e816ce29248d9dbb73d5"
  },
  {
    "url": "assets/js/21.d31950eb.js",
    "revision": "bdfafc7dc1eb39a39a0c5b1c2b778db2"
  },
  {
    "url": "assets/js/22.bd2e4e69.js",
    "revision": "d1b9749e02a2fcbaac5d8a8ee70a439d"
  },
  {
    "url": "assets/js/23.276552ad.js",
    "revision": "692bfe637853f98ef9156f4e296d8029"
  },
  {
    "url": "assets/js/24.75528b04.js",
    "revision": "971459f29cae730961413821d8fa2e34"
  },
  {
    "url": "assets/js/25.9c9bc279.js",
    "revision": "bd94111363c9fc65a26736a5dbbe7dcc"
  },
  {
    "url": "assets/js/26.21180a06.js",
    "revision": "7e005ea8026a85fe27f475ba2a8ee71a"
  },
  {
    "url": "assets/js/27.d33e71a2.js",
    "revision": "bb8516f415c09723690d4ab28edb13ba"
  },
  {
    "url": "assets/js/28.3c9733be.js",
    "revision": "adcfce2aa1b2d935d24c4e09b9c10bcd"
  },
  {
    "url": "assets/js/29.bec49de2.js",
    "revision": "a0d2eb71a01441ec98ba49d200d033bc"
  },
  {
    "url": "assets/js/3.0bce826f.js",
    "revision": "9c5b5b8107c15910438affc80aa6fa04"
  },
  {
    "url": "assets/js/30.50bd42df.js",
    "revision": "d56043315151c8a43190c28389a7e419"
  },
  {
    "url": "assets/js/31.a64680b7.js",
    "revision": "ff165f8b7aa36cf4a424127d819432b9"
  },
  {
    "url": "assets/js/32.757f9199.js",
    "revision": "f2bc58018f92bf0c0981601e66c4f7a1"
  },
  {
    "url": "assets/js/33.a6e101de.js",
    "revision": "e6d16b6d924692857ea5039ab113e782"
  },
  {
    "url": "assets/js/34.35bac54c.js",
    "revision": "2cdda933178ca827a11b96810b64a28e"
  },
  {
    "url": "assets/js/35.d0b10d5b.js",
    "revision": "0a58df15eba7c20f529b39c9648425b5"
  },
  {
    "url": "assets/js/36.0e346705.js",
    "revision": "891e26307d7b1f934d3bdda5289c0504"
  },
  {
    "url": "assets/js/37.a029f37a.js",
    "revision": "2b02fc6f1962a1f028e6414eaaf08e70"
  },
  {
    "url": "assets/js/38.824277af.js",
    "revision": "e76e6ec6a788603029c3b2c1b54a1693"
  },
  {
    "url": "assets/js/39.a0287d4a.js",
    "revision": "877642384f54b7b1f01cdacf2b1fddb2"
  },
  {
    "url": "assets/js/4.7c1d6e77.js",
    "revision": "d2e6dd7eda2feb2d03d0f00b4c02e37c"
  },
  {
    "url": "assets/js/40.20860161.js",
    "revision": "fc326709221f0430641fb6bcc901e322"
  },
  {
    "url": "assets/js/41.a980b8a7.js",
    "revision": "06f88d114ccaab57b38e6ff4eea67596"
  },
  {
    "url": "assets/js/42.561a0681.js",
    "revision": "2e0447e4b6e113b2cab829357235d86f"
  },
  {
    "url": "assets/js/43.ba5a9a96.js",
    "revision": "c1a6d4ff3c251ea66985ee2aa910cc90"
  },
  {
    "url": "assets/js/44.06e9dad3.js",
    "revision": "138add0dc227a68069725e05a370dbc5"
  },
  {
    "url": "assets/js/45.d17adb79.js",
    "revision": "232b3f58e2e11cae22ad82df2361f26f"
  },
  {
    "url": "assets/js/46.4811d227.js",
    "revision": "e3968a089432e2145bd930da90cf6712"
  },
  {
    "url": "assets/js/47.b7f69125.js",
    "revision": "6282ba245cf918c4ef99575537b2496b"
  },
  {
    "url": "assets/js/48.56375c73.js",
    "revision": "20cb6fbfe87a5c9bf4671554e0a4ff27"
  },
  {
    "url": "assets/js/49.5dd2a8f9.js",
    "revision": "581f0c6bab3455c617079314b596c2ff"
  },
  {
    "url": "assets/js/5.07426b08.js",
    "revision": "369c73a2f597bb3977b6e7f09aec51ea"
  },
  {
    "url": "assets/js/50.d7d7da30.js",
    "revision": "3142a8d032441ce7ea6cb4a7f246cb12"
  },
  {
    "url": "assets/js/51.ab9e8409.js",
    "revision": "944ee238e323bdb96941037e1f26e7ba"
  },
  {
    "url": "assets/js/52.f05bbd6d.js",
    "revision": "95478f2de9247aa9155965c54de140ae"
  },
  {
    "url": "assets/js/53.6110787b.js",
    "revision": "5f227b602c7f9d63b0029b6ff155ca44"
  },
  {
    "url": "assets/js/54.ad7d5fcc.js",
    "revision": "68338b0bf05e3a9b6d8f9e909ed3e2e3"
  },
  {
    "url": "assets/js/55.3d14742f.js",
    "revision": "033e0beb66d37ad54569f6ae6e70a325"
  },
  {
    "url": "assets/js/56.d2cfc6d1.js",
    "revision": "a6517256704d7345ba246b8d7691eba6"
  },
  {
    "url": "assets/js/57.47f5c10a.js",
    "revision": "9f0374f9ab0fd25aef1f7e51860fe5fb"
  },
  {
    "url": "assets/js/58.c3ffc3a1.js",
    "revision": "febfca83c767a1cf2fc538ea2fb39ff5"
  },
  {
    "url": "assets/js/59.d7d5849f.js",
    "revision": "36ff12151ca0fc35a6756c2394a36f4a"
  },
  {
    "url": "assets/js/6.9be2fb6d.js",
    "revision": "98bcb6b2284bbc79bb04180586b7fc15"
  },
  {
    "url": "assets/js/60.251a92f0.js",
    "revision": "1253cdf3d8592b2fc4996c9be3d7d57d"
  },
  {
    "url": "assets/js/61.7621afe7.js",
    "revision": "d858bde2bfbdcb2b01cf1704f6a55f8a"
  },
  {
    "url": "assets/js/62.9f70e3cc.js",
    "revision": "9f9fc97b8749a415f06f49ea28651ac3"
  },
  {
    "url": "assets/js/63.7887cc72.js",
    "revision": "55546ac72b0acdae03560ab2abb3a7f0"
  },
  {
    "url": "assets/js/64.84d3028f.js",
    "revision": "53d693ba115c13cea3f0995607822054"
  },
  {
    "url": "assets/js/65.7cef4cf3.js",
    "revision": "5fd9126122f6ed4db1d9159af9b7805a"
  },
  {
    "url": "assets/js/66.ffebec1a.js",
    "revision": "e2653708109dca29fc71db6d17e00c46"
  },
  {
    "url": "assets/js/67.cce10817.js",
    "revision": "d3dc6f540cbd57dabc44869236458f93"
  },
  {
    "url": "assets/js/68.15460751.js",
    "revision": "559f67838cdb84be8ec5b5fd8be318af"
  },
  {
    "url": "assets/js/69.5de606fe.js",
    "revision": "5167b178e5dc95cdf4ac3af1297ee942"
  },
  {
    "url": "assets/js/7.83ca1b43.js",
    "revision": "26b168414d9e12897acec0623c91dedd"
  },
  {
    "url": "assets/js/70.f2fb82f8.js",
    "revision": "5acc38266537ae23a035aea5d4d792c2"
  },
  {
    "url": "assets/js/71.868b9282.js",
    "revision": "d72c77ec6786a153d2b42757817a0540"
  },
  {
    "url": "assets/js/8.d72560bb.js",
    "revision": "bc2d83c64502b20058875df2be727766"
  },
  {
    "url": "assets/js/9.82aa1a94.js",
    "revision": "05895c81389252976482f8200e20a383"
  },
  {
    "url": "assets/js/app.42dad353.js",
    "revision": "60b87b6457255d0b05b77f21c44518fd"
  },
  {
    "url": "bugs/bug1.png",
    "revision": "4f90b588bcd18f5c53473d2ff98aa6ea"
  },
  {
    "url": "bugs/bug2.png",
    "revision": "cdbf31c9af7e09d1954055536bc35c7b"
  },
  {
    "url": "bugs/bug3.png",
    "revision": "3a236178576155bba6f5351ef0f7a1e1"
  },
  {
    "url": "bugs/index.html",
    "revision": "6049f5e9a16b2f9c38ddc0a70bd64d18"
  },
  {
    "url": "bugs/java.lang.StackOverflowError.html",
    "revision": "20a8fd89464ac8ba294e144821490c1e"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "70c715d8312356080c0e05f0d41e6bb9"
  },
  {
    "url": "changelog/index.html",
    "revision": "9e39ece08b7ef6071eaab76439584837"
  },
  {
    "url": "git/git.png",
    "revision": "01b39b35584c7511c8f0f33bea5d3ebf"
  },
  {
    "url": "git/gitcz.png",
    "revision": "09896dee213bfe9ab9e797ee86a54bcd"
  },
  {
    "url": "git/index.html",
    "revision": "67d654d9a36ef60b8020a5984a3c7db6"
  },
  {
    "url": "guide/basic-theory.html",
    "revision": "efeb99f3f30cc915817904bba30a7259"
  },
  {
    "url": "guide/bug.html",
    "revision": "b3d321ce927b3420c09326009b598d90"
  },
  {
    "url": "guide/index.html",
    "revision": "e39b873d9b922d40479c703aee5409ac"
  },
  {
    "url": "guide/interview.html",
    "revision": "add256bf3530b3c0256226f0532e6615"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "b7a330cf76cb4b6493fb2a9dbe0d8d8d"
  },
  {
    "url": "guide/java基础.html",
    "revision": "9c14b2bf62f99a9d2232672e3335b584"
  },
  {
    "url": "guide/tool.html",
    "revision": "60610c89c8712a801745084a7251333f"
  },
  {
    "url": "guide/优秀网站收集.html",
    "revision": "18b5e7b4045dd8042dddc0aa8fc4af55"
  },
  {
    "url": "hero.png",
    "revision": "efcd15dd50acf75f930622b9e282b70f"
  },
  {
    "url": "index.html",
    "revision": "5e431c3e5da4b030fd930b212abdb553"
  },
  {
    "url": "internet/1-1.png",
    "revision": "f1493059c2bff7c56ac2e65c1e8b5d1a"
  },
  {
    "url": "internet/1-10.png",
    "revision": "60052f0a610538ff8f8e8f13f0337db8"
  },
  {
    "url": "internet/1-11.png",
    "revision": "0f62dc88d23e2c97f92e0e3ca4ff0dc1"
  },
  {
    "url": "internet/1-12.png",
    "revision": "48fe7140bf823d4f8f081a0c989a1752"
  },
  {
    "url": "internet/1-13.png",
    "revision": "5b533c3a68c7bb499770e9d883595d2e"
  },
  {
    "url": "internet/1-14.png",
    "revision": "c5c26585ac0c2e247a386dd272e61ab1"
  },
  {
    "url": "internet/1-2.png",
    "revision": "afb0f97392c39e886c3f9fe0bf3a2341"
  },
  {
    "url": "internet/1-3.png",
    "revision": "01097205075626e2e94cd5449feeebd2"
  },
  {
    "url": "internet/1-4.png",
    "revision": "dfb70127a6c09214f4505ef7e22d0563"
  },
  {
    "url": "internet/1-5.png",
    "revision": "e2686cd9922bdec0c6c9f94a79019f6e"
  },
  {
    "url": "internet/1-6.png",
    "revision": "7a3d0f5f9dd6bceb994546b681726653"
  },
  {
    "url": "internet/1-7.png",
    "revision": "cf36fcd1837f354456585fe8b001dc45"
  },
  {
    "url": "internet/1-8.png",
    "revision": "8b3de832f40da6f5cbd7eaa866db0cb5"
  },
  {
    "url": "internet/1-9.png",
    "revision": "14074a6f01fb2d276389b9f0d78a5f39"
  },
  {
    "url": "internet/2-1.png",
    "revision": "6f7d1e745eb70d11de06952ca23ef385"
  },
  {
    "url": "internet/2-10.png",
    "revision": "5dfa482f3c541eef891228ae5151694a"
  },
  {
    "url": "internet/2-11.png",
    "revision": "b2b6adafb8153aa3791d6d01071533e0"
  },
  {
    "url": "internet/2-12.png",
    "revision": "26bcd7c7691b44240e6668353fbe0056"
  },
  {
    "url": "internet/2-13.png",
    "revision": "190400368e3e85d28ad1a103ea7cb793"
  },
  {
    "url": "internet/2-14.png",
    "revision": "34e1794d6b5c1551d13b5004d5af0c01"
  },
  {
    "url": "internet/2-15.png",
    "revision": "5ad6768b08348028f41b4329e1eb34f8"
  },
  {
    "url": "internet/2-16.png",
    "revision": "2959d82c84e0a9d1be21e1ddc3cc3ccc"
  },
  {
    "url": "internet/2-17.png",
    "revision": "6086bb5ea73cb51d8d1c01b8ef178373"
  },
  {
    "url": "internet/2-18.png",
    "revision": "aa23b4342779f447910747d32da28e82"
  },
  {
    "url": "internet/2-2.png",
    "revision": "c2c8dfd48ed5f6091a2eb2a0c510e31e"
  },
  {
    "url": "internet/2-3.png",
    "revision": "fb3b49cadd4b15222e5782121b4ada10"
  },
  {
    "url": "internet/2-4.png",
    "revision": "78235a2077c0b431d775d242fbbf49fa"
  },
  {
    "url": "internet/2-5.png",
    "revision": "aa6d377994542f689d459e21f9c0142f"
  },
  {
    "url": "internet/2-6.png",
    "revision": "a0939bdddd1f0c46229e439dbac7ca5b"
  },
  {
    "url": "internet/2-7.png",
    "revision": "e6358d0b3d09ecedb8e9fafaace9b05d"
  },
  {
    "url": "internet/2-8.png",
    "revision": "393db3906706c56f84e99b04f9d3d0f4"
  },
  {
    "url": "internet/2-9.png",
    "revision": "afaade3c08e33c77e85ccfc2a3791d49"
  },
  {
    "url": "internet/3-1.png",
    "revision": "251f783939a25499f6dcf9808cd03d74"
  },
  {
    "url": "internet/3-2.png",
    "revision": "de563f263e285926ee4b0144d679ba07"
  },
  {
    "url": "internet/3-3.png",
    "revision": "3f4dec9333840c721e05c5919edf3843"
  },
  {
    "url": "internet/3-4.png",
    "revision": "ea2258b149d39dea567ce16f3d3d4dd0"
  },
  {
    "url": "internet/3-5.png",
    "revision": "e6f2f5f526c0eb4bf6f8c6b88b79cfc7"
  },
  {
    "url": "internet/3-6.png",
    "revision": "fe326bb22316747f3ee65c732f649a69"
  },
  {
    "url": "internet/3-7.png",
    "revision": "15940951f9ade9ff1dc049b8cee6ce3f"
  },
  {
    "url": "internet/3-8.png",
    "revision": "e84aa4d45569c5ee09d04491946aa66d"
  },
  {
    "url": "internet/3-9.png",
    "revision": "58c5786d14aae1aef3d2633043f58157"
  },
  {
    "url": "internet/index.html",
    "revision": "a7f1eeb81f03ae6770f0ba96c10aa656"
  },
  {
    "url": "internet/数据链路层.html",
    "revision": "b8a1b5a7bee0aabf294a7fc097faa92d"
  },
  {
    "url": "internet/物理层.html",
    "revision": "384a6c8285f18b23ae719a4efc472a43"
  },
  {
    "url": "internet/重要概念/数据链路层.html",
    "revision": "85a989f76b71ff8f5f7521bc481f0057"
  },
  {
    "url": "internet/重要概念/概述.html",
    "revision": "ee7d29615bbe36409c9cac1f71529e07"
  },
  {
    "url": "internet/重要概念/物理层.html",
    "revision": "dda8d3a9d744fa2b69eae0aa39ac6be1"
  },
  {
    "url": "interview/1-1.png",
    "revision": "40ab0d15867630ee3638607abc532cf5"
  },
  {
    "url": "interview/1-2.png",
    "revision": "8b2d530b2317ec4333a7a775a869bee9"
  },
  {
    "url": "interview/1-3.png",
    "revision": "a75b01774baa765b9e20a0c1e10d5f6c"
  },
  {
    "url": "interview/1-4.png",
    "revision": "aae59cac7f9be03106774ee251dbb8c4"
  },
  {
    "url": "interview/index.html",
    "revision": "9715dd677091ca5a46ba7e663bd9d6f5"
  },
  {
    "url": "interview/JavaEE/httpstatus.html",
    "revision": "df0ab4e0efcf155931bb1a93890e1560"
  },
  {
    "url": "interview/JavaEE/HTTP请求的GET与POST方式的区别.html",
    "revision": "8c040f54e9edacbb197e77d3e3cad1d5"
  },
  {
    "url": "interview/JavaSE/&和&&的区别.html",
    "revision": "6085cf16a452594cdd754f14dc5373ac"
  },
  {
    "url": "interview/JavaSE/try-catch-finally和return.html",
    "revision": "76577bd4892b0969a7cbce7eaaa432ad"
  },
  {
    "url": "logoko.png",
    "revision": "2a3913b14bd308aaf07a0a0a6fe4843f"
  },
  {
    "url": "markdown/index.html",
    "revision": "fac5730c00df729b3c8e0211d084318b"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "ad26a91d6edfe01240f4ab4001eb5b40"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "9970f9e0154cf30a77ad8003e0875e96"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "311d35f71e38824323d520896f545a67"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "59daec9e10842cf731af8abc36f09973"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "4432e25f4ebfb7094474b9669514de00"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "01785e32db62cc88376f690192125fbf"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "2227ca24311ad6f8d67c3afd944f2c45"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "4bf002294bfdbd176a9beb4d430997ff"
  },
  {
    "url": "maven/index.html",
    "revision": "c686e8d9fc4f77050d22c0642e53c41c"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "c5c0532d8b756d1869bc1f5195865dff"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "8fc459db42461aa606c0dc1f7746350f"
  },
  {
    "url": "maven/pom.html",
    "revision": "bbe8e5684d8a7a38f74fd9d125b67043"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "78a59497c549f76f51693f1a3e3038d7"
  },
  {
    "url": "mvc/index.html",
    "revision": "7677b8843d99e9569fd4c04a22dc7fbf"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "48187e08b25f4f92bfa947ec075a2653"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "10af1da1ac5a2511dd815a973323122f"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "50509baf3bb8fe47b11e55dd8f885c77"
  },
  {
    "url": "site/index.html",
    "revision": "8ce849ea5883d468cf4fb65fd3668489"
  },
  {
    "url": "spring/index.html",
    "revision": "1f891486237169e84a0ccd4f8adfc218"
  },
  {
    "url": "thread/index.html",
    "revision": "2502158b3bc9e287f0cc67c22ec684e8"
  },
  {
    "url": "thread/sleep()、join()、yield()有什么区别.html",
    "revision": "febe9fadca157c6440d4bfb1e9c0ea32"
  },
  {
    "url": "thread/thread同步.html",
    "revision": "0d2c288ed48cfbf1524352ead2e6bdaa"
  },
  {
    "url": "thread/thread方法.html",
    "revision": "0bf4b38268ed7691ff74536289dd2b61"
  },
  {
    "url": "thread/thread死锁.html",
    "revision": "97be6b7eb29d9f4c6f06df176239eaec"
  },
  {
    "url": "thread/thread的创建.html",
    "revision": "c3d2bcb7c5b333e2808c28b3593e4d0e"
  },
  {
    "url": "thread/thread通信.html",
    "revision": "e2d5aae7059c5a9628c01261932363ea"
  },
  {
    "url": "thread/thread问题.html",
    "revision": "26c079b3e7c4322a42764e7cbca497c7"
  },
  {
    "url": "thread/wait()、notify()、notifyAll()方法.html",
    "revision": "cccaf02be6034ce48160bd3bb1a649c0"
  },
  {
    "url": "thread/生产者消费者.html",
    "revision": "f7ae560cf4398ba77a90fbccbb203a4a"
  },
  {
    "url": "thread/线程池.html",
    "revision": "a109255103da30d15b3be3da66f90787"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "5b6dad1dd1163a286cad5d90313c3e89"
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
    "revision": "841dee4b1be7b4fc94fc54211ce3c0da"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "702a602b3d749ad0d734cccb2f15e97e"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "87d3fc9ad78a701b1861486184ec7aef"
  },
  {
    "url": "vuepress/vuepress的部署.html",
    "revision": "1b29ca03301ce85a14dcc88d630b10d4"
  },
  {
    "url": "vuepress/vuepress的配置.html",
    "revision": "1331cb4885e110b51aee679f3667bfd7"
  },
  {
    "url": "vuepress/持续集成.html",
    "revision": "47acfadac96a2d5b80497ca2ef8110f7"
  },
  {
    "url": "vuepress/持续集成3.png",
    "revision": "2fd7393fa7634d240c431f983ef03bb4"
  },
  {
    "url": "vuepress/持续集成5.png",
    "revision": "b14d2dbcc5e506b4f3b5a16517140ebd"
  },
  {
    "url": "wechatpay.png",
    "revision": "d6608743dda21c1445243bcedf316d65"
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
