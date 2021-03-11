(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{217:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"常见函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见函数"}},[t._v("#")]),t._v(" 常见函数")]),t._v(" "),a("h2",{attrs:{id:"qsort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qsort"}},[t._v("#")]),t._v(" qsort")]),t._v(" "),a("h3",{attrs:{id:"声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明"}},[t._v("#")]),t._v(" 声明")]),t._v(" "),a("p",[t._v("void qsort(void *base, size_t nitems, size_t size, int (*compar)(const void "),a("em",[t._v(", const void")]),t._v("))")]),t._v(" "),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("ul",[a("li",[t._v("base -- 指向要排序的数组的第一个元素的指针。")]),t._v(" "),a("li",[t._v("nitems -- 由 base 指向的数组中元素的个数。")]),t._v(" "),a("li",[t._v("size -- 数组中每个元素的大小，以字节为单位。")]),t._v(" "),a("li",[t._v("compar -- 用来比较两个元素的函数。")])]),t._v(" "),a("p",[t._v("compar 参数")]),t._v(" "),a("p",[t._v("compar 参数指向一个比较两个元素的函数。比较函数的原型应该像下面这样。注意两个形参必须是 const void * 型，同时在调用 compar 函数（compar 实质为函数指针，这里称它所指向的函数也为 compar）时，传入的实参也必须转换成const void * 型。在 compar 函数内部会将 const void * 型转换成实际类型，见下文。")]),t._v(" "),a("p",[t._v("int compar(const void *p1, const void *p2);\n如果 compar 返回值小于 0（< 0），那么 p1 所指向元素会被排在p2所指向元素的前面如果 compar 返回值等于 0（= 0），那么 p1 所指向元素与 p2 所指向元素的顺序不确定如果 compar 返回值大于 0（> 0），那么 p1 所指向元素会被排在 p2 所指向元素的后面。")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdlib.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("num2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// num1 比 num2 大")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("num2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("68")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("qsort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" compare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("arrayPrint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("h2",{attrs:{id:"sscanf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sscanf"}},[t._v("#")]),t._v(" sscanf")]),t._v(" "),a("h3",{attrs:{id:"声明-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明-2"}},[t._v("#")]),t._v(" 声明")]),t._v(" "),a("p",[t._v("int sscanf(const char *str, const char *format, ...)")]),t._v(" "),a("h3",{attrs:{id:"参数-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数-2"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("ul",[a("li",[t._v("str -- 这是 C 字符串，是函数检索数据的源。")]),t._v(" "),a("li",[t._v("format -- 这是 C 字符串，包含了以下各项中的一个或多个：空格字符、非空格字符 和 format 说明符。\nformat 说明符形式为 [=%[*][width][modifiers]type=]，具体讲解如下：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("*")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("这是一个可选的星号，表示数据是从流 stream 中读取的，但是可以被忽视，即它不存储在对应的参数中。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("width")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("这指定了在当前读取操作中读取的最大字符数。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("modifiers")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("为对应的附加参数所指向的数据指定一个不同于整型（针对 d、i 和 n）、无符号整型（针对 o、u 和 x）或浮点型（针对 e、f 和 g）的大小： h ：短整型（针对 d、i 和 n），或无符号短整型（针对 o、u 和 x） l ：长整型（针对 d、i 和 n），或无符号长整型（针对 o、u 和 x），或双精度型（针对 e、f 和 g） L ：长双精度型（针对 e、f 和 g）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("一个字符，指定了要被读取的数据类型以及数据读取方式。具体参见下一个表格。")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("合格的输入")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("参数的类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("c")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("单个字符：读取下一个字符。如果指定了一个不为 1 的宽度 width，函数会读取 width 个字符，并通过参数传递，把它们存储在数组中连续位置。在末尾不会追加空字符。")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("char *")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("d")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("十进制整数：数字前面的 + 或 - 号是可选的。")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int *")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("e,E,f,g,G")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("浮点数：包含了一个小数点、一个可选的前置符号 + 或 -、一个可选的后置字符 e 或 E，以及一个十进制数字。两个有效的实例 -732.103 和 7.12e4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("float *")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("o")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("八进制整数。")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int *")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("字符串。这将读取连续字符，直到遇到一个空格字符（空格字符可以是空白、换行和制表符）。")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("char *")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("u")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无符号的十进制整数。")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("unsigned int *")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("x,X")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("十六进制整数。")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("int *")])])])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<string.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// sprintf(str, "I am %d year old, I say %s", 20, "how are you");')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// puts(str);")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" year"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" month"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sscanf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-08-19"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d-%d-%d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("year"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("month"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%d-%d-%d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" year"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" month"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" day"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h2",{attrs:{id:"sprintf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sprintf"}},[t._v("#")]),t._v(" sprintf")]),t._v(" "),a("h3",{attrs:{id:"声明-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明-3"}},[t._v("#")]),t._v(" 声明")]),t._v(" "),a("p",[t._v("int sprintf(char *str, const char *format, ...)")]),t._v(" "),a("h3",{attrs:{id:"参数-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数-3"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("ul",[a("li",[t._v("str -- 这是指向一个字符数组的指针，该数组存储了 C 字符串。")]),t._v(" "),a("li",[t._v("format -- 这是字符串，包含了要被写入到字符串 str 的文本。它可以包含嵌入的 format 标签，format 标签可被随后的附加参数中指定的值替换，并按需求进行格式化。format 标签属性是 %[flags][width][.precision][length]specifier，具体讲解如下：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("specifier（说明符）")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("输出")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("c")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("字符")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("d 或 i")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有符号十进制整数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("e")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用 e 字符的科学科学记数法（尾数和指数）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("E")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用 E 字符的科学科学记数法（尾数和指数）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("f")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("十进制浮点数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("g")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("自动选择 %e 或 %f 中合适的表示法")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("G")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("自动选择 %E 或 %f 中合适的表示法")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("o")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("有符号八进制")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("字符的字符串")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("u")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无符号十进制整数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("x")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无符号十六进制整数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无符号十六进制整数（大写字母）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("p")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("指针地址")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("n")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无输出")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("字符")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("flags")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在给定的字段宽度内左对齐，默认是右对齐（参见 width 子说明符）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("+")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("强制在结果之前显示加号或减号（+ 或 -），即正数前面会显示 + 号。默认情况下，只有负数前面会显示一个 - 号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("(space)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("如果没有写入任何符号，则在该值前面插入一个空格。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("在指定填充 padding 的数字左边放置零（0），而不是空格（参见 width 子说明符）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("#")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("与 o、x 或 X 说明符一起使用时，非零值前面会分别显示 0、0x 或 0X。与 e、E 和 f 一起使用时，会强制输出包含一个小数点，即使后边没有数字时也会显示小数点。默认情况下，如果后边没有数字时候，不会显示显示小数点。与 g 或 G 一起使用时，结果与使用 e 或 E 时相同，但是尾部的零不会被移除。")])])])]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<string.h>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sprintf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I am %d year old, I say %s"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"how are you"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("puts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h2",{attrs:{id:"strstr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strstr"}},[t._v("#")]),t._v(" strstr()")]),t._v(" "),a("h3",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("p",[t._v("C 库函数 char *strstr(const char *haystack, const char *needle) 在字符串 haystack 中查找第一次出现字符串 needle 的位置，不包含终止符 '\\0'。")]),t._v(" "),a("h3",{attrs:{id:"声明-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明-4"}},[t._v("#")]),t._v(" 声明")]),t._v(" "),a("p",[t._v("下面是 strstr() 函数的声明。")]),t._v(" "),a("p",[t._v("char *strstr(const char *haystack, const char *needle)")]),t._v(" "),a("h3",{attrs:{id:"参数-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数-4"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("ul",[a("li",[t._v("haystack -- 要被检索的 C 字符串。")]),t._v(" "),a("li",[t._v("needle -- 在 haystack 字符串内要搜索的小字符串。")])]),t._v(" "),a("h3",{attrs:{id:"返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),a("p",[t._v("该函数返回在 haystack 中第一次出现 needle 字符串的位置，如果未找到则返回 null。")]),t._v(" "),a("h2",{attrs:{id:"strncpy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strncpy"}},[t._v("#")]),t._v(" strncpy()")]),t._v(" "),a("h3",{attrs:{id:"描述-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-2"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("p",[t._v("C 库函数 char *strncpy(char *dest, const char *src, size_t n) 把 src 所指向的字符串复制到 dest，最多复制 n 个字符。当 src 的长度小于 n 时，dest 的剩余部分将用空字节填充。")]),t._v(" "),a("h3",{attrs:{id:"声明-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明-5"}},[t._v("#")]),t._v(" 声明")]),t._v(" "),a("p",[t._v("下面是 strncpy() 函数的声明。")]),t._v(" "),a("p",[t._v("char *strncpy(char *dest, const char *src, size_t n)")]),t._v(" "),a("h3",{attrs:{id:"参数-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数-5"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("ul",[a("li",[t._v("dest -- 指向用于存储复制内容的目标数组。")]),t._v(" "),a("li",[t._v("src -- 要复制的字符串。")]),t._v(" "),a("li",[t._v("n -- 要从源中复制的字符数。")])]),t._v(" "),a("h3",{attrs:{id:"返回值-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值-2"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),a("p",[t._v("该函数返回最终复制的字符串。")]),t._v(" "),a("h2",{attrs:{id:"strncat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strncat"}},[t._v("#")]),t._v(" strncat()")]),t._v(" "),a("h3",{attrs:{id:"描述-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述-3"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("p",[t._v("C 库函数 char *strncat(char *dest, const char *src, size_t n) 把 src 所指向的字符串追加到 dest 所指向的字符串的结尾，直到 n 字符长度为止。")]),t._v(" "),a("h3",{attrs:{id:"声明-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明-6"}},[t._v("#")]),t._v(" 声明")]),t._v(" "),a("p",[t._v("下面是 strncat() 函数的声明。")]),t._v(" "),a("p",[t._v("char *strncat(char *dest, const char *src, size_t n)")]),t._v(" "),a("h3",{attrs:{id:"参数-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数-6"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("ul",[a("li",[t._v("dest -- 指向目标数组，该数组包含了一个 C 字符串，且足够容纳追加后的字符串，包括额外的空字符。")]),t._v(" "),a("li",[t._v("src -- 要追加的字符串。")]),t._v(" "),a("li",[t._v("n -- 要追加的最大字符数。")])]),t._v(" "),a("h3",{attrs:{id:"返回值-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值-3"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),a("p",[t._v("该函数返回一个指向最终的目标字符串 dest 的指针。")]),t._v(" "),a("h2",{attrs:{id:"常见函数的返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见函数的返回值"}},[t._v("#")]),t._v(" 常见函数的返回值")]),t._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("SEEK_CUR")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("SEEK_END")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("SEEK_SET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("EOF")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"fclose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fclose"}},[t._v("#")]),t._v(" fclose()")]),t._v(" "),a("p",[t._v("int fclose(FILE *stream)")]),t._v(" "),a("p",[t._v("如果流成功关闭，则该方法返回零。如果失败，则返回 EOF(即-1)。")]),t._v(" "),a("h3",{attrs:{id:"feof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feof"}},[t._v("#")]),t._v(" feof()")]),t._v(" "),a("p",[t._v("int feof(FILE *stream)")]),t._v(" "),a("p",[t._v("当设置了与流关联的文件结束标识符时，该函数返回一个非零值，否则返回零。")]),t._v(" "),a("h3",{attrs:{id:"fopen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fopen"}},[t._v("#")]),t._v(" fopen()")]),t._v(" "),a("p",[t._v("FILE *fopen(const char *filename, const char *mode)")]),t._v(" "),a("p",[t._v("该函数返回一个 FILE 指针。否则返回 NULL，且设置全局变量 errno 来标识错误。")]),t._v(" "),a("h3",{attrs:{id:"fread"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fread"}},[t._v("#")]),t._v(" fread()")]),t._v(" "),a("p",[t._v("size_t fread(void *ptr, size_t size, size_t nmemb, FILE *stream)")]),t._v(" "),a("p",[t._v("成功读取的元素总数会以 size_t 对象返回，size_t 对象是一个整型数据类型。如果总数与 nmemb 参数不同，则可能发生了一个错误或者到达了文件末尾。")]),t._v(" "),a("h3",{attrs:{id:"fseek"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fseek"}},[t._v("#")]),t._v(" fseek()")]),t._v(" "),a("p",[t._v("int fseek(FILE *stream, long int offset, int whence)")]),t._v(" "),a("p",[t._v("如果成功，则该函数返回零，否则返回非零值。")]),t._v(" "),a("h3",{attrs:{id:"ftell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ftell"}},[t._v("#")]),t._v(" ftell()")]),t._v(" "),a("p",[t._v("long int ftell(FILE *stream)")]),t._v(" "),a("p",[t._v("该函数返回位置标识符的当前值。如果发生错误，则返回 -1L，全局变量 errno 被设置为一个正值。")]),t._v(" "),a("h3",{attrs:{id:"fwrite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fwrite"}},[t._v("#")]),t._v(" fwrite()")]),t._v(" "),a("p",[t._v("size_t fwrite(const void *ptr, size_t size, size_t nmemb, FILE *stream)")]),t._v(" "),a("p",[t._v("如果成功，该函数返回一个 size_t 对象，表示元素的总数，该对象是一个整型数据类型。如果该数字与 nmemb 参数不同，则会显示一个错误。")]),t._v(" "),a("h3",{attrs:{id:"fprint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fprint"}},[t._v("#")]),t._v(" fprint()")]),t._v(" "),a("p",[t._v("int fprintf(FILE *stream, const char *format, ...)")]),t._v(" "),a("p",[t._v("如果成功，则返回写入的字符总数，否则返回一个负数。")]),t._v(" "),a("h3",{attrs:{id:"fscanf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fscanf"}},[t._v("#")]),t._v(" fscanf()")]),t._v(" "),a("p",[t._v("int fscanf(FILE *stream, const char *format, ...)")]),t._v(" "),a("p",[t._v("如果成功，该函数返回成功匹配和赋值的个数。如果到达文件末尾或发生读错误，则返回 EOF。")]),t._v(" "),a("h3",{attrs:{id:"fgetc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fgetc"}},[t._v("#")]),t._v(" fgetc()")]),t._v(" "),a("p",[t._v("int fgetc(FILE *stream)")]),t._v(" "),a("p",[t._v("该函数以无符号 char 强制转换为 int 的形式返回读取的字符，如果到达文件末尾或发生读错误，则返回 EOF。")]),t._v(" "),a("h3",{attrs:{id:"fgets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fgets"}},[t._v("#")]),t._v(" fgets()")]),t._v(" "),a("p",[t._v("char *fgets(char *str, int n, FILE *stream)\n如果成功，该函数返回相同的 str 参数。如果到达文件末尾或者没有读取到任何字符，str 的内容保持不变，并返回一个空指针。")]),t._v(" "),a("p",[t._v("如果发生错误，返回一个空指针。")]),t._v(" "),a("h3",{attrs:{id:"fputc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fputc"}},[t._v("#")]),t._v(" fputc()")]),t._v(" "),a("p",[t._v("int fputc(int char, FILE *stream)")]),t._v(" "),a("p",[t._v("如果没有发生错误，则返回被写入的字符。如果发生错误，则返回 EOF，并设置错误标识符。")]),t._v(" "),a("h3",{attrs:{id:"fputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fputs"}},[t._v("#")]),t._v(" fputs()")]),t._v(" "),a("p",[t._v("int fputs(const char *str, FILE *stream)")]),t._v(" "),a("p",[t._v("该函数返回一个非负值，如果发生错误则返回 EOF。")])])}),[],!1,null,null,null);s.default=n.exports}}]);