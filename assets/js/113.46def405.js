(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{306:function(v,t,_){"use strict";_.r(t);var r=_(5),a=Object(r.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"网络层-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络层-2"}},[v._v("#")]),v._v(" 网络层-2")]),v._v(" "),_("h2",{attrs:{id:"目录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[v._v("#")]),v._v(" 目录")]),v._v(" "),_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#目录"}},[v._v("目录")])]),_("li",[_("a",{attrs:{href:"#ip-地址与硬件地址"}},[v._v("IP 地址与硬件地址")]),_("ul",[_("li",[_("a",{attrs:{href:"#地址解析协议-arp"}},[v._v("地址解析协议 ARP")])]),_("li",[_("a",{attrs:{href:"#ip-数据报的格式"}},[v._v("IP 数据报的格式")])]),_("li",[_("a",{attrs:{href:"#ip-层转发分组的流程"}},[v._v("IP 层转发分组的流程")])])])]),_("li",[_("a",{attrs:{href:"#网际控制报文协议-icmp"}},[v._v("网际控制报文协议 ICMP")]),_("ul",[_("li",[_("a",{attrs:{href:"#icmp-报文的种类"}},[v._v("ICMP 报文的种类")])]),_("li",[_("a",{attrs:{href:"#icmp-的应用举例"}},[v._v("ICMP 的应用举例")])])])]),_("li",[_("a",{attrs:{href:"#互联网的路由选择协议"}},[v._v("互联网的路由选择协议")]),_("ul",[_("li",[_("a",{attrs:{href:"#基本概念"}},[v._v("基本概念")])]),_("li",[_("a",{attrs:{href:"#内部网关协议-rip"}},[v._v("内部网关协议 RIP")])]),_("li",[_("a",{attrs:{href:"#内部网关协议-ospf"}},[v._v("内部网关协议 OSPF")])])])]),_("li",[_("a",{attrs:{href:"#ip-多播"}},[v._v("IP 多播")])]),_("li",[_("a",{attrs:{href:"#虚拟专用网-vpn-和网络地址转换-nat"}},[v._v("虚拟专用网 VPN 和网络地址转换 NAT")]),_("ul",[_("li",[_("a",{attrs:{href:"#虚拟专用网-vpn"}},[v._v("虚拟专用网 VPN")])])])]),_("li",[_("a",{attrs:{href:"#多协议标记就换-mpls"}},[v._v("多协议标记就换 MPLS")])])])]),_("p"),v._v(" "),_("h2",{attrs:{id:"ip-地址与硬件地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ip-地址与硬件地址"}},[v._v("#")]),v._v(" IP 地址与硬件地址")]),v._v(" "),_("p",[v._v("IP 地址与硬件地址是不同的地址。从层次的角度看，硬件地址（或物理地址）是"),_("strong",[v._v("数据链路层和物理层")]),v._v("使用的地址。IP 地址是"),_("strong",[v._v("网络层和以上各层")]),v._v("使用的地址，是一种"),_("strong",[v._v("逻辑地址")]),v._v("（称 IP 地址是逻辑地址是因为 IP 地址是用软件实现的）。")]),v._v(" "),_("p",[v._v("IP 地址与硬件地址的区别，说起来有很多，但总之，"),_("strong",[v._v("IP 地址放在 IP 数据报的首部，而硬件地址则放在 MAC 帧的首部")]),v._v("。\n"),_("img",{attrs:{src:"/internet/4-11.png",alt:"IP地址与硬件地址的区别",title:"IP地址与硬件地址的区别"}})]),v._v(" "),_("p",[v._v("互联网上的主机"),_("strong",[v._v("通信过程")]),v._v("：\n"),_("img",{attrs:{src:"/internet/4-12.png",alt:"互联网上的主机通信过程",title:"互联网上的主机通信过程"}}),v._v(" "),_("img",{attrs:{src:"/internet/4-13.png",alt:"互联网上的主机通信过程",title:"互联网上的主机通信过程"}})]),v._v(" "),_("h3",{attrs:{id:"地址解析协议-arp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#地址解析协议-arp"}},[v._v("#")]),v._v(" 地址解析协议 ARP")]),v._v(" "),_("p",[v._v("通信时使用了两个地址：IP 地址（网络层地址）、MAC 地址（数据链路层地址）。已经知道了一个机器（主机或路由器）的IP地址，如何找出其相应的硬件地址？\n地址解析协议 ARP 就是用来解决这样的问题的。\n"),_("strong",[v._v("ARP 作用")]),v._v("：从网络层使用的 IP 地址，解析出在数据链路层使用的硬件地址。")]),v._v(" "),_("p",[_("img",{attrs:{src:"/internet/4-14.png",alt:"地址解析协议 ARP 的作用",title:"地址解析协议 ARP 的作用"}})]),v._v(" "),_("h4",{attrs:{id:"地址解析协议-arp-要点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#地址解析协议-arp-要点"}},[v._v("#")]),v._v(" 地址解析协议 ARP 要点")]),v._v(" "),_("ul",[_("li",[v._v("不管网络层使用的是什么协议，在实际网络的链路上传送数据帧时，最终还是必须使用硬件地址。")]),v._v(" "),_("li",[v._v("每一个主机都设有一个 ARP 高速缓存 (ARP cache)，里面有所在的局域网上的各主机和路由器的 IP 地址到硬件地址的映射表。")]),v._v(" "),_("li",[v._v("当主机 A 欲向本局域网上的某个主机 B 发送 IP 数据报时，就先在其 ARP 高速缓存中查看有无主机 B 的 IP 地址。\n"),_("ul",[_("li",[v._v("如有，就可查出其对应的硬件地址，再将此硬件地址写入 MAC 帧，然后通过局域网将该 MAC 帧发往此硬件地址。")]),v._v(" "),_("li",[v._v("如没有， ARP 进程在本局域网上广播发送一个 ARP 请求分组。收到 ARP 响应分组后，将得到的 IP 地址到硬件地址的映射写入 ARP 高速缓存。")])])]),v._v(" "),_("li",[v._v("ARP请求分组：包含发送方硬件地址 / 发送方 IP 地址 / 目标方硬件地址(未知时填 0) / 目标方 IP 地址。")]),v._v(" "),_("li",[v._v("本地广播 ARP 请求（路由器不转发ARP请求）。")]),v._v(" "),_("li",[v._v("ARP 响应分组：包含发送方硬件地址 / 发送方 IP地址 / 目标方硬件地址 / 目标方 IP 地址。")]),v._v(" "),_("li",[v._v("ARP 分组封装在物理网络的帧中传输。")])]),v._v(" "),_("p",[_("img",{attrs:{src:"/line1.png",alt:"耳机分割线",title:"耳机分割线"}})]),v._v(" "),_("p",[_("strong",[v._v("ARP 高速缓存")]),v._v("的作用：")]),v._v(" "),_("ul",[_("li",[v._v("存放最近获得的 IP 地址到 MAC 地址的绑定，以减少 ARP 广播的数量。")]),v._v(" "),_("li",[v._v("为了减少网络上的通信量，主机 A 在发送其 ARP 请求分组时，就将自己的 IP 地址到硬件地址的映射写入 ARP 请求分组。")]),v._v(" "),_("li",[v._v("当主机 B 收到 A 的 ARP 请求分组时，就将主机 A 的这一地址映射写入主机 B 自己的 ARP 高速缓存中。这对主机 B 以后向 A 发送数据报时就更方便了。\n"),_("img",{attrs:{src:"/internet/4-15.png",alt:"ARP高速缓存",title:"ARP高速缓存"}})])]),v._v(" "),_("p",[_("strong",[v._v("注意")])]),v._v(" "),_("ul",[_("li",[v._v("ARP 用于解决同一个局域网上的主机或路由器的 IP 地址和硬件地址的映射问题。")]),v._v(" "),_("li",[v._v("如果所要找的主机和源主机不在同一个局域网上，那么就要通过 ARP 找到一个位于本局域网上的某个路由器的硬件地址，然后把分组发送给这个路由器，让这个路由器把分组转发给下一个网络。剩下的工作就由下一个网络来做。")]),v._v(" "),_("li",[v._v("从 IP 地址到硬件地址的解析是自动进行的，主机的用户对这种地址解析过程是不知道的。")]),v._v(" "),_("li",[v._v("只要主机或路由器要和本网络上的另一个已知 IP 地址的主机或路由器进行通信，ARP 协议就会自动地将该 IP 地址解析为链路层所需要的硬件地址。")])]),v._v(" "),_("p",[_("img",{attrs:{src:"/line1.png",alt:"耳机分割线",title:"耳机分割线"}}),v._v(" "),_("strong",[v._v("使用 ARP 的四种典型情况")])]),v._v(" "),_("ul",[_("li",[v._v("发送方是主机，要把 IP 数据报发送到本网络上的另一个主机。"),_("strong",[v._v("这时用 ARP 找到目的主机的硬件地址")]),v._v("。")]),v._v(" "),_("li",[v._v("发送方是主机，要把 IP 数据报发送到另一个网络上的一个主机。"),_("strong",[v._v("这时用 ARP 找到本网络上的一个路由器的硬件地址")]),v._v("。剩下的工作由这个路由器来完成。")]),v._v(" "),_("li",[v._v("发送方是路由器，要把 IP 数据报转发到本网络上的一个主机。"),_("strong",[v._v("这时用 ARP 找到目的主机的硬件地址")]),v._v("。")]),v._v(" "),_("li",[v._v("发送方是路由器，要把 IP 数据报转发到另一个网络上的一个主机。"),_("strong",[v._v("这时用 ARP 找到本网络上另一个路由器的硬件地址")]),v._v("。剩下的工作由这个路由器来完成。")])]),v._v(" "),_("p",[v._v("问："),_("strong",[v._v("为什么不直接使用硬件地址进行通信")]),v._v("？")]),v._v(" "),_("ul",[_("li",[v._v("由于全世界存在着各式各样的网络，它们使用不同的硬件地址。要使这些异构网络能够互相通信就必须进行非常复杂的硬件地址转换工作，因此几乎是不可能的事。")]),v._v(" "),_("li",[v._v("IP 编址把这个复杂问题解决了。连接到互联网的主机只需各自拥有一个唯一的 IP 地址，它们之间的通信就像连接在同一个网络上那样简单方便，因为上述的调用 + ARP 的复杂过程都是由计算机软件自动进行的，对用户来说是看不见这种调用过程的。")]),v._v(" "),_("li",[v._v("因此，在虚拟的 IP 网络上用 IP 地址进行通信给广大的计算机用户带来了很大的方便。")])]),v._v(" "),_("h3",{attrs:{id:"ip-数据报的格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ip-数据报的格式"}},[v._v("#")]),v._v(" IP 数据报的格式")]),v._v(" "),_("p",[v._v("一个 IP 数据报由"),_("strong",[v._v("首部和数据")]),v._v("两部分组成。首部的前一部分是固定长度，共 20 字节(即 32*5/8)，是所有 IP 数据报必须具有的。在首部的固定部分的后面是一些可选字段，其长度是可变的。\n"),_("img",{attrs:{src:"/internet/4-16.png",alt:"IP数据报的格式",title:"IP数据报的格式"}})]),v._v(" "),_("ul",[_("li",[v._v("IP 数据报由首部和数据两部分组成：首部的前一部分是固定长度，共 20 字节，是所有 IP 数据报必须具有的；可选字段，其长度是可变的")]),v._v(" "),_("li",[_("strong",[v._v("版本")]),v._v("——占 4 位，指 IP 协议的版本。目前的 IP 协议版本号为 4 (即 IPv4)。")]),v._v(" "),_("li",[_("strong",[v._v("首部长度")]),v._v("——占 4 位，可表示的最大数值是 15 个单位(一个单位为 4 字节)，因此 IP 的首部长度的最大值是 60 字节。")]),v._v(" "),_("li",[_("strong",[v._v("区分服务")]),v._v("——占 8 位，用来获得更好的服务。在旧标准中叫做服务类型，但实际上一直未被使用过。1998 年这个字段改名为区分服务。只有在使用区分服务（DiffServ）时，这个字段才起作用。在一般的情况下都不使用这个字段")]),v._v(" "),_("li",[_("strong",[v._v("总长度")]),v._v("——占 16 位，指首部和数据之和的长度，单位为字节，因此数据报的最大长度为 65535 字节。总长度必须不超过最大传送单元MTU。")]),v._v(" "),_("li",[_("strong",[v._v("标识(identification)")]),v._v(" ——占 16 位，它是一个计数器，用来产生 IP 数据报的标识。")]),v._v(" "),_("li",[_("strong",[v._v("标志(flag)")]),v._v(" ——占 3 位，目前只有前两位有意义。标志字段的最低位是 MF (More Fragment)。MF=1 表示后面“还有分片”。MF=0 表示最后一个分片。标志字段中间的一位是 DF (Don't Fragment) 。只有当 DF=0 时才允许分片。")]),v._v(" "),_("li",[_("strong",[v._v("片偏移")]),v._v("——占13 位，指出：较长的分组在分片后某片在原分组中的相对位置。片偏移以 8 个字节为偏移单位。\n"),_("img",{attrs:{src:"/internet/4-17.png",alt:"数据报分片",title:"数据报分片"}})]),v._v(" "),_("li",[_("strong",[v._v("生存时间")]),v._v("——占8 位，记为 TTL (Time To Live)，指示数据报在网络中可通过的路由器数的最大值。")]),v._v(" "),_("li",[_("strong",[v._v("协议")]),v._v("——占8 位，指出此数据报携带的数据使用何种协议，以便目的主机的 IP 层将数据部分上交给那个处理过程\n"),_("img",{attrs:{src:"/internet/4-18.png",alt:"协议",title:"协议"}})]),v._v(" "),_("li",[_("strong",[v._v("首部检验和")]),v._v("——占16 位，只检验数据报的首部，不检验数据部分。这里不采用 CRC 检验码而采用简单的计算方法。\n"),_("img",{attrs:{src:"/internet/4-19.png",alt:"首部检验和",title:"首部检验和"}})])]),v._v(" "),_("p",[_("img",{attrs:{src:"/line1.png",alt:"耳机分割线",title:"耳机分割线"}}),v._v(" "),_("strong",[v._v("可变长部分")]),v._v("：")]),v._v(" "),_("ul",[_("li",[v._v("IP 首部的可变部分就是一个选项字段，用来支持排错、测量以及安全等措施，内容很丰富。")]),v._v(" "),_("li",[v._v("选项字段的长度可变，从 1 个字节到 40 个字节不等，取决于所选择的项目。")]),v._v(" "),_("li",[v._v("增加首部的可变部分是为了增加 IP 数据报的功能，但这同时也使得 IP 数据报的首部长度成为可变的。这就增加了每一个路由器处理数据报的开销。")]),v._v(" "),_("li",[v._v("实际上这些选项很少被使用。")])]),v._v(" "),_("h3",{attrs:{id:"ip-层转发分组的流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ip-层转发分组的流程"}},[v._v("#")]),v._v(" IP 层转发分组的流程")]),v._v(" "),_("p",[v._v("假设：有四个 A 类网络通过三个路由器连接在一起。每一个网络上都可能有成千上万个主机。可以想象，若按目的主机号来制作路由表，每一个路由表就有 4 万个项目，即 4 万行（每一行对应于一台主机），则所得出的路由表就会过于庞大。"),_("strong",[v._v("但若按主机所在的网络地址来制作路由表，那么每一个路由器中的路由表就只包含 4 个项目（每一行对应于一个网络），这样就可使路由表大大简化")]),v._v("。")]),v._v(" "),_("p",[v._v("根据目的网络地址就能确定下一跳路由器，这样做的结果是：IP 数据报最终一定可以找到目的主机所在目的网络上的路由器（可能要通过多次的间接交付）。只有到达最后一个路由器时，才试图向目的主机进行直接交付。")]),v._v(" "),_("p",[v._v("虽然互联网所有的分组转发都是基于目的主机所在的网络，但在大多数情况下都允许有这样的特例，即为特定的目的主机指明一个路由。\n采用特定主机路由可使网络管理人员能更方便地控制网络和测试网络，同时也可在需要考虑某种安全问题时采用这种特定主机路由。")]),v._v(" "),_("p",[v._v("路由器还可采用默认路由以减少路由表所占用的空间和搜索路由表所用的时间。\n这种转发方式在一个网络只有很少的对外连接时是很有用的。\n默认路由在主机发送 IP 数据报时往往更能显示出它的好处。\n如果一个主机连接在一个小网络上，而这个网络只用一个路由器和互联网连接，那么在这种情况下使用默认路由是非常合适的。")]),v._v(" "),_("p",[v._v("IP 数据报的首部中没有地方可以用来指明“下一跳路由器的 IP 地址”。\n当路由器收到待转发的数据报，不是将下一跳路由器的 IP 地址填入 IP 数据报，而是送交下层的网络接口软件。\n网络接口软件使用 ARP 负责将下一跳路由器的 IP 地址转换成硬件地址，并将此硬件地址放在链路层的 MAC 帧的首部，然后根据这个硬件地址找到下一跳路由器。")]),v._v(" "),_("p",[_("img",{attrs:{src:"/line1.png",alt:"耳机分割线",title:"耳机分割线"}})]),v._v(" "),_("p",[_("strong",[v._v("路由器分组转发算法")])]),v._v(" "),_("ol",[_("li",[v._v("从数据报的首部提取目的主机的 IP 地址 D, 得出目的网络地址为 N。")]),v._v(" "),_("li",[v._v("若网络 N 与此路由器直接相连，则把数据报直接交付目的主机 D；否则是间接交付，执行 (3)。")]),v._v(" "),_("li",[v._v("若路由表中有目的地址为 D 的特定主机路由，则把数据报传送给路由表中所指明的下一跳路由器；否则，执行 (4)。")]),v._v(" "),_("li",[v._v("若路由表中有到达网络 N 的路由，则把数据报传送给路由表指明的下一跳路由器；否则，执行 (5)。")]),v._v(" "),_("li",[v._v("若路由表中有一个默认路由，则把数据报传送给路由表中所指明的默认路由器；否则，执行 (6)。")]),v._v(" "),_("li",[v._v("报告转发分组出错。")])]),v._v(" "),_("p",[v._v("路由表没有给分组指明到某个网络的完整路径。路由表指出，到某个网络应当先到某个路由器（即下一跳路由器）。在到达下一跳路由器后，再继续查找其路由表，知道再下一步应当到哪一个路由器。这样一步一步地查找下去，直到最后到达目的网络。")]),v._v(" "),_("h2",{attrs:{id:"网际控制报文协议-icmp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网际控制报文协议-icmp"}},[v._v("#")]),v._v(" 网际控制报文协议 ICMP")]),v._v(" "),_("p",[v._v("为了更有效地转发 IP 数据报和提高交付成功的机会，在网际层使用了网际控制报文协议 ICMP (Internet Control Message Protocol)。ICMP 是互联网的标准协议。ICMP 允许主机或路由器报告差错情况和提供有关异常情况的报告。但 ICMP 不是高层协议（看起来好像是高层协议，因为 ICMP 报文是装在 IP 数据报中，作为其中的数据部分），而是 IP 层的协议。")]),v._v(" "),_("p",[_("img",{attrs:{src:"/internet/4-20.png",alt:"ICMP报文的格式",title:"ICMP报文的格式"}}),v._v(" "),_("img",{attrs:{src:"/internet/4-21.png",alt:"ICMP差错报告报文的数据字段的内容",title:"ICMP差错报告报文的数据字段的内容"}})]),v._v(" "),_("h3",{attrs:{id:"icmp-报文的种类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#icmp-报文的种类"}},[v._v("#")]),v._v(" ICMP 报文的种类")]),v._v(" "),_("p",[v._v("ICMP 报文的种类有两种，即 "),_("strong",[v._v("ICMP 差错报告报文")]),v._v("和 "),_("strong",[v._v("ICMP 询问报文")]),v._v("。\nICMP 报文的前 4 个字节是统一的格式，共有三个字段：即类型、代码和检验和。接着的 4 个字节的内容与 ICMP 的类型有关。")]),v._v(" "),_("p",[v._v("ICMP 差错报告报文共有 4 种：终点不可达 、时间超过 、参数问题、改变路由（重定向）(Redirect)")]),v._v(" "),_("p",[v._v("不应发送 ICMP 差错报告报文的几种情况：")]),v._v(" "),_("ul",[_("li",[v._v("对 ICMP 差错报告报文不再发送 ICMP 差错报告报文。")]),v._v(" "),_("li",[v._v("对第一个分片的数据报片的所有后续数据报片都不发送 ICMP 差错报告报文。")]),v._v(" "),_("li",[v._v("对具有多播地址的数据报都不发送 ICMP 差错报告报文。")]),v._v(" "),_("li",[v._v("对具有特殊地址（如127.0.0.0 或 0.0.0.0）的数据报不发送 ICMP 差错报告报文。")])]),v._v(" "),_("p",[v._v("ICMP 询问报文有两种：回送请求和回答报文、时间戳请求和回答报文。")]),v._v(" "),_("h3",{attrs:{id:"icmp-的应用举例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#icmp-的应用举例"}},[v._v("#")]),v._v(" ICMP 的应用举例")]),v._v(" "),_("h4",{attrs:{id:"ping-packet-internet-groper"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ping-packet-internet-groper"}},[v._v("#")]),v._v(" PING (Packet InterNet Groper)")]),v._v(" "),_("ul",[_("li",[v._v("PING 用来测试两个主机之间的连通性。")]),v._v(" "),_("li",[v._v("PING 使用了 ICMP 回送请求与回送回答报文。")]),v._v(" "),_("li",[v._v("PING 是应用层直接使用网络层 ICMP 的例子，它没有通过运输层的 TCP 或UDP。")])]),v._v(" "),_("h4",{attrs:{id:"traceroute-的应用举例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#traceroute-的应用举例"}},[v._v("#")]),v._v(" Traceroute 的应用举例")]),v._v(" "),_("ul",[_("li",[v._v("在 Windows 操作系统中这个命令是 tracert。")]),v._v(" "),_("li",[v._v("用来跟踪一个分组从源点到终点的路径。")]),v._v(" "),_("li",[v._v("它利用 IP 数据报中的 TTL 字段和 ICMP 时间超过差错报告报文实现对从源点到终点的路径的跟踪。")])]),v._v(" "),_("h2",{attrs:{id:"互联网的路由选择协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#互联网的路由选择协议"}},[v._v("#")]),v._v(" 互联网的路由选择协议")]),v._v(" "),_("p",[v._v("即路由表中的路由是怎么得出来的。")]),v._v(" "),_("h3",{attrs:{id:"基本概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[v._v("#")]),v._v(" 基本概念")]),v._v(" "),_("ol",[_("li",[v._v("理想的路由算法")])]),v._v(" "),_("p",[v._v("路由选择协议的核心就是路由算法，即需要何种算法来获得路由表中的各项目。一个理想的路由算法应具有如下的一些特点：")]),v._v(" "),_("ul",[_("li",[v._v("算法必须是正确的和完整的。")]),v._v(" "),_("li",[v._v("算法在计算上应简单。")]),v._v(" "),_("li",[v._v("算法应能适应通信量和网络拓扑的变化，这就是说，要有自适应性。")]),v._v(" "),_("li",[v._v("算法应具有稳定性。")]),v._v(" "),_("li",[v._v("算法应是公平的。")]),v._v(" "),_("li",[v._v("算法应是最佳的。")])]),v._v(" "),_("p",[v._v("关于“最佳路由”，不存在一种绝对的最佳路由算法。所谓“最佳”只能是相对于某一种特定要求下得出的较为合理的选择而已。实际的路由选择算法，应尽可能接近于理想的算法。 路由选择是个非常复杂的问题：它是网络中的所有结点共同协调工作的结果；路由选择的环境往往是不断变化的，而这种变化有时无法事先知道。")]),v._v(" "),_("p",[v._v("从路由算法的自适应性考虑，静态路由选择策略——即非自适应路由选择，其特点是简单和开销较小，但不能及时适应网络状态的变化。 动态路由选择策略——即自适应路由选择，其特点是能较好地适应网络状态的变化，但实现起来较为复杂，开销也比较大。")]),v._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[v._v("分层次的路由选择协议")])]),v._v(" "),_("p",[v._v("互联网采用分层次的路由选择协议。这是因为：")]),v._v(" "),_("ul",[_("li",[v._v("互联网的规模非常大。如果让所有的路由器知道所有的网络应怎样到达，则这种路由表将非常大，处理起来也太花时间。而所有这些路由器之间交换路由信息所需的带宽就会使互联网的通信链路饱和。")]),v._v(" "),_("li",[v._v("许多单位不愿意外界了解自己单位网络的布局细节和本部门所采用的路由选择协议（这属于本部门内部的事情），但同时还希望连接到互联网上。")])]),v._v(" "),_("p",[_("strong",[v._v("自治系统 AS (Autonomous System)")]),v._v(" 的定义：在单一的技术管理下的一组路由器，而这些路由器使用一种 AS 内部的路由选择协议和共同的度量以确定分组在该 AS 内的路由，同时还使用一种 AS 之间的路由选择协议用以确定分组在 AS之间的路由。\n现在对自治系统 AS 的定义是强调下面的事实：尽管一个 AS 使用了多种内部路由选择协议和度量，但重要的是一个 AS 对其他 AS 表现出的是一个单一的和一致的路由选择策略。")]),v._v(" "),_("p",[v._v("使用分层次的路由选择方法，可将互联网的路由选择协议划分为：")]),v._v(" "),_("ol",[_("li",[v._v("内部网关协议 IGP (Interior Gateway Protocol)\n"),_("ul",[_("li",[v._v("在一个自治系统内部使用的路由选择协议。")]),v._v(" "),_("li",[v._v("目前这类路由选择协议使用得最多，如 RIP 和 OSPF 协议。")])])]),v._v(" "),_("li",[v._v("外部网关协议 EGP (External Gateway Protocol)\n"),_("ul",[_("li",[v._v("若源站和目的站处在不同的自治系统中，当数据报传到一个自治系统的边界时，就需要使用一种协议将路由选择信息传递到另一个自治系统中。这样的协议就是外部网关协议 EGP。")]),v._v(" "),_("li",[v._v("在外部网关协议中目前使用最多的是 BGP-4。")])])])]),v._v(" "),_("p",[_("img",{attrs:{src:"/internet/4-22.png",alt:"自治系统和内部网关协议、外部网关协议",title:"自治系统和内部网关协议、外部网关协议"}})]),v._v(" "),_("ul",[_("li",[v._v("互联网的早期 RFC 文档中未使用“"),_("strong",[v._v("路由器")]),v._v("”而是使用“"),_("strong",[v._v("网关")]),v._v("”这一名词。但是在新的 RFC 文档中又使用了“路由器”这一名词。应当把这两个术语当作同义词。")]),v._v(" "),_("li",[v._v("IGP 和 EGP 是协议类别的名称。但 RFC 在使用 EGP 这个名词时出现了一点混乱，因为最早的一个外部网关协议的协议名字正好也是 EGP。因此在遇到名词 EGP 时，应弄清它是指旧的协议 EGP 还是指外部网关协议 EGP 这个类别。")])]),v._v(" "),_("h3",{attrs:{id:"内部网关协议-rip"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内部网关协议-rip"}},[v._v("#")]),v._v(" 内部网关协议 RIP")]),v._v(" "),_("p",[v._v("路由信息协议 RIP (Routing Information Protocol) 是内部网关协议 IGP 中最先得到广泛使用的协议。RIP 是一种"),_("strong",[v._v("分布式")]),v._v("的、基于"),_("strong",[v._v("距离向量")]),v._v("的路由选择协议。RIP 协议要求网络中的每一个路由器都要维护从它自己到其他每一个目的网络的距离记录。")]),v._v(" "),_("p",[v._v("其中，距离的定义：")]),v._v(" "),_("ul",[_("li",[v._v("从一个路由器到直接连接的网络的距离定义为 1。")]),v._v(" "),_("li",[v._v("从一个路由器到非直接连接的网络的距离定义为所经过的路由器数加 1。")]),v._v(" "),_("li",[v._v("RIP 协议中的“距离”也称为“跳数”(hop count)，因为每经过一个路由器，跳数就加 1。")]),v._v(" "),_("li",[v._v("这里的“距离”实际上指的是“最短距离”。")]),v._v(" "),_("li",[v._v("RIP 认为一个好的路由就是它通过的路由器的数目少，即“距离短”。")]),v._v(" "),_("li",[v._v("RIP 允许一条路径最多只能包含 15 个路由器。")]),v._v(" "),_("li",[v._v("“距离”的最大值为 16 时即相当于不可达。可见 RIP 只适用于小型互联网。")]),v._v(" "),_("li",[v._v("RIP 不能在两个网络之间同时使用多条路由。RIP 选择一个具有最少路由器的路由（即最短路由），哪怕还存在另一条高速(低时延)但路由器较多的路由。")])]),v._v(" "),_("p",[v._v("RIP 协议的三个特点：")]),v._v(" "),_("ul",[_("li",[v._v("仅和相邻路由器交换信息。")]),v._v(" "),_("li",[v._v("交换的信息是当前本路由器所知道的全部信息，即自己的路由表。")]),v._v(" "),_("li",[v._v("按固定的时间间隔交换路由信息，例如，每隔 30 秒。当网络拓扑发生变化时，路由器也及时向相邻路由器通告拓扑变化后的路由信息。")])]),v._v(" "),_("h4",{attrs:{id:"路由表的建立"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#路由表的建立"}},[v._v("#")]),v._v(" 路由表的建立")]),v._v(" "),_("ul",[_("li",[v._v("路由器在刚刚开始工作时，只知道到直接连接的网络的距离（此距离定义为 1）。它的路由表是空的。")]),v._v(" "),_("li",[v._v("以后，每一个路由器也只和数目非常有限的相邻路由器交换并更新路由信息。")]),v._v(" "),_("li",[v._v("经过若干次更新后，所有的路由器最终都会知道到达本自治系统中任何一个网络的最短距离和下一跳路由器的地址。")]),v._v(" "),_("li",[v._v("RIP 协议的收敛 (convergence) 过程较快。“收敛”就是在自治系统中所有的结点都得到正确的路由选择信息的过程。")])]),v._v(" "),_("h4",{attrs:{id:"距离向量算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#距离向量算法"}},[v._v("#")]),v._v(" 距离向量算法")]),v._v(" "),_("p",[v._v("路由器收到相邻路由器（其地址为 X）的一个 RIP 报文，每一个项目中都有三个关键数据，即：到目的网络 N，距离是 d，下一跳路由器是 X。")]),v._v(" "),_("p",[_("img",{attrs:{src:"/internet/4-23.png",alt:"距离向量算法",title:"距离向量算法"}})]),v._v(" "),_("ul",[_("li",[v._v("若 3 分钟还没有收到相邻路由器的更新路由表，则把此相邻路由器记为不可达路由器，即将距离置为 16（表示不可达）。")]),v._v(" "),_("li",[v._v("返回。")])]),v._v(" "),_("p",[_("strong",[v._v("解释：")])]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("橙色块中表示")]),v._v("：这样做是为了便于进行本路由表的更新。假设位于地址 X 的相邻路由器发力啊的 RIP 报文中的某个项目是：“Net2，3，Y”，意思是“我经过路由器 Y 到网络 Net2 的距离是 3”，那么本路由器就可推断出：“我经过 X 到网络 Net2 的距离应该为 3 + 1 = 4”。于是，本路由器你就把收到的报文的这个项目改为“ Net2，4，X”，作为下一步和路由表中原有项目进行比较时使用。")]),v._v(" "),_("li",[_("strong",[v._v("深蓝色块表示")]),v._v("：这是新的网络，应当加入到路由表中。")]),v._v(" "),_("li",[_("strong",[v._v("深红色块表示")]),v._v("：替换的是因为这是最新的消息，要以最新的消息为准。到达目的网络的距离可能减小也可能增大，但也可能没有改变。例如，不管原来路由表中的项目是“Net2，3，X”，还是“Net2，5，X”，都要更新为“Net2，5，X”。")]),v._v(" "),_("li",[_("strong",[v._v("紫色块表示")]),v._v("：例如若路由表中已有项目“Net2，5，P”，就要更新为“Net2，5，X”。因为到网络 Net2的距离原来是 5，现在减到 4，更短了。")]),v._v(" "),_("li",[_("strong",[v._v("红色箭头表示")]),v._v("：若距离变大了，显然不应该更新。若不变，更新后得不到好处，因此也不更新。")])]),v._v(" "),_("h4",{attrs:{id:"例子"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[v._v("#")]),v._v(" 例子")]),v._v(" "),_("p",[v._v("看看"),_("a",{attrs:{href:"https://blog.csdn.net/hml666888/article/details/80153305",target:"_blank",rel:"noopener noreferrer"}},[v._v("这篇文章"),_("OutboundLink")],1)]),v._v(" "),_("h3",{attrs:{id:"内部网关协议-ospf"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内部网关协议-ospf"}},[v._v("#")]),v._v(" 内部网关协议 OSPF")]),v._v(" "),_("p",[v._v("开放最短路径优先 OSPF (Open Shortest Path First)是为克服 RIP 的缺点在 1989 年开发出来的。OSPF 的原理很简单，但实现起来却较复杂。“开放”表明 、OSPF 协议不是受某一家厂商控制，而是公开发表的。“最短路径优先”是因为使用了 Dijkstra 提出的最短路径算法 SPF。采用"),_("strong",[v._v("分布式的链路状态协议 (link state protocol)")]),v._v("。 注意：OSPF 只是一个协议的名字，它并不表示其他的路由选择协议不是“最短路径优先”。")]),v._v(" "),_("h2",{attrs:{id:"ip-多播"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ip-多播"}},[v._v("#")]),v._v(" IP 多播")]),v._v(" "),_("h2",{attrs:{id:"虚拟专用网-vpn-和网络地址转换-nat"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚拟专用网-vpn-和网络地址转换-nat"}},[v._v("#")]),v._v(" 虚拟专用网 VPN 和网络地址转换 NAT")]),v._v(" "),_("h3",{attrs:{id:"虚拟专用网-vpn"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#虚拟专用网-vpn"}},[v._v("#")]),v._v(" 虚拟专用网 VPN")]),v._v(" "),_("p",[v._v("由于 IP 地址的紧缺，一个机构能够申请到的IP地址数往往远小于本机构所拥有的主机数。考虑到互联网并不很安全，一个机构内也并不需要把所有的主机接入到外部的互联网。假定在一个机构内部的计算机通信也是采用 TCP/IP 协议，那么从原则上讲，对于这些仅在机构内部使用的计算机就可以由本机构自行分配其 IP 地址。")]),v._v(" "),_("p",[v._v("本地地址——仅在机构内部使用的 IP 地址，可以由本机构自行分配，而不需要向互联网的管理机构申请。全球地址——全球唯一的 IP 地址，必须向互联网的管理机构申请。")]),v._v(" "),_("p",[v._v("问题：在内部使用的本地地址就有可能和互联网中某个 IP 地址重合，这样就会出现地址的二义性问题。")]),v._v(" "),_("p",[v._v("解决：RFC 1918 指明了一些专用地址 (private address)。专用地址只能用作本地地址而不能用作全球地址。在互联网中的所有路由器，对目的地址是专用地址的数据报一律不进行转发。")]),v._v(" "),_("p",[_("img",{attrs:{src:"/internet/4-24.png",alt:"RFC 1918 指明的专用 IP 地址",title:"RFC 1918 指明的专用 IP 地址"}})]),v._v(" "),_("p",[v._v("采用这样的专用 IP 地址的互连网络称为专用互联网或本地互联网，或更简单些，就叫做专用网。因为这些专用地址仅在本机构内部使用。专用IP地址也叫做可重用地址 (reusable address)。")]),v._v(" "),_("p",[v._v("利用公用的互联网作为本机构各专用网之间的通信载体，这样的专用网又称为虚拟专用网VPN (Virtual Private Network)。\n“专用网”是因为这种网络是为本机构的主机用于机构内部的通信，而不是用于和网络外非本机构的主机通信。\n“虚拟”表示“好像是”，但实际上并不是，因为现在并没有真正使用通信专线，而VPN只是在效果上和真正的专用网一样。")]),v._v(" "),_("p",[v._v("如果专用网不同网点之间的通信必须经过公用的互联网，但又有保密的要求，那么所有通过互联网传送的数据都必须加密。\n一个机构要构建自己的 VPN 就必须为它的每一个场所购买专门的硬件和软件，并进行配置，使每一个场所的 VPN 系统都知道其他场所的地址。")]),v._v(" "),_("h2",{attrs:{id:"多协议标记就换-mpls"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#多协议标记就换-mpls"}},[v._v("#")]),v._v(" 多协议标记就换 MPLS")])])}),[],!1,null,null,null);t.default=a.exports}}]);