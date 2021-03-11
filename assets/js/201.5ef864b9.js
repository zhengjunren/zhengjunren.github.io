(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{394:function(_,v,t){"use strict";t.r(v);var a=t(5),i=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"结构化设计方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结构化设计方法"}},[_._v("#")]),_._v(" 结构化设计方法")]),_._v(" "),t("h2",{attrs:{id:"结构化设计方法和原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结构化设计方法和原则"}},[_._v("#")]),_._v(" 结构化设计方法和原则")]),_._v(" "),t("p",[t("img",{attrs:{src:"/soft_engineering/image-20210304170648965.png",alt:"结构化设计与结构化分析的关系"}})]),_._v(" "),t("h3",{attrs:{id:"软件设计的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件设计的概念"}},[_._v("#")]),_._v(" 软件设计的概念")]),_._v(" "),t("p",[_._v("软件设计包括一套原理、概念和时间，可以知道高质量的系统或产品开发。")]),_._v(" "),t("h3",{attrs:{id:"软件设计原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件设计原则"}},[_._v("#")]),_._v(" 软件设计原则")]),_._v(" "),t("ol",[t("li",[_._v("分而治之")]),_._v(" "),t("li",[_._v("模块独立性")]),_._v(" "),t("li",[_._v("复用性设计")]),_._v(" "),t("li",[_._v("灵活性设计")]),_._v(" "),t("li",[_._v("提高抽象层次")])]),_._v(" "),t("p",[t("img",{attrs:{src:"/soft_engineering/image-20210304170418939.png",alt:"image-20210304170418939"}})]),_._v(" "),t("h4",{attrs:{id:"耦合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#耦合"}},[_._v("#")]),_._v(" 耦合")]),_._v(" "),t("p",[_._v("定义：")]),_._v(" "),t("p",[_._v("耦合是程序结构中各个模块之间相互关联的度量，它取决于各个模块之间接口的复杂程度、调用模块的方式以及通过接口的信息类型。")]),_._v(" "),t("ol",[t("li",[_._v("非直接耦合\n"),t("ul",[t("li",[_._v("如果两个模块之间没有直接关系，即它们之间的联系完全通过主模块的控制和调用来实现的，这就是非直接耦合。")])])]),_._v(" "),t("li",[_._v("数据耦合\n"),t("ul",[t("li",[_._v("两模块之间仅通过参数表传递简单数据，则成这种耦合为数据耦合。")])])]),_._v(" "),t("li",[_._v("标记耦合\n"),t("ul",[t("li",[_._v("如果一组模块通过参数表传递记录信息，则称他们之间的耦合为标记耦合")])])]),_._v(" "),t("li",[_._v("控制耦合\n"),t("ul",[t("li",[_._v("如果一个模块传递给另一个模块的参数中包含了控制信息，该控制信息用于控制接受模块中的额执行逻辑，则他们之间的耦合称为控制耦合。")])])]),_._v(" "),t("li",[_._v("外部耦合\n"),t("ul",[t("li",[_._v("若一组模块都访问同一全局变量而不是同一全局数据结构，而且不是通过参数表传递该全局变量信息，则称为外部耦合。")])])]),_._v(" "),t("li",[_._v("公共耦合\n"),t("ul",[t("li",[_._v("若一组模块都访问同一个公共数据环境，则他们之间的耦合称为公共耦合。公共数据环境可以是全局数据结构、共享的通信去、内存的公共覆盖区。")])])]),_._v(" "),t("li",[_._v("内容耦合\n"),t("ul",[t("li",[_._v("一个模块直接访问另一模块的内部数据。")]),_._v(" "),t("li",[_._v("一个模块不通过正常入口转到了另一个模块内部。")]),_._v(" "),t("li",[_._v("两个模块有一部分程序代码重叠（汇编语言）。")]),_._v(" "),t("li",[_._v("一个模块有多个入口。")])])])]),_._v(" "),t("p",[t("img",{attrs:{src:"/soft_engineering/image-20210304172336987.png",alt:"image-20210304172336987"}})]),_._v(" "),t("p",[_._v("原则：尽量使用数据耦合，少用控制耦合，限制公共环境耦合，完全不用内容耦合。")]),_._v(" "),t("h4",{attrs:{id:"内聚"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内聚"}},[_._v("#")]),_._v(" 内聚")]),_._v(" "),t("ol",[t("li",[_._v("巧合内聚\n"),t("ul",[t("li",[_._v("又称偶然内聚。当模块内各部分之间没有联系，或者及时有联系，这种联系也很松散。如，一些没有任何联系的语句可能在许多模块中重复使用多次，程序员为了节省内存，把他们抽出来组成一个新的模块，这个模块就是巧合内聚模块。")])])]),_._v(" "),t("li",[_._v("逻辑内聚\n"),t("ul",[t("li",[_._v("这种模块把集中相关的功能组合在一起，每次调用时，有传送给模块的判定参数来确定该模块应该执行哪一种功能。")])])]),_._v(" "),t("li",[_._v("时间内聚\n"),t("ul",[t("li",[_._v("又称经典内聚。这种模块大多为多功能模块，但模块的各个功能的执行与时间有关，通常要求所有功能必须在同一时间段内执行，")])])]),_._v(" "),t("li",[_._v("过程内聚\n"),t("ul",[t("li",[_._v("如果一个模块内处理是相关的，而且必须以特定次序执行，则称这个模块为过程内聚。")])])]),_._v(" "),t("li",[_._v("通信内聚\n"),t("ul",[t("li",[_._v("如果一个模块内各部分功能都使用了相同的输入数据，或产生了相同的输出数据，则称之为通信内聚模块。")])])]),_._v(" "),t("li",[_._v("信息内聚\n"),t("ul",[t("li",[_._v("这种模块完成多个功能，各个功能都是在同一数据结构上操作，每一项功能都有一个唯一的入口点。信息内聚模块可以看成多个功能模块的组合，并且达到信息的隐蔽。")])])]),_._v(" "),t("li",[_._v("功能内聚\n"),t("ul",[t("li",[_._v("一个模块中各个部分都是完成某一具体功能必不可少的组成部分。客户机")])])])]),_._v(" "),t("p",[t("img",{attrs:{src:"/soft_engineering/image-20210304193200290.png",alt:"image-20210304193200290"}})]),_._v(" "),t("h2",{attrs:{id:"结构化设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结构化设计"}},[_._v("#")]),_._v(" 结构化设计")]),_._v(" "),t("h3",{attrs:{id:"结构化软件设计任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结构化软件设计任务"}},[_._v("#")]),_._v(" 结构化软件设计任务")]),_._v(" "),t("p",[_._v("结构化软件的主要任务是要解决“如何做”的问题，要在需求分析的基础上建立各种设计模型，并通过对设计模型的分析和评估来确定这些模型是否能够满足需求。")]),_._v(" "),t("p",[_._v("从工程管理的角度，可以将软件设计分为两个阶段："),t("strong",[_._v("概要设计阶段和详细设计阶段")]),_._v("。")]),_._v(" "),t("p",[_._v("从技术角度，传统的结构化方法将软件设计划分为"),t("strong",[_._v("体系结构设计、数据设计、接口设计和过程设计")]),_._v(" 4 个阶段")]),_._v(" "),t("p",[_._v("面向对象方法则将软件设计划分为"),t("strong",[_._v("体系结构设计、类设计/数据设计、接口设计和构建设计")]),_._v(" 4 个阶段")]),_._v(" "),t("h2",{attrs:{id:"基于数据流方法的设计过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于数据流方法的设计过程"}},[_._v("#")]),_._v(" 基于数据流方法的设计过程")]),_._v(" "),t("p",[_._v("基于数据流的设计方法也称为过程驱动的设计方法")]),_._v(" "),t("p",[_._v("基于拘留的设计方法可以很方便地将数据流图中表示的数据流映射成"),t("strong",[_._v("软件结构")])]),_._v(" "),t("h3",{attrs:{id:"典型的数据流类型和系统结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#典型的数据流类型和系统结构"}},[_._v("#")]),_._v(" 典型的数据流类型和系统结构")]),_._v(" "),t("p",[_._v("典型的数据流类型有变换型数据流和事物型数据流，数据流的类型不同，得到的系统结构不同。")])])}),[],!1,null,null,null);v.default=i.exports}}]);