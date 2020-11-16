(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{228:function(s,t,a){"use strict";a.r(t);var n=a(5),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),a("h2",{attrs:{id:"数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[s._v("#")]),s._v(" 数组")]),s._v(" "),a("h3",{attrs:{id:"数组定义和引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组定义和引用"}},[s._v("#")]),s._v(" "),a("strong",[s._v("数组定义和引用")])]),s._v(" "),a("ol",[a("li",[s._v("一维数组的定义方式如下：")])]),s._v(" "),a("blockquote",[a("p",[s._v("类型说明符 数组名[下标]："),a("br"),s._v("\n下标可以为："),a("br"),s._v("\n1、C89/C90标准：定义数组时下标只允许使用整型、字符型常量，引用数组时下标可以使用整型、字符型的常量或者变量"),a("br"),s._v("\n2、C99标准：定义数组时下标可以使用整型、字符型的常量或变量，但变量必须已经赋值；引用数组时下标可以使用整型、字符型的常量或者变量。以上所说的常量及变量均包含表达式。")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("数组元素的表示形式为：")])]),s._v(" "),a("blockquote",[a("p",[s._v("数组名[下标];下标可以是整型常量、整型表达式、整型变量、常量表达式")])]),s._v(" "),a("ul",[a("li",[s._v("当程序执行中，数组元素下标超出所定义下标范围时，系统将"),a("strong",[s._v("不会")]),s._v("给出“下标越界的出错信息”")])]),s._v(" "),a("h3",{attrs:{id:"二维数组元素引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二维数组元素引用"}},[s._v("#")]),s._v(" 二维数组元素引用")]),s._v(" "),a("p",[a("code",[s._v("(*(a+i))[j]")]),s._v("与"),a("code",[s._v("*(a+i)[j]")]),a("br"),s._v("\n第一个表达式就是a[i][j]，不解释"),a("br"),s._v("\n第二个表达式由于"),a("code",[s._v("[]")]),s._v("优先级高，解释为"),a("code",[s._v("*((a+i)[j])")]),s._v("，编译器解析为"),a("code",[s._v("*(*(a+i+j)+0)")]),s._v("，即"),a("code",[s._v("a[i+j][0]")])]),s._v(" "),a("h3",{attrs:{id:"字符数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符数组"}},[s._v("#")]),s._v(" 字符数组")]),s._v(" "),a("p",[s._v("字符数组初始化可以为空字符串，字符变量不可以为空字符。")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// char a = '';   报错")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("下面代码中，s数组长度为 6、字符串长度为5；p数组长度为7，字符串长度为6")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdio.h>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<string.h>")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\ta\\017bc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// '\\017'是一个字符")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\ta\\018bc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// \\018是两个字符 '\\01' '8'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%d %d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("strlen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("strlen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出 5 6")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[s._v("#")]),s._v(" 函数")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("printf")]),a("strong",[s._v("函数的输出控制符比输出参数少时，按照参数顺序输出，如果控制符比参数多，则输出不确定的值")])]),s._v(" "),a("li",[a("strong",[s._v("如果不指定函数类型，系统会隐含指定函数类型为int")])]),s._v(" "),a("li",[a("strong",[s._v("如果函数funA调用了函数funB，函数funB又调用了函数funA，则成为函数的间接递归调用")])]),s._v(" "),a("li",[a("strong",[s._v("scanf()&gets()")]),s._v(" "),a("ul",[a("li",[s._v('gets的输入分割符只有回车，因此gets是能够读入空格的。如果输入为"hello world"时，读取"hello world"。而如果用scanf则只能读取hello')]),s._v(" "),a("li",[s._v("scanf ：当遇到回车，空格和tab键会自动在字符串后面添加’\\0’，但是回车，空格和tab键仍会留在输入的缓冲区中。")]),s._v(" "),a("li",[s._v("gets：可接受回车键之前输入的所有字符，并用’\\0’替代 ‘\\n’.回车键不会留在输入缓冲区中")])])])]),s._v(" "),a("h3",{attrs:{id:"宏和函数的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏和函数的区别"}},[s._v("#")]),s._v(" 宏和函数的区别")]),s._v(" "),a("p",[s._v("函数和宏函数的区别就在于，"),a("strong",[s._v("宏函数占用了大量的空间，而函数占用了时间")]),s._v("。大家要知道的是，函数调用是要使用系统的栈来保存数据的，如果编译器里有栈检查选项，一般在函数的头会嵌入一些汇编语句对当前栈进行检查；同时，CPU也要在函数调用时保存和恢复当前的现场，进行压栈和弹栈操作，所以，"),a("strong",[s._v("函数调用需要一 些CPU时间")]),s._v("。而宏函数不存在这个问题。"),a("strong",[s._v("宏函数仅仅作为预先写好的代码嵌入到当前程序，不会产生函数调用，所以仅仅是占用了空间")]),s._v("，在频繁调用同一个宏函数的时候，该现象尤其突出。")]),s._v(" "),a("h2",{attrs:{id:"指针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指针"}},[s._v("#")]),s._v(" 指针")]),s._v(" "),a("h3",{attrs:{id:"对于基类型相同的指针变量可以进行运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对于基类型相同的指针变量可以进行运算"}},[s._v("#")]),s._v(" 对于基类型相同的指针变量可以进行运算")]),s._v(" "),a("p",[s._v("("),a("RouterLink",{attrs:{to:"/c/case/#指针运算"}},[a("strong",[s._v("示例代码")])]),s._v(")")],1),s._v(" "),a("ul",[a("li",[a("code",[s._v(">")]),s._v("和"),a("code",[s._v("<")]),s._v("：运算在两个同类型的指针间可以比较大小，比较原则应该是按照实际内存的高低位比较的")]),s._v(" "),a("li",[a("code",[s._v("=")]),s._v("：赋值")]),s._v(" "),a("li",[a("code",[s._v("-")]),s._v("：运算两个相同指针变量相减可以获得在之间相隔的同类型元素个数（在某个类型的数组中的应用）。")]),s._v(" "),a("li",[a("strong",[a("code",[s._v("+")]),s._v("：运算是不可以的，因为两个指针相加什么都得不到，所以规定不允许相加。")])])]),s._v(" "),a("h3",{attrs:{id:"指针数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指针数组"}},[s._v("#")]),s._v(" "),a("strong",[s._v("指针数组")]),s._v("：")]),s._v(" "),a("ul",[a("li",[s._v("一个数组，若其元素均为指针类型数据，称为指针数组。")]),s._v(" "),a("li",[s._v("定义指针数组的一般形式：类型名 * 数组名[数组长度]；")]),s._v(" "),a("li",[s._v("如:"),a("code",[s._v("int *p[4];")]),s._v("  由于"),a("code",[s._v("[ ]")]),s._v("比"),a("code",[s._v("*")]),s._v("优先级高，因此"),a("code",[s._v("p")]),s._v("先于"),a("code",[s._v("[4]")]),s._v("结合，形成"),a("code",[s._v("p[4]")]),s._v(",这显然是数组的形式，表示"),a("code",[s._v("p")]),s._v("数组有4个元素。然后"),a("code",[s._v("p[4]")]),s._v("再和"),a("code",[s._v("*")]),s._v("结合，表示此数组的每个元素都可指向一个整型变量。")])]),s._v(" "),a("h3",{attrs:{id:"给指针变量赋空值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给指针变量赋空值"}},[s._v("#")]),s._v(" 给指针变量赋空值：")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\np "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\np "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\np "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("#include")]),s._v("命令行所包含的文件"),a("strong",[s._v("只能是纯文本文件")]),s._v("：\n"),a("ul",[a("li",[s._v("目标文件是编译器链接之后生成的文件，不能用#include")]),s._v(" "),a("li",[s._v("可执行文件是编译器编译之后生成的文件，不能用#include")]),s._v(" "),a("li",[s._v("二进制文件是编译器翻译代码用于编译的文件，不能用#include")])])]),s._v(" "),a("li",[a("code",[s._v("if-else")]),s._v("的配对是就近原则")]),s._v(" "),a("li",[s._v("可以把一个数组名作为一个同名指针来使用，或者把顺序的指针作为同名的数组名来使用。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);