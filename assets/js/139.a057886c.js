(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{712:function(a,t,v){"use strict";v.r(t);var s=v(7),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("ol",[v("li",[a._v("谈谈 JVM 的理解")]),a._v(" "),v("li",[a._v("什么是 OOM,StackOverFlowError")]),a._v(" "),v("li",[a._v("JVM 常用调优参数")]),a._v(" "),v("li",[a._v("内存快照如何抓取")]),a._v(" "),v("li",[a._v("类加载器")])]),a._v(" "),v("p",[v("img",{attrs:{src:"/interview/image-20210125163100419.png",alt:"image-20210125163100419"}})]),a._v(" "),v("h2",{attrs:{id:"类加载器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#类加载器"}},[a._v("#")]),a._v(" 类加载器")]),a._v(" "),v("p",[v("img",{attrs:{src:"/interview/image-20210125171137251.png",alt:"image-20210125171137251"}})]),a._v(" "),v("ol",[v("li",[a._v("启动（Bootstrap）类加载器")])]),a._v(" "),v("p",[a._v("启动类加载器主要加载的是JVM自身需要的类，这个类加载使用C++语言实现的，是虚拟机自身的一部分，它负责将 "),v("code",[a._v("/lib")]),a._v("路径下的核心类库或"),v("code",[a._v("-Xbootclasspath")]),a._v("参数指定的路径下的jar包加载到内存中，注意必由于虚拟机是按照文件名识别加载jar包的，如rt.jar，如果文件名不被虚拟机识别，即使把jar包丢到lib目录下也是没有作用的(出于安全考虑，Bootstrap启动类加载器只加载包名为java、javax、sun等开头的类)。")]),a._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[a._v("扩展（Extension）类加载器")])]),a._v(" "),v("p",[a._v("扩展类加载器是指Sun公司(已被Oracle收购)实现的"),v("code",[a._v("sun.misc.Launcher$ExtClassLoader")]),a._v("类，由Java语言实现的，是Launcher的静态内部类，它负责加载"),v("code",[a._v("/lib/ext")]),a._v("目录下或者由系统变量-Djava.ext.dir指定位路径中的类库，开发者可以直接使用标准扩展类加载器。")]),a._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[a._v("系统（System）类加载器")])]),a._v(" "),v("p",[a._v("也称应用程序加载器是指 Sun公司实现的"),v("code",[a._v("sun.misc.Launcher$AppClassLoader")]),a._v("。它负责加载系统类路径"),v("code",[a._v("java -classpath")]),a._v("或"),v("code",[a._v("-D java.class.path")]),a._v(" 指定路径下的类库，也就是我们经常用到的classpath路径，开发者可以直接使用系统类加载器，一般情况下该类加载是程序中默认的类加载器，通过"),v("code",[a._v("ClassLoader#getSystemClassLoader()")]),a._v("方法可以获取到该类加载器。")]),a._v(" "),v("h2",{attrs:{id:"native"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#native"}},[a._v("#")]),a._v(" native")]),a._v(" "),v("p",[a._v("使用native关键字说明这个方法是原生函数，也就是这个方法是用C/C++语言实现的，并且被编译成了DLL，由java去调用。\n这些函数的实现体在DLL中，JDK的源代码中并不包含，你应该是看不到的。对于不同的平台它们也是不同的。这也是java的底层机制，实际上java就是在不同的平台上调用不同的native方法实现对操作系统的访问的。")]),a._v(" "),v("h2",{attrs:{id:"gcroot"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gcroot"}},[a._v("#")]),a._v(" GCRoot")]),a._v(" "),v("ol",[v("li",[a._v("虚拟机栈中引用的对象")]),a._v(" "),v("li",[a._v("方法区中类静态属性引用的对象")]),a._v(" "),v("li",[a._v("方法区中常量引用的对象")]),a._v(" "),v("li",[a._v("本地方法栈中引用的对象")])])])}),[],!1,null,null,null);t.default=e.exports}}]);