(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{623:function(t,a,r){"use strict";r.r(a);var Q=r(7),T=Object(Q.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"运输层-1"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运输层-1"}},[t._v("#")]),t._v(" 运输层-1")]),t._v(" "),r("h2",{attrs:{id:"目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#目录"}},[t._v("目录")])]),r("li",[r("a",{attrs:{href:"#运输层协议概述"}},[t._v("运输层协议概述")]),r("ul",[r("li",[r("a",{attrs:{href:"#进程之间的通信"}},[t._v("进程之间的通信")])]),r("li",[r("a",{attrs:{href:"#运输层的两个主要协议"}},[t._v("运输层的两个主要协议")])]),r("li",[r("a",{attrs:{href:"#运输层的端口"}},[t._v("运输层的端口")])])])]),r("li",[r("a",{attrs:{href:"#用户数据报协议-udp"}},[t._v("用户数据报协议 UDP")]),r("ul",[r("li",[r("a",{attrs:{href:"#udp-概述"}},[t._v("UDP 概述")])]),r("li",[r("a",{attrs:{href:"#udp-的首部格式"}},[t._v("UDP 的首部格式")])])])]),r("li",[r("a",{attrs:{href:"#传输控制协议-tcp-概述"}},[t._v("传输控制协议 TCP 概述")]),r("ul",[r("li",[r("a",{attrs:{href:"#tcp-最主要的特点"}},[t._v("TCP 最主要的特点")])]),r("li",[r("a",{attrs:{href:"#tcp-的连接"}},[t._v("TCP 的连接")])])])]),r("li",[r("a",{attrs:{href:"#可靠传输的工作原理"}},[t._v("可靠传输的工作原理")]),r("ul",[r("li",[r("a",{attrs:{href:"#停止等待协议"}},[t._v("停止等待协议")])]),r("li",[r("a",{attrs:{href:"#连续-arq-协议"}},[t._v("连续 ARQ 协议")])])])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"运输层协议概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运输层协议概述"}},[t._v("#")]),t._v(" 运输层协议概述")]),t._v(" "),r("h3",{attrs:{id:"进程之间的通信"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#进程之间的通信"}},[t._v("#")]),t._v(" 进程之间的通信")]),t._v(" "),r("p",[t._v("从通信和信息处理的角度看，运输层向它上面的应用层提供通信服务，它属于面向通信部分的最高层，同时也是用户功能中的最低层。\n当网络的边缘部分中的两个主机使用网络的核心部分的功能进行端到端的通信时，只有位于网络边缘部分的主机的协议栈才有运输层，而网络核心部分中的路由器在转发分组时都只用到下三层的功能。")]),t._v(" "),r("p",[t._v("“逻辑通信”的意思是“好像是这样通信，但事实上并非真的这样通信”。\n从IP层来说，通信的两端是两台主机。但“两台主机之间的通信”这种说法还不够清楚。\n严格地讲，两台主机进行通信就是两台主机中的应用进程互相通信。\n从运输层的角度看，通信的真正端点并不是主机而是主机中的进程。也就是说，端到端的通信是应用进程之间的通信。")]),t._v(" "),r("p",[r("img",{attrs:{src:"/internet/5-1.png",alt:"网络层和运输层有明显的区别",title:"网络层和运输层有明显的区别"}})]),t._v(" "),r("p",[t._v("运输层向高层用户屏蔽了下面网络核心的细节，它使应用进程看见的就是好像在两个运输层实体之间有一条端到端的逻辑通信信道。但这条逻辑通信信道对上层的表现却因运输层使用的不同协议而有很大的差别。当运输层采用面向连接的 TCP 协议时，尽管下面的网络是不可靠的（只提供尽最大努力服务），但这种逻辑通信信道就相当于一条全双工的可靠信道。当运输层采用无连接的 UDP 协议时，这种逻辑通信信道是一条不可靠信道。")]),t._v(" "),r("h3",{attrs:{id:"运输层的两个主要协议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运输层的两个主要协议"}},[t._v("#")]),t._v(" 运输层的两个主要协议")]),t._v(" "),r("p",[t._v("TCP/IP 的运输层有两个主要协议：")]),t._v(" "),r("ol",[r("li",[t._v("用户数据报协议 UDP (User Datagram Protocol)")]),t._v(" "),r("li",[t._v("传输控制协议 TCP (Transmission Control Protocol)")])]),t._v(" "),r("h4",{attrs:{id:"区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),r("p",[t._v("UDP:")]),t._v(" "),r("ul",[r("li",[t._v("无连接的协议，提供无连接服务；")]),t._v(" "),r("li",[t._v("其传送的运输协议数据单元TPDU是 UDP 报文或用户数据报；")]),t._v(" "),r("li",[t._v("支持单播、多播、广播；")]),t._v(" "),r("li",[t._v("不提供可靠交付；")]),t._v(" "),r("li",[t._v("简单。适用于很多应用，如：多媒体应用等。")])]),t._v(" "),r("p",[t._v("TCP:")]),t._v(" "),r("ul",[r("li",[t._v("面向连接的协议，提供面向连接服务；")]),t._v(" "),r("li",[t._v("其传送的运输协议数据单元TPDU是 TCP 报文；")]),t._v(" "),r("li",[t._v("支持点对点单播，不支持多播、广播；")]),t._v(" "),r("li",[t._v("提供可靠服务；")]),t._v(" "),r("li",[t._v("复杂。用于大多数应用，如：万维网、电子邮件、文件传送等。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"/internet/5-2.png",alt:"使用 UDP 和 TCP 的典型应用和应用层协议",title:"使用 UDP 和 TCP 的典型应用和应用层协议"}})]),t._v(" "),r("ul",[r("li",[t._v("运输层的 UDP 用户数据报与网际层的IP数据报有很大区别。\n"),r("ol",[r("li",[t._v("IP 数据报要经过互连网中许多路由器的存储转发。")]),t._v(" "),r("li",[t._v("UDP 用户数据报是在运输层的端到端抽象的逻辑信道中传送的。")])])]),t._v(" "),r("li",[t._v("TCP 报文段是在运输层抽象的端到端逻辑信道中传送，这种信道是可靠的全双工信道。但这样的信道却不知道究竟经过了哪些路由器，而这些路由器也根本不知道上面的运输层是否建立了 TCP 连接。")])]),t._v(" "),r("h3",{attrs:{id:"运输层的端口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运输层的端口"}},[t._v("#")]),t._v(" 运输层的端口")]),t._v(" "),r("ul",[r("li",[t._v("运行在计算机中的进程是用进程标识符来标志的。")]),t._v(" "),r("li",[t._v("但运行在应用层的各种应用进程却不应当让计算机操作系统指派它的进程标识符。这是因为在互联网上使用的计算机的操作系统种类很多，而不同的操作系统又使用不同格式的进程标识符。")]),t._v(" "),r("li",[t._v("为了使运行不同操作系统的计算机的应用进程能够互相通信，就必须用统一的方法对 TCP/IP 体系的应用进程进行标志。")])]),t._v(" "),r("p",[t._v("问题：")]),t._v(" "),r("p",[t._v("把一个特定机器上运行的特定程序，指明为互联网上通信的最后终点是不可行的。这是因为进程的创建和撤销都是动态的。通信的一方几乎无法识别对方机器上的进程。另外我们往往需要利用目的主机提供的功能来识别终点，而不需要知道具体实现这个功能的进程是哪一个。")]),t._v(" "),r("p",[t._v("解决这个问题的方法就是在运输层使用协议端口号 (protocol port number)，或通常简称为端口 (port)。\n虽然通信的终点是应用进程，但我们可以把端口想象是通信的终点，因为我们只要把要传送的报文交到目的主机的某一个合适的目的端口，剩下的工作（即最后交付目的进程）就由 TCP 来完成。")]),t._v(" "),r("p",[t._v("另外，软件端口与硬件端口是两个不同的概念。在协议栈层间的抽象的协议端口是软件端口。路由器或交换机上的端口是硬件端口。硬件端口是不同硬件设备进行交互的接口，而软件端口是应用层的各种协议进程与运输实体进行层间交互的一种地址。")]),t._v(" "),r("h4",{attrs:{id:"tcp-ip-运输层端口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-运输层端口"}},[t._v("#")]),t._v(" TCP/IP 运输层端口")]),t._v(" "),r("ul",[r("li",[t._v("端口用一个 16 位端口号进行标志，允许有65,535个不同的端口号。")]),t._v(" "),r("li",[t._v("端口号只具有本地意义，即端口号只是为了标志本计算机应用层中的各进程。在互联网中，不同计算机的相同端口号是没有联系的。")])]),t._v(" "),r("p",[t._v("由此可见，两个计算机中的进程要互相通信，不仅必须知道对方的端口号（为了找到对方计算机中的应用进程） ，而且还要知道对方的 IP 地址（为了找到对方的计算机）。")]),t._v(" "),r("h4",{attrs:{id:"两大类端口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#两大类端口"}},[t._v("#")]),t._v(" 两大类端口")]),t._v(" "),r("ul",[r("li",[t._v("服务器端使用的端口号\n"),r("ol",[r("li",[t._v("熟知端口，数值一般为 0 ~ 1023。")]),t._v(" "),r("li",[t._v("登记端口号，数值为 1024 ~ 49151，为没有熟知端口号的应用程序使用的。使用这个范围的端口号必须在 IANA 登记，以防止重复。")])])]),t._v(" "),r("li",[t._v("客户端使用的端口号\n"),r("ol",[r("li",[t._v("又称为短暂端口号，数值为 49152 ~ 65535，留给客户进程选择暂时使用。")]),t._v(" "),r("li",[t._v("当服务器进程收到客户进程的报文时，就知道了客户进程所使用的动态端口号。通信结束后，这个端口号可供其他客户进程以后使用。")])])])]),t._v(" "),r("p",[r("img",{attrs:{src:"/internet/5-3.png",alt:"两大类、三种类型的端口",title:"两大类、三种类型的端口"}}),t._v(" "),r("img",{attrs:{src:"/internet/5-4.png",alt:"常用的熟知端口",title:"常用的熟知端口"}})]),t._v(" "),r("h2",{attrs:{id:"用户数据报协议-udp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用户数据报协议-udp"}},[t._v("#")]),t._v(" 用户数据报协议 UDP")]),t._v(" "),r("h3",{attrs:{id:"udp-概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#udp-概述"}},[t._v("#")]),t._v(" UDP 概述")]),t._v(" "),r("p",[t._v("UDP 只在 IP 的数据报服务之上增加了很少一点的功能：复用和分用的功能、差错检测的功能。其主要特点是：")]),t._v(" "),r("ol",[r("li",[t._v("UDP 是无连接的，发送数据之前不需要建立连接，，因此减少了开销和发送数据之前的时延。")]),t._v(" "),r("li",[t._v("UDP 使用尽最大努力交付，即不保证可靠交付，因此主机不需要维持复杂的连接状态表。")]),t._v(" "),r("li",[t._v("UDP 是面向报文的。UDP 对应用层交下来的报文，既不合并，也不拆分，而是保留这些报文的边界。UDP 一次交付一个完整的报文。\n"),r("ul",[r("li",[t._v("发送方 UDP 对应用程序交下来的报文，在添加首部后就向下交付 IP 层。UDP 对应用层交下来的报文，既不合并，也不拆分，而是保留这些报文的边界。")]),t._v(" "),r("li",[t._v("应用层交给 UDP 多长的报文，UDP 就照样发送，即一次发送一个报文。")]),t._v(" "),r("li",[t._v("接收方 UDP 对 IP 层交上来的 UDP 用户数据报，在去除首部后就原封不动地交付上层的应用进程，一次交付一个完整的报文。")]),t._v(" "),r("li",[t._v("应用程序必须选择合适大小的报文。\n"),r("ul",[r("li",[t._v("若报文太长，UDP 把它交给 IP 层后，IP 层在传送时可能要进行分片，这会降低 IP 层的效率。")]),t._v(" "),r("li",[t._v("若报文太短，UDP 把它交给 IP 层后，会使 IP 数据报的首部的相对长度太大，这也降低了 IP 层的效率。")])])])])]),t._v(" "),r("li",[t._v("UDP 没有拥塞控制，因此网络出现的拥塞不会使源主机的发送速率降低。这对某些实时应用是很重要的。很适合多媒体通信的要求。")]),t._v(" "),r("li",[t._v("UDP 支持一对一、一对多、多对一和多对多的交互通信。")]),t._v(" "),r("li",[t._v("UDP 的首部开销小，只有 8 个字节，比 TCP 的 20 个字节的首部要短。\n"),r("img",{attrs:{src:"/internet/5-5.png",alt:"UDP是面向报文的",title:"UDP是面向报文的"}})])]),t._v(" "),r("h3",{attrs:{id:"udp-的首部格式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#udp-的首部格式"}},[t._v("#")]),t._v(" UDP 的首部格式")]),t._v(" "),r("ul",[r("li",[t._v("用户数据报 UDP 有两个字段：数据字段和首部字段。")]),t._v(" "),r("li",[t._v("首部字段有 8 个字节，由 4 个字段组成，每个字段都是 2 个字节。\n"),r("img",{attrs:{src:"/internet/5-6.png",alt:"UDP的首部格式",title:"UDP的首部格式"}})])]),t._v(" "),r("p",[t._v("当运输层从 IP 层收到 UDP 数据报时，就根据首部中的目的端口，把 UDP 数据报通过相应的端口，上交给最后的终点——应用进程。\n"),r("img",{attrs:{src:"/internet/5-7.png",alt:"UDP基于端口的分用",title:"UDP基于端口的分用"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"/internet/5-8.png",alt:"UDP的首部格式和伪首部",title:"UDP的首部格式和伪首部"}}),t._v("\n在计算检验和时，临时把 12 字节的“伪首部”和 UDP 用户数据报连接在一起。伪首部仅仅是为了计算检验和。")]),t._v(" "),r("p",[r("img",{attrs:{src:"/internet/5-9.png",alt:"计算校验和的例子",title:"计算校验和的例子"}})]),t._v(" "),r("h2",{attrs:{id:"传输控制协议-tcp-概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#传输控制协议-tcp-概述"}},[t._v("#")]),t._v(" 传输控制协议 TCP 概述")]),t._v(" "),r("h3",{attrs:{id:"tcp-最主要的特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp-最主要的特点"}},[t._v("#")]),t._v(" TCP 最主要的特点")]),t._v(" "),r("ol",[r("li",[t._v("TCP 是面向连接的运输层协议。这就是说，应用程序在使用 TCP 协议之前，必须先建立 TCP 连接。在传送数据完毕后，必须释放已经建立的 TCP 连接。就像应用程序在打电话，通话前先拨号建立连接，通话前要先拨号建立连接，通话结束后要挂机释放连接。")]),t._v(" "),r("li",[t._v("每一条 TCP 连接只能有两个端点 (endpoint)，每一条 TCP 连接只能是点对点的（一对一）。")]),t._v(" "),r("li",[t._v("TCP 提供可靠交付的服务。")]),t._v(" "),r("li",[t._v("TCP 提供全双工通信。")]),t._v(" "),r("li",[t._v("面向字节流\n"),r("ul",[r("li",[t._v("TCP 中的“流”(stream) 指的是流入或流出进程的字节序列。")]),t._v(" "),r("li",[t._v("“面向字节流”的含义是：虽然应用程序和 TCP 的交互是一次一个数据块，但 TCP 把应用程序交下来的数据看成仅仅是一连串无结构的字节流")]),t._v(" "),r("li",[t._v("TCP 不保证接收方应用程序所收到的数据块和发送方应用程序所发出的数据块具有对应大小的关系。")]),t._v(" "),r("li",[t._v("但接收方应用程序收到的字节流必须和发送方应用程序发出的字节流完全一样。\n"),r("img",{attrs:{src:"/internet/5-10.png",alt:"面向字节流",title:"面向字节流"}})])])])]),t._v(" "),r("h4",{attrs:{id:"注意"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),r("ul",[r("li",[t._v("TCP 连接是一条虚连接而不是一条真正的物理连接。")]),t._v(" "),r("li",[t._v("TCP 对应用进程一次把多长的报文发送到 TCP 的缓存中是不关心的。")]),t._v(" "),r("li",[t._v("TCP 根据对方给出的窗口值和当前网络拥塞的程度来决定一个报文段应包含多少个字节（UDP 发送的报文长度是应用进程给出的）。")]),t._v(" "),r("li",[t._v("TCP 可把太长的数据块划分短一些再传送。")]),t._v(" "),r("li",[t._v("TCP 也可等待积累有足够多的字节后再构成报文段发送出去。")])]),t._v(" "),r("h3",{attrs:{id:"tcp-的连接"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp-的连接"}},[t._v("#")]),t._v(" TCP 的连接")]),t._v(" "),r("ul",[r("li",[t._v("TCP 把连接作为最基本的抽象。")]),t._v(" "),r("li",[t._v("每一条 TCP 连接有两个端点。")]),t._v(" "),r("li",[t._v("TCP 连接的端点不是主机，不是主机的IP 地址，不是应用进程，也不是运输层的协议端口。TCP 连接的端点叫做套接字 (socket) 或插口。")]),t._v(" "),r("li",[t._v("端口号拼接到 (contatenated with) IP 地址即构成了套接字。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"/internet/5-11.png",alt:"TCP的连接",title:"TCP的连接"}})]),t._v(" "),r("h4",{attrs:{id:"tcp-连接-ip-地址-套接字"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp-连接-ip-地址-套接字"}},[t._v("#")]),t._v(" TCP 连接，IP 地址，套接字")]),t._v(" "),r("ul",[r("li",[t._v("TCP 连接就是由协议软件所提供的一种抽象。")]),t._v(" "),r("li",[t._v("TCP 连接的端点是个很抽象的套接字，即（IP 地址：端口号）。")]),t._v(" "),r("li",[t._v("同一个 IP 地址可以有多个不同的 TCP 连接。")]),t._v(" "),r("li",[t._v("同一个端口号也可以出现在多个不同的 TCP 连接中。")]),t._v(" "),r("li",[t._v("Socket 有多种不同的意思：\n"),r("ul",[r("li",[t._v("应用编程接口  API  称为 socket API, 简称为 socket。")]),t._v(" "),r("li",[t._v("socket API 中使用的一个函数名也叫作 socket。")]),t._v(" "),r("li",[t._v("调用 socket 函数的端点称为 socket。")]),t._v(" "),r("li",[t._v("调用 socket 函数时其返回值称为 socket 描述符，可简称为 socket。")]),t._v(" "),r("li",[t._v("在操作系统内核中连网协议的 Berkeley 实现，称为 socket 实现。")])])])]),t._v(" "),r("h2",{attrs:{id:"可靠传输的工作原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#可靠传输的工作原理"}},[t._v("#")]),t._v(" 可靠传输的工作原理")]),t._v(" "),r("p",[t._v("TCP 发送的报文是交给 IP 层传送的。但 IP 层提供的是不可靠的传输，因此，TCP 必须采用适当的措施才能使得两个运输层之间的通信变得可靠。\n理想的传输条件有一下两个特点：一是传输信道不产生差错、二是不管发送方以多快的速度发送数据，接收方总是来得及处理收到的数据。\n在这样的理想传输条件下，不需要采取任何措施就能够实现可靠传输。然而实际的网络都不具备以上两个理想条件。必须使用一些可靠传输协议，在不可靠的传输信道实现可靠传输。")]),t._v(" "),r("h3",{attrs:{id:"停止等待协议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#停止等待协议"}},[t._v("#")]),t._v(" 停止等待协议")]),t._v(" "),r("ul",[r("li",[t._v("“停止等待”就是每发送完一个分组就停止发送，等待对方的确认。在收到确认后再发送下一个分组。")]),t._v(" "),r("li",[t._v("全双工通信的双方既是发送方也是接收方。")]),t._v(" "),r("li",[t._v("为了讨论问题的方便，我们仅考虑 A 发送数据，而 B 接收数据并发送确认。因此 A 叫做发送方，而 B 叫做接收方。")])]),t._v(" "),r("h4",{attrs:{id:"无差错情况"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无差错情况"}},[t._v("#")]),t._v(" 无差错情况")]),t._v(" "),r("p",[t._v("A 发送分组 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.339ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"3.108ex",height:"1.885ex",viewBox:"0 -683 1373.6 833"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"msub"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"4D",d:"M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z"}})]),r("g",{attrs:{"data-mml-node":"mn",transform:"translate(970, -150) scale(0.707)"}},[r("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})])])])])])]),t._v("，发送完就暂停发送，等待 B 的确认。B 收到了 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.339ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"3.108ex",height:"1.885ex",viewBox:"0 -683 1373.6 833"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"msub"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"4D",d:"M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z"}})]),r("g",{attrs:{"data-mml-node":"mn",transform:"translate(970, -150) scale(0.707)"}},[r("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})])])])])])]),t._v("就向 A 发送确认(ACK)。A 在收到了对 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.339ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"3.108ex",height:"1.885ex",viewBox:"0 -683 1373.6 833"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"msub"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"4D",d:"M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z"}})]),r("g",{attrs:{"data-mml-node":"mn",transform:"translate(970, -150) scale(0.707)"}},[r("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})])])])])])]),t._v(" 的确认后，就再发送下一个分组 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.339ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"3.108ex",height:"1.885ex",viewBox:"0 -683 1373.6 833"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"msub"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"4D",d:"M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z"}})]),r("g",{attrs:{"data-mml-node":"mn",transform:"translate(970, -150) scale(0.707)"}},[r("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})])])])])])]),t._v("。同样，在收到 B 对 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.339ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"3.108ex",height:"1.885ex",viewBox:"0 -683 1373.6 833"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"msub"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"4D",d:"M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z"}})]),r("g",{attrs:{"data-mml-node":"mn",transform:"translate(970, -150) scale(0.707)"}},[r("path",{attrs:{"data-c":"32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}})])])])])])]),t._v(" 的确认后，再发送 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.375ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"3.108ex",height:"1.92ex",viewBox:"0 -683 1373.6 848.6"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"msub"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"4D",d:"M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z"}})]),r("g",{attrs:{"data-mml-node":"mn",transform:"translate(970, -150) scale(0.707)"}},[r("path",{attrs:{"data-c":"33",d:"M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"}})])])])])])]),t._v("。\n"),r("img",{attrs:{src:"/internet/5-12.png",alt:"无差错情况",title:"无差错情况"}})],1),t._v(" "),r("h4",{attrs:{id:"出现差错"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#出现差错"}},[t._v("#")]),t._v(" 出现差错")]),t._v(" "),r("ul",[r("li",[t._v("在接收方 B 会出现两种情况：\n"),r("ol",[r("li",[t._v("B 接收 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.339ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"3.108ex",height:"1.885ex",viewBox:"0 -683 1373.6 833"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"msub"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"4D",d:"M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z"}})]),r("g",{attrs:{"data-mml-node":"mn",transform:"translate(970, -150) scale(0.707)"}},[r("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})])])])])])]),t._v(" 时检测出了差错，就丢弃 "),r("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[r("svg",{staticStyle:{"vertical-align":"-0.339ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"3.108ex",height:"1.885ex",viewBox:"0 -683 1373.6 833"}},[r("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[r("g",{attrs:{"data-mml-node":"math"}},[r("g",{attrs:{"data-mml-node":"msub"}},[r("g",{attrs:{"data-mml-node":"mi"}},[r("path",{attrs:{"data-c":"4D",d:"M289 629Q289 635 232 637Q208 637 201 638T194 648Q194 649 196 659Q197 662 198 666T199 671T201 676T203 679T207 681T212 683T220 683T232 684Q238 684 262 684T307 683Q386 683 398 683T414 678Q415 674 451 396L487 117L510 154Q534 190 574 254T662 394Q837 673 839 675Q840 676 842 678T846 681L852 683H948Q965 683 988 683T1017 684Q1051 684 1051 673Q1051 668 1048 656T1045 643Q1041 637 1008 637Q968 636 957 634T939 623Q936 618 867 340T797 59Q797 55 798 54T805 50T822 48T855 46H886Q892 37 892 35Q892 19 885 5Q880 0 869 0Q864 0 828 1T736 2Q675 2 644 2T609 1Q592 1 592 11Q592 13 594 25Q598 41 602 43T625 46Q652 46 685 49Q699 52 704 61Q706 65 742 207T813 490T848 631L654 322Q458 10 453 5Q451 4 449 3Q444 0 433 0Q418 0 415 7Q413 11 374 317L335 624L267 354Q200 88 200 79Q206 46 272 46H282Q288 41 289 37T286 19Q282 3 278 1Q274 0 267 0Q265 0 255 0T221 1T157 2Q127 2 95 1T58 0Q43 0 39 2T35 11Q35 13 38 25T43 40Q45 46 65 46Q135 46 154 86Q158 92 223 354T289 629Z"}})]),r("g",{attrs:{"data-mml-node":"mn",transform:"translate(970, -150) scale(0.707)"}},[r("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}})])])])])])]),t._v("，其他什么也不做（不通知 A 收到有差错的分组）。")],1),t._v(" "),r("li",[t._v("M1 在传输过程中丢失了，这时 B 当然什么都不知道，也什么都不做。")])])]),t._v(" "),r("li",[t._v("在这两种情况下，B 都不会发送任何信息。")]),t._v(" "),r("li",[t._v("但A都必须重发分组，直到B正确接收为止，这样才能实现可靠通信。")])]),t._v(" "),r("p",[t._v("问题：A如何知道 B 是否正确收到了 M1 呢？")]),t._v(" "),r("p",[t._v("解决方法："),r("strong",[t._v("超时重传")])]),t._v(" "),r("ul",[r("li",[t._v("A 为每一个已发送的分组都设置了一个超时计时器。")]),t._v(" "),r("li",[t._v("A 只要在超时计时器到期之前收到了相应的确认，就撤销该超时计时器，继续发送下一个分组 M2 。")]),t._v(" "),r("li",[t._v("若A在超时计时器规定时间内没有收到B的确认，就认为分组错误或丢失，就重发该分组。")])]),t._v(" "),r("p",[t._v("问题：若分组正确到达B，但B回送的确认丢失或延迟了，A未收到B的确认，会超时重发。B 可能会收到重复的 M1 。B如何知道收到了重复的分组，需要丢弃呢？")]),t._v(" "),r("p",[t._v("解决方法："),r("strong",[t._v("编号")])]),t._v(" "),r("ul",[r("li",[t._v("A 为每一个发送的分组都进行编号。若 B 收到了编号相同的分组，则认为收到了重复分组，丢弃重复的分组，并回送确认。")]),t._v(" "),r("li",[t._v("B 为发送的确认也进行编号，指示该确认是对哪一个分组的确认。")]),t._v(" "),r("li",[t._v("A 根据确认及其编号，可以确定它是对哪一个分组的确认，避免重发发送。若为重复的确认，则将其丢弃。\n"),r("img",{attrs:{src:"/internet/5-13.png",alt:"出现差错",title:"出现差错"}})])]),t._v(" "),r("h4",{attrs:{id:"确认丢失和确认迟到"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#确认丢失和确认迟到"}},[t._v("#")]),t._v(" 确认丢失和确认迟到")]),t._v(" "),r("ul",[r("li",[t._v("确认丢失\n"),r("ol",[r("li",[t._v("若 B 所发送的对 M1 的确认丢失了，那么 A 在设定的超时重传时间内不能收到确认，但 A 并无法知道：是自己发送的分组出错、丢失了，或者 是 B 发送的确认丢失了。因此 A 在超时计时器到期后就要重传 M1。")]),t._v(" "),r("li",[t._v("假定 B 又收到了重传的分组 M1。这时 B 应采取两个行动：\n"),r("ul",[r("li",[t._v("第一，丢弃这个重复的分组 M1，不向上层交付。")]),t._v(" "),r("li",[t._v("第二，向 A 发送确认。不能认为已经发送过确认就不再发送，因为 A 之所以重传 M1 就表示 A 没有收到对 M1 的确认。")])])])])]),t._v(" "),r("li",[t._v("确认迟到\n"),r("ol",[r("li",[t._v("传输过程中没有出现差错，但 B 对分组 M1 的确认迟到了。")]),t._v(" "),r("li",[t._v("A 会收到重复的确认。对重复的确认的处理很简单：收下后就丢弃。")]),t._v(" "),r("li",[t._v("B 仍然会收到重复的 M1，并且同样要丢弃重复的 M1，并重传确认分组。\n"),r("img",{attrs:{src:"/internet/5-14.png",alt:"确认丢失和确认迟到",title:"确认丢失和确认迟到"}})])])])]),t._v(" "),r("p",[r("strong",[t._v("注意")]),t._v("：在发送完一个分组后，必须暂时保留已发送的分组的副本，以备重发。分组和确认分组都必须进行编号。超时计时器的重传时间应当比数据在分组传输的平均往返时间更长一些。")]),t._v(" "),r("h4",{attrs:{id:"自动重传请求-arq"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#自动重传请求-arq"}},[t._v("#")]),t._v(" 自动重传请求 ARQ")]),t._v(" "),r("ul",[r("li",[t._v("通常 A 最终总是可以收到对所有发出的分组的确认。如果 A 不断重传分组但总是收不到确认，就说明通信线路太差，不能进行通信。")]),t._v(" "),r("li",[t._v("使用上述的确认和重传机制，我们就可以在不可靠的传输网络上实现可靠的通信。")]),t._v(" "),r("li",[t._v("像上述的这种可靠传输协议常称为自动重传请求 ARQ  (Automatic Repeat reQuest)。意思是重传的请求是自动进行的，接收方不需要请求发送方重传某个出错的分组。")])]),t._v(" "),r("h4",{attrs:{id:"信道利用率"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#信道利用率"}},[t._v("#")]),t._v(" 信道利用率")]),t._v(" "),r("p",[t._v("停止等待协议的优点是简单，缺点是信道利用率太低。用下图来说明这个问题，为简单起见，假定在 A 和 B 之间有一条直通的信道来传送分组。\n"),r("img",{attrs:{src:"/internet/5-15.png",alt:"信道利用率",title:"信道利用率"}})]),t._v(" "),r("ul",[r("li",[t._v("可以看出，当往返时间 RTT 远大于分组发送时间 TD 时，信道的利用率就会非常低。")]),t._v(" "),r("li",[t._v("若出现重传，则对传送有用的数据信息来说，信道的利用率就还要降低。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"/line1.png",alt:"耳机分割线",title:"耳机分割线"}})]),t._v(" "),r("ul",[r("li",[t._v("为了提高传输效率，发送方可以不使用低效率的停止等待协议，而是采用"),r("strong",[t._v("流水线传输")]),t._v("。")]),t._v(" "),r("li",[r("strong",[t._v("流水线传输")]),t._v("就是发送方可连续发送多个分组，不必每发完一个分组就停顿下来等待对方的确认。这样可使信道上一直有数据不间断地传送。")]),t._v(" "),r("li",[t._v("由于信道上一直有数据不间断地传送，这种传输方式可获得很高的信道利用率。\n"),r("img",{attrs:{src:"/internet/5-16.png",alt:"流水线传输",title:"流水线传输"}})])]),t._v(" "),r("h3",{attrs:{id:"连续-arq-协议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#连续-arq-协议"}},[t._v("#")]),t._v(" 连续 ARQ 协议")]),t._v(" "),r("p",[t._v("基本思想：")]),t._v(" "),r("ul",[r("li",[t._v("发送方一次可以发出多个分组。")]),t._v(" "),r("li",[t._v("使用滑动窗口协议控制发送方和接收方所能发送和接收的分组的数量和编号。")]),t._v(" "),r("li",[t._v("每收到一个确认，发送方就把发送窗口向前滑动。")]),t._v(" "),r("li",[t._v("接收方一般采用累积确认的方式。")]),t._v(" "),r("li",[t._v("采用回退N（Go-Back-N）方法进行重传。\n"),r("img",{attrs:{src:"/internet/5-17.png",alt:"连续ARQ协议的工作原理",title:"连续ARQ协议的工作原理"}})])]),t._v(" "),r("h4",{attrs:{id:"累积确认"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#累积确认"}},[t._v("#")]),t._v(" 累积确认")]),t._v(" "),r("ul",[r("li",[t._v("接收方一般采用累积确认的方式。即不必对收到的分组逐个发送确认，而是对按序到达的最后一个分组发送确认，这样就表示：到这个分组为止的所有分组都已正确收到了。")]),t._v(" "),r("li",[t._v("优点：容易实现，即使确认丢失也不必重传。")]),t._v(" "),r("li",[t._v("缺点：不能向发送方反映出接收方已经正确收到的所有分组的信息。\n"),r("img",{attrs:{src:"/internet/5-18.png",alt:"累积确认",title:"累积确认"}})])]),t._v(" "),r("h4",{attrs:{id:"go-back-n-回退-n"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#go-back-n-回退-n"}},[t._v("#")]),t._v(" Go-back-N（回退 N）")]),t._v(" "),r("ul",[r("li",[t._v("如果发送方发送了前 5 个分组，而中间的第 3 个分组丢失了。这时接收方只能对前两个分组发出确认。发送方无法知道后面三个分组的下落，而只好把后面的三个分组都再重传一次。")]),t._v(" "),r("li",[t._v("这就叫做 Go-back-N（回退 N），表示需要再退回来重传已发送过的 N 个分组。")]),t._v(" "),r("li",[t._v("可见当通信线路质量不好时，连续 ARQ 协议会带来负面的影响。\n"),r("img",{attrs:{src:"/internet/5-19.png",alt:"Go-back-N",title:"Go-back-N"}})])]),t._v(" "),r("h4",{attrs:{id:"tcp-可靠通信的具体实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp-可靠通信的具体实现"}},[t._v("#")]),t._v(" TCP 可靠通信的具体实现")]),t._v(" "),r("ul",[r("li",[t._v("TCP 连接的每一端都必须设有两个窗口——一个发送窗口和一个接收窗口。")]),t._v(" "),r("li",[t._v("TCP 的可靠传输机制用字节的序号进行控制。TCP 所有的确认都是基于序号而不是基于报文段。")]),t._v(" "),r("li",[t._v("TCP 两端的四个窗口经常处于动态变化之中。")]),t._v(" "),r("li",[t._v("TCP连接的往返时间 RTT 也不是固定不变的。需要使用特定的算法估算较为合理的重传时间。")])]),t._v(" "),r("h4",{attrs:{id:"滑动窗口协议"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口协议"}},[t._v("#")]),t._v(" 滑动窗口协议")]),t._v(" "),r("ul",[r("li",[t._v("滑动窗口协议比较复杂，是 TCP 协议的精髓所在。")]),t._v(" "),r("li",[t._v("发送方维持的发送窗口，它的意义是：位于发送窗口内的分组都可连续发送出去，而不需要等待对方的确认。这样，信道利用率就提高了。")]),t._v(" "),r("li",[t._v("连续 ARQ 协议规定，发送方每收到一个确认，就把发送窗口向前滑动一个分组的位置。")])])])}),[],!1,null,null,null);a.default=T.exports}}]);