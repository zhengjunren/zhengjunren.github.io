(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{617:function(t,a,Q){"use strict";Q.r(a);var r=Q(7),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,Q=t._self._c||a;return Q("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[Q("h2",{attrs:{id:"目录"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),Q("p"),Q("div",{staticClass:"table-of-contents"},[Q("ul",[Q("li",[Q("a",{attrs:{href:"#目录"}},[t._v("目录")])]),Q("li",[Q("a",{attrs:{href:"#使用点对点信道的数据链路层"}},[t._v("使用点对点信道的数据链路层")]),Q("ul",[Q("li",[Q("a",{attrs:{href:"#数据链路和帧"}},[t._v("数据链路和帧")])]),Q("li",[Q("a",{attrs:{href:"#三个基本问题"}},[t._v("三个基本问题")])])])]),Q("li",[Q("a",{attrs:{href:"#点对点协议-ppp"}},[t._v("点对点协议 PPP")]),Q("ul",[Q("li",[Q("a",{attrs:{href:"#ppp-协议的特点"}},[t._v("PPP 协议的特点")])]),Q("li",[Q("a",{attrs:{href:"#ppp-协议的帧格式"}},[t._v("PPP 协议的帧格式")])]),Q("li",[Q("a",{attrs:{href:"#字节填充"}},[t._v("字节填充")])]),Q("li",[Q("a",{attrs:{href:"#零比特填充"}},[t._v("零比特填充")])]),Q("li",[Q("a",{attrs:{href:"#ppp-协议的工作状态"}},[t._v("PPP 协议的工作状态")])])])]),Q("li",[Q("a",{attrs:{href:"#使用广播信道的数据链路层"}},[t._v("使用广播信道的数据链路层")]),Q("ul",[Q("li",[Q("a",{attrs:{href:"#局域网的数据链路层"}},[t._v("局域网的数据链路层")])])])]),Q("li",[Q("a",{attrs:{href:"#适配器-网卡"}},[t._v("适配器（网卡）")])])])]),Q("p"),t._v(" "),Q("h2",{attrs:{id:"使用点对点信道的数据链路层"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#使用点对点信道的数据链路层"}},[t._v("#")]),t._v(" 使用点对点信道的数据链路层")]),t._v(" "),Q("h3",{attrs:{id:"数据链路和帧"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#数据链路和帧"}},[t._v("#")]),t._v(" 数据链路和帧")]),t._v(" "),Q("ul",[Q("li",[Q("p",[Q("strong",[t._v("链路")]),t._v(" (link) 是一条无源的点到点的物理线路段，中间没有任何其他的交换结点。")]),t._v(" "),Q("ul",[Q("li",[t._v("一条链路只是一条通路的一个组成部分")])])]),t._v(" "),Q("li",[Q("p",[Q("strong",[t._v("数据链路")]),t._v(" (data link) 除了物理线路外，还必须有通信协议来控制这些数据的传输。若把实现这些协议的硬件和软件加到链路上，就构成了数据链路。")]),t._v(" "),Q("ul",[Q("li",[t._v("现在最常用的方法是使用适配器（即网卡）来实现这些协议的硬件和软件。")]),t._v(" "),Q("li",[t._v("一般的适配器都包括了数据链路层和物理层这两层的功能。")])])])]),t._v(" "),Q("p",[t._v("也有人采用另外的术语。这就是把链路分为"),Q("strong",[t._v("物理链路")]),t._v("和"),Q("strong",[t._v("逻辑链路")]),t._v("。\n物理链路就是上面所说的链路。逻辑链路就是上面的数据链路，是物理链路加上必要的通信协议。\n早期的数据"),Q("strong",[t._v("通信协议")]),t._v("曾叫做"),Q("strong",[t._v("通信规程")]),t._v(" (procedure)。"),Q("strong",[t._v("因此在数据链路层，规程和协议是同义语")]),t._v("。")]),t._v(" "),Q("p",[Q("img",{attrs:{src:"/internet/3-2.png",alt:"数据链路层传输的是帧",title:"数据链路层传输的是帧"}})]),t._v(" "),Q("ul",[Q("li",[t._v("常常在两个对等的数据链路层之间画出一个数字管道，而在这条数字管道上传输的数据单位是"),Q("strong",[t._v("帧")]),t._v("。")]),t._v(" "),Q("li",[t._v("数据链路层不必考虑物理层如何实现比特传输的细节。甚至还可以更简单地设想好像是沿着两个数据链路层之间的水平方向把帧直接发送到对方。")])]),t._v(" "),Q("h3",{attrs:{id:"三个基本问题"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#三个基本问题"}},[t._v("#")]),t._v(" 三个基本问题")]),t._v(" "),Q("p",[t._v("数据链路层协议有许多种，但有三个基本问题则是共同的： "),Q("strong",[t._v("封装成帧")]),t._v("、"),Q("strong",[t._v("透明传输")]),t._v("、"),Q("strong",[t._v("差错控制")]),t._v("。")]),t._v(" "),Q("ol",[Q("li",[Q("p",[Q("strong",[t._v("封装成帧")])]),t._v(" "),Q("ul",[Q("li",[Q("strong",[t._v("封装成帧")]),t._v(" (framing) 就是在一段数据的前后分别添加首部和尾部，然后就构成了一个帧。")]),t._v(" "),Q("li",[t._v("首部和尾部的一个重要作用就是进行"),Q("strong",[t._v("帧定界")]),t._v("。\n"),Q("img",{attrs:{src:"/internet/3-3.png",alt:"封装成帧",title:"封装成帧"}})]),t._v(" "),Q("li",[t._v("用控制字符进行帧定界的方法举例\n"),Q("ul",[Q("li",[t._v("当数据是由可打印的 ASCII 码组成的文本文件时，帧定界可以使用特殊的帧定界符。")]),t._v(" "),Q("li",[t._v("控制字符 "),Q("strong",[t._v("SOH")]),t._v(" (Start Of Header) 放在一帧的最前面，表示帧的首部开始。另一个控制字符 "),Q("strong",[t._v("EOT")]),t._v(" (End Of Transmission) 表示帧的结束。\n"),Q("img",{attrs:{src:"/internet/3-4.png",alt:"用控制字符进行帧定界的方法举例",title:"用控制字符进行帧定界的方法举例用控制字符进行帧定界的方法举例"}})])])])])]),t._v(" "),Q("li",[Q("p",[Q("strong",[t._v("透明传输")])]),t._v(" "),Q("ul",[Q("li",[t._v("如果数据中的某个字节的二进制代码恰好和 SOH 或 EOT 一样，数据链路层就会错误地“找到帧的边界”。\n"),Q("img",{attrs:{src:"/internet/3-5.png",alt:"透明传输",title:"透明传输"}})]),t._v(" "),Q("li",[t._v("解决透明传输问题\n"),Q("ul",[Q("li",[t._v("解决方法：字节填充 (byte stuffing) 或字符填充 (character stuffing)。")]),t._v(" "),Q("li",[t._v("发送端的数据链路层在数据中出现控制字符“SOH”或“EOT”的前面插入一个转义字符“ESC”(其十六进制编码是1B)。")]),t._v(" "),Q("li",[t._v("接收端的数据链路层在将数据送往网络层之前删除插入的转义字符。")]),t._v(" "),Q("li",[t._v("如果转义字符也出现在数据当中，那么应在转义字符前面插入一个转义字符 ESC。当接收端收到连续的两个转义字符时，就删除其中前面的一个。\n"),Q("img",{attrs:{src:"/internet/3-6.png",alt:"字节填充",title:"字节填充"}})])])])])])]),t._v(" "),Q("div",{staticClass:"custom-block tip"},[Q("p",{staticClass:"title"},[t._v("透明")]),Q("p",[t._v("指某一个实际存在的事物看起来却好像不存在一样。\n“在数据链路层透明传送数据”表示无论发送什么样的比特组合的数据，这些数据都能够按照原样没有差错地通过这个数据链路层。\n可以看看"),Q("a",{attrs:{href:"https://blog.csdn.net/qq_40911292/article/details/89528655",target:"_blank",rel:"noopener noreferrer"}},[Q("strong",[t._v("这篇文章")]),Q("OutboundLink")],1)])]),Q("ol",{attrs:{start:"3"}},[Q("li",[Q("p",[Q("strong",[t._v("差错检测")])]),t._v(" "),Q("ul",[Q("li",[t._v("在传输过程中可能会产生比特差错：1 可能会变成 0， 而 0 也可能变成 1。\n"),Q("img",{attrs:{src:"/internet/3-7.png",alt:"差错检测",title:"差错检测"}})]),t._v(" "),Q("li",[t._v("在一段时间内，传输错误的比特占所传输比特总数的比率称为误码率 BER (Bit Error Rate)。")]),t._v(" "),Q("li",[t._v("误码率与信噪比有很大的关系。")]),t._v(" "),Q("li",[t._v("为了保证数据传输的可靠性，在计算机网络传输数据时，必须采用各种差错检测措施。")]),t._v(" "),Q("li",[t._v("在数据链路层传送的帧中，广泛使用了"),Q("strong",[t._v("循环冗余检验")]),t._v(" CRC 的检错技术。")]),t._v(" "),Q("li",[t._v("下面的例子中，可以用"),Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[Q("svg",{staticStyle:{"vertical-align":"-0.566ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20.585ex",height:"2.452ex",viewBox:"0 -833.9 9098.6 1083.9"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"50",d:"M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"}})]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(751, 0)"}},[Q("path",{attrs:{"data-c":"28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}})]),Q("g",{attrs:{"data-mml-node":"mi",transform:"translate(1140, 0)"}},[Q("path",{attrs:{"data-c":"58",d:"M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z"}})]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(1968, 0)"}},[Q("path",{attrs:{"data-c":"29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"}})]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(2634.8, 0)"}},[Q("path",{attrs:{"data-c":"3D",d:"M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"}})]),Q("g",{attrs:{"data-mml-node":"msup",transform:"translate(3690.6, 0)"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"58",d:"M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z"}})]),Q("g",{attrs:{"data-mml-node":"mn",transform:"translate(828, 363) scale(0.707)"}},[Q("path",{attrs:{"data-c":"33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"}})])]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(5144.3, 0)"}},[Q("path",{attrs:{"data-c":"2B",d:"M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"}})]),Q("g",{attrs:{"data-mml-node":"msup",transform:"translate(6144.6, 0)"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"58",d:"M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z"}})]),Q("g",{attrs:{"data-mml-node":"mn",transform:"translate(828, 363) scale(0.707)"}},[Q("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})])]),Q("g",{attrs:{"data-mml-node":"mo",transform:"translate(7598.3, 0)"}},[Q("path",{attrs:{"data-c":"2B",d:"M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"}})]),Q("g",{attrs:{"data-mml-node":"mn",transform:"translate(8598.6, 0)"}},[Q("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})])])])])]),t._v("表示除数 P=1101(最高位对应"),Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[Q("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"2.786ex",height:"1.885ex",viewBox:"0 -833.2 1231.6 833.2"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"msup"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"58",d:"M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z"}})]),Q("g",{attrs:{"data-mml-node":"mn",transform:"translate(828, 363) scale(0.707)"}},[Q("path",{attrs:{"data-c":"33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"}})])])])])])]),t._v(",最低位对应于"),Q("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[Q("svg",{staticStyle:{"vertical-align":"0"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"2.786ex",height:"1.887ex",viewBox:"0 -833.9 1231.6 833.9"}},[Q("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[Q("g",{attrs:{"data-mml-node":"math"}},[Q("g",{attrs:{"data-mml-node":"msup"}},[Q("g",{attrs:{"data-mml-node":"mi"}},[Q("path",{attrs:{"data-c":"58",d:"M42 0H40Q26 0 26 11Q26 15 29 27Q33 41 36 43T55 46Q141 49 190 98Q200 108 306 224T411 342Q302 620 297 625Q288 636 234 637H206Q200 643 200 645T202 664Q206 677 212 683H226Q260 681 347 681Q380 681 408 681T453 682T473 682Q490 682 490 671Q490 670 488 658Q484 643 481 640T465 637Q434 634 411 620L488 426L541 485Q646 598 646 610Q646 628 622 635Q617 635 609 637Q594 637 594 648Q594 650 596 664Q600 677 606 683H618Q619 683 643 683T697 681T738 680Q828 680 837 683H845Q852 676 852 672Q850 647 840 637H824Q790 636 763 628T722 611T698 593L687 584Q687 585 592 480L505 384Q505 383 536 304T601 142T638 56Q648 47 699 46Q734 46 734 37Q734 35 732 23Q728 7 725 4T711 1Q708 1 678 1T589 2Q528 2 496 2T461 1Q444 1 444 10Q444 11 446 25Q448 35 450 39T455 44T464 46T480 47T506 54Q523 62 523 64Q522 64 476 181L429 299Q241 95 236 84Q232 76 232 72Q232 53 261 47Q262 47 267 47T273 46Q276 46 277 46T280 45T283 42T284 35Q284 26 282 19Q279 6 276 4T261 1Q258 1 243 1T201 2T142 2Q64 2 42 0Z"}})]),Q("g",{attrs:{"data-mml-node":"mn",transform:"translate(828, 363) scale(0.707)"}},[Q("path",{attrs:{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}})])])])])])]),t._v(")。\n"),Q("img",{attrs:{src:"/internet/3-8.png",alt:"循环冗余检验",title:"循环冗余检验"}})],1)])]),t._v(" "),Q("li",[Q("p",[Q("strong",[t._v("注意事项")])]),t._v(" "),Q("ul",[Q("li",[t._v("仅用循环冗余检验 CRC 差错检测技术只能做到"),Q("strong",[t._v("无差错接受")]),t._v(" (accept)。")]),t._v(" "),Q("li",[t._v("“无差错接受”是指：“凡是接受的帧（即不包括丢弃的帧），我们都能以非常接近于 1 的概率认为这些帧在传输过程中没有产生差错”。")]),t._v(" "),Q("li",[t._v("也就是说：“"),Q("strong",[t._v("凡是接收端数据链路层接受的帧都没有传输差错")]),t._v("”（有差错的帧就丢弃而不接受）。")]),t._v(" "),Q("li",[t._v("单纯使用 CRC 差错检测技术"),Q("strong",[t._v("不能实现")]),t._v("“无差错传输”或“可靠传输”。")]),t._v(" "),Q("li",[t._v("应当明确，“无比特差错”与“无传输差错”是不同的概念。")]),t._v(" "),Q("li",[t._v("在数据链路层使用 CRC 检验，能够实现"),Q("strong",[t._v("无比特差错")]),t._v("的传输，但这还不是可靠传输。")]),t._v(" "),Q("li",[t._v("要做到“无差错传输”（即发送什么就收到什么）就必须再加上确认和重传机制。")]),t._v(" "),Q("li",[t._v("本章介绍的数据链路层协议都不是可靠传输的协议。")])])])]),t._v(" "),Q("h2",{attrs:{id:"点对点协议-ppp"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#点对点协议-ppp"}},[t._v("#")]),t._v(" 点对点协议 PPP")]),t._v(" "),Q("h3",{attrs:{id:"ppp-协议的特点"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#ppp-协议的特点"}},[t._v("#")]),t._v(" PPP 协议的特点")]),t._v(" "),Q("ul",[Q("li",[Q("p",[t._v("对于点对点的链路，目前使用得最广泛的数据链路层协议是点对点协议 PPP (Point-to-Point Protocol)。")])]),t._v(" "),Q("li",[Q("p",[t._v("PPP 协议在 1994 年就已成为互联网的正式标准。\n"),Q("img",{attrs:{src:"/internet/3-9.png",alt:"用户到ISP的链路使用PPP协议",title:"用户到ISP的链路使用PPP协议"}})])]),t._v(" "),Q("li",[Q("p",[Q("strong",[t._v("PPP 协议应满足的需求")]),t._v("：")]),t._v(" "),Q("ul",[Q("li",[t._v("简单：这是首要的要求。")]),t._v(" "),Q("li",[t._v("封装成帧：必须规定特殊的字符作为帧定界符。")]),t._v(" "),Q("li",[t._v("透明性：必须保证"),Q("a",{attrs:{href:"(https://blog.csdn.net/qq_40911292/article/details/89528655)"}},[t._v("数据传输的透明性")]),t._v("。")]),t._v(" "),Q("li",[t._v("多种网络层协议：能够在同一条物理链路上同时支持多种网络层协议。")]),t._v(" "),Q("li",[t._v("多种类型链路：能够在多种类型的链路上运行。")]),t._v(" "),Q("li",[t._v("差错检测：能够对接收端收到的帧进行检测，并立即丢弃有差错的帧。")]),t._v(" "),Q("li",[t._v("检测连接状态：能够及时自动检测出链路是否处于正常工作状态。")]),t._v(" "),Q("li",[t._v("最大传送单元：必须对每一种类型的点对点链路设置最大传送单元  MTU 的标准默认值，促进各种实现之间的互操作性。")]),t._v(" "),Q("li",[t._v("网络层地址协商：必须提供一种机制使通信的两个网络层实体能够通过协商知道或能够配置彼此的网络层地址。")]),t._v(" "),Q("li",[t._v("数据压缩协商：必须提供一种方法来协商使用数据压缩算法。")])])]),t._v(" "),Q("li",[Q("p",[t._v("PPP 协议不需要满足的要求：纠错、流量控制、序号、多点线路、半双工或单工链路。")])]),t._v(" "),Q("li",[Q("p",[Q("strong",[t._v("PPP 协议的组成")]),t._v("：")]),t._v(" "),Q("ul",[Q("li",[t._v("一个将 IP 数据报封装到串行链路的方法。")]),t._v(" "),Q("li",[t._v("链路控制协议 LCP (Link Control Protocol)。")]),t._v(" "),Q("li",[t._v("网络控制协议 NCP (Network Control Protocol)。")])])])]),t._v(" "),Q("h3",{attrs:{id:"ppp-协议的帧格式"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#ppp-协议的帧格式"}},[t._v("#")]),t._v(" PPP 协议的帧格式")]),t._v(" "),Q("ul",[Q("li",[t._v("PPP 帧的首部和尾部分别为 4 个字段和 2 个字段。")]),t._v(" "),Q("li",[t._v("标志字段 F = 0x7E （符号“0x”表示后面的字符是用十六进制表示。十六进制的 7E 的二进制表示是 01111110）。")]),t._v(" "),Q("li",[t._v("地址字段 A 只置为 0xFF。地址字段实际上并不起作用。")]),t._v(" "),Q("li",[t._v("控制字段 C 通常置为 0x03。")]),t._v(" "),Q("li",[t._v("PPP 是面向字节的，所有的 PPP 帧的长度都是整数字节。\n"),Q("img",{attrs:{src:"/internet/3-10.png",alt:"协议的帧格式",title:"协议的帧格式"}})])]),t._v(" "),Q("p",[t._v("当 PPP 用在异步传输时，就使用一种特殊的字符填充法。\n当 PPP 用在同步传输链路时，协议规定采用硬件来完成比特填充（和 HDLC 的做法一样）")]),t._v(" "),Q("h3",{attrs:{id:"字节填充"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#字节填充"}},[t._v("#")]),t._v(" 字节填充")]),t._v(" "),Q("ul",[Q("li",[t._v("将信息字段中出现的每一个 0x7E 字节转变成为 2 字节序列 (0x7D, 0x5E)。")]),t._v(" "),Q("li",[t._v("若信息字段中出现一个 0x7D 的字节, 则将其转变成为 2 字节序列 (0x7D, 0x5D)。")]),t._v(" "),Q("li",[t._v("若信息字段中出现 ASCII 码的控制字符（即数值小于 0x20 的字符），则在该字符前面要加入一个 0x7D 字节，同时将该字符的编码加以改变。\n"),Q("img",{attrs:{src:"/internet/3-11.png",alt:"字节填充",title:"字节填充"}})])]),t._v(" "),Q("h3",{attrs:{id:"零比特填充"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#零比特填充"}},[t._v("#")]),t._v(" 零比特填充")]),t._v(" "),Q("ul",[Q("li",[t._v("PPP 协议用在 SONET/SDH 链路时，使用同步传输（一连串的比特连续传送）。这时 PPP 协议采用零比特填充方法来实现透明传输。")]),t._v(" "),Q("li",[t._v("在发送端，只要发现有 5 个连续 1，则立即填入一个 0。")]),t._v(" "),Q("li",[t._v("接收端对帧中的比特流进行扫描。每当发现 5 个连续1时，就把这 5 个连续 1 后的一个 0 删除。\n"),Q("img",{attrs:{src:"/internet/3-12.png",alt:"零比特填充",title:"零比特填充"}})])]),t._v(" "),Q("p",[t._v("PPP 协议之所以"),Q("strong",[t._v("不使用序号和确认机制")]),t._v("是出于以下的考虑：")]),t._v(" "),Q("ul",[Q("li",[t._v("在数据链路层出现差错的概率不大时，使用比较简单的 PPP 协议较为合理。")]),t._v(" "),Q("li",[t._v("在因特网环境下，PPP 的信息字段放入的数据是 IP  数据报。数据链路层的可靠传输并不能够保证网络层的传输也是可靠的。")]),t._v(" "),Q("li",[t._v("帧检验序列 FCS 字段可保证无差错接受。")])]),t._v(" "),Q("h3",{attrs:{id:"ppp-协议的工作状态"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#ppp-协议的工作状态"}},[t._v("#")]),t._v(" PPP 协议的工作状态")]),t._v(" "),Q("ol",[Q("li",[t._v("当用户拨号接入 ISP 时，路由器的调制解调器对拨号做出确认，并建立一条物理连接。")]),t._v(" "),Q("li",[t._v("PC 机向路由器发送一系列的 LCP 分组（封装成多个 PPP 帧）。")]),t._v(" "),Q("li",[t._v("这些分组及其响应选择一些 PPP 参数，并进行网络层配置，NCP 给新接入的 PC 机分配一个临时的 IP 地址，使 PC 机成为因特网上的一个主机。")]),t._v(" "),Q("li",[t._v("通信完毕时，NCP 释放网络层连接，收回原来分配出去的 IP 地址。接着，LCP 释放数据链路层连接。最后释放的是物理层的连接。\n"),Q("img",{attrs:{src:"/internet/3-13.png",alt:"PPP协议的工作状态",title:"PPP协议的工作状态"}})])]),t._v(" "),Q("p",[t._v("可见，PPP 协议已不是纯粹的数据链路层的协议，它还包含了物理层和网络层的内容。")]),t._v(" "),Q("h2",{attrs:{id:"使用广播信道的数据链路层"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#使用广播信道的数据链路层"}},[t._v("#")]),t._v(" 使用广播信道的数据链路层")]),t._v(" "),Q("h3",{attrs:{id:"局域网的数据链路层"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#局域网的数据链路层"}},[t._v("#")]),t._v(" 局域网的数据链路层")]),t._v(" "),Q("ul",[Q("li",[t._v("局域网最主要的特点是：\n"),Q("ul",[Q("li",[t._v("网络为一个单位所拥有；")]),t._v(" "),Q("li",[t._v("地理范围和站点数目均有限。")])])]),t._v(" "),Q("li",[t._v("局域网具有如下主要优点：\n"),Q("ul",[Q("li",[t._v("具有广播功能，从一个站点可很方便地访问全网。局域网上的主机可共享连接在局域网上的各种硬件和软件资源。")]),t._v(" "),Q("li",[t._v("便于系统的扩展和逐渐地演变，各设备的位置可灵活调整和改变。")]),t._v(" "),Q("li",[t._v("提高了系统的可靠性、可用性和残存性。")])])])]),t._v(" "),Q("p",[Q("strong",[t._v("局域网的拓扑结构")]),t._v(" "),Q("img",{attrs:{src:"/internet/3-14.png",alt:"局域网的拓扑结构",title:"局域网的拓扑结构"}})]),t._v(" "),Q("p",[Q("strong",[t._v("局域网传输媒体")]),t._v(" "),Q("img",{attrs:{src:"/internet/3-15.png",alt:"局域网传输媒体",title:"局域网传输媒体"}})]),t._v(" "),Q("p",[Q("strong",[t._v("局域网共享信道带来的问题")]),t._v(" "),Q("img",{attrs:{src:"/internet/3-16.png",alt:"局域网共享信道带来的问题",title:"局域网共享信道带来的问题"}})]),t._v(" "),Q("h4",{attrs:{id:"媒体共享技术"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#媒体共享技术"}},[t._v("#")]),t._v(" 媒体共享技术")]),t._v(" "),Q("p",[t._v("静态划分信道：频分复用、时分复用、波分复用、码分复用。")]),t._v(" "),Q("p",[t._v("动态媒体接入控制（多点接入）：随机接入、受控接入 ，如多点线路探询 (polling)，或轮询。")]),t._v(" "),Q("p",[Q("img",{attrs:{src:"/line1.png",alt:"耳机分割线",title:"耳机分割线"}}),t._v(" "),Q("strong",[t._v("补充")]),t._v("：")]),t._v(" "),Q("ul",[Q("li",[t._v("为了使数据链路层能更好地适应多种局域网标准，IEEE802委员会就将局域网的数据链路层拆成两个子层：\n"),Q("ol",[Q("li",[t._v("逻辑链路控制 LLC (Logical Link Control)子层；")]),t._v(" "),Q("li",[t._v("媒体接入控制 MAC (Medium Access Control)子层。")])])]),t._v(" "),Q("li",[t._v("与接入到传输媒体有关的内容都放在 MAC子层，而 LLC 子层则与传输媒体无关。")]),t._v(" "),Q("li",[t._v("不管采用何种协议的局域网，"),Q("strong",[t._v("对 LLC 子层来说都是透明的")]),t._v("。")])]),t._v(" "),Q("p",[Q("img",{attrs:{src:"/internet/3-17.png",alt:"局域网对 LLC 子层是透明的",title:"局域网对 LLC 子层是透明的"}})]),t._v(" "),Q("ul",[Q("li",[t._v("由于 TCP/IP 体系经常使用的局域网是 DIX Ethernet V2 而不是 802.3 标准中的几种局域网，因此现在 802 委员会制定的逻辑链路控制子层 LLC（即 802.2 标准）的作用已经不大了。")]),t._v(" "),Q("li",[t._v("很多厂商生产的适配器上就仅装有 MAC 协议而没有 LLC 协议。")])]),t._v(" "),Q("h2",{attrs:{id:"适配器-网卡"}},[Q("a",{staticClass:"header-anchor",attrs:{href:"#适配器-网卡"}},[t._v("#")]),t._v(" 适配器（网卡）")]),t._v(" "),Q("p",[Q("strong",[t._v("问")]),t._v("：计算机是怎样连接到局域网上的？")]),t._v(" "),Q("p",[t._v("计算机与外界局域网的连接是通过通信"),Q("strong",[t._v("适配器")]),t._v("进行的。适配器本来是在主机箱内插入的一块网络接口板（或者是在笔记本电脑中插入一块\nPCMCIA 卡——个人计算机存储器卡接口适配器）。这种接口板又被称为"),Q("strong",[t._v("网络接口卡 NIC")]),t._v("或者简称"),Q("strong",[t._v("网卡")]),t._v("。")]),t._v(" "),Q("p",[Q("strong",[t._v("适配器重要功能")]),t._v("：")]),t._v(" "),Q("ol",[Q("li",[t._v("适配器和局域网之间的通信是通过电缆或者双绞线以串行传输方式进行的，而适配器和计算机之间的通信则是通过计算机主板上的\nI/O 总线以并行传输方式进行的，因此适配器的一个重要功能就是："),Q("strong",[t._v("进行数据串行传输和并行传输的转换")])]),t._v(" "),Q("li",[t._v("由于网络上的数据率和计算机总线上的数据率并不相同，因此"),Q("strong",[t._v("在适配器中必须装有对数据进行缓存的存储芯片")])]),t._v(" "),Q("li",[t._v("在主板插上适配器时，还必须把"),Q("strong",[t._v("管理改适配器的设备驱动程序安装在计算机的操作系统中")]),t._v("，这个驱动程序以后会告诉适配器，\n应当从存储器的什么位置上把多长的数据块发送到局域网，或者在存储器的什么位置上把局域网传送的数据块存储下来。")]),t._v(" "),Q("li",[Q("strong",[t._v("适配器还要实现以太网协议。")])])]),t._v(" "),Q("p",[Q("img",{attrs:{src:"/internet/3-18.png",alt:"计算机通过适配器和局域网进行通信",title:"计算机通过适配器和局域网进行通信"}})])])}),[],!1,null,null,null);a.default=v.exports}}]);