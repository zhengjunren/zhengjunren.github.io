(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{462:function(s,t,a){"use strict";a.r(t);var n=a(29),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("可以把一个数组名作为一个同名指针来使用，或者把顺序的指针作为同名的数组名来使用。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("对于基类型相同的指针变量可以进行运算的有")]),s._v("("),a("RouterLink",{attrs:{to:"/c/case/#指针运算"}},[a("strong",[s._v("示例代码")])]),s._v(")：")],1),s._v(" "),a("ul",[a("li",[a("code",[s._v(">")]),s._v("和"),a("code",[s._v("<")]),s._v("：运算在两个同类型的指针间可以比较大小，比较原则应该是按照实际内存的高低位比较的")]),s._v(" "),a("li",[a("code",[s._v("=")]),s._v("：赋值")]),s._v(" "),a("li",[a("code",[s._v("-")]),s._v("：运算两个相同指针变量相减可以获得在之间相隔的同类型元素个数（在某个类型的数组中的应用）。")]),s._v(" "),a("li",[a("strong",[a("code",[s._v("+")]),s._v("：运算是不可以的，因为两个指针相加什么都得不到，所以规定不允许相加。")])])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("if-else")]),s._v("的配对是就近原则")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("指针数组")]),s._v("：")]),s._v(" "),a("ul",[a("li",[s._v("一个数组，若其元素均为指针类型数据，称为指针数组。")]),s._v(" "),a("li",[s._v("定义指针数组的一般形式：类型名 * 数组名[数组长度]；")]),s._v(" "),a("li",[s._v("如:"),a("code",[s._v("int *p[4];")]),s._v("  由于"),a("code",[s._v("[ ]")]),s._v("比"),a("code",[s._v("*")]),s._v("优先级高，因此"),a("code",[s._v("p")]),s._v("先于"),a("code",[s._v("[4]")]),s._v("结合，形成"),a("code",[s._v("p[4]")]),s._v(",这显然是数组的形式，表示"),a("code",[s._v("p")]),s._v("数组有4个元素。然后"),a("code",[s._v("p[4]")]),s._v("再和"),a("code",[s._v("*")]),s._v("结合，表示此数组的每个元素都可指向一个整型变量。")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("#include")]),s._v("命令行所包含的文件"),a("strong",[s._v("只能是纯文本文件")]),s._v("：")]),s._v(" "),a("ul",[a("li",[s._v("目标文件是编译器链接之后生成的文件，不能用#include")]),s._v(" "),a("li",[s._v("可执行文件是编译器编译之后生成的文件，不能用#include")]),s._v(" "),a("li",[s._v("二进制文件是编译器翻译代码用于编译的文件，不能用#include")])])]),s._v(" "),a("li",[a("p",[s._v("字符数组初始化可以为空字符串，字符变量不可以为空字符。")])])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// char a = '';   报错")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("p",[a("code",[s._v("printf")]),s._v("函数的输出控制符比输出参数少时，按照参数顺序输出，如果控制符比参数多，则输出不确定的值")])]),s._v(" "),a("li",[a("p",[s._v("下面代码中，s数组长度为 6、字符串长度为5；p数组长度为7，字符串长度为6")])])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdio.h>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<string.h>")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\ta\\017bc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// '\\017'是一个字符")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\ta\\018bc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// \\018是两个字符 '\\01' '8'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%d %d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("strlen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("strlen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出 5 6")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);