(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{610:function(_,t,v){"use strict";v.r(t);var a=v(6),r=Object(a.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"链路层-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#链路层-2"}},[_._v("#")]),_._v(" 链路层-2")]),_._v(" "),v("p",[_._v("这篇文章主要说的是属于"),v("strong",[_._v("随机接入")]),_._v("的以太网。受控接入则由于目前在局域网中使用使用的较少，书中没讲。")]),_._v(" "),v("h2",{attrs:{id:"目录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[_._v("#")]),_._v(" 目录")]),_._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#目录"}},[_._v("目录")])]),v("li",[v("a",{attrs:{href:"#以太网的两个标准"}},[_._v("以太网的两个标准")])]),v("li",[v("a",{attrs:{href:"#以太网中的-csma-cd-协议"}},[_._v("以太网中的 CSMA/CD 协议")]),v("ul",[v("li",[v("a",{attrs:{href:"#为了通信的简便-以太网采取了两种重要的措施"}},[_._v("为了通信的简便，以太网采取了两种重要的措施：")])]),v("li",[v("a",{attrs:{href:"#以太网提供的服务"}},[_._v("以太网提供的服务")])]),v("li",[v("a",{attrs:{href:"#csma-cd协议的要点"}},[_._v("CSMA/CD协议的要点")])]),v("li",[v("a",{attrs:{href:"#传播时延对载波监听影响"}},[_._v("传播时延对载波监听影响")])]),v("li",[v("a",{attrs:{href:"#二进制指数类型退避算法-truncated-binary-exponential-type"}},[_._v("二进制指数类型退避算法 (truncated binary exponential type)")])]),v("li",[v("a",{attrs:{href:"#_10-mbit-s-以太网争用期的长度"}},[_._v("10 Mbit/s 以太网争用期的长度")])]),v("li",[v("a",{attrs:{href:"#csma-cd-重要特性"}},[_._v("CSMA/CD 重要特性")])])])]),v("li",[v("a",{attrs:{href:"#使用集线器的星形拓扑"}},[_._v("使用集线器的星形拓扑")]),v("ul",[v("li",[v("a",{attrs:{href:"#集线器特点"}},[_._v("集线器特点")])])])]),v("li",[v("a",{attrs:{href:"#以太网的信道利用率"}},[_._v("以太网的信道利用率")]),v("ul",[v("li",[v("a",{attrs:{href:"#以太网信道被占用的情况"}},[_._v("以太网信道被占用的情况")])]),v("li",[v("a",{attrs:{href:"#参数-a-与利用率"}},[_._v("参数 a 与利用率")])]),v("li",[v("a",{attrs:{href:"#信道利用率的最大值-s-max"}},[_._v("信道利用率的最大值 $S_{max}$")])])])]),v("li",[v("a",{attrs:{href:"#以太网的-mac-层"}},[_._v("以太网的 MAC 层")]),v("ul",[v("li",[v("a",{attrs:{href:"#适配器检查-mac-地址"}},[_._v("适配器检查 MAC 地址")])]),v("li",[v("a",{attrs:{href:"#mac-帧的格式"}},[_._v("MAC 帧的格式")])])])]),v("li",[v("a",{attrs:{href:"#扩展的以太网"}},[_._v("扩展的以太网")]),v("ul",[v("li",[v("a",{attrs:{href:"#在物理层拓展的以太网"}},[_._v("在物理层拓展的以太网")])]),v("li",[v("a",{attrs:{href:"#在数据链路层拓展的以太网"}},[_._v("在数据链路层拓展的以太网")])]),v("li",[v("a",{attrs:{href:"#虚拟局域网"}},[_._v("虚拟局域网")])])])]),v("li",[v("a",{attrs:{href:"#高速以太网"}},[_._v("高速以太网")]),v("ul",[v("li",[v("a",{attrs:{href:"#_100base-t-以太网"}},[_._v("100BASE-T 以太网")])]),v("li",[v("a",{attrs:{href:"#吉比特以太网"}},[_._v("吉比特以太网")])]),v("li",[v("a",{attrs:{href:"#_10-吉比特以太网-10ge-和更快的以太网"}},[_._v("10 吉比特以太网 (10GE) 和更快的以太网")])]),v("li",[v("a",{attrs:{href:"#使用以太网进行宽带接入"}},[_._v("使用以太网进行宽带接入")])])])])])]),v("p"),_._v(" "),v("h2",{attrs:{id:"以太网的两个标准"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#以太网的两个标准"}},[_._v("#")]),_._v(" 以太网的两个标准")]),_._v(" "),v("ul",[v("li",[_._v("DIX Ethernet V2 是世界上第一个局域网产品（以太网）的规约。")]),_._v(" "),v("li",[_._v("IEEE 802.3 是第一个 IEEE 的以太网标准。")]),_._v(" "),v("li",[_._v("DIX Ethernet V2 标准与 IEEE 的 802.3 标准只有很小的差别，因此可以将 802.3 局域网简称为“以太网”。")]),_._v(" "),v("li",[_._v("严格说来，"),v("strong",[_._v("以太网")]),_._v("应当是指符合 DIX Ethernet V2 标准的局域网 。")])]),_._v(" "),v("h2",{attrs:{id:"以太网中的-csma-cd-协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#以太网中的-csma-cd-协议"}},[_._v("#")]),_._v(" 以太网中的 CSMA/CD 协议")]),_._v(" "),v("ul",[v("li",[_._v("最初的以太网是将许多计算机都连接到一根总线上。易于实现广播通信。当初认为这样的连接方法既简单又可靠，因为总线上没有有源器件。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"/internet/3-19.png",alt:"计算机通过适配器和局域网进行通信",title:"计算机通过适配器和局域网进行通信"}})]),_._v(" "),v("ul",[v("li",[_._v("为了实现一对一通信，将接收站的硬件地址写入帧首部中的目的地址字段中。仅当数据帧中的目的地址与适配器的硬件地址一致时，才能接收这个数据帧。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"/internet/3-20.png",alt:"计算机通过适配器和局域网进行通信",title:"计算机通过适配器和局域网进行通信"}})]),_._v(" "),v("ul",[v("li",[_._v("总线也有缺点。若多台计算机或多个站点同时发送时，会产生发送碰撞或冲突，导致发送失败。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"/internet/3-21.png",alt:"计算机通过适配器和局域网进行通信",title:"计算机通过适配器和局域网进行通信"}})]),_._v(" "),v("h3",{attrs:{id:"为了通信的简便-以太网采取了两种重要的措施"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为了通信的简便-以太网采取了两种重要的措施"}},[_._v("#")]),_._v(" 为了通信的简便，以太网采取了两种重要的措施：")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("采用较为灵活的无连接的工作方式")]),_._v(" "),v("ul",[v("li",[_._v("不必先建立连接就可以直接发送数据。")]),_._v(" "),v("li",[_._v("对发送的数据帧不进行编号，也不要求对方发回确认。")]),_._v(" "),v("li",[_._v("这样做的理由是局域网信道的质量很好，因信道质量产生差错的概率是很小的。")])])]),_._v(" "),v("li",[v("p",[_._v("以太网发送的数据都使用曼彻斯特 (Manchester) 编码")])])]),_._v(" "),v("h3",{attrs:{id:"以太网提供的服务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#以太网提供的服务"}},[_._v("#")]),_._v(" 以太网提供的服务")]),_._v(" "),v("ul",[v("li",[_._v("以太网提供的服务是不可靠的交付，即尽最大努力的交付。")]),_._v(" "),v("li",[_._v("当目的站收到有差错的数据帧时就丢弃此帧，其他什么也不做。差错的纠正由高层来决定。")]),_._v(" "),v("li",[_._v("如果高层发现丢失了一些数据而进行重传，但以太网并不知道这是一个重传的帧，而是当作一个新的数据帧来发送。")])]),_._v(" "),v("h3",{attrs:{id:"csma-cd协议的要点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#csma-cd协议的要点"}},[_._v("#")]),_._v(" CSMA/CD协议的要点")]),_._v(" "),v("ul",[v("li",[v("em",[v("strong",[_._v("CSMA/CD")])]),_._v(" 含义：载波监听多点接入 / 碰撞检测  (Carrier Sense Multiple Access with Collision Detection) 。")]),_._v(" "),v("li",[_._v("“"),v("strong",[_._v("多点接入")]),_._v("”表示许多计算机以多点接入的方式连接在一根总线上。")]),_._v(" "),v("li",[_._v("“"),v("strong",[_._v("载波监听")]),_._v("”是指每一个站在发送数据之前先要检测一下总线上是否有其他计算机在发送数据，如果有，则暂时不要发送数据，以免发生碰撞。")]),_._v(" "),v("li",[_._v("总线上并没有什么“载波”。因此， “载波监听”就是用电子技术检测总线上有没有其他计算机发送的数据信号。\n"),v("img",{attrs:{src:"/line2.png",alt:"耳机分割线",title:"耳机分割线"}})]),_._v(" "),v("li",[_._v("“"),v("strong",[_._v("碰撞检测")]),_._v("”就是计算机边发送数据边检测信道上的信号电压大小。")]),_._v(" "),v("li",[_._v("当几个站同时在总线上发送数据时，总线上的信号电压摆动值将会增大（互相叠加）。")]),_._v(" "),v("li",[_._v("当一个站检测到的信号电压摆动值超过一定的门限值时，就认为总线上至少有两个站同时在发送数据，表明产生了碰撞。")]),_._v(" "),v("li",[_._v("所谓“碰撞”就是发生了冲突。因此“碰撞检测”也称为“冲突检测”。")]),_._v(" "),v("li",[_._v("在发生碰撞时，总线上传输的信号产生了严重的失真，无法从中恢复出有用的信息来。")]),_._v(" "),v("li",[_._v("每一个正在发送数据的站，一旦发现总线上出现了碰撞，就要立即停止发送，免得继续浪费网络资源，然后等待一段随机时间后再次发送。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"/internet/3-22.png",alt:"CSMA/CD 协议工作流程",title:"CSMA/CD 协议工作流程"}})]),_._v(" "),v("h3",{attrs:{id:"传播时延对载波监听影响"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#传播时延对载波监听影响"}},[_._v("#")]),_._v(" 传播时延对载波监听影响")]),_._v(" "),v("ul",[v("li",[_._v("最先发送数据帧的站，在发送数据帧后至多经过时间 $2\\tau$（两倍的端到端往返时延）就可知道发送的数据帧是否遭受了碰撞。")]),_._v(" "),v("li",[_._v("以太网的端到端往返时延 $2\\tau$ 称为争用期，或碰撞窗口。")]),_._v(" "),v("li",[_._v("经过争用期这段时间还没有检测到碰撞，才能肯定这次发送不会发生碰撞。")])]),_._v(" "),v("h3",{attrs:{id:"二进制指数类型退避算法-truncated-binary-exponential-type"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二进制指数类型退避算法-truncated-binary-exponential-type"}},[_._v("#")]),_._v(" 二进制指数类型退避算法 (truncated binary exponential type)")]),_._v(" "),v("p",[_._v("发生碰撞的站在停止发送数据后，要推迟（退避）一个随机时间才能再发送数据。")]),_._v(" "),v("ul",[v("li",[_._v("基本退避时间取为争用期 $2\\tau$ 。")]),_._v(" "),v("li",[_._v("从整数集合 [0, 1, … , (2k - 1)] 中随机地取出一个数，记为 r。重传所需的时延就是 r 倍的基本退避时间。")]),_._v(" "),v("li",[_._v("参数 k 按下面的公式计算：（其中 m 为重传次数）\n$$k = Min[m, 10]$$")]),_._v(" "),v("li",[_._v("当 k ≤10 时，参数 k 等于重传次数。")]),_._v(" "),v("li",[_._v("当重传达 16 次仍不能成功时即丢弃该帧，并向高层报告。")])]),_._v(" "),v("h3",{attrs:{id:"_10-mbit-s-以太网争用期的长度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-mbit-s-以太网争用期的长度"}},[_._v("#")]),_._v(" 10 Mbit/s 以太网争用期的长度")]),_._v(" "),v("ul",[v("li",[_._v("10 Mbit/s 以太网取 51.2 $\\mu s$ 为争用期的长度。")]),_._v(" "),v("li",[_._v("对于 10 Mbit/s 以太网，在争用期内可发送 512 bit，即 64 字节。\n这意味着："),v("strong",[_._v("以太网在发送数据时，若前 64 字节没有发生冲突，则后续的数据就不会发生冲突")]),_._v("。")]),_._v(" "),v("li",[_._v("如果发生冲突，就一定是在发送的前 64 字节之内。")]),_._v(" "),v("li",[_._v("由于一检测到冲突就立即中止发送，这时已经发送出去的数据一定小于 64 字节。")]),_._v(" "),v("li",[_._v("以太网规定了最短有效帧长为 64 字节，凡长度小于 64 字节的帧都是由于冲突而异常中止的无效帧。")])]),_._v(" "),v("h3",{attrs:{id:"csma-cd-重要特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#csma-cd-重要特性"}},[_._v("#")]),_._v(" CSMA/CD 重要特性")]),_._v(" "),v("ul",[v("li",[_._v("使用 CSMA/CD 协议的以太网不能进行全双工通信而只能进行"),v("strong",[_._v("双向交替通信")]),_._v("（半双工通信）。")]),_._v(" "),v("li",[_._v("每个站在发送数据之后的一小段时间内，存在着遭遇碰撞的可能性。")]),_._v(" "),v("li",[_._v("这种发送的不确定性使整个以太网的平均通信量远小于以太网的最高数据率。\n"),v("img",{attrs:{src:"/internet/3-23.png",alt:"CSMA/CD协议的要点",title:"CSMA/CD 协议的要点"}})])]),_._v(" "),v("h2",{attrs:{id:"使用集线器的星形拓扑"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用集线器的星形拓扑"}},[_._v("#")]),_._v(" 使用集线器的星形拓扑")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("传统以太网最初是使用粗同轴电缆，后来演进到使用比较便宜的细同轴电缆，最后发展为使用更便宜和更灵活的双绞线。\n"),v("img",{attrs:{src:"/internet/3-24.png",alt:"传统以太网",title:"传统以太网"}})])]),_._v(" "),v("li",[v("p",[_._v("采用双绞线的以太网采用星形拓扑，在星形的中心则增加了一种可靠性非常高的设备，叫做"),v("strong",[_._v("集线器")]),_._v(" (hub)。\n"),v("img",{attrs:{src:"/internet/3-25.png",alt:"使用集线器的双绞线以太网",title:"使用集线器的双绞线以太网"}})])])]),_._v(" "),v("h3",{attrs:{id:"集线器特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#集线器特点"}},[_._v("#")]),_._v(" 集线器特点")]),_._v(" "),v("ul",[v("li",[_._v("集线器是使用电子器件来模拟实际电缆线的工作，因此整个系统仍然像一个传统的以太网那样运行。")]),_._v(" "),v("li",[_._v("使用集线器的以太网在逻辑上仍是一个总线网，各工作站使用的还是 CSMA/CD 协议，并共享逻辑上的总线。")]),_._v(" "),v("li",[_._v("集线器很像一个多接口的转发器，工作在物理层。")]),_._v(" "),v("li",[_._v("集线器采用了专门的芯片，进行自适应串音回波抵消，减少了近端串音。\n"),v("img",{attrs:{src:"/internet/3-26.png",alt:"集线器",title:"集线器"}})])]),_._v(" "),v("h2",{attrs:{id:"以太网的信道利用率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#以太网的信道利用率"}},[_._v("#")]),_._v(" 以太网的信道利用率")]),_._v(" "),v("ul",[v("li",[_._v("多个站在以太网上同时工作就可能会发生碰撞。")]),_._v(" "),v("li",[_._v("当发生碰撞时，信道资源实际上是被浪费了。因此，当扣除碰撞所造成的信道损失后，以太网总的信道利用率并不能达到 100%。")]),_._v(" "),v("li",[_._v("假设 $\\tau$ 是以太网单程端到端传播时延。则争用期长度为 $2\\tau$ ，即端到端传播时延的两倍。检测到碰撞后不发送干扰信号。")]),_._v(" "),v("li",[_._v("设帧长为 $L$ (bit)，数据发送速率为 $C$ (bit/s)，则帧的发送时间为  $T_0 = L/C$ (s)。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"/line1.png",alt:"耳机分割线",title:"耳机分割线"}})]),_._v(" "),v("h3",{attrs:{id:"以太网信道被占用的情况"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#以太网信道被占用的情况"}},[_._v("#")]),_._v(" 以太网信道被占用的情况")]),_._v(" "),v("ul",[v("li",[_._v("一个站在发送帧时出现了碰撞。经过一个争用期 $2\\tau$ 后，可能又出现了碰撞。这样经过若干个争用期后，\n一个站发送成功了。假定发送帧需要的时间是 $T_0$。\n"),v("img",{attrs:{src:"/internet/3-27.png",alt:"以太网信道被占用的情况",title:"以太网信道被占用的情况"}})]),_._v(" "),v("li",[v("strong",[_._v("注意到")]),_._v("，成功发送一个帧需要占用信道的时间是 $T_0 + \\tau$ ，比这个帧的发送时间要多一个"),v("strong",[_._v("单程端到端时延")]),_._v(" $\\tau$ 。")]),_._v(" "),v("li",[_._v("这是因为当一个站发送完最后一个比特时，这个比特还要在以太网上传播。")]),_._v(" "),v("li",[_._v("在最极端的情况下，发送站在传输媒体的一端，而比特在媒体上传输到另一端所需的时间是 $\\tau$ 。")])]),_._v(" "),v("h3",{attrs:{id:"参数-a-与利用率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参数-a-与利用率"}},[_._v("#")]),_._v(" 参数 a 与利用率")]),_._v(" "),v("ul",[v("li",[_._v("要提高以太网的信道利用率，就必须减小 $\\tau$ 与 $T_0$ 之比。")]),_._v(" "),v("li",[_._v("在以太网中定义了参数 a ，它是以太网单程端到端时延 $\\tau$ 与帧的发送时间 $T_0$ 之比：\n$$a = \\frac{\\tau}{T_0}$$\n"),v("img",{attrs:{src:"/line1.png",alt:"耳机分割线",title:"耳机分割线"}})]),_._v(" "),v("li",[_._v("a → 0，表示一发生碰撞就立即可以检测出来， 并立即停止发送，因而信道利用率很高。")]),_._v(" "),v("li",[_._v("a 越大，表明争用期所占的比例增大，每发生一次碰撞就浪费许多信道资源，使得信道利用率明显降低。")]),_._v(" "),v("li",[_._v("为提高利用率，以太网的参数 a 的值应当尽可能小些。")]),_._v(" "),v("li",[_._v("对以太网参数 a 的要求是：\n"),v("ol",[v("li",[_._v("当数据率一定时，以太网的连线的长度受到限制，否则 $\\tau$ 的数值会太大。")]),_._v(" "),v("li",[_._v("以太网的帧长不能太短，否则 $T_0$ 的值会太小，使 a 值太大。")])])])]),_._v(" "),v("h3",{attrs:{id:"信道利用率的最大值-s-max"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#信道利用率的最大值-s-max"}},[_._v("#")]),_._v(" 信道利用率的最大值 $S_{max}$")]),_._v(" "),v("ul",[v("li",[_._v("在理想化的情况下，以太网上的各站发送数据都不会产生碰撞（这显然已经不是 CSMA/CD，而是需要使用一种特殊的调度方法），即总线一旦空闲就有某一个站立即发送数据。")]),_._v(" "),v("li",[_._v("发送一帧占用线路的时间是 $T_0 + \\tau$ ，而帧本身的发送时间是 $T_0$。于是，我们可计算出理想情况下的极限信道利用率 $S_{max}$ 为：\n$$S_{max} = \\frac{T_0}{T_0 + \\tau } = \\frac{1}{1 + a}$$")])]),_._v(" "),v("p",[v("strong",[_._v("注意")]),_._v("：")]),_._v(" "),v("ul",[v("li",[_._v("只有当参数 a 远小于 1 才能得到尽可能高的极限信道利用率。")]),_._v(" "),v("li",[_._v("据统计，当以太网的利用率达到 30% 时就已经处于重载的情况。很多的网络容量被网上的碰撞消耗掉了。")])]),_._v(" "),v("h2",{attrs:{id:"以太网的-mac-层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#以太网的-mac-层"}},[_._v("#")]),_._v(" 以太网的 MAC 层")]),_._v(" "),v("ul",[v("li",[_._v("在局域网中，硬件地址又称为"),v("strong",[_._v("物理地址")]),_._v("，或 "),v("strong",[_._v("MAC 地址")]),_._v("。")]),_._v(" "),v("li",[_._v("802 标准所说的“地址”严格地讲应当是每一个站的“名字”或标识符。")]),_._v(" "),v("li",[_._v("但鉴于大家都早已习惯了将这种 48 位的“名字”称为“地址”，所以本书也采用这种习惯用法，尽管这种说法并不太严格。\n"),v("img",{attrs:{src:"/line1.png",alt:"耳机分割线",title:"耳机分割线"}}),_._v(" "),v("strong",[_._v("48 位的 MAC 地址")]),_._v("：")]),_._v(" "),v("li",[_._v("IEEE 802 标准规定 MAC 地址字段可采用 6 字节 ( 48位) 或 2 字节 ( 16 位) 这两种中的一种。")]),_._v(" "),v("li",[_._v("IEEE 的注册管理机构 RA 负责向厂家"),v("strong",[_._v("分配地址字段 6 个字节中的前三个字节 (即高位 24 位)")]),_._v("，称为组织唯一标识符。")]),_._v(" "),v("li",[_._v("地址字段 6 个字节中的后三个字节 (即低位 24 位) 由厂家"),v("strong",[_._v("自行指派")]),_._v("，称为"),v("strong",[_._v("扩展唯一标识符")]),_._v("，必须保证生产出的适配器没有重复地址。")])]),_._v(" "),v("h3",{attrs:{id:"适配器检查-mac-地址"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#适配器检查-mac-地址"}},[_._v("#")]),_._v(" 适配器检查 MAC 地址")]),_._v(" "),v("ul",[v("li",[_._v("适配器从网络上每收到一个 MAC 帧就首先用硬件检查 MAC 帧中的 MAC 地址。\n"),v("ol",[v("li",[_._v("如果是发往本站的帧则收下，然后再进行其他的处理。")]),_._v(" "),v("li",[_._v("否则就将此帧丢弃，不再进行其他的处理。")])])]),_._v(" "),v("li",[_._v("“发往本站的帧”包括以下三种帧：\n"),v("ol",[v("li",[_._v("单播 (unicast) 帧（一对一）")]),_._v(" "),v("li",[_._v("广播 (broadcast) 帧（一对全体）")]),_._v(" "),v("li",[_._v("多播 (multicast) 帧（一对多）")])])]),_._v(" "),v("li",[_._v("所有的适配器都至少能够识别前两种帧，即能够识别单播地址和广播地址。")]),_._v(" "),v("li",[_._v("有的适配器可用编程方法识别多播地址。")]),_._v(" "),v("li",[_._v("只有目的地址才能使用广播地址和多播地址。")]),_._v(" "),v("li",[_._v("以混杂方式 (promiscuous mode) 工作的以太网适配器只要“听到”有帧在以太网上传输就都接收下来。")])]),_._v(" "),v("h3",{attrs:{id:"mac-帧的格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mac-帧的格式"}},[_._v("#")]),_._v(" MAC 帧的格式")]),_._v(" "),v("h4",{attrs:{id:"以太网-v2-的-mac-帧格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#以太网-v2-的-mac-帧格式"}},[_._v("#")]),_._v(" 以太网 V2 的 MAC 帧格式：")]),_._v(" "),v("p",[v("img",{attrs:{src:"/internet/3-28.png",alt:"MAC帧的格式",title:"MAC帧的格式"}})]),_._v(" "),v("ul",[v("li",[_._v("目的地址字段 6 字节")]),_._v(" "),v("li",[_._v("源地址字段 6 字节")]),_._v(" "),v("li",[_._v("类型字段 2 字节，类型字段用来标志"),v("strong",[_._v("上一层")]),_._v("使用的是什么协议，以便把收到的 MAC 帧的数据上交给上一层的这个协议。")]),_._v(" "),v("li",[_._v("数据字段 46 ~ 1500 字节，数据字段的正式名称是 "),v("strong",[_._v("MAC 客户数据字段")]),_._v("。最小长度 64 字节 - 18 字节的首部和尾部 = 数据字段的最小长度（46字节）")]),_._v(" "),v("li",[_._v("当数据字段的长度小于 46 字节时，应在数据字段的后面加入整数字节的填充字段，以保证以太网的 MAC 帧长不小于 64 字节。")]),_._v(" "),v("li",[_._v("FCS 字段 4 字节，当传输媒体的误码率为 $1 \\times  10^{-8}$ 时，MAC 子层可使未检测到的差错小于 $1 \\times  10^{-14}$ 。")]),_._v(" "),v("li",[_._v("为了达到比特同步，在传输媒体上实际传送的要比 MAC 帧还多 8 个字节，在帧的前面插入（硬件生成）的 8 字节中，第一个字段共 7 个字节，是前同步码，\n用来迅速实现 MAC 帧的比特同步。第二个字段 1 个字节是帧开始定界符，表示后面的信息就是 MAC 帧。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"/line1.png",alt:"耳机分割线",title:"耳机分割线"}})]),_._v(" "),v("h4",{attrs:{id:"ieee-802-3-mac-帧格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ieee-802-3-mac-帧格式"}},[_._v("#")]),_._v(" IEEE 802.3 MAC 帧格式：")]),_._v(" "),v("p",[_._v("与以太网 V2 MAC 帧格式相似，区别在于：")]),_._v(" "),v("ul",[v("li",[_._v("IEEE 802.3 规定的 MAC 帧的第三个字段是“长度 / 类型”。\n"),v("ol",[v("li",[_._v("当这个字段值大于 0x0600 时（相当于十进制的 1536），就表示“类型”。这样的帧和以太网 V2 MAC 帧完全一样。")]),_._v(" "),v("li",[_._v("当这个字段值小于 0x0600 时才表示“长度”。")])])]),_._v(" "),v("li",[_._v("当“长度/类型”字段值小于 0x0600 时，数据字段必须装入上面的逻辑链路控制 LLC 子层的 LLC 帧。")])]),_._v(" "),v("h4",{attrs:{id:"无效的-mac-帧"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#无效的-mac-帧"}},[_._v("#")]),_._v(" 无效的 MAC 帧")]),_._v(" "),v("ul",[v("li",[_._v("数据字段的长度与长度字段的值不一致；")]),_._v(" "),v("li",[_._v("帧的长度不是整数个字节；")]),_._v(" "),v("li",[_._v("用收到的帧检验序列 FCS 查出有差错；")]),_._v(" "),v("li",[_._v("数据字段的长度不在 46 ~ 1500 字节之间。")]),_._v(" "),v("li",[_._v("有效的 MAC 帧长度为 64 ~ 1518 字节之间。")])]),_._v(" "),v("div",{staticClass:"custom-block danger"},[v("p",{staticClass:"title"},[_._v("注意")]),v("p",[_._v("对于检查出的无效 MAC 帧就简单地丢弃。以太网不负责重传丢弃的帧。")])]),v("h4",{attrs:{id:"帧间最小间隔"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#帧间最小间隔"}},[_._v("#")]),_._v(" 帧间最小间隔")]),_._v(" "),v("ul",[v("li",[_._v("帧间最小间隔为 9.6 $\\mu s$，相当于 96 bit 的发送时间。")]),_._v(" "),v("li",[_._v("一个站在检测到总线开始空闲后，还要等待 9.6 $\\mu s$ 才能再次发送数据。")]),_._v(" "),v("li",[_._v("这样做是为了使刚刚收到数据帧的站的接收缓存来得及清理，做好接收下一帧的准备。")])]),_._v(" "),v("h2",{attrs:{id:"扩展的以太网"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#扩展的以太网"}},[_._v("#")]),_._v(" 扩展的以太网")]),_._v(" "),v("h3",{attrs:{id:"在物理层拓展的以太网"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在物理层拓展的以太网"}},[_._v("#")]),_._v(" 在物理层拓展的以太网")]),_._v(" "),v("ul",[v("li",[_._v("使用光纤扩展\n"),v("ul",[v("li",[_._v("主机使用光纤（通常是一对光纤）和一对光纤调制解调器连接到集线器。")]),_._v(" "),v("li",[_._v("很容易使主机和几公里以外的集线器相连接。\n"),v("img",{attrs:{src:"/internet/3-29.png",alt:"使用光纤扩展",title:"使用光纤扩展"}})])])])]),_._v(" "),v("p",[v("img",{attrs:{src:"/line1.png",alt:"耳机分割线",title:"耳机分割线"}})]),_._v(" "),v("ul",[v("li",[_._v("使用集线器扩展：将多个以太网段连成更大的、多级星形结构的以太网。\n"),v("img",{attrs:{src:"/internet/3-30.png",alt:"使用集线器扩展",title:"使用集线器扩展"}}),_._v(" "),v("ul",[v("li",[v("strong",[_._v("碰撞域")]),_._v("（collision domain）又称为冲突域，是指网络中一个站点发出的帧会与其他站点发出的帧产生碰撞或冲突的那部分网络。")]),_._v(" "),v("li",[_._v("碰撞域越大，发生碰撞的概率越高。\n"),v("img",{attrs:{src:"/internet/3-31.png",alt:"碰撞域",title:"碰撞域"}})])])]),_._v(" "),v("li",[_._v("优点：\n"),v("ul",[v("li",[_._v("使原来属于不同碰撞域的以太网上的计算机能够进行跨碰撞域的通信。")]),_._v(" "),v("li",[_._v("扩大了以太网覆盖的地理范围。")])])]),_._v(" "),v("li",[_._v("缺点：\n"),v("ul",[v("li",[_._v("碰撞域增大了，但总的吞吐量并未提高。")]),_._v(" "),v("li",[_._v("如果不同的碰撞域使用不同的数据率，那么就不能用集线器将它们互连起来。")])])])]),_._v(" "),v("h3",{attrs:{id:"在数据链路层拓展的以太网"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#在数据链路层拓展的以太网"}},[_._v("#")]),_._v(" 在数据链路层拓展的以太网")]),_._v(" "),v("ul",[v("li",[_._v("扩展以太网更常用的方法是在数据链路层进行。")]),_._v(" "),v("li",[_._v("早期使用网桥，现在使用"),v("strong",[_._v("以太网交换机")]),_._v("。\n"),v("img",{attrs:{src:"/internet/3-32.png",alt:"网桥和以太网交换机",title:"网桥和以太网交换机"}})])]),_._v(" "),v("h4",{attrs:{id:"网桥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网桥"}},[_._v("#")]),_._v(" 网桥：")]),_._v(" "),v("ul",[v("li",[_._v("网桥工作在数据链路层。")]),_._v(" "),v("li",[_._v("它根据 MAC 帧的目的地址对收到的帧进行转发和过滤。")]),_._v(" "),v("li",[_._v("当网桥收到一个帧时，并不是向所有的接口转发此帧，而是先检查此帧的目的 MAC 地址，然后再确定将该帧转发到哪一个接口，或把它丢弃。")])]),_._v(" "),v("h4",{attrs:{id:"以太网交换机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#以太网交换机"}},[_._v("#")]),_._v(" 以太网交换机")]),_._v(" "),v("ul",[v("li",[_._v("1990 年问世的交换式集线器 (switching hub) 可明显地提高以太网的性能。")]),_._v(" "),v("li",[_._v("交换式集线器常称为以太网交换机 (switch) 或第二层交换机 (L2 switch)，强调这种交换机工作在数据链路层。\n"),v("img",{attrs:{src:"/line1.png",alt:"耳机分割线",title:"耳机分割线"}}),_._v(" "),v("strong",[_._v("以太网交换机的特点")]),_._v("：")]),_._v(" "),v("li",[_._v("以太网交换机实质上就是一个多接口的网桥。通常都有十几个或更多的接口。")]),_._v(" "),v("li",[_._v("每个接口都直接与一个单台主机或另一个以太网交换机相连，并且一般都工作在全双工方式。")]),_._v(" "),v("li",[_._v("以太网交换机具有并行性。能同时连通多对接口，使多对主机能同时通信。")]),_._v(" "),v("li",[_._v("以太网交换机的接口有存储器，能在输出端口繁忙时把到来的帧进行缓存。")]),_._v(" "),v("li",[_._v("以太网交换机是一种即插即用设备，其内部的帧交换表（又称为地址表）是通过自学习算法自动地逐渐建立起来的。")]),_._v(" "),v("li",[_._v("以太网交换机使用了专用的交换结构芯片，用硬件转发，其转发速率要比使用软件转发的网桥快很多。")]),_._v(" "),v("li",[_._v("以太网交换机的性能远远超过普通的集线器，而且价格并不贵。")])]),_._v(" "),v("p",[v("strong",[_._v("以太网交换机的优点")])]),_._v(" "),v("ul",[v("li",[_._v("用户独享带宽，增加了总容量。")]),_._v(" "),v("li",[_._v("从共享总线以太网转到交换式以太网时，所有接入设备的软件和硬件、适配器等都不需要做任何改动。")]),_._v(" "),v("li",[_._v("以太网交换机一般都具有多种速率的接口，方便了各种不同情况的用户。")])]),_._v(" "),v("p",[v("strong",[_._v("以太网交换机的交换方式")])]),_._v(" "),v("ul",[v("li",[_._v("存储转发方式：把整个数据帧先缓存后再进行处理。")]),_._v(" "),v("li",[_._v("直通 (cut-through) 方式：\n"),v("ul",[v("li",[_._v("接收数据帧的同时就立即按数据帧的目的 MAC 地址决定该帧的转发接口，因而提高了帧的转发速度。")]),_._v(" "),v("li",[_._v("缺点是它不检查差错就直接将帧转发出去，因此有可能也将一些无效帧转发给其他的站。")])])])]),_._v(" "),v("p",[v("strong",[_._v("以太网交换机的自学习功能")])]),_._v(" "),v("p",[v("img",{attrs:{src:"/internet/3-33.png",alt:"以太网交换机的自学习功能",title:"以太网交换机的自学习功能"}})]),_._v(" "),v("p",[v("strong",[_._v("存在的问题")]),_._v(" "),v("img",{attrs:{src:"/internet/3-34.png",alt:"存在的问题",title:"存在的问题"}})]),_._v(" "),v("h4",{attrs:{id:"交换机使用了生成树协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#交换机使用了生成树协议"}},[_._v("#")]),_._v(" 交换机使用了生成树协议")]),_._v(" "),v("ul",[v("li",[_._v("IEEE 802.1D 标准制定了一个"),v("strong",[_._v("生成树协议 STP")]),_._v("  (Spanning Tree Protocol)。")]),_._v(" "),v("li",[_._v("其要点是：不改变网络的实际拓扑，但在逻辑上则切断某些链路，使得从一台主机到所有其他主机的路径是无环路的树状结构，\n从而消除了兜圈子现象。")])]),_._v(" "),v("h3",{attrs:{id:"虚拟局域网"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#虚拟局域网"}},[_._v("#")]),_._v(" 虚拟局域网")]),_._v(" "),v("ul",[v("li",[_._v("利用以太网交换机可以很方便地实现"),v("strong",[_._v("虚拟局域网 VLAN")]),_._v(" (Virtual LAN)。")]),_._v(" "),v("li",[_._v("IEEE 802.1Q 对虚拟局域网 VLAN 的定义：虚拟局域网 VLAN 是由一些局域网网段构成的与物理位置无关的逻辑组，而这些网段具有某些共同的需求。每一个 VLAN 的帧都有一个明确的标识符，指明发送这个帧的计算机是属于哪一个 VLAN。")]),_._v(" "),v("li",[_._v("虚拟局域网其实只是局域网给用户提供的一种服务，而并不是一种新型局域网。")]),_._v(" "),v("li",[_._v("由于虚拟局域网是用户和网络资源的逻辑组合，因此可按照需要将有关设备和资源非常方便地重新组合，使用户从不同的服务器或数据库中存取所需的资源。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"/internet/3-35.png",alt:"虚拟局域网",title:"虚拟局域网"}})]),_._v(" "),v("ul",[v("li",[_._v("10 台计算机划分为三个虚拟局域网：VLAN1, VLAN2 和 VLAN3，每个虚拟局域网是一个广播域。VLAN1, VLAN2 和 VLAN3 是三个不同的广播域。")]),_._v(" "),v("li",[_._v("当 B1 向 VLAN2 工作组内成员发送数据时，工作站 B2 和 B3 将会收到其广播的信息。")]),_._v(" "),v("li",[_._v("B1 发送数据时，VLAN1 和 VLAN3 中的工作站 A1，A2 和 C1 等都不会收到 B1 发出的广播信息。")]),_._v(" "),v("li",[_._v("虚拟局域网限制了接收广播信息的工作站数，使得网络不会因传播过多的广播信息 (即“广播风暴”) 而引起性能恶化。")])]),_._v(" "),v("h4",{attrs:{id:"虚拟局域网使用的以太网帧格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#虚拟局域网使用的以太网帧格式"}},[_._v("#")]),_._v(" 虚拟局域网使用的以太网帧格式")]),_._v(" "),v("ul",[v("li",[_._v("IEEE 批准了 802.3ac 标准，该标准定义了以太网的帧格式的扩展，以支持虚拟局域网。")]),_._v(" "),v("li",[_._v("虚拟局域网协议允许在以太网的帧格式中插入一个4字节的标识符，称为 VLAN 标记 (tag)，用来指明该帧属于哪一个虚拟局域网。")]),_._v(" "),v("li",[_._v("插入VLAN标记得出的帧称为 802.1Q 帧或带标记的以太网帧。")])]),_._v(" "),v("p",[v("img",{attrs:{src:"/internet/3-36.png",alt:"虚拟局域网使用的以太网帧格式",title:"虚拟局域网使用的以太网帧格式"}})]),_._v(" "),v("h2",{attrs:{id:"高速以太网"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#高速以太网"}},[_._v("#")]),_._v(" 高速以太网")]),_._v(" "),v("h3",{attrs:{id:"_100base-t-以太网"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_100base-t-以太网"}},[_._v("#")]),_._v(" 100BASE-T 以太网")]),_._v(" "),v("ul",[v("li",[_._v("速率达到或超过 100 Mbit/s 的以太网称为高速以太网。")]),_._v(" "),v("li",[_._v("100BASE-T 在双绞线上传送 100 Mbit/s 基带信号的星形拓扑以太网，仍使用 IEEE 802.3 的 CSMA/CD 协议。")]),_._v(" "),v("li",[_._v("100BASE-T 以太网又称为快速以太网 (Fast Ethernet)。")]),_._v(" "),v("li",[_._v("1995 年IEEE已把 100BASE-T 的快速以太网定为正式标准，其代号为 IEEE 802.3u。")])]),_._v(" "),v("h4",{attrs:{id:"特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[_._v("#")]),_._v(" 特点")]),_._v(" "),v("ul",[v("li",[_._v("可在全双工方式下工作而无冲突发生。在全双工方式下工作时，不使用 CSMA/CD 协议。")]),_._v(" "),v("li",[_._v("MAC 帧格式仍然是 802.3 标准规定的。")]),_._v(" "),v("li",[_._v("保持最短帧长不变，但将一个网段的最大电缆长度减小到 100 米。")]),_._v(" "),v("li",[_._v("帧间时间间隔从原来的 9.6 $\\mu s$ 改为现在的 0.96 $\\mu s$ 。")])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("名称")]),_._v(" "),v("th",[_._v("媒体")]),_._v(" "),v("th",[_._v("网段最大长度")]),_._v(" "),v("th",[_._v("特点")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("100BASE-TX")]),_._v(" "),v("td",[_._v("铜缆")]),_._v(" "),v("td",[_._v("100 m")]),_._v(" "),v("td",[_._v("两对 UTP 5 类线或屏蔽双绞线 STP")])]),_._v(" "),v("tr",[v("td",[_._v("100BASE-T4")]),_._v(" "),v("td",[_._v("铜缆")]),_._v(" "),v("td",[_._v("100 m")]),_._v(" "),v("td",[_._v("4 对 UTP 3 类线或 5 类线")])]),_._v(" "),v("tr",[v("td",[_._v("100BASE-FX")]),_._v(" "),v("td",[_._v("光缆")]),_._v(" "),v("td",[_._v("2000 m")]),_._v(" "),v("td",[_._v("两根光纤，发送和接受各一根")])])])]),_._v(" "),v("h3",{attrs:{id:"吉比特以太网"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#吉比特以太网"}},[_._v("#")]),_._v(" 吉比特以太网")]),_._v(" "),v("ul",[v("li",[_._v("允许在 1 Gbit/s 下以全双工和半双工两种方式工作。")]),_._v(" "),v("li",[_._v("使用 IEEE 802.3 协议规定的帧格式。")]),_._v(" "),v("li",[_._v("在半双工方式下使用 CSMA/CD 协议，全双工方式不使用 CSMA/CD 协议。")]),_._v(" "),v("li",[_._v("与 10BASE-T 和 100BASE-T 技术向后兼容。")]),_._v(" "),v("li",[_._v("使用两种成熟的技术：一种来自现有的以太网，另一种则是美国国家标准协会 ANSI 制定的光纤通道 FC  (Fiber Channel)。")])]),_._v(" "),v("h4",{attrs:{id:"吉比特以太网物理层标准"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#吉比特以太网物理层标准"}},[_._v("#")]),_._v(" 吉比特以太网物理层标准")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("名称")]),_._v(" "),v("th",[_._v("媒体")]),_._v(" "),v("th",[_._v("网段最大长度")]),_._v(" "),v("th",[_._v("网段最大长度")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("1000BASE-SX")]),_._v(" "),v("td",[_._v("光缆")]),_._v(" "),v("td",[_._v("550 m")]),_._v(" "),v("td",[_._v("多模光纤（50 和 62.5 $\\mu m$）")])]),_._v(" "),v("tr",[v("td",[_._v("1000BASE-LX")]),_._v(" "),v("td",[_._v("光缆")]),_._v(" "),v("td",[_._v("5000 m")]),_._v(" "),v("td",[_._v("单模光纤（10 $\\mu m$）多模光纤（50 和 62.5 $\\mu m$）")])]),_._v(" "),v("tr",[v("td",[_._v("1000BASE-CX")]),_._v(" "),v("td",[_._v("铜缆")]),_._v(" "),v("td",[_._v("25 m")]),_._v(" "),v("td",[_._v("使用 2 对屏蔽双绞线电缆 STP")])]),_._v(" "),v("tr",[v("td",[_._v("1000BASE-T")]),_._v(" "),v("td",[_._v("铜缆")]),_._v(" "),v("td",[_._v("100 m")]),_._v(" "),v("td",[_._v("使用 4 对 UTP 5 类线")])])])]),_._v(" "),v("h4",{attrs:{id:"半双工方式工作的吉比特以太网"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#半双工方式工作的吉比特以太网"}},[_._v("#")]),_._v(" 半双工方式工作的吉比特以太网")]),_._v(" "),v("ul",[v("li",[_._v("吉比特以太网工作在半双工方式时，就必须进行碰撞检测。")]),_._v(" "),v("li",[_._v("为保持 64 字节最小帧长度，以及 100 米的网段的最大长度，吉比特以太网增加了两个功能：\n"),v("ol",[v("li",[_._v("载波延伸 (carrier extension)\n"),v("ul",[v("li",[_._v("使最短帧长仍为 64 字节（这样可以保持兼容性），同时将争用时间增大为 512 字节。")]),_._v(" "),v("li",[_._v("凡发送的 MAC 帧长不足 512 字节时，就用一些特殊字符填充在帧的后面，使MAC 帧的发送长度增大到 512 字节。\n接收端在收到以太网的 MAC 帧后，要将所填充的特殊字符删除后才向高层交付。\n"),v("img",{attrs:{src:"/internet/3-37.png",alt:"载波延伸",title:"载波延伸"}})])])]),_._v(" "),v("li",[_._v("分组突发 (packet bursting)\n"),v("ul",[v("li",[_._v("当很多短帧要发送时，第一个短帧要采用载波延伸方法进行填充，随后的一些短帧则可一个接一个地发送，\n只需留有必要的帧间最小间隔即可。这样就形成可一串分组的突发，直到达到 1500 字节或稍多一些为止。\n"),v("img",{attrs:{src:"/internet/3-38.png",alt:"分组突发",title:"分组突发"}})])])])])])]),_._v(" "),v("h4",{attrs:{id:"全双工方式工作的吉比特以太网"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#全双工方式工作的吉比特以太网"}},[_._v("#")]),_._v(" 全双工方式工作的吉比特以太网")]),_._v(" "),v("p",[_._v("当吉比特以太网工作在全双工方式时（即通信双方可同时进行发送和接收数据），不使用载波延伸和分组突发。")]),_._v(" "),v("h3",{attrs:{id:"_10-吉比特以太网-10ge-和更快的以太网"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-吉比特以太网-10ge-和更快的以太网"}},[_._v("#")]),_._v(" 10 吉比特以太网 (10GE) 和更快的以太网")]),_._v(" "),v("ul",[v("li",[_._v("10 吉比特以太网（10GE）并非把吉比特以太网的速率简单地提高到 10 倍，其主要特点有：\n"),v("ol",[v("li",[_._v("与 10 Mbit/s、100 Mbit/s 和 1 Gbit/s 以太网的帧格式完全相同。")]),_._v(" "),v("li",[_._v("保留了 802.3 标准规定的以太网最小和最大帧长，便于升级。")]),_._v(" "),v("li",[_._v("不再使用铜线而只使用光纤作为传输媒体。")]),_._v(" "),v("li",[_._v("只工作在全双工方式，因此没有争用问题，也不使用 CSMA/CD 协议。")])])])]),_._v(" "),v("h4",{attrs:{id:"_10ge-的物理层标准"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10ge-的物理层标准"}},[_._v("#")]),_._v(" 10GE 的物理层标准")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("名称")]),_._v(" "),v("th",[_._v("媒体")]),_._v(" "),v("th",[_._v("网段最大长度")]),_._v(" "),v("th",[_._v("特点")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("10GBASE-SR")]),_._v(" "),v("td",[_._v("光缆")]),_._v(" "),v("td",[_._v("300 m")]),_._v(" "),v("td",[_._v("多模光纤（0.85 $\\mu m$）")])]),_._v(" "),v("tr",[v("td",[_._v("10GBASE-LR")]),_._v(" "),v("td",[_._v("光缆")]),_._v(" "),v("td",[_._v("10 km")]),_._v(" "),v("td",[_._v("多模光纤（0.85 $\\mu m$）")])]),_._v(" "),v("tr",[v("td",[_._v("10GBASE-ER")]),_._v(" "),v("td",[_._v("光缆")]),_._v(" "),v("td",[_._v("40 km")]),_._v(" "),v("td",[_._v("单模光纤（1.5 $\\mu m$）")])]),_._v(" "),v("tr",[v("td",[_._v("10GBASE-CX4")]),_._v(" "),v("td",[_._v("铜缆")]),_._v(" "),v("td",[_._v("15 m")]),_._v(" "),v("td",[_._v("使用 4 对双芯同轴电缆 (twinax)")])]),_._v(" "),v("tr",[v("td",[_._v("10GBASE-T")]),_._v(" "),v("td",[_._v("铜缆")]),_._v(" "),v("td",[_._v("100 m")]),_._v(" "),v("td",[_._v("使用 4 对 6A 类 UTP 双绞线")])])])]),_._v(" "),v("h4",{attrs:{id:"_40ge-10ge-的物理层标准"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_40ge-10ge-的物理层标准"}},[_._v("#")]),_._v(" 40GE/10GE 的物理层标准")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("物理层")]),_._v(" "),v("th",[_._v("40GE")]),_._v(" "),v("th",[_._v("100GE")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("在背板上传输至少超过 1 m")]),_._v(" "),v("td",[_._v("40GBASE-KR4")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("在铜缆上传输至少超过 7 m")]),_._v(" "),v("td",[_._v("40GBASE-CR4")]),_._v(" "),v("td",[_._v("100GBASE-CR10")])]),_._v(" "),v("tr",[v("td",[_._v("在多模光纤上传输至少 100 m")]),_._v(" "),v("td",[_._v("40GBASE-SR4")]),_._v(" "),v("td",[_._v("100GBASE-SR10， *100GBASE-SR4")])]),_._v(" "),v("tr",[v("td",[_._v("在单模光纤上传输至少 10 km")]),_._v(" "),v("td",[_._v("40GBASE-LR4")]),_._v(" "),v("td",[_._v("100GBASE-LR4")])]),_._v(" "),v("tr",[v("td",[_._v("在单模光纤上传输至少 40 km")]),_._v(" "),v("td",[_._v("*40GBASE-ER")]),_._v(" "),v("td",[_._v("100GBASE-ER4")])])])]),_._v(" "),v("h3",{attrs:{id:"使用以太网进行宽带接入"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用以太网进行宽带接入"}},[_._v("#")]),_._v(" 使用以太网进行宽带接入")]),_._v(" "),v("h4",{attrs:{id:"端到端的以太网传输"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#端到端的以太网传输"}},[_._v("#")]),_._v(" 端到端的以太网传输")]),_._v(" "),v("ul",[v("li",[_._v("以太网的工作范围已经从局域网（校园网、企业网）扩大到城域网和广域网，从而实现了端到端的以太网传输。")]),_._v(" "),v("li",[_._v("这种工作方式的好处有： 技术成熟；互操作性很好；在广域网中使用以太网时价格便宜；采用统一的以太网帧格式，简化了操作和管理。")]),_._v(" "),v("li",[_._v("IEEE 在 2001 年初成立了 802.3 EFM 工作组，专门研究高速以太网的宽带接入技术问题。")]),_._v(" "),v("li",[_._v("以太网宽带接入具有以下特点：\n"),v("ol",[v("li",[_._v("可以提供双向的宽带通信。")]),_._v(" "),v("li",[_._v("可以根据用户对带宽的需求灵活地进行带宽升级。")]),_._v(" "),v("li",[_._v("可以实现端到端的以太网传输，中间不需要再进行帧格式的转换。这就提高了数据的传输效率且降低了传输的成本。")]),_._v(" "),v("li",[_._v("但是不支持用户身份鉴别。")])])])]),_._v(" "),v("h4",{attrs:{id:"pppoe"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pppoe"}},[_._v("#")]),_._v(" PPPoE")]),_._v(" "),v("ul",[v("li",[_._v("PPPoE (PPP over Ethernet) 的意思是“在以太网上运行 PPP”，它把 PPP 协议与以太网协议结合起来 —— 将 PPP 帧再封装到以太网中来传输。")]),_._v(" "),v("li",[_._v("现在的光纤宽带接入 FTTx 都要使用 PPPoE 的方式进行接入。在 PPPoE 弹出的窗口中键入在网络运营商购买的用户名和密码，就可以进行宽带上网了。")]),_._v(" "),v("li",[_._v("利用 ADSL 进行宽带上网时，从用户个人电脑到家中的 ADSL 调制解调器之间，也是使用 RJ-45 和 5 类线（即以太网使用的网线）进行连接\n的，并且也是使用 PPPoE 弹出的窗口进行拨号连接的。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);