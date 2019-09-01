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
    "revision": "bc24e032d21c7e971a8aee50932f6078"
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
    "url": "assets/js/18.56e53aba.js",
    "revision": "a8aeaf1f5115ad453e410f11640f904e"
  },
  {
    "url": "assets/js/19.d0fee0b7.js",
    "revision": "417af89c9cdbdc4e0f39f733030a142f"
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
    "url": "assets/js/53.30585b5e.js",
    "revision": "c888f979dc2f22fc1a29ec80aa2b9aa0"
  },
  {
    "url": "assets/js/54.43e26122.js",
    "revision": "dcaa3ea9539c12e153768e0eb7e9e71a"
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
    "url": "assets/js/62.f2c19f2e.js",
    "revision": "c78ef26540f391425bbe282eae99bba3"
  },
  {
    "url": "assets/js/63.36256709.js",
    "revision": "41d86414f54b79a55d1316b48de604bd"
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
    "url": "assets/js/8.db6d9874.js",
    "revision": "516a562c64c59dd8bc85e571bb6687fe"
  },
  {
    "url": "assets/js/9.c7ac9df2.js",
    "revision": "2c0d68ffdf43ba1c2da407699dbff48c"
  },
  {
    "url": "assets/js/app.ebea5e51.js",
    "revision": "a1e209dec7d5f09eda966852fa2f1241"
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
    "revision": "4159e387e2517c719a4e6882ca45d3b6"
  },
  {
    "url": "bugs/java.lang.StackOverflowError.html",
    "revision": "93eeb5cff06e228d3aa29024616e378c"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "52cfe95dd312cb62ee14560b54c9aa4b"
  },
  {
    "url": "changelog/index.html",
    "revision": "ee79b4d46dce624d988f1529963d5fe1"
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
    "revision": "20e32137dd5c431e0dc27d347425de06"
  },
  {
    "url": "guide/basic-theory.html",
    "revision": "dd971bdd421c6bca9a55f4336a15bf54"
  },
  {
    "url": "guide/bug.html",
    "revision": "9567984b5022d119aa673dc7f19973e0"
  },
  {
    "url": "guide/index.html",
    "revision": "2c8642b5e923348bb45f0ebf94cee5ce"
  },
  {
    "url": "guide/interview.html",
    "revision": "f0963dd2234c59c4702de34fd500737c"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "88f566896440ddbf0b4afcdee00a177f"
  },
  {
    "url": "guide/java基础.html",
    "revision": "30c9772b8b458ac686cf8c2a163cc594"
  },
  {
    "url": "guide/tool.html",
    "revision": "57b9343ef406635c841ae26f5f121844"
  },
  {
    "url": "guide/优秀网站收集.html",
    "revision": "52983446d3e10e437983c4993c435409"
  },
  {
    "url": "hero.png",
    "revision": "efcd15dd50acf75f930622b9e282b70f"
  },
  {
    "url": "index.html",
    "revision": "b2bb55280beb605d5f691c014ddd341b"
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
    "revision": "ea31036a564279cec649d8ce4ee38fee"
  },
  {
    "url": "internet/物理层.html",
    "revision": "ea51fca7c4bd0f9b49bf2913dcd949aa"
  },
  {
    "url": "internet/重要概念/概述.html",
    "revision": "d1355353ad165cb2f7837ee35afb6150"
  },
  {
    "url": "internet/重要概念/物理层.html",
    "revision": "c897f093c38f2ff8dbd546650d248ff2"
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
    "revision": "05c71b684979eb167cd06f5211414ae3"
  },
  {
    "url": "interview/JavaEE/httpstatus.html",
    "revision": "d1149ceed02f1479462e95ea32d579bb"
  },
  {
    "url": "interview/JavaEE/HTTP请求的GET与POST方式的区别.html",
    "revision": "8a407165b000f39b8689736b40fe3497"
  },
  {
    "url": "interview/JavaSE/&和&&的区别.html",
    "revision": "f573ec53937e4c802bda05d5f335ef03"
  },
  {
    "url": "interview/JavaSE/try-catch-finally和return.html",
    "revision": "0221c20c8424339ace548d7f7a5f3f31"
  },
  {
    "url": "logoko.png",
    "revision": "2a3913b14bd308aaf07a0a0a6fe4843f"
  },
  {
    "url": "markdown/index.html",
    "revision": "1631ed741749df720ffd55f7dca12c80"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "5f262967df5965bd158cb28e496eed14"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "560751ea1addcbd55e183c39bf31b54c"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "6bf05eb2d8a4c9e4703c9de747dfeaa8"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "cc22ec4dec1b9fed8dcfc02729d863df"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "f4da5c8bfd3628386daba8139335f63d"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "f7679e296a5e1542657f71f039fcd7a6"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "a2de42810bb12bbcc88b25718f37f92e"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "042b61ae5e838fc8b2b1359ded9325f7"
  },
  {
    "url": "maven/index.html",
    "revision": "832932bbf50376afd454bb7c511a3f24"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "b7e1086af297b7d16394b37c64501efe"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "079b274d2edeccfecd7a23e339dba0d2"
  },
  {
    "url": "maven/pom.html",
    "revision": "460c44b19d703a4111e67e3c0bd4ce55"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "e66e191cd676de544ea8112282919c4e"
  },
  {
    "url": "mvc/index.html",
    "revision": "9b9ba8b804f5fdff03528b59c3243898"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "2ba5dc2e44d0e67f4e8ac79f2d51121d"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "2bd6d37362bbf177ff18c626ee2e53f0"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "84464d7fc2399fdbb6868dd398121903"
  },
  {
    "url": "site/index.html",
    "revision": "5d8098c7fb25ad1e87e30494632a8c02"
  },
  {
    "url": "spring/index.html",
    "revision": "579454565b57a67b66f77f97ea53573a"
  },
  {
    "url": "thread/index.html",
    "revision": "279c2942db2f85ed203979405aa61b6b"
  },
  {
    "url": "thread/sleep()、join()、yield()有什么区别.html",
    "revision": "21ec357daa1f620372ac4dad4f9d1ad8"
  },
  {
    "url": "thread/thread同步.html",
    "revision": "da56a1c013b2827b6da3f7f3a40bbef9"
  },
  {
    "url": "thread/thread方法.html",
    "revision": "441ca2ce7f6cb706a8637c268a11c8f7"
  },
  {
    "url": "thread/thread死锁.html",
    "revision": "9b67d771693b34ce0df2bfaeab99774d"
  },
  {
    "url": "thread/thread的创建.html",
    "revision": "86193b5dd906764a561aca50d12f0e27"
  },
  {
    "url": "thread/thread通信.html",
    "revision": "3499333b7e0b4e3a2664775be03df50e"
  },
  {
    "url": "thread/thread问题.html",
    "revision": "00a5b1894a2df355fc9f7713c0f83979"
  },
  {
    "url": "thread/wait()、notify()、notifyAll()方法.html",
    "revision": "b1653d76c1a5fa6ce54c3f45e8dc6c95"
  },
  {
    "url": "thread/生产者消费者.html",
    "revision": "a90d512e621e65d7460eee938014ca24"
  },
  {
    "url": "thread/线程池.html",
    "revision": "118b0aa2f26f6b12b5f7bcca3b692dd4"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "8200df3cf83d15e7b363c0d0c83f00ed"
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
    "revision": "21275d6eaec7668e1abb0a69de991cb8"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "bb638686339c28f0d6b27fa127b0e6c3"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "8c0479ef6c2327ec3066207d739d57b2"
  },
  {
    "url": "vuepress/vuepress的部署.html",
    "revision": "11c55d48488cec4e3022004ddb76fb4d"
  },
  {
    "url": "vuepress/vuepress的配置.html",
    "revision": "6052e6857bf3527ce609701b8e1db1ea"
  },
  {
    "url": "vuepress/持续集成.html",
    "revision": "396697d5985c650b79fd9104d542ed99"
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
