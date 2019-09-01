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
    "revision": "2caa7a5f21473c983d0c0371ced45334"
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
    "url": "assets/js/22.4e234f4b.js",
    "revision": "1ca1881cb01beec6848121465dc46d7c"
  },
  {
    "url": "assets/js/23.ccde9b6b.js",
    "revision": "47eb859046c100cd8689bed083c8d3a7"
  },
  {
    "url": "assets/js/24.9772f467.js",
    "revision": "1c090f291e9432ff34aaf7d44d34969c"
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
    "url": "assets/js/39.a9fe304e.js",
    "revision": "54d695a19a72a093fe6daafa9c1ade8d"
  },
  {
    "url": "assets/js/4.7c1d6e77.js",
    "revision": "d2e6dd7eda2feb2d03d0f00b4c02e37c"
  },
  {
    "url": "assets/js/40.70ea1749.js",
    "revision": "f283b5201b6fb442ba47fd3963f70480"
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
    "url": "assets/js/50.af0ae314.js",
    "revision": "9fb7cfbd1db6a6a4afdd26575967f512"
  },
  {
    "url": "assets/js/51.c38bb422.js",
    "revision": "700b1778d512455adebfb97af9ffa3a4"
  },
  {
    "url": "assets/js/52.b29a9fbc.js",
    "revision": "2ad4fb8a9b118bc70322972814a6067c"
  },
  {
    "url": "assets/js/53.d5a23dfb.js",
    "revision": "90cb02b22ee833116df4cc834ff46cc4"
  },
  {
    "url": "assets/js/54.db5fee14.js",
    "revision": "ffc3e2d8e9d2acccbe04f5d78752819e"
  },
  {
    "url": "assets/js/55.64208f35.js",
    "revision": "f001a7d1be7c486cb2cbdb35e87ff3c4"
  },
  {
    "url": "assets/js/56.5c56dde7.js",
    "revision": "735d0120c9dd25af95d9fd3e411fecf0"
  },
  {
    "url": "assets/js/57.5573b0d6.js",
    "revision": "9cbce35f34a2853f1335983ae2e2254c"
  },
  {
    "url": "assets/js/58.1f336d3b.js",
    "revision": "146812dae45c232a779f587e4ce7daed"
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
    "url": "assets/js/60.133bc88d.js",
    "revision": "74a64ac8083c8bb71ad9535f94000e82"
  },
  {
    "url": "assets/js/61.a828b167.js",
    "revision": "0649a0ea0b80f1dc22532245efcd9572"
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
    "url": "assets/js/68.52ccb913.js",
    "revision": "ec0c2ee198020f5fe9cc794cc67165dd"
  },
  {
    "url": "assets/js/69.0d940246.js",
    "revision": "93ba12f5123790f24461a6fa1f9c5b6b"
  },
  {
    "url": "assets/js/7.83ca1b43.js",
    "revision": "26b168414d9e12897acec0623c91dedd"
  },
  {
    "url": "assets/js/70.f1651636.js",
    "revision": "2c3fb1b623b40618801ab5826cd1b201"
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
    "url": "assets/js/app.9a15c875.js",
    "revision": "d7c0e159658c3b831d17906e97b00984"
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
    "revision": "4ec0c9efba7336d025e72f097d2e76cf"
  },
  {
    "url": "bugs/java.lang.StackOverflowError.html",
    "revision": "fac6b0a9690f8d43ae1c1e993dd28a55"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "c0ce064c0fd6b4e29b652a73a2b963b0"
  },
  {
    "url": "changelog/index.html",
    "revision": "7095cadca5602e69573a3fa846e34355"
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
    "revision": "caf2da1ee2aea9f7865ce55411ebeea3"
  },
  {
    "url": "guide/basic-theory.html",
    "revision": "4753677ed06740121d80e9a0a1da74c2"
  },
  {
    "url": "guide/bug.html",
    "revision": "46ee30b39bfe5f11d2ae5d3e1ec1fa1f"
  },
  {
    "url": "guide/index.html",
    "revision": "95e78034392a9b5bb76829cb440316e6"
  },
  {
    "url": "guide/interview.html",
    "revision": "7e92f4c6d25772896416acc7bc25e403"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "51b62bc14b4c3d4f8d106f148312b57a"
  },
  {
    "url": "guide/java基础.html",
    "revision": "52f3508af670eea37eba84b970565476"
  },
  {
    "url": "guide/tool.html",
    "revision": "110bd1a22ac8198060a02fa35c0f37ef"
  },
  {
    "url": "guide/优秀网站收集.html",
    "revision": "f2e6e20fe32a809ee77e60c7c5b396f6"
  },
  {
    "url": "hero.png",
    "revision": "efcd15dd50acf75f930622b9e282b70f"
  },
  {
    "url": "index.html",
    "revision": "9e6642d9ab6840cf0f78fd0e7e5db897"
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
    "url": "internet/index.html",
    "revision": "3a3cad602b4776dbcc36a6ae9083b1d6"
  },
  {
    "url": "internet/数据链路层.html",
    "revision": "9a8c868a8b1f69a5d112a4b88f90170f"
  },
  {
    "url": "internet/物理层.html",
    "revision": "14f9369a2b6adf9e263a0a923aef1a29"
  },
  {
    "url": "internet/重要概念/数据链路层.html",
    "revision": "94c8cf384c4c5a334faac518f75725df"
  },
  {
    "url": "internet/重要概念/概述.html",
    "revision": "81540b0361eeba179d5a63de08efeb2d"
  },
  {
    "url": "internet/重要概念/物理层.html",
    "revision": "2800684a4fd2a8df6a540b443ee212ff"
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
    "revision": "9d39d837497e3673ddb719a409ac23f9"
  },
  {
    "url": "interview/JavaEE/httpstatus.html",
    "revision": "7ab04e1a942f39efb68e58ae69f3f59e"
  },
  {
    "url": "interview/JavaEE/HTTP请求的GET与POST方式的区别.html",
    "revision": "9e2789e71b4709c0c1dfaa1870215141"
  },
  {
    "url": "interview/JavaSE/&和&&的区别.html",
    "revision": "c88911f40a391dbea5074505acceb145"
  },
  {
    "url": "interview/JavaSE/try-catch-finally和return.html",
    "revision": "a7139c03d14fc2a8dbab9eaf384be60e"
  },
  {
    "url": "logoko.png",
    "revision": "2a3913b14bd308aaf07a0a0a6fe4843f"
  },
  {
    "url": "markdown/index.html",
    "revision": "ff052fa75f890809ac898cd3de022b05"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "e64277bc9e5d3e566de789e7b2c8d5a0"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "c1d535a0cb1ee58cdd266b1548403ead"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "d401bf9ecf2f7ebe300e96c341211f82"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "7c6945521f499614292e1f7f1f28635d"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "79adb8836cd9a72bccabc693b0923c4e"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "4451ee10c662778e1157333d61cb7166"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "11d879762481764ab232fa58e663738a"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "46668079dc1da2489717aee3b2f3d530"
  },
  {
    "url": "maven/index.html",
    "revision": "6216b043e11db192a4b2b96a0899af62"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "a8b8533addf846a35ed8bb5b23202719"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "62694f3033b3147a4b113a158612b862"
  },
  {
    "url": "maven/pom.html",
    "revision": "70d5ec77694de17578acf26826cd1fd5"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "166f12ee517846d44eba1642df4ae269"
  },
  {
    "url": "mvc/index.html",
    "revision": "78139e52745b76c3b04ce618707399e0"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "634b712d7a0928ea46b626b4ce81f77f"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "b39d35bdd8a37ab47fc8b73853f6b890"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "4a4ce2ee47dce73198a51c3f5c28af38"
  },
  {
    "url": "site/index.html",
    "revision": "6b7a50bd31fa729200443fadf6f3b947"
  },
  {
    "url": "spring/index.html",
    "revision": "ef95c5cc659b561a60fc4fb7815aae3a"
  },
  {
    "url": "thread/index.html",
    "revision": "b1e774239ce0ff375a74ca30638dad29"
  },
  {
    "url": "thread/sleep()、join()、yield()有什么区别.html",
    "revision": "92b769f28aac2091e997a38fb7908300"
  },
  {
    "url": "thread/thread同步.html",
    "revision": "e5fad4523d5e00cebae83b14b3e00788"
  },
  {
    "url": "thread/thread方法.html",
    "revision": "434d99daf6843360e9c3e6c8dfb2ab08"
  },
  {
    "url": "thread/thread死锁.html",
    "revision": "56ab3ec0e774ecacd9bcbf08d2ea1b78"
  },
  {
    "url": "thread/thread的创建.html",
    "revision": "c37c688590d9f9e224bd47c041c71c09"
  },
  {
    "url": "thread/thread通信.html",
    "revision": "44c748b9ce9fee1650c6a49d1d623732"
  },
  {
    "url": "thread/thread问题.html",
    "revision": "8e5338adba170e58a975fcf97685f7e4"
  },
  {
    "url": "thread/wait()、notify()、notifyAll()方法.html",
    "revision": "4ede59a6b4b2831beaa32e03202d3e95"
  },
  {
    "url": "thread/生产者消费者.html",
    "revision": "8d5d03e745428b98b53724a53b5f732a"
  },
  {
    "url": "thread/线程池.html",
    "revision": "dc306597825a04ca27239f796e5d5eb8"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "065e1064e870d78d2a1fb6be7a0adad9"
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
    "revision": "dee9d385c0958c1dfbb0b1df34fa37eb"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "69520e379c5f31c1f178c976c6c27259"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "8b41e7ba4f4d029dde76cb3d31bc71eb"
  },
  {
    "url": "vuepress/vuepress的部署.html",
    "revision": "b0090a89a672049368ab9ce30a9a4294"
  },
  {
    "url": "vuepress/vuepress的配置.html",
    "revision": "0a30912e8a4b87aea745cbe3c39733ec"
  },
  {
    "url": "vuepress/持续集成.html",
    "revision": "c69367b7741bace141d6a6306439faf6"
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
