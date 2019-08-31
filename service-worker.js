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
    "revision": "a4a6d77e66215429d4bf10628c11c25a"
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
    "url": "assets/js/10.ccbcc31b.js",
    "revision": "37700387e68c110d8c378d1ea278f040"
  },
  {
    "url": "assets/js/11.b9712a02.js",
    "revision": "070e6144e2d3c273fa4515f3c2ccc34c"
  },
  {
    "url": "assets/js/12.6b7f753d.js",
    "revision": "cba9a0855b1e24d4983ee9691f78d99b"
  },
  {
    "url": "assets/js/13.58133de5.js",
    "revision": "987618d9abf98fc0ecd7bd8ce7432c57"
  },
  {
    "url": "assets/js/14.4c490336.js",
    "revision": "f2d3d71a8c99aa7d472dd068126336de"
  },
  {
    "url": "assets/js/15.941fd7c1.js",
    "revision": "a66f5be164bf378cee4f44224e74fe60"
  },
  {
    "url": "assets/js/16.dec155f5.js",
    "revision": "1c747ec2d1664d186ffaaed3357230ee"
  },
  {
    "url": "assets/js/17.93e9f97d.js",
    "revision": "da35c286123bdc31fce40b67bce49e48"
  },
  {
    "url": "assets/js/18.665fb740.js",
    "revision": "d21f34e8028cb398f2012466590d4a88"
  },
  {
    "url": "assets/js/19.8e339d3a.js",
    "revision": "547afb3d1db6272bc8c5312ba7021b66"
  },
  {
    "url": "assets/js/2.61805da1.js",
    "revision": "28e2558162a5129487aab6cb23e721db"
  },
  {
    "url": "assets/js/20.f8decbc2.js",
    "revision": "6054d7470c7ad82b40938e5420a0051c"
  },
  {
    "url": "assets/js/21.ca0d29ec.js",
    "revision": "bfccdfb580e8c4304922cc877d6636d0"
  },
  {
    "url": "assets/js/22.e8c1d9e1.js",
    "revision": "259bbf2567cc6e242285a79a4bafeaee"
  },
  {
    "url": "assets/js/23.3609a352.js",
    "revision": "9a5c0b0fa8e776af75cc4656bf2064f6"
  },
  {
    "url": "assets/js/24.42486265.js",
    "revision": "4487badec2ae6f84b924da1a33fb1e8d"
  },
  {
    "url": "assets/js/25.bf1eba32.js",
    "revision": "a54f809a99bab9368328a415950511f7"
  },
  {
    "url": "assets/js/26.9db0fcfb.js",
    "revision": "d48307fe16e01943e5113ced02cc22a9"
  },
  {
    "url": "assets/js/27.141ddfa4.js",
    "revision": "3b36d62780cd109844e3b6ada9c21caf"
  },
  {
    "url": "assets/js/28.1bd4afc5.js",
    "revision": "8b40c616c8abe379151f59e174d55777"
  },
  {
    "url": "assets/js/29.63855031.js",
    "revision": "e00cdcc4e789843a1ed4293fa74fe4b5"
  },
  {
    "url": "assets/js/3.c220c95f.js",
    "revision": "b4b1ee63049e2d42925032b4b53de7a7"
  },
  {
    "url": "assets/js/30.3fafad29.js",
    "revision": "f45e43198d5b2b66b55828111bd3f536"
  },
  {
    "url": "assets/js/31.6acf7cce.js",
    "revision": "3f2191cd90fd0754dab184faa44a181e"
  },
  {
    "url": "assets/js/32.d5b28767.js",
    "revision": "62ab7f527182a48a9e03df9d7f687767"
  },
  {
    "url": "assets/js/33.55db97e9.js",
    "revision": "94c54ddb60d904675187186dfc1d37f7"
  },
  {
    "url": "assets/js/34.9287cd00.js",
    "revision": "128beb0bf14742c6cf7ac933691506ad"
  },
  {
    "url": "assets/js/35.ba62c36b.js",
    "revision": "d5a3e3ba0e16f60c943c9453feb6a80c"
  },
  {
    "url": "assets/js/36.adaf95cd.js",
    "revision": "04e6285fcc7eb54d6e62bbe57c31e8a3"
  },
  {
    "url": "assets/js/37.901b03cd.js",
    "revision": "1674365d9d0642989d39ec40cc8e5f43"
  },
  {
    "url": "assets/js/38.34b23622.js",
    "revision": "4d2a0433b89c176ef4fc2fdf690ccc8c"
  },
  {
    "url": "assets/js/39.f9548a99.js",
    "revision": "bd0ad94accf12c3db299276ce76da27e"
  },
  {
    "url": "assets/js/4.7c1d6e77.js",
    "revision": "d2e6dd7eda2feb2d03d0f00b4c02e37c"
  },
  {
    "url": "assets/js/40.8c612f09.js",
    "revision": "192b8f2fa649c885119eadc52920f251"
  },
  {
    "url": "assets/js/41.02683553.js",
    "revision": "8e10a763acb9a819929cd758bfbb3eb6"
  },
  {
    "url": "assets/js/42.f933f5dd.js",
    "revision": "b19ed4749b65df9256b346b71465364c"
  },
  {
    "url": "assets/js/43.783b20e6.js",
    "revision": "54afd117af016f97d10b72210aa77056"
  },
  {
    "url": "assets/js/44.bec34bbf.js",
    "revision": "2518cf357972ed27630c30d0ddf0ec4b"
  },
  {
    "url": "assets/js/45.1922b692.js",
    "revision": "61143258882f93fad94f59abe0eeb608"
  },
  {
    "url": "assets/js/46.b222b963.js",
    "revision": "22073454a2b5b172aa00c27068e5c0d9"
  },
  {
    "url": "assets/js/47.faa029d5.js",
    "revision": "c42d6e434413338814af4493ef8d1b6a"
  },
  {
    "url": "assets/js/48.78b7e77d.js",
    "revision": "840eec0e94d51456b203b16abd2014a2"
  },
  {
    "url": "assets/js/49.12ca979a.js",
    "revision": "08fba73fa171b92f6cdd22892a58098f"
  },
  {
    "url": "assets/js/5.07426b08.js",
    "revision": "369c73a2f597bb3977b6e7f09aec51ea"
  },
  {
    "url": "assets/js/50.1a4b350b.js",
    "revision": "74a1feeb354263418272123792a35d82"
  },
  {
    "url": "assets/js/51.508277cb.js",
    "revision": "99498a4443dbc0552eaaf7f758338a23"
  },
  {
    "url": "assets/js/52.a2662b42.js",
    "revision": "e773b65a3702f45375920ab727176000"
  },
  {
    "url": "assets/js/53.a8de4f00.js",
    "revision": "7c82452657964c575772fb4f2a7e3ab1"
  },
  {
    "url": "assets/js/54.2dee6b68.js",
    "revision": "d7829205a0e50f6ba55144f2e95f3f42"
  },
  {
    "url": "assets/js/55.4388fc58.js",
    "revision": "95587c1a077d6c88891ffd37255c5d79"
  },
  {
    "url": "assets/js/56.44d0f557.js",
    "revision": "fcef716c4df47c916fabc220a490a7b6"
  },
  {
    "url": "assets/js/57.60bb3a7d.js",
    "revision": "78d13f60b76af0699ebbf936acff6b14"
  },
  {
    "url": "assets/js/58.30b1d9a1.js",
    "revision": "8084c36a2a52c79f4a367429192e1ced"
  },
  {
    "url": "assets/js/59.4a5209dd.js",
    "revision": "3dcabb84281070e6d4bab0d40ee26220"
  },
  {
    "url": "assets/js/6.9be2fb6d.js",
    "revision": "98bcb6b2284bbc79bb04180586b7fc15"
  },
  {
    "url": "assets/js/60.37ce8f8e.js",
    "revision": "3e3597c1b6ed706e69ffd9f8c58069ea"
  },
  {
    "url": "assets/js/61.739eac45.js",
    "revision": "cb6dace7f98be3ec24e0d61a98b06f65"
  },
  {
    "url": "assets/js/62.2484aa8e.js",
    "revision": "b0ad0eb4a8a66230cbb5a0bd3779f20c"
  },
  {
    "url": "assets/js/63.84c458ba.js",
    "revision": "edd30690361d06e8d2becb412bc074fe"
  },
  {
    "url": "assets/js/64.53e40b77.js",
    "revision": "92825ba7fc9402b74dbc3b3f45ac7bcc"
  },
  {
    "url": "assets/js/65.f12d12f0.js",
    "revision": "3050fb35076fcbeace7d117b3587d832"
  },
  {
    "url": "assets/js/66.fce01b7e.js",
    "revision": "bbbeb3679e901e8bdee04b37a83170e2"
  },
  {
    "url": "assets/js/67.0c06768b.js",
    "revision": "a6e6ca4ef85dbc3430e46d69723001f8"
  },
  {
    "url": "assets/js/68.f8460d61.js",
    "revision": "715d50e501476b026e120764f0b1c113"
  },
  {
    "url": "assets/js/7.83ca1b43.js",
    "revision": "26b168414d9e12897acec0623c91dedd"
  },
  {
    "url": "assets/js/8.e6b0c0a8.js",
    "revision": "4ffbfc40f50d6ab2eec8a92a428f6c1e"
  },
  {
    "url": "assets/js/9.5582d378.js",
    "revision": "f2e067380e403badf25e642c792c086c"
  },
  {
    "url": "assets/js/app.3ed2c6c7.js",
    "revision": "b68bc2ec92e80c6e7e5beff3286bf763"
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
    "revision": "ea18afea7a621c5829741b351940e967"
  },
  {
    "url": "bugs/java.lang.StackOverflowError.html",
    "revision": "7f4ce21fa5a36d92b5260addc39ae345"
  },
  {
    "url": "changelog/2019-08.html",
    "revision": "23b2356c965af0db0e3e87903d038b22"
  },
  {
    "url": "changelog/index.html",
    "revision": "664ba703fe462aa20240a897e618747f"
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
    "revision": "4f7008ef349515a9413815505df87492"
  },
  {
    "url": "guide/basic-theory.html",
    "revision": "53e99a4b3dac9c6f89a6a58f4fb4446a"
  },
  {
    "url": "guide/bug.html",
    "revision": "529a91ab9b791f49dbfd11d9d52ab2e8"
  },
  {
    "url": "guide/index.html",
    "revision": "03068ee15442b965fcabb043d0a53862"
  },
  {
    "url": "guide/interview.html",
    "revision": "9561c01a5477169930ea212450f5cc1a"
  },
  {
    "url": "guide/javaweb.html",
    "revision": "fa33838ceacd8eedbb11c38e531d5543"
  },
  {
    "url": "guide/java基础.html",
    "revision": "a146aad0fb440ba646a2b6ddb15c2605"
  },
  {
    "url": "guide/tool.html",
    "revision": "3fb06b4a128de74a28bda648fa71c2cf"
  },
  {
    "url": "guide/优秀网站收集.html",
    "revision": "d63b6894218de931709d8c4e0d9239e5"
  },
  {
    "url": "hero.png",
    "revision": "efcd15dd50acf75f930622b9e282b70f"
  },
  {
    "url": "index.html",
    "revision": "56264a0e013338ad48f05d9f8955cc8c"
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
    "revision": "80e57aeddd597dfe2ec0e6be92e91e04"
  },
  {
    "url": "internet/物理层.html",
    "revision": "3b09ecb66fd721b4af4853c20fc278ca"
  },
  {
    "url": "internet/重要概念/概述.html",
    "revision": "4b70d80e862592def9843ebadb7f6f9b"
  },
  {
    "url": "internet/重要概念/物理层.html",
    "revision": "d0710f3a91e608240ffa2c12eba90ce6"
  },
  {
    "url": "interview/index.html",
    "revision": "3ce8d72e99bd065edbc502627f8cc511"
  },
  {
    "url": "interview/JavaEE/httpstatus.html",
    "revision": "b876ee63f5616402f195c628334fb0e8"
  },
  {
    "url": "interview/JavaEE/HTTP请求的GET与POST方式的区别.html",
    "revision": "6b126b9423bba7b7f165593ea272332a"
  },
  {
    "url": "interview/JavaSE/&和&&的区别.html",
    "revision": "5d2949f7b272bac25231bfeaecb7fe09"
  },
  {
    "url": "logoko.png",
    "revision": "2a3913b14bd308aaf07a0a0a6fe4843f"
  },
  {
    "url": "markdown/index.html",
    "revision": "245bd41233c1b032fcc51707a38409ed"
  },
  {
    "url": "markdown/语法/index.html",
    "revision": "47f94792ee0c61a93341b891d4eba17b"
  },
  {
    "url": "markdown/语法/markdown代码.html",
    "revision": "0dac74577e01cddcf7ce1c50de0af095"
  },
  {
    "url": "markdown/语法/markdown列表.html",
    "revision": "6e3a1fd1fdc7bdefa396aabbd7e5b901"
  },
  {
    "url": "markdown/语法/markdown区块.html",
    "revision": "e0170486d0dcc0ef799bb5311db1e375"
  },
  {
    "url": "markdown/语法/markdown字体.html",
    "revision": "30bc30e4f7e1426651df16ba9ff18c0e"
  },
  {
    "url": "markdown/语法/markdown标题.html",
    "revision": "c2e3c47e37dc495bdf06ebb8a42b3172"
  },
  {
    "url": "markdown/语法/markdown表格.html",
    "revision": "94487ec3eb9db0f5a182e9d42baf2876"
  },
  {
    "url": "markdown/语法/markdown链接.html",
    "revision": "6d82b03c39824eeec2c3f39eba6011d6"
  },
  {
    "url": "maven/index.html",
    "revision": "3c864ac99e63bccb04845c6aabe04619"
  },
  {
    "url": "maven/maven常用命令.html",
    "revision": "e4aa77cfe5feffcc3121cb29f49d218f"
  },
  {
    "url": "maven/maven的安装及环境变量配置.html",
    "revision": "311dd404de74d1d52398a21aac7a0cdb"
  },
  {
    "url": "maven/pom.html",
    "revision": "13dc1db05855cb16c7310c97ddc9f94a"
  },
  {
    "url": "maven/修改本地仓库.html",
    "revision": "b77fd3eadaa529fc2ee0d475f4c29f9c"
  },
  {
    "url": "mvc/index.html",
    "revision": "85d38b0898f06acce47396f9dcd55f77"
  },
  {
    "url": "mvc/MVC模式.html",
    "revision": "f4bebf76a4c7898f8be0d712db175b58"
  },
  {
    "url": "mvc/三层架构.html",
    "revision": "07d67c7e3a92069fd9e1ed8666ce76a5"
  },
  {
    "url": "mvc/关于三层架构的理解.html",
    "revision": "a390001feb6043b2e1cc702994049f9d"
  },
  {
    "url": "site/index.html",
    "revision": "d53e5e903fc7489a91ce0ffbb706a3b3"
  },
  {
    "url": "spring/index.html",
    "revision": "25ab413f16392ed8fe72b3d25f3b7cb1"
  },
  {
    "url": "thread/index.html",
    "revision": "591ead862f60574ec47db7071dc90a99"
  },
  {
    "url": "thread/sleep()、join()、yield()有什么区别.html",
    "revision": "8c0e40a3fae1d9e4f25ec6d07da3d51e"
  },
  {
    "url": "thread/thread同步.html",
    "revision": "3eb7692860ef5e7c558bdfed049f5a90"
  },
  {
    "url": "thread/thread方法.html",
    "revision": "10c8a5bbe9422ee455a7c686bde80e02"
  },
  {
    "url": "thread/thread死锁.html",
    "revision": "668de1a361a09c48dad2028a37dcb6a0"
  },
  {
    "url": "thread/thread的创建.html",
    "revision": "c40a2a683e67d59614b052ecb8b0f995"
  },
  {
    "url": "thread/thread通信.html",
    "revision": "acc815609a5ebf09bd4720a7cd5b4f2d"
  },
  {
    "url": "thread/thread问题.html",
    "revision": "84d4424ebef37cee4b98b5714ac9b510"
  },
  {
    "url": "thread/wait()、notify()、notifyAll()方法.html",
    "revision": "e72ddc3cbc85099e1c0ed2fc6e0698f2"
  },
  {
    "url": "thread/生产者消费者.html",
    "revision": "144437a111540eda92afc5ea0d30e3b6"
  },
  {
    "url": "thread/线程池.html",
    "revision": "9bee9c2eee5a8b835f85c25442e9d463"
  },
  {
    "url": "vuepress/hero.png",
    "revision": "adf607be288d36b9a75e55d83ba60c0f"
  },
  {
    "url": "vuepress/index.html",
    "revision": "2dfa49ed9495b4cc008aa451c58bf16b"
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
    "revision": "843b88d235c8be6f17e8593686770711"
  },
  {
    "url": "vuepress/vuepress的初步使用.html",
    "revision": "ada465a199a3b8f23e6c99255e17e8a2"
  },
  {
    "url": "vuepress/vuepress的安装.html",
    "revision": "63f70a561e3ebf83e6846fc36a06d47f"
  },
  {
    "url": "vuepress/vuepress的部署.html",
    "revision": "2a5894ef7273af1f6967a9bc6e31b67d"
  },
  {
    "url": "vuepress/vuepress的配置.html",
    "revision": "1efe643b2ab1bfcc825b22eb61eb51c8"
  },
  {
    "url": "vuepress/持续集成.html",
    "revision": "b97573ea6b216a365a598b6cfdf7ef4b"
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
