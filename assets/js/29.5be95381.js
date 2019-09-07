(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{292:function(t,v,_){"use strict";_.r(v);var r=_(24),i=Object(r.a)({},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"网络层-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络层-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 网络层-2")]),t._v(" "),_("h2",{attrs:{id:"ip-地址与硬件地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ip-地址与硬件地址","aria-hidden":"true"}},[t._v("#")]),t._v(" IP 地址与硬件地址")]),t._v(" "),_("p",[t._v("IP 地址与硬件地址是不同的地址。从层次的角度看，硬件地址（或物理地址）是"),_("strong",[t._v("数据链路层和物理层")]),t._v("使用的地址。IP 地址是"),_("strong",[t._v("网络层和以上各层")]),t._v("使用的地址，是一种"),_("strong",[t._v("逻辑地址")]),t._v("（称 IP 地址是逻辑地址是因为 IP 地址是用软件实现的）。")]),t._v(" "),_("p",[t._v("IP 地址与硬件地址的区别，说起来有很多，但总之，"),_("strong",[t._v("IP 地址放在 IP 数据报的首部，而硬件地址则放在 MAC 帧的首部")]),t._v("。\n"),_("img",{attrs:{src:"/internet/4-11.png",alt:"IP地址与硬件地址的区别",title:"IP地址与硬件地址的区别"}})]),t._v(" "),_("p",[t._v("互联网上的主机"),_("strong",[t._v("通信过程")]),t._v("：\n"),_("img",{attrs:{src:"/internet/4-12.png",alt:"互联网上的主机通信过程",title:"互联网上的主机通信过程"}}),t._v(" "),_("img",{attrs:{src:"/internet/4-13.png",alt:"互联网上的主机通信过程",title:"互联网上的主机通信过程"}})]),t._v(" "),_("h3",{attrs:{id:"地址解析协议-arp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#地址解析协议-arp","aria-hidden":"true"}},[t._v("#")]),t._v(" 地址解析协议 ARP")]),t._v(" "),_("p",[t._v("通信时使用了两个地址：IP 地址（网络层地址）、MAC 地址（数据链路层地址）。已经知道了一个机器（主机或路由器）的IP地址，如何找出其相应的硬件地址？\n地址解析协议 ARP 就是用来解决这样的问题的。\n"),_("strong",[t._v("ARP 作用")]),t._v("：从网络层使用的 IP 地址，解析出在数据链路层使用的硬件地址。")]),t._v(" "),_("p",[_("img",{attrs:{src:"/internet/4-14.png",alt:"地址解析协议 ARP 的作用",title:"地址解析协议 ARP 的作用"}})]),t._v(" "),_("h4",{attrs:{id:"地址解析协议-arp-要点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#地址解析协议-arp-要点","aria-hidden":"true"}},[t._v("#")]),t._v(" 地址解析协议 ARP 要点")]),t._v(" "),_("ul",[_("li",[t._v("不管网络层使用的是什么协议，在实际网络的链路上传送数据帧时，最终还是必须使用硬件地址。")]),t._v(" "),_("li",[t._v("每一个主机都设有一个 ARP 高速缓存 (ARP cache)，里面有所在的局域网上的各主机和路由器的 IP 地址到硬件地址的映射表。")]),t._v(" "),_("li",[t._v("当主机 A 欲向本局域网上的某个主机 B 发送 IP 数据报时，就先在其 ARP 高速缓存中查看有无主机 B 的 IP 地址。\n"),_("ul",[_("li",[t._v("如有，就可查出其对应的硬件地址，再将此硬件地址写入 MAC 帧，然后通过局域网将该 MAC 帧发往此硬件地址。")]),t._v(" "),_("li",[t._v("如没有， ARP 进程在本局域网上广播发送一个 ARP 请求分组。收到 ARP 响应分组后，将得到的 IP 地址到硬件地址的映射写入 ARP 高速缓存。")])])]),t._v(" "),_("li",[t._v("ARP请求分组：包含发送方硬件地址 / 发送方 IP 地址 / 目标方硬件地址(未知时填 0) / 目标方 IP 地址。")]),t._v(" "),_("li",[t._v("本地广播 ARP 请求（路由器不转发ARP请求）。")]),t._v(" "),_("li",[t._v("ARP 响应分组：包含发送方硬件地址 / 发送方 IP地址 / 目标方硬件地址 / 目标方 IP 地址。")]),t._v(" "),_("li",[t._v("ARP 分组封装在物理网络的帧中传输。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"/line1.png",alt:"耳机分割线",title:"耳机分割线"}})]),t._v(" "),_("p",[_("strong",[t._v("ARP 高速缓存")]),t._v("的作用：")]),t._v(" "),_("ul",[_("li",[t._v("存放最近获得的 IP 地址到 MAC 地址的绑定，以减少 ARP 广播的数量。")]),t._v(" "),_("li",[t._v("为了减少网络上的通信量，主机 A 在发送其 ARP 请求分组时，就将自己的 IP 地址到硬件地址的映射写入 ARP 请求分组。")]),t._v(" "),_("li",[t._v("当主机 B 收到 A 的 ARP 请求分组时，就将主机 A 的这一地址映射写入主机 B 自己的 ARP 高速缓存中。这对主机 B 以后向 A 发送数据报时就更方便了。\n"),_("img",{attrs:{src:"/internet/4-15.png",alt:"ARP高速缓存",title:"ARP高速缓存"}})])]),t._v(" "),_("p",[_("strong",[t._v("注意")])]),t._v(" "),_("ul",[_("li",[t._v("ARP 用于解决同一个局域网上的主机或路由器的 IP 地址和硬件地址的映射问题。")]),t._v(" "),_("li",[t._v("如果所要找的主机和源主机不在同一个局域网上，那么就要通过 ARP 找到一个位于本局域网上的某个路由器的硬件地址，然后把分组发送给这个路由器，让这个路由器把分组转发给下一个网络。剩下的工作就由下一个网络来做。")]),t._v(" "),_("li",[t._v("从 IP 地址到硬件地址的解析是自动进行的，主机的用户对这种地址解析过程是不知道的。")]),t._v(" "),_("li",[t._v("只要主机或路由器要和本网络上的另一个已知 IP 地址的主机或路由器进行通信，ARP 协议就会自动地将该 IP 地址解析为链路层所需要的硬件地址。")])]),t._v(" "),_("p",[_("img",{attrs:{src:"/line1.png",alt:"耳机分割线",title:"耳机分割线"}}),t._v(" "),_("strong",[t._v("使用 ARP 的四种典型情况")])]),t._v(" "),_("ul",[_("li",[t._v("发送方是主机，要把 IP 数据报发送到本网络上的另一个主机。"),_("strong",[t._v("这时用 ARP 找到目的主机的硬件地址")]),t._v("。")]),t._v(" "),_("li",[t._v("发送方是主机，要把 IP 数据报发送到另一个网络上的一个主机。"),_("strong",[t._v("这时用 ARP 找到本网络上的一个路由器的硬件地址")]),t._v("。剩下的工作由这个路由器来完成。")]),t._v(" "),_("li",[t._v("发送方是路由器，要把 IP 数据报转发到本网络上的一个主机。"),_("strong",[t._v("这时用 ARP 找到目的主机的硬件地址")]),t._v("。")]),t._v(" "),_("li",[t._v("发送方是路由器，要把 IP 数据报转发到另一个网络上的一个主机。"),_("strong",[t._v("这时用 ARP 找到本网络上另一个路由器的硬件地址")]),t._v("。剩下的工作由这个路由器来完成。")])]),t._v(" "),_("p",[t._v("问："),_("strong",[t._v("为什么不直接使用硬件地址进行通信")]),t._v("？")]),t._v(" "),_("ul",[_("li",[t._v("由于全世界存在着各式各样的网络，它们使用不同的硬件地址。要使这些异构网络能够互相通信就必须进行非常复杂的硬件地址转换工作，因此几乎是不可能的事。")]),t._v(" "),_("li",[t._v("IP 编址把这个复杂问题解决了。连接到互联网的主机只需各自拥有一个唯一的 IP 地址，它们之间的通信就像连接在同一个网络上那样简单方便，因为上述的调用 + ARP 的复杂过程都是由计算机软件自动进行的，对用户来说是看不见这种调用过程的。")]),t._v(" "),_("li",[t._v("因此，在虚拟的 IP 网络上用 IP 地址进行通信给广大的计算机用户带来了很大的方便。")])]),t._v(" "),_("h3",{attrs:{id:"ip-数据报的格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ip-数据报的格式","aria-hidden":"true"}},[t._v("#")]),t._v(" IP 数据报的格式")]),t._v(" "),_("p",[t._v("一个 IP 数据报由"),_("strong",[t._v("首部和数据")]),t._v("两部分组成。首部的前一部分是固定长度，共 20 字节(即 32*5/8)，是所有 IP 数据报必须具有的。在首部的固定部分的后面是一些可选字段，其长度是可变的。\n"),_("img",{attrs:{src:"/internet/4-16.png",alt:"IP数据报的格式",title:"IP数据报的格式"}})]),t._v(" "),_("ul",[_("li",[t._v("IP 数据报由首部和数据两部分组成：首部的前一部分是固定长度，共 20 字节，是所有 IP 数据报必须具有的；可选字段，其长度是可变的")]),t._v(" "),_("li",[_("strong",[t._v("版本")]),t._v("——占 4 位，指 IP 协议的版本。目前的 IP 协议版本号为 4 (即 IPv4)。")]),t._v(" "),_("li",[_("strong",[t._v("首部长度")]),t._v("——占 4 位，可表示的最大数值是 15 个单位(一个单位为 4 字节)，因此 IP 的首部长度的最大值是 60 字节。")]),t._v(" "),_("li",[_("strong",[t._v("区分服务")]),t._v("——占 8 位，用来获得更好的服务。在旧标准中叫做服务类型，但实际上一直未被使用过。1998 年这个字段改名为区分服务。只有在使用区分服务（DiffServ）时，这个字段才起作用。在一般的情况下都不使用这个字段")]),t._v(" "),_("li",[_("strong",[t._v("总长度")]),t._v("——占 16 位，指首部和数据之和的长度，单位为字节，因此数据报的最大长度为 65535 字节。总长度必须不超过最大传送单元MTU。")]),t._v(" "),_("li",[_("strong",[t._v("标识(identification)")]),t._v(" ——占 16 位，它是一个计数器，用来产生 IP 数据报的标识。")]),t._v(" "),_("li",[_("strong",[t._v("标志(flag)")]),t._v(" ——占 3 位，目前只有前两位有意义。标志字段的最低位是 MF (More Fragment)。MF=1 表示后面“还有分片”。MF=0 表示最后一个分片。标志字段中间的一位是 DF (Don't Fragment) 。只有当 DF=0 时才允许分片。")]),t._v(" "),_("li",[_("strong",[t._v("片偏移")]),t._v("——占13 位，指出：较长的分组在分片后某片在原分组中的相对位置。片偏移以 8 个字节为偏移单位。\n"),_("img",{attrs:{src:"/internet/4-17.png",alt:"数据报分片",title:"数据报分片"}})]),t._v(" "),_("li",[_("strong",[t._v("生存时间")]),t._v("——占8 位，记为 TTL (Time To Live)，指示数据报在网络中可通过的路由器数的最大值。")]),t._v(" "),_("li",[_("strong",[t._v("协议")]),t._v("——占8 位，指出此数据报携带的数据使用何种协议，以便目的主机的 IP 层将数据部分上交给那个处理过程\n"),_("img",{attrs:{src:"/internet/4-18.png",alt:"协议",title:"协议"}})]),t._v(" "),_("li",[_("strong",[t._v("首部检验和")]),t._v("——占16 位，只检验数据报的首部，不检验数据部分。这里不采用 CRC 检验码而采用简单的计算方法。\n"),_("img",{attrs:{src:"/internet/4-19.png",alt:"首部检验和",title:"首部检验和"}})])]),t._v(" "),_("p",[_("img",{attrs:{src:"/line1.png",alt:"耳机分割线",title:"耳机分割线"}}),t._v(" "),_("strong",[t._v("可变长部分")]),t._v("：")]),t._v(" "),_("ul",[_("li",[t._v("IP 首部的可变部分就是一个选项字段，用来支持排错、测量以及安全等措施，内容很丰富。")]),t._v(" "),_("li",[t._v("选项字段的长度可变，从 1 个字节到 40 个字节不等，取决于所选择的项目。")]),t._v(" "),_("li",[t._v("增加首部的可变部分是为了增加 IP 数据报的功能，但这同时也使得 IP 数据报的首部长度成为可变的。这就增加了每一个路由器处理数据报的开销。")]),t._v(" "),_("li",[t._v("实际上这些选项很少被使用。")])]),t._v(" "),_("h3",{attrs:{id:"ip-层转发分组的流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ip-层转发分组的流程","aria-hidden":"true"}},[t._v("#")]),t._v(" IP 层转发分组的流程")]),t._v(" "),_("p",[t._v("假设：有四个 A 类网络通过三个路由器连接在一起。每一个网络上都可能有成千上万个主机。可以想象，若按目的主机号来制作路由表，每一个路由表就有 4 万个项目，即 4 万行（每一行对应于一台主机），则所得出的路由表就会过于庞大。"),_("strong",[t._v("但若按主机所在的网络地址来制作路由表，那么每一个路由器中的路由表就只包含 4 个项目（每一行对应于一个网络），这样就可使路由表大大简化")]),t._v("。")]),t._v(" "),_("p",[t._v("根据目的网络地址就能确定下一跳路由器，这样做的结果是：IP 数据报最终一定可以找到目的主机所在目的网络上的路由器（可能要通过多次的间接交付）。只有到达最后一个路由器时，才试图向目的主机进行直接交付。")]),t._v(" "),_("p",[t._v("虽然互联网所有的分组转发都是基于目的主机所在的网络，但在大多数情况下都允许有这样的特例，即为特定的目的主机指明一个路由。\n采用特定主机路由可使网络管理人员能更方便地控制网络和测试网络，同时也可在需要考虑某种安全问题时采用这种特定主机路由。")]),t._v(" "),_("p",[t._v("路由器还可采用默认路由以减少路由表所占用的空间和搜索路由表所用的时间。\n这种转发方式在一个网络只有很少的对外连接时是很有用的。\n默认路由在主机发送 IP 数据报时往往更能显示出它的好处。\n如果一个主机连接在一个小网络上，而这个网络只用一个路由器和互联网连接，那么在这种情况下使用默认路由是非常合适的。")]),t._v(" "),_("p",[t._v("IP 数据报的首部中没有地方可以用来指明“下一跳路由器的 IP 地址”。\n当路由器收到待转发的数据报，不是将下一跳路由器的 IP 地址填入 IP 数据报，而是送交下层的网络接口软件。\n网络接口软件使用 ARP 负责将下一跳路由器的 IP 地址转换成硬件地址，并将此硬件地址放在链路层的 MAC 帧的首部，然后根据这个硬件地址找到下一跳路由器。")]),t._v(" "),_("p",[_("img",{attrs:{src:"/line1.png",alt:"耳机分割线",title:"耳机分割线"}})]),t._v(" "),_("p",[_("strong",[t._v("路由器分组转发算法")])]),t._v(" "),_("ol",[_("li",[t._v("从数据报的首部提取目的主机的 IP 地址 D, 得出目的网络地址为 N。")]),t._v(" "),_("li",[t._v("若网络 N 与此路由器直接相连，则把数据报直接交付目的主机 D；否则是间接交付，执行 (3)。")]),t._v(" "),_("li",[t._v("若路由表中有目的地址为 D 的特定主机路由，则把数据报传送给路由表中所指明的下一跳路由器；否则，执行 (4)。")]),t._v(" "),_("li",[t._v("若路由表中有到达网络 N 的路由，则把数据报传送给路由表指明的下一跳路由器；否则，执行 (5)。")]),t._v(" "),_("li",[t._v("若路由表中有一个默认路由，则把数据报传送给路由表中所指明的默认路由器；否则，执行 (6)。")]),t._v(" "),_("li",[t._v("报告转发分组出错。")])]),t._v(" "),_("p",[t._v("路由表没有给分组指明到某个网络的完整路径。路由表指出，到某个网络应当先到某个路由器（即下一跳路由器）。在到达下一跳路由器后，再继续查找其路由表，知道再下一步应当到哪一个路由器。这样一步一步地查找下去，直到最后到达目的网络。")]),t._v(" "),_("h2",{attrs:{id:"网际控制报文协议-icmp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网际控制报文协议-icmp","aria-hidden":"true"}},[t._v("#")]),t._v(" 网际控制报文协议 ICMP")]),t._v(" "),_("p",[t._v("为了更有效地转发 IP 数据报和提高交付成功的机会，在网际层使用了网际控制报文协议 ICMP (Internet Control Message Protocol)。ICMP 是互联网的标准协议。ICMP 允许主机或路由器报告差错情况和提供有关异常情况的报告。但 ICMP 不是高层协议（看起来好像是高层协议，因为 ICMP 报文是装在 IP 数据报中，作为其中的数据部分），而是 IP 层的协议。")]),t._v(" "),_("h3",{attrs:{id:"icmp-报文的种类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#icmp-报文的种类","aria-hidden":"true"}},[t._v("#")]),t._v(" ICMP 报文的种类")]),t._v(" "),_("p",[t._v("ICMP 报文的种类有两种，即 "),_("strong",[t._v("ICMP 差错报告报文")]),t._v("和 "),_("strong",[t._v("ICMP 询问报文")]),t._v("。\nICMP 报文的前 4 个字节是统一的格式，共有三个字段：即类型、代码和检验和。接着的 4 个字节的内容与 ICMP 的类型有关。")]),t._v(" "),_("p",[t._v("ICMP 差错报告报文共有 4 种：终点不可达 、时间超过 、参数问题、改变路由（重定向）(Redirect)")]),t._v(" "),_("h3",{attrs:{id:"icmp-的应用举例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#icmp-的应用举例","aria-hidden":"true"}},[t._v("#")]),t._v(" ICMP 的应用举例")]),t._v(" "),_("h2",{attrs:{id:"互联网的路由选择协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#互联网的路由选择协议","aria-hidden":"true"}},[t._v("#")]),t._v(" 互联网的路由选择协议")]),t._v(" "),_("h2",{attrs:{id:"ip-多播"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ip-多播","aria-hidden":"true"}},[t._v("#")]),t._v(" IP 多播")]),t._v(" "),_("h2",{attrs:{id:"虚拟专用网-vpn-和网络地址转换-nat"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚拟专用网-vpn-和网络地址转换-nat","aria-hidden":"true"}},[t._v("#")]),t._v(" 虚拟专用网 VPN 和网络地址转换 NAT")]),t._v(" "),_("h2",{attrs:{id:"多协议标记就换-mpls"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多协议标记就换-mpls","aria-hidden":"true"}},[t._v("#")]),t._v(" 多协议标记就换 MPLS")])])},[],!1,null,null,null);v.default=i.exports}}]);