(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{611:function(t,_,v){"use strict";v.r(_);var i=v(6),a=Object(i.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"物理层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#物理层"}},[t._v("#")]),t._v(" 物理层")]),t._v(" "),v("h2",{attrs:{id:"目录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#目录"}},[t._v("目录")])]),v("li",[v("a",{attrs:{href:"#基本概念"}},[t._v("基本概念")])]),v("li",[v("a",{attrs:{href:"#主要任务"}},[t._v("主要任务")])]),v("li",[v("a",{attrs:{href:"#数据通信的基础知识"}},[t._v("数据通信的基础知识")]),v("ul",[v("li",[v("a",{attrs:{href:"#相关术语"}},[t._v("相关术语")])]),v("li",[v("a",{attrs:{href:"#有关信道的概念"}},[t._v("有关信道的概念")])]),v("li",[v("a",{attrs:{href:"#信道的极限容量"}},[t._v("信道的极限容量")])]),v("li",[v("a",{attrs:{href:"#限制码元在信道上的传输速率的因素"}},[t._v("限制码元在信道上的传输速率的因素")])]),v("li",[v("a",{attrs:{href:"#香农公式表明"}},[t._v("香农公式表明")])])])]),v("li",[v("a",{attrs:{href:"#物理层下面的传输媒体"}},[t._v("物理层下面的传输媒体")]),v("ul",[v("li",[v("a",{attrs:{href:"#导引型传输媒体"}},[t._v("导引型传输媒体")])]),v("li",[v("a",{attrs:{href:"#非导引型传输媒体"}},[t._v("非导引型传输媒体")])])])]),v("li",[v("a",{attrs:{href:"#信道复用技术"}},[t._v("信道复用技术")]),v("ul",[v("li",[v("a",{attrs:{href:"#频分复用、时分复用和统计时分复用"}},[t._v("频分复用、时分复用和统计时分复用")])]),v("li",[v("a",{attrs:{href:"#波分复用"}},[t._v("波分复用")])]),v("li",[v("a",{attrs:{href:"#码分复用"}},[t._v("码分复用")])])])]),v("li",[v("a",{attrs:{href:"#数字传输系统"}},[t._v("数字传输系统")])]),v("li",[v("a",{attrs:{href:"#宽带接入技术"}},[t._v("宽带接入技术")]),v("ul",[v("li",[v("a",{attrs:{href:"#adsl-技术"}},[t._v("ADSL 技术")])]),v("li",[v("a",{attrs:{href:"#光纤同轴混合网-hfc网"}},[t._v("光纤同轴混合网（HFC网）")])]),v("li",[v("a",{attrs:{href:"#fttx-技术"}},[t._v("FTTx 技术")])])])])])]),v("p"),t._v(" "),v("h2",{attrs:{id:"基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),v("ul",[v("li",[t._v("物理层考虑的是怎样才能在连接各种计算机的传输媒体上传输数据比特流，而不是指具体的传输媒体。")]),t._v(" "),v("li",[t._v("物理层的作用是要尽可能地屏蔽掉不同传输媒体和通信手段的差异。")]),t._v(" "),v("li",[t._v("用于物理层的协议也常称为物理层规程 (procedure)。")])]),t._v(" "),v("h2",{attrs:{id:"主要任务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#主要任务"}},[t._v("#")]),t._v(" 主要任务")]),t._v(" "),v("p",[t._v("确定与传输媒体的接口的一些特性。")]),t._v(" "),v("ul",[v("li",[t._v("机械特性 ：指明接口所用接线器的形状和尺寸、引线数目和排列、固定和锁定装置等。")]),t._v(" "),v("li",[t._v("电气特性：指明在接口电缆的各条线上出现的电压的范围。")]),t._v(" "),v("li",[t._v("功能特性：指明某条线上出现的某一电平的电压的意义。")]),t._v(" "),v("li",[t._v("过程特性 ：指明对于不同功能的各种可能事件的出现顺序")])]),t._v(" "),v("h2",{attrs:{id:"数据通信的基础知识"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据通信的基础知识"}},[t._v("#")]),t._v(" 数据通信的基础知识")]),t._v(" "),v("p",[t._v("一个数据通信系统包括三大部分："),v("strong",[t._v("源系统")]),t._v("（或发送端、发送方）、"),v("strong",[t._v("传输系统")]),t._v("（或传输网络）和"),v("strong",[t._v("目的系统")]),t._v("（或接收端、接收方）。")]),t._v(" "),v("p",[t._v("源系统一般包括以下两个部分：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("源点")]),t._v("： 源点设备产生要传输的数据。例如，从计算机的键盘中输入汉字，计算进产生输出的数字比特流。\n源点又称"),v("strong",[t._v("源站")]),t._v("，或"),v("strong",[t._v("信源")]),t._v("。")]),t._v(" "),v("li",[v("strong",[t._v("发送器")]),t._v("：通常源点生成的数字比特流要通过发送器编码后才能够在传输系统中进行传输。\n典型的发送器就是调制器。现在很多计算机使用内置的调制解调器，用户在计算机外面看不见调制解调器。")])]),t._v(" "),v("p",[t._v("目的系统一般也包括以下两部分：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("接收器")]),t._v("：接受传输系统传送过来的信号，并把它转换为能够被目的设备处理的信息。\n典型的接收器就是解调器，它把来自传输线路上的模拟信号进行解调，提取出在发送端置入的信息，\n还原出发送端产生的数字比特流。")]),t._v(" "),v("li",[v("strong",[t._v("终点")]),t._v("：终点设备从接收器获取传送来的数字比特流，然后把信息输出。（例如，汉字在计算机屏幕上显示出来）\n终点又称"),v("strong",[t._v("目的站")]),t._v("，或"),v("strong",[t._v("信宿")]),t._v("。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/internet/2-1.png",alt:"数据通信系统的模型"}})]),t._v(" "),v("h3",{attrs:{id:"相关术语"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#相关术语"}},[t._v("#")]),t._v(" 相关术语")]),t._v(" "),v("p",[t._v("通信的目的是传送消息。")]),t._v(" "),v("ul",[v("li",[t._v("数据 (data)：运送消息的实体。")]),t._v(" "),v("li",[t._v("信号 (signal)：数据的电气的或电磁的表现。\n"),v("ul",[v("li",[t._v("模拟信号 (analogous signal)：代表消息的参数的取值是连续的。")]),t._v(" "),v("li",[t._v("数字信号 (digital signal)：代表消息的参数的取值是离散的。")])])]),t._v(" "),v("li",[t._v("码元 (code)：在使用时间域（或简称为时域）的波形表示数字信号时，代表不同离散数值的基本波形。")])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"title"},[t._v("提示")]),v("p",[t._v("对于码元的理解，可以看看这篇"),v("a",{attrs:{href:"https://blog.csdn.net/yhb1206/article/details/82751654",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章"),v("OutboundLink")],1)])]),v("h3",{attrs:{id:"有关信道的概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#有关信道的概念"}},[t._v("#")]),t._v(" 有关信道的概念")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("信道")]),t._v("： 一般用来表示向某一个方向传送信息的媒体。")]),t._v(" "),v("li",[v("strong",[t._v("单向通信")]),t._v("（单工通信）：只能有一个方向的通信而没有反方向的交互。（收看电视，电视不能向电视塔发送信号）")]),t._v(" "),v("li",[v("strong",[t._v("双向交替通信")]),t._v("（半双工通信）：通信的双方都可以发送信息，但不能双方同时发送(当然也就不能同时接收)。（对讲机，貌似不能同时听同时说）")]),t._v(" "),v("li",[v("strong",[t._v("双向同时通信")]),t._v("（全双工通信）：通信的双方可以同时发送和接收信息。（视频通话）")]),t._v(" "),v("li",[v("strong",[t._v("基带信号")]),t._v("（即基本频带信号）：来自信源的信号。像计算机输出的代表各种文字或图像文件的数据信号都属于基带信号。")]),t._v(" "),v("li",[t._v("基带信号往往包含有较多的低频成分，甚至有直流成分，而许多信道并不能传输这种低频分量或直流分量。因此必须对基带信号进行"),v("strong",[t._v("调制")]),t._v("  (modulation)。\n"),v("ul",[v("li",[t._v("基带调制：仅对基带信号的波形进行变换，使它能够与信道特性相适应。变换后的信号仍然是基带信号。把这种过程称为"),v("strong",[t._v("编码")]),t._v(" (coding)。")]),t._v(" "),v("li",[t._v("带通调制：使用"),v("strong",[t._v("载波")]),t._v(" (carrier)进行调制，把基带信号的频率范围搬移到较高的频段，并转换为模拟信号，这样就能够更好地在模拟信道中传输（即仅在一段频率范围内能够通过信道） 。")]),t._v(" "),v("li",[t._v("带通信号 ：经过载波调制后的信号。")])])])]),t._v(" "),v("p",[t._v("(1) 常用编码方式")]),t._v(" "),v("ul",[v("li",[t._v("不归零制：正电平代表 1，负电平代表 0。")]),t._v(" "),v("li",[t._v("归零制：正脉冲代表 1，负脉冲代表 0。")]),t._v(" "),v("li",[t._v("曼彻斯特编码：位周期中心的向上跳变代表 0，位周期中心的向下跳变代表 1。但也可反过来定义。")]),t._v(" "),v("li",[t._v("差分曼彻斯特编码：在每一位的中心处始终都有跳变。位开始边界有跳变代表 0，而位开始边界没有跳变代表 1。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/internet/2-2.png",alt:"常用编码方式"}})]),t._v(" "),v("p",[t._v("(2) 基本的带通调制方法")]),t._v(" "),v("p",[t._v("最基本的二元制调制方法有以下几种：")]),t._v(" "),v("ul",[v("li",[t._v("调幅(AM)：载波的振幅随基带数字信号而变化。")]),t._v(" "),v("li",[t._v("调频(FM)：载波的频率随基带数字信号而变化。")]),t._v(" "),v("li",[t._v("调相(PM) ：载波的初始相位随基带数字信号而变化。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/internet/2-3.png",alt:"基本的带通调制方法"}})]),t._v(" "),v("h3",{attrs:{id:"信道的极限容量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#信道的极限容量"}},[t._v("#")]),t._v(" 信道的极限容量")]),t._v(" "),v("p",[t._v("任何实际的信道都不是理想的，在传输信号时会产生各种失真以及带来多种干扰。\n码元传输的速率越高，或信号传输的距离越远，或传输媒体质量越差，在信道的输出端的波形的失真就越严重。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/internet/2-4.png",alt:"信道的极限容量"}})]),t._v(" "),v("h3",{attrs:{id:"限制码元在信道上的传输速率的因素"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#限制码元在信道上的传输速率的因素"}},[t._v("#")]),t._v(" 限制码元在信道上的传输速率的因素")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("信道能够通过的频率范围")]),t._v(" "),v("ul",[v("li",[t._v("在任何信道中，"),v("strong",[t._v("码元传输的速率是有上限的")]),t._v("，否则就会出现码间串扰的问题，使接收端对码元的判决（即识别）成为不可能。")]),t._v(" "),v("li",[t._v("如果信道的频带越宽，也就是能够通过的信号高频分量越多，那么就可以用更高的速率传送码元而不出现码间串扰。")])])]),t._v(" "),v("li",[v("p",[t._v("信噪比")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("噪声存在于所有的电子设备和通信信道中。")])]),t._v(" "),v("li",[v("p",[t._v("噪声是随机产生的，它的瞬时值有时会很大。因此噪声会使接收端对码元的判决产生错误。\n但噪声的影响是相对的。如果信号相对较强，那么噪声的影响就相对较小。")])]),t._v(" "),v("li",[v("p",[t._v("信噪比就是信号的平均功率和噪声的平均功率之比。常记为S/N，并用分贝 (dB) 作为度量单位。即：\n信噪比$(dB) = 10 log_{10}^{(S/N)} (dB)$")])]),t._v(" "),v("li",[v("p",[t._v("香农公式——信道的极限信息传输速率 C 可表达为：\n$C = W * log_2^{(1+S/N)} (bit/s)$")])])]),t._v(" "),v("p",[t._v("其中：W 为信道的带宽（以 Hz 为单位）；S 为信道内所传信号的平均功率；N 为信道内部的高斯噪声功率。")])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"title"},[t._v("香农公式")]),v("p",[t._v("$C = W * log_2^{(1+S/N)} (bit/s)$")]),t._v(" "),v("p",[t._v("其中：W 为信道的带宽（以 Hz 为单位）；S 为信道内所传信号的平均功率；N 为信道内部的高斯噪声功率。")])]),v("h3",{attrs:{id:"香农公式表明"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#香农公式表明"}},[t._v("#")]),t._v(" 香农公式表明")]),t._v(" "),v("ul",[v("li",[t._v("信道的带宽或信道中的信噪比越大，则信息的极限传输速率就越高。")]),t._v(" "),v("li",[t._v("只要信息传输速率低于信道的极限信息传输速率，就一定可以找到某种办法来实现无差错的传输。")]),t._v(" "),v("li",[t._v("若信道带宽 W 或信噪比 S/N 没有上限（当然实际信道不可能是这样的），则信道的极限信息传输速率 C 也就没有上限。")]),t._v(" "),v("li",[t._v("实际信道上能够达到的信息传输速率要比香农的极限传输速率低不少。")])]),t._v(" "),v("h2",{attrs:{id:"物理层下面的传输媒体"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#物理层下面的传输媒体"}},[t._v("#")]),t._v(" 物理层下面的传输媒体")]),t._v(" "),v("ul",[v("li",[t._v("传输媒体也称为传输介质或传输媒介，它就是数据传输系统中在发送器和接收器之间的物理通路。")]),t._v(" "),v("li",[t._v("传输媒体可分为两大类，即导引型传输媒体和非导引型传输媒体。\n"),v("ul",[v("li",[t._v("在导引型传输媒体中，电磁波被导引沿着固体媒体（铜线或光纤）传播。")]),t._v(" "),v("li",[t._v("非导引型传输媒体就是指自由空间。在非导引型传输媒体中，电磁波的传输常称为无线传输。")])])])]),t._v(" "),v("h3",{attrs:{id:"导引型传输媒体"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#导引型传输媒体"}},[t._v("#")]),t._v(" 导引型传输媒体")]),t._v(" "),v("ul",[v("li",[t._v("双绞线\n"),v("ul",[v("li",[t._v("双绞线标准")])])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("绞合线类别")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("带宽")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("线缆特点")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("典型应用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("16 MHz")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2 对 4 芯双绞线")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("模拟电话；曾用于传统以太网 （10 Mbit/s）")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("20 MHz")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("4 对 8 芯双绞线")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("曾用于令牌局域网")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("100 MHz")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("与 4 类相比增加了绞合度")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("传输速率不超过100 Mbit/s 的应用")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("5E (超5类)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("125 MHz")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("与 5 类相比衰减更小")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("传输速率不超过 1 Gbit/s 的应用")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("250 MHz")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("与 5 类相比改善了串扰等性能")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("传输速率高于 1 Gbit/s 的应用")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("600 MHz")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("使用屏蔽双绞线")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("传输速率高于 10 Gbit/s 的应用")])])])]),t._v(" "),v("p",[v("img",{attrs:{src:"/internet/2-5.png",alt:"双绞线"}})]),t._v(" "),v("ul",[v("li",[t._v("同轴电缆\n"),v("ul",[v("li",[t._v("同轴电缆具有很好的抗干扰特性，被广泛用于传输较高速率的数据。")]),t._v(" "),v("li",[t._v("同轴电缆的带宽取决于电缆的质量。")]),t._v(" "),v("li",[t._v("50 Ω 同轴电缆 —— LAN / 数字传输常用")]),t._v(" "),v("li",[t._v("75 Ω 同轴电缆 —— 有线电视 / 模拟传输常用")])])])]),t._v(" "),v("p",[v("img",{attrs:{src:"/internet/2-6.png",alt:"同轴电缆"}}),t._v(" "),v("img",{attrs:{src:"/internet/2-7.png",alt:"同轴电缆"}})]),t._v(" "),v("ul",[v("li",[t._v("光缆\n"),v("ul",[v("li",[t._v("优点：通信容量非常大；传输损耗小，中继距离长；抗雷电和电磁干扰性能好；无串音干扰，保密性好。\n体积小，重量轻。")]),t._v(" "),v("li",[v("strong",[t._v("多模光纤")]),t._v("：可以存在多条不同角度入射的光线在一条光纤中传输。这种光纤就称为多模光纤。")]),t._v(" "),v("li",[v("strong",[t._v("单模光纤")]),t._v("：若光纤的直径减小到只有一个光的波长，则光纤就像一根波导那样，它可使光线一直向前传播，而不会产生多次反射。这样的光纤称为单模光纤。")])])])]),t._v(" "),v("p",[v("img",{attrs:{src:"/internet/2-8.png",alt:"光缆"}})]),t._v(" "),v("h3",{attrs:{id:"非导引型传输媒体"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#非导引型传输媒体"}},[t._v("#")]),t._v(" 非导引型传输媒体")]),t._v(" "),v("ul",[v("li",[t._v("将自由空间称为“非导引型传输媒体”。")]),t._v(" "),v("li",[t._v("无线传输所使用的频段很广。")]),t._v(" "),v("li",[t._v("短波通信（即高频通信）主要是靠电离层的反射，但短波信道的通信质量较差，传输速率低。")]),t._v(" "),v("li",[t._v("微波在空间主要是直线传播。")]),t._v(" "),v("li",[t._v("传统微波通信有两种方式：\n"),v("ul",[v("li",[t._v("地面微波接力通信")]),t._v(" "),v("li",[t._v("卫星通信")])])])]),t._v(" "),v("h2",{attrs:{id:"信道复用技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#信道复用技术"}},[t._v("#")]),t._v(" 信道复用技术")]),t._v(" "),v("p",[v("strong",[t._v("复用")]),t._v("(multiplexing) 是通信技术中的基本概念。\n它允许用户使用一个共享信道进行通信，降低成本，提高利用率。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/internet/2-9.png",alt:"复用",title:"复用的示意图"}})]),t._v(" "),v("h3",{attrs:{id:"频分复用、时分复用和统计时分复用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#频分复用、时分复用和统计时分复用"}},[t._v("#")]),t._v(" 频分复用、时分复用和统计时分复用")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("频分复用")]),t._v(" FDM (Frequency Division Multiplexing)\n"),v("ul",[v("li",[t._v("将整个带宽分为多份，用户在分配到一定的频带后，在通信过程中自始至终都占用这个频带。")]),t._v(" "),v("li",[t._v("频分复用的所有用户在同样的时间占用不同的带宽资源（请注意，这里的“带宽”是频率带宽而不是数据的发送速率）。")])])])]),t._v(" "),v("p",[v("img",{attrs:{src:"/internet/2-10.png",alt:"频分复用",title:"频分复用"}})]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("时分复用")]),t._v(" TDM (Time Division Multiplexing)\n"),v("ul",[v("li",[t._v("时分复用则是将时间划分为一段段等长的时分复用帧（TDM帧）。每一个时分复用的用户在每一个 TDM 帧中占用固定序号的时隙。")]),t._v(" "),v("li",[t._v("每一个用户所占用的时隙是周期性地出现（其周期就是TDM帧的长度）的。")]),t._v(" "),v("li",[t._v("TDM 信号也称为等时 (isochronous) 信号。")]),t._v(" "),v("li",[t._v("时分复用的所有用户在不同的时间占用同样的频带宽度。")]),t._v(" "),v("li",[t._v("缺陷：时分复用可能会造成线路资源的浪费，在一个等时 TMD 帧中，有的用户可能在这没有发送信号，则导致复用后的信道利用率不高。")])])])]),t._v(" "),v("p",[v("img",{attrs:{src:"/internet/2-11.png",alt:"时分复用",title:"时分复用"}})]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("统计时分复用")]),t._v(" STDM (Statistic TDM)\n"),v("ul",[v("li",[t._v("由于 STDM 帧中的时隙并不是固定地分配给某个用户，因此正在每个时隙中还必须有用户的地址信息，\n这是统计时分复用必须要有的和不可避免的一些开销，下图中输出线路上每个时隙之前的短时隙（蓝色）\n就是放入这样的地址信息。")])])])]),t._v(" "),v("p",[v("img",{attrs:{src:"/internet/2-12.png",alt:"统计时分复用",title:"统计时分复用"}})]),t._v(" "),v("h3",{attrs:{id:"波分复用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#波分复用"}},[t._v("#")]),t._v(" 波分复用")]),t._v(" "),v("p",[v("strong",[t._v("波分复用")]),t._v("就是"),v("strong",[t._v("光的频分复用")]),t._v("。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/internet/2-13.png",alt:"波分复用",title:"波分复用"}})]),t._v(" "),v("h3",{attrs:{id:"码分复用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#码分复用"}},[t._v("#")]),t._v(" 码分复用")]),t._v(" "),v("p",[t._v("常用的名词是"),v("strong",[t._v("码分多址")]),t._v(" CDMA (Code Division Multiple Access)；\n各用户使用经过特殊挑选的"),v("strong",[t._v("不同码型")]),t._v("，因此彼此不会造成干扰；\n这种系统发送的信号有很强的抗干扰能力，其频谱类似于白噪声，不易被敌人发现。")]),t._v(" "),v("h4",{attrs:{id:"码片序列-chip-sequence"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#码片序列-chip-sequence"}},[t._v("#")]),t._v(" 码片序列(chip sequence)")]),t._v(" "),v("ul",[v("li",[t._v("每一个比特时间划分为 m 个短的间隔，称为码片 (chip)。")]),t._v(" "),v("li",[t._v("每个站被指派一个唯一的 m bit 码片序列。\n"),v("ul",[v("li",[t._v("如发送比特 1，则发送自己的 m bit 码片序列。")]),t._v(" "),v("li",[t._v("如发送比特 0，则发送该码片序列的二进制反码。")])])]),t._v(" "),v("li",[t._v("例如，S 站的 8 bit 码片序列是 00011011。\n"),v("ul",[v("li",[t._v("发送比特 1 时，就发送序列 00011011，")]),t._v(" "),v("li",[t._v("发送比特 0 时，就发送序列 11100100。")])])]),t._v(" "),v("li",[t._v("为了方便，习惯上把0写成-1，把1写成+1，所以 S 站的码片序列：(–1 –1 –1 +1 +1 –1 +1 +1)")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/internet/2-14.png",alt:"CDMA原理",title:"CDMA原理"}})]),t._v(" "),v("h4",{attrs:{id:"cdma-的重要特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cdma-的重要特点"}},[t._v("#")]),t._v(" CDMA 的重要特点")]),t._v(" "),v("ul",[v("li",[t._v("每个站分配的码片序列不仅必须各不相同，并且还必须互相正交 (orthogonal)。")]),t._v(" "),v("li",[t._v("在实用的系统中是使用伪随机码序列。")])]),t._v(" "),v("h4",{attrs:{id:"码片序列的正交关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#码片序列的正交关系"}},[t._v("#")]),t._v(" 码片序列的正交关系")]),t._v(" "),v("ul",[v("li",[t._v("令向量 S 表示站 S 的码片向量，令 T 表示其他任何站的码片向量，两个不同站的码片序列正交，就是向量 S 和T 的规格化内积 (inner product) 等于 0：\n$$S \\cdot T = \\frac{1}{m} \\sum_{i=1}^m S_{i} T_{i} = 0$$")]),t._v(" "),v("li",[t._v("任何一个码片向量和该码片向量自己的规格化内积都是 1 。\n$$S \\cdot S = \\frac{1}{m} \\sum_{i=1}^m S_{i}\\cdot S_{i} = \\frac{1}{m} \\sum_{i=1}^m S_{i}^{2} = \\frac{1}{m} \\sum_{i=1}^m (\\pm 1)^{2} = 1$$")]),t._v(" "),v("li",[t._v("一个码片向量和该码片反码的向量的规格化内积值是 –1。")])]),t._v(" "),v("h2",{attrs:{id:"数字传输系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数字传输系统"}},[t._v("#")]),t._v(" 数字传输系统")]),t._v(" "),v("h2",{attrs:{id:"宽带接入技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#宽带接入技术"}},[t._v("#")]),t._v(" 宽带接入技术")]),t._v(" "),v("p",[t._v("从宽带接入的媒体来看，可以划分为两大类：有线宽带接入、无线宽带接入。")]),t._v(" "),v("h3",{attrs:{id:"adsl-技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#adsl-技术"}},[t._v("#")]),t._v(" ADSL 技术")]),t._v(" "),v("ul",[v("li",[t._v("非对称数字用户线 ADSL (Asymmetric Digital Subscriber Line) 技术就是用数字技术对现有的模拟电话用户线进行改造，使它能够承载宽带业务。")]),t._v(" "),v("li",[t._v("标准模拟电话信号的频带被限制在 300~3400 Hz 的范围内，但用户线本身实际可通过的信号频率仍然超过 1 MHz。")]),t._v(" "),v("li",[t._v("ADSL 技术就把 0~4 kHz 低端频谱留给传统电话使用，而把原来没有被利用的高端频谱留给用户上网使用。")]),t._v(" "),v("li",[t._v("DSL 就是数字用户线 (Digital Subscriber Line) 的缩写。")])]),t._v(" "),v("h4",{attrs:{id:"adsl-的传输距离和特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#adsl-的传输距离和特点"}},[t._v("#")]),t._v(" ADSL 的传输距离和特点")]),t._v(" "),v("ul",[v("li",[t._v("ADSL 的传输距离取决于数据率和用户线的线径（用户线越细，信号传输时的衰减就越大）。")]),t._v(" "),v("li",[t._v("ADSL 所能得到的最高数据传输速率与实际的用户线上的信噪比密切相关。")]),t._v(" "),v("li",[t._v("例如：\n"),v("ul",[v("li",[t._v("0.5 毫米线径的用户线，传输速率为 1.5~2.0 Mbit/s 时可传送5.5公里，但当传输速率提高到 6.1 Mbit/s 时，传输距离就缩短为 3.7 公里。")]),t._v(" "),v("li",[t._v("如果把用户线的线径减小到 0.4 毫米，那么在 6.1 Mbit/s 的传输速率下就只能传送 2.7 公里。")])])])]),t._v(" "),v("p",[t._v("特点：")]),t._v(" "),v("ul",[v("li",[t._v("上行和下行带宽做成不对称的。")]),t._v(" "),v("li",[t._v("上行指从用户到 ISP，而下行指从 ISP 到用户。")]),t._v(" "),v("li",[t._v("ADSL 在用户线（铜线）的两端各安装一个 ADSL 调制解调器。")]),t._v(" "),v("li",[t._v("我国目前采用的方案是离散多音调 DMT (Discrete Multi-Tone)调制技术。（这里的“多音调”就是“多载波”或“多子信道”的意思）")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/internet/2-15.png",alt:"ADSL的组成",title:"ADSL的组成"}})]),t._v(" "),v("h4",{attrs:{id:"dsl-的几种类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dsl-的几种类型"}},[t._v("#")]),t._v(" DSL 的几种类型")]),t._v(" "),v("ul",[v("li",[t._v("ADSL (Asymmetric Digital Subscriber Line)：非对称数字用户线")]),t._v(" "),v("li",[t._v("HDSL (High speed DSL)：高速数字用户线")]),t._v(" "),v("li",[t._v("SDSL (Single-line DSL)：1 对线的数字用户线")]),t._v(" "),v("li",[t._v("VDSL (Very high speed DSL)：甚高速数字用户线")]),t._v(" "),v("li",[t._v("DSL (Digital Subscriber Line) ：数字用户线")]),t._v(" "),v("li",[t._v("RADSL (Rate-Adaptive DSL)：速率自适应 DSL，是 ADSL 的一个子集，可自动调节线路速率）")])]),t._v(" "),v("h3",{attrs:{id:"光纤同轴混合网-hfc网"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#光纤同轴混合网-hfc网"}},[t._v("#")]),t._v(" 光纤同轴混合网（HFC网）")]),t._v(" "),v("ul",[v("li",[t._v("HFC (Hybrid Fiber Coax) 网是在目前覆盖面很广的有线电视网 CATV 的基础上开发的一种居民宽带接入网。")]),t._v(" "),v("li",[t._v("HFC 网除可传送 CATV 外，还提供电话、数据和其他宽带交互型业务。")]),t._v(" "),v("li",[t._v("现有的 CATV 网是树形拓扑结构的同轴电缆网络，它采用模拟技术的频分复用对电视节目进行单向传输。")]),t._v(" "),v("li",[t._v("HFC 网对 CATV 网进行了改造。")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/internet/2-16.png",alt:"HFC网采用结点体系结构",title:"HFC网采用结点体系结构"}})]),t._v(" "),v("h4",{attrs:{id:"hfc-网的主干线路采用光纤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hfc-网的主干线路采用光纤"}},[t._v("#")]),t._v(" HFC 网的主干线路采用光纤")]),t._v(" "),v("ul",[v("li",[t._v("HFC 网将原 CATV 网中的同轴电缆主干部分改换为光纤，并使用模拟光纤技术。")]),t._v(" "),v("li",[t._v("在模拟光纤中采用光的振幅调制AM，这比使用数字光纤更为经济。")]),t._v(" "),v("li",[t._v("模拟光纤从头端连接到光纤结点 (fiber node)，即光分配结点 ODN (Optical Distribution Node)。在光纤结点光信号被转换为电信号。在光纤结点以下就是同轴电缆。")])]),t._v(" "),v("p",[t._v("我国的 HFC 网的频谱划分\n"),v("img",{attrs:{src:"/internet/2-18.png",alt:"我国的HFC网的频谱划分",title:"我国的HFC网的频谱划分"}})]),t._v(" "),v("p",[t._v("用户接口盒 UIB (User Interface Box) 要提供三种连接，即：")]),t._v(" "),v("ul",[v("li",[t._v("使用同轴电缆连接到机顶盒 (set-top box)，然后再连接到用户的电视机。")]),t._v(" "),v("li",[t._v("使用双绞线连接到用户的电话机。")]),t._v(" "),v("li",[t._v("使用电缆调制解调器连接到用户的计算机")])]),t._v(" "),v("p",[t._v("电缆调制解调器是为 HFC 网而使用的调制解调器。")]),t._v(" "),v("ul",[v("li",[t._v("电缆调制解调器最大的特点就是传输速率高。\n"),v("ul",[v("li",[t._v("下行速率一般在 3 ~ 10 Mbit/s之间，最高可达 30 Mbit/s。")]),t._v(" "),v("li",[t._v("上行速率一般为 0.2 ~ 2 Mbit/s，最高可达 10 Mbit/s。")])])]),t._v(" "),v("li",[t._v("电缆调制解调器比在普通电话线上使用的调制解调器要复杂得多，并且不是成对使用，而是只安装在用户端。")])]),t._v(" "),v("h3",{attrs:{id:"fttx-技术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#fttx-技术"}},[t._v("#")]),t._v(" FTTx 技术")]),t._v(" "),v("ul",[v("li",[t._v("FTTx 是一种实现宽带居民接入网的方案，代表多种宽带光纤接入方式。")]),t._v(" "),v("li",[t._v("FTTx 表示 Fiber To The…（光纤到…），例如：\n"),v("ul",[v("li",[t._v("光纤到户 FTTH (Fiber To The Home)：光纤一直铺设到用户家庭，可能是居民接入网最后的解决方法。")]),t._v(" "),v("li",[t._v("光纤到大楼 FTTB (Fiber To The Building)：光纤进入大楼后就转换为电信号，然后用电缆或双绞线分配到各用户。")]),t._v(" "),v("li",[t._v("光纤到路边 FTTC (Fiber To The Curb)：光纤铺到路边，从路边到各用户可使用星形结构双绞线作为传输媒体。")])])])]),t._v(" "),v("p",[v("img",{attrs:{src:"/internet/2-17.png",alt:"无源光网络的组成",title:"无源光网络的组成"}})])])}),[],!1,null,null,null);_.default=a.exports}}]);