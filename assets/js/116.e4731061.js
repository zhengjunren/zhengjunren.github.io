(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{308:function(v,_,l){"use strict";l.r(_);var i=l(5),t=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"链路层篇"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#链路层篇"}},[v._v("#")]),v._v(" 链路层篇")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("链路是从一个结点到相邻结点的一段物理线路，数据链路则是在链路的基础上增加了一些必要的硬件（如网络适配器）和软件（如协议的实现）。")])]),v._v(" "),l("li",[l("p",[v._v("数据链路层使用的信道主要有点对点信道和广播信道两种。")])]),v._v(" "),l("li",[l("p",[v._v("数据链路层传输的协议数据单元是帧。数据链路层的三个基本问题四：封装成帧、透明传输、差错检测。")])]),v._v(" "),l("li",[l("p",[v._v("循环冗余检验 CRC 是一种检错方法，而帧检验序列 FCS 是添加在数据后面的冗余码。")])]),v._v(" "),l("li",[l("p",[v._v("点对点协议 PPP 是数据链路层使用最多的一种协议，他的特点是：简单；只检测差错，而不纠正差错；不适用序号，也不进行流量控制；\n可同时支持多种网络层协议。")])]),v._v(" "),l("li",[l("p",[v._v("PPPoE 是为宽带上网的主机使用的链路层协议。")])]),v._v(" "),l("li",[l("p",[v._v("局域网的优点是：具有广播功能，从一个站点可很方便地访问全网；便于系统的扩展和逐渐演变；提高了系统的可靠性、可用性、和生存性。")])]),v._v(" "),l("li",[l("p",[v._v("共享通信媒体资源的方法有二：一是静态划分信道，二是动态媒体接入控制，又称为多点接入（随机接入或受控接入）")])]),v._v(" "),l("li",[l("p",[v._v("IEEE 802 委员会层把局域网的数据链路层拆成两个子层，即逻辑链路控制层(LLC)子层（与媒体传输无关）和媒体接入控制(MAC)子层（与传输媒体有关）。\n但现在 LLC 子层已成为历史。")])]),v._v(" "),l("li",[l("p",[v._v("计算机与外界局域网的通信要通过通信适配器（或者网络适配器），它又称为网络接口卡或网卡。计算机的硬件地址就在适配器的 ROM 中。")])]),v._v(" "),l("li",[l("p",[v._v("以太网采用无连接的工作方式，对数据帧不进行编号，也不要求对方发回确认。目的站收到有差错帧就把它丢弃，其他什么也不做。")])]),v._v(" "),l("li",[l("p",[v._v("以太网采用的协议是具有冲突检测的载波监听多点接入 CSMA/CD 。协议的要点是：发送前边监听，边发送边监听，一旦发现总线上出现了碰撞，就立即停止发送。然后按照退避算法等待一段随机时间后再次发送，因此，每一个站在自己发送数据之后的一小段时间内，存在着遭遇碰撞的可能性，以太网上各站点都平等地争用以太网信道。")])]),v._v(" "),l("li",[l("p",[v._v("传统的总线以太网基本上是使用集线器的双绞线以太网。这种以太网在物理层上是星型网，但在逻辑上则是总线网。集线器工作在物理层，它的每个接口仅仅简单地转发比特，不进行碰撞检测。")])]),v._v(" "),l("li",[l("p",[v._v("以太网的硬件地址，即 MAC 地址实际上就是适配器地址或者适配器标识符，与主机所在的地点无关。源地址和目的地址都是 48 位长。")])]),v._v(" "),l("li",[l("p",[v._v("以太网的适配器有过滤功能，它只接受单播帧、广播帧或多播帧。")])]),v._v(" "),l("li",[l("p",[v._v("使用集线器可以在物理层扩展以太网（扩展后的以太网仍然是一个网络）。")])]),v._v(" "),l("li",[l("p",[v._v("交换式集线器常称为以太网交换机或者第二层交换机（工作在数据链路层）。它就是一个多接口的网桥，而每个接口都直接与某台单主机或另外一个集线器相连，且工作在全双工方式。以太网交换机能直接同时连通许多对的接口，使每一对相互通信的主机都能像独占通信媒体那样，无碰撞地传输数据。")])]),v._v(" "),l("li",[l("p",[v._v("高速以太网有 100 Mbit/s 的快速以太网、吉比特以太网和 10 Gbit/s 的 10 吉比特以太网。最近还发展到 100 吉比特以太网。在宽带接入技术中，也常使用高速以太网进行接入。")])])])])}),[],!1,null,null,null);_.default=t.exports}}]);