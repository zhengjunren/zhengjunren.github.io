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
    "revision": "1273c8e9bf775e5e9709d847237ccb09"
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
    "url": "assets/js/13.c8b6dfb7.js",
    "revision": "1716bdbc57f44c6eccd5136011f89107"
  },
  {
    "url": "assets/js/14.444a1e90.js",
    "revision": "f9d1e26c020d855d26ec07dbe2de34c1"
  },
  {
    "url": "assets/js/15.f0237e94.js",
    "revision": "28f33a3f5b6068dee881d4457fbeb15d"
  },
  {
    "url": "assets/js/16.b21a02ea.js",
    "revision": "89d661c793287ff390195cba52321595"
  },
  {
    "url": "assets/js/17.43b40498.js",
    "revision": "a7d3d98924d165eccedb3af35ba0b5dc"
  },
  {
    "url": "assets/js/18.25e848e8.js",
    "revision": "8dcf6437bb276796790e1186c0f729b1"
  },
  {
    "url": "assets/js/19.132dfb5d.js",
    "revision": "1c9bfa4f7df8217edd84e58ad8a206d9"
  },
  {
    "url": "assets/js/2.61805da1.js",
    "revision": "28e2558162a5129487aab6cb23e721db"
  },
  {
    "url": "assets/js/20.65dba835.js",
    "revision": "83e52fc36d2bf663d8a03ffc46944a24"
  },
  {
    "url": "assets/js/21.d101f2f6.js",
    "revision": "b265d18d707732dfd8af1e3144355686"
  },
  {
    "url": "assets/js/22.4e234f4b.js",
    "revision": "1ca1881cb01beec6848121465dc46d7c"
  },
  {
    "url": "assets/js/23.5d5ea507.js",
    "revision": "0901a02f358f34148602a637799b23e1"
  },
  {
    "url": "assets/js/24.4f632c17.js",
    "revision": "010e01c70e5886e6f32e4a0ec87845b6"
  },
  {
    "url": "assets/js/25.3f47facd.js",
    "revision": "558f8f24389a20089fe31f04a18afe05"
  },
  {
    "url": "assets/js/26.77a1503b.js",
    "revision": "c162431d7f4eaffd3cdb96fd93977330"
  },
  {
    "url": "assets/js/27.f816d136.js",
    "revision": "cf0881a2e2829d5f8d840feece5be8e8"
  },
  {
    "url": "assets/js/28.1f1f7ff0.js",
    "revision": "89121d1d18fbd1d6f7363671ec41174d"
  },
  {
    "url": "assets/js/29.cd44b9b3.js",
    "revision": "6950336ed99a820682f41404de201122"
  },
  {
    "url": "assets/js/3.0bce826f.js",
    "revision": "9c5b5b8107c15910438affc80aa6fa04"
  },
  {
    "url": "assets/js/30.27e7dadd.js",
    "revision": "8a2048d2baec2ba8e8b3430419008c3f"
  },
  {
    "url": "assets/js/31.641976c6.js",
    "revision": "4c9003d76183d3e9de9c7f3f9299c08f"
  },
  {
    "url": "assets/js/32.ceb9c38a.js",
    "revision": "3cb2712252a7bf33b407087105d4319e"
  },
  {
    "url": "assets/js/33.ced9f098.js",
    "revision": "827f56e1050a767217521190e415382d"
  },
  {
    "url": "assets/js/34.45a65fe4.js",
    "revision": "84cf1581c52af0f12efb8ed0870a9d23"
  },
  {
    "url": "assets/js/35.3c62687c.js",
    "revision": "4b69057934018b42fc2346e316618891"
  },
  {
    "url": "assets/js/36.d89d5e5c.js",
    "revision": "271ee7ce45a40eb1e3a13b2ae0f75e1f"
  },
  {
    "url": "assets/js/37.efcdc0cc.js",
    "revision": "1b8bed1941f42f92b065635863319172"
  },
  {
    "url": "assets/js/38.6e506003.js",
    "revision": "fdc3ce5c486703caab67740fc560d7ce"
  },
  {
    "url": "assets/js/39.f7576904.js",
    "revision": "a18c53201abf31400d145df828c35b46"
  },
  {
    "url": "assets/js/4.7c1d6e77.js",
    "revision": "d2e6dd7eda2feb2d03d0f00b4c02e37c"
  },
  {
    "url": "assets/js/40.35969dca.js",
    "revision": "cb6940fc361b6a4b043955e065fdf6f9"
  },
  {
    "url": "assets/js/41.656a5c10.js",
    "revision": "a99246c77214affa068406ec29808a08"
  },
  {
    "url": "assets/js/42.80deb613.js",
    "revision": "a802c4ef8cf14bd06aed609304542526"
  },
  {
    "url": "assets/js/43.62579414.js",
    "revision": "d7a0dd4e89f6bb363ddb2090bcabdbea"
  },
  {
    "url": "assets/js/44.7bd556dd.js",
    "revision": "5b5599498f40c960dc0c6ac2f4312d84"
  },
  {
    "url": "assets/js/45.733e6ed2.js",
    "revision": "c38120c9477182db0237de7b3764eb78"
  },
  {
    "url": "assets/js/46.44d11366.js",
    "revision": "2fd47d218e815f49c720bd9502159e8b"
  },
  {
    "url": "assets/js/47.87cd548f.js",
    "revision": "d70316ea892219e0ab7f9377357a2c78"
  },
  {
    "url": "assets/js/48.8cab469d.js",
    "revision": "e880f78103cfe0d1f7748fadd18418e7"
  },
  {
    "url": "assets/js/49.2706962a.js",
    "revision": "70fce9bd4cf3eb6b720f93567d0f10ae"
  },
  {
    "url": "assets/js/5.07426b08.js",
    "revision": "369c73a2f597bb3977b6e7f09aec51ea"
  },
  {
    "url": "assets/js/50.9607e50d.js",
    "revision": "55209501b3e8a67930706c631e226644"
  },
  {
    "url": "assets/js/51.fdef29e3.js",
    "revision": "78f4fe6d9c20faf28ddded3794d1aa2b"
  },
  {
    "url": "assets/js/52.38976e69.js",
    "revision": "c993a7c52a8cbcd633c365e7864703a8"
  },
  {
    "url": "assets/js/53.c80d9795.js",
    "revision": "51d9b3a43cc6076fcb0e0db5ef63d506"
  },
  {
    "url": "assets/js/54.5faceaac.js",
    "revision": "748b53a434609dfda7621c4e7bed5f94"
  },
  {
    "url": "assets/js/55.ca14973e.js",
    "revision": "ebae5d7b13cc18910fba6f49c4c589a2"
  },
  {
    "url": "assets/js/56.c1020869.js",
    "revision": "9b4ccb2ffaa82b26f75aad2ac395db0a"
  },
  {
    "url": "assets/js/57.3ef327d6.js",
    "revision": "13d596af7a2efd42a1894f774d9203ba"
  },
  {
    "url": "assets/js/58.66fdc7f4.js",
    "revision": "799551a2128ec619dc5faf3db42eb677"
  },
  {
    "url": "assets/js/59.9d5cd8ea.js",
    "revision": "a8fa235b46c37379aac21790571c792d"
  },
  {
    "url": "assets/js/6.9be2fb6d.js",
    "revision": "98bcb6b2284bbc79bb04180586b7fc15"
  },
  {
    "url": "assets/js/60.2db36be5.js",
    "revision": "cd0071fa0043a1046b869a69997bdae9"
  },
  {
    "url": "assets/js/61.5dbbdee3.js",
    "revision": "ed927612e5a48ec96f1f846fe0bfb26f"
  },
  {
    "url": "assets/js/62.1e63fd18.js",
    "revision": "87e632b8550859000cd5f5583a97ebff"
  },
  {
    "url": "assets/js/63.4ba13fb7.js",
    "revision": "2dd87bca6097302a863dad0c5504676e"
  },
  {
    "url": "assets/js/64.fe534e4f.js",
    "revision": "11793bc1285a05317b57784cc0e05b38"
  },
  {
    "url": "assets/js/65.1b1d9a4d.js",
    "revision": "7225a3c7a9f6aac1b56beae14e3b79b6"
  },
  {
    "url": "assets/js/66.503e74e3.js",
    "revision": "8871d96190bbe5cf97572e92c05c2539"
  },
  {
    "url": "assets/js/67.72c98798.js",
    "revision": "106a9406f84b1cf44951c0bfdaeb54f9"
  },
  {
    "url": "assets/js/68.79ebb8d5.js",
    "revision": "405deca62682d5f67d361e086115ed62"
  },
  {
    "url": "assets/js/69.5209e6d6.js",
    "revision": "bde2f3fc6745817f7c8cb950de2b8031"
  },
  {
    "url": "assets/js/7.83ca1b43.js",
    "revision": "26b168414d9e12897acec0623c91dedd"
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
    "url": "assets/js/app.cc7087d1.js",
    "revision": "301eaec621381a940ea3a15d476aed16"
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
    "revision": "1dd711962119df7b7ca531ccb46243ca"
  },
  {
    "url": "bugs/java.lang.StackOverflowError.html",
    "revision": "27a8a45d54b9800e4af406bf8d4b3df1"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "a3f0d7ee71c03414ee5064766a608aa0"
  },
  {
    "url": "changelog/index.html",
    "revision": "3987ac6c82c7931014887aa4fd74eb36"
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
    "revision": "3fa2c0d5fb3c8b5ad765dd1a7e421289"
  },
  {
    "url": "guide/basic-theory.html",
    "revision": "b80dae8ac4a8e89929d981ce1963f720"
  },
  {
    "url": "guide/bug.html",
    "revision": "0e75737a5cdb3c92edc468b682b3ae52"
  },
  {
    "url": "guide/index.html",
    "revision": "52b1e74c8d4a400a5d675754836bdeca"
  },
  {
    "url": "guide/interview.html",
    "revision": "171edd7bf5d674b4f5aad5d0d24e3a26"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "0ad8db8030f777c5ed0af0bf965e9407"
  },
  {
    "url": "guide/java基础.html",
    "revision": "86c85283de0183219da36c871984dade"
  },
  {
    "url": "guide/tool.html",
    "revision": "5941439c7a4c9ad146e89f907168e175"
  },
  {
    "url": "guide/优秀网站收集.html",
    "revision": "d984a90b00eeb01c705f0886fd4c192a"
  },
  {
    "url": "hero.png",
    "revision": "efcd15dd50acf75f930622b9e282b70f"
  },
  {
    "url": "index.html",
    "revision": "8ef3167fec5c5da9b66e92bc2f89edfc"
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
    "url": "internet/index.html",
    "revision": "713d10b15476488a93a545bb5e3c62fa"
  },
  {
    "url": "internet/物理层.html",
    "revision": "d79b064a0e1de6c65b2c220bf6ebcf2e"
  },
  {
    "url": "internet/重要概念/概述.html",
    "revision": "231e02f082ace9c9963f907558f3f84a"
  },
  {
    "url": "internet/重要概念/物理层.html",
    "revision": "7d873a5308b07ac4f775878b44eee3db"
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
    "revision": "7f8056212130b61a321d974db9caedf7"
  },
  {
    "url": "interview/JavaEE/httpstatus.html",
    "revision": "02b060a3adf978dfc3ac6fe3b4992092"
  },
  {
    "url": "interview/JavaEE/HTTP请求的GET与POST方式的区别.html",
    "revision": "ed51f51d71b6ede190e46e4028db3654"
  },
  {
    "url": "interview/JavaSE/&和&&的区别.html",
    "revision": "96c63ae1ae63aa64804aaf23eb75e13e"
  },
  {
    "url": "interview/JavaSE/try-catch-finally和return.html",
    "revision": "9f55dd3afe39f1f31cd39408108df6c2"
  },
  {
    "url": "logoko.png",
    "revision": "2a3913b14bd308aaf07a0a0a6fe4843f"
  },
  {
    "url": "markdown/index.html",
    "revision": "384a06bcc1dc2cb77c55c4e252543839"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "4066860617e0b801d1070f6c24f3f29c"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "b7bd799004b59e0c62cd5f8ba10d5dee"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "c74bac655ed044ded2ecb12747c74a88"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "ee3f50efa8e7fa482245cc0a1c4c9336"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "943a9547b6d9843ac3303967e4bb53cd"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "52fce0bec66543de3d56991a7f10a849"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "8a4b5c6d59efef21ae6368c6a7a732d8"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "5293a7bc2bfea0e3e4e57df947a86212"
  },
  {
    "url": "maven/index.html",
    "revision": "c2b3e04fd34bfb83313a9705aab7b5f1"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "f05d44f1291acc5e21dadb630bc6ee09"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "942bb4107b5ab6032dbee373e8f9defd"
  },
  {
    "url": "maven/pom.html",
    "revision": "68b32ee3d0df98524c7c2f8dfc0d8ae4"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "a73bd6227498d533dc0873d4363c5b24"
  },
  {
    "url": "mvc/index.html",
    "revision": "0a14726bb15ff615bdae2b882ae69e36"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "d199467b53413b483599d5bb269378d4"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "fc7672b2e9ada23dc5f2c7ad08d837be"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "a2957333e54bdbdf28d2b42628d93002"
  },
  {
    "url": "site/index.html",
    "revision": "e30030f7bd55b90a92b5e0b54edfa248"
  },
  {
    "url": "spring/index.html",
    "revision": "86afe01ee0b7bee431cb9bbb5e4e7c18"
  },
  {
    "url": "thread/index.html",
    "revision": "c07fa9ef2ff34e8eb42128f5a69848fd"
  },
  {
    "url": "thread/sleep()、join()、yield()有什么区别.html",
    "revision": "6aa7b2135355b422791a9d78d74985c8"
  },
  {
    "url": "thread/thread同步.html",
    "revision": "7be2c41be836485b004da4fc2b2735b2"
  },
  {
    "url": "thread/thread方法.html",
    "revision": "78d06381725b0c5f9a8c032917c6994b"
  },
  {
    "url": "thread/thread死锁.html",
    "revision": "dbb626a1ce6ec5d6da6476739c048887"
  },
  {
    "url": "thread/thread的创建.html",
    "revision": "a7aa1cc9e52825cc06649fc2e9c1af97"
  },
  {
    "url": "thread/thread通信.html",
    "revision": "d18b8214532c47b22d624be1794d5343"
  },
  {
    "url": "thread/thread问题.html",
    "revision": "94a6bbd77aac5ff46a53a413884e7050"
  },
  {
    "url": "thread/wait()、notify()、notifyAll()方法.html",
    "revision": "4ff77c0b22154b72f3dc1906752e8019"
  },
  {
    "url": "thread/生产者消费者.html",
    "revision": "724068a8d42a90eadb5c4d0e324defd4"
  },
  {
    "url": "thread/线程池.html",
    "revision": "eb68a3cc337a54684a6ac21b5dffbfef"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "721fe70f962b6934659aa89b12a21507"
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
    "revision": "a4961619adba3f937248c2296a9e6a8d"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "b481bc655b06473248222ed58635dc5c"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "895df0ebdf172834da59a5df20406ebf"
  },
  {
    "url": "vuepress/vuepress的部署.html",
    "revision": "acdca70fc1c02a96da6dabe65cd07540"
  },
  {
    "url": "vuepress/vuepress的配置.html",
    "revision": "eec37d93d11db80e825da012d0589561"
  },
  {
    "url": "vuepress/持续集成.html",
    "revision": "748d67db38c442452e4f9f662d332f89"
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
