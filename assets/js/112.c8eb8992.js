(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{601:function(t,v,_){"use strict";_.r(v);var a=_(6),i=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"快速了解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快速了解"}},[t._v("#")]),t._v(" 快速了解")]),t._v(" "),_("h2",{attrs:{id:"项目简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目简介"}},[t._v("#")]),t._v(" 项目简介")]),t._v(" "),_("p",[t._v("EL-ADMIN 基于 Spring Boot 2.1.0 、 Spring Boot Jpa、 JWT、Spring Security、Redis、Vue、Element-UI 的前后端分离的后台管理系统，\n项目采用按功能分模块的开发方式，权限控制采用 RBAC 思想，支持数据字典与数据权限管理，支持一键生成前后端代码，支持前端菜单动态路由等")]),t._v(" "),_("h2",{attrs:{id:"主要特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主要特性"}},[t._v("#")]),t._v(" 主要特性")]),t._v(" "),_("ul",[_("li",[t._v("使用最新技术栈，社区资源丰富。")]),t._v(" "),_("li",[t._v("高效率开发，代码生成器可一键生成前后端代码")]),t._v(" "),_("li",[t._v("支持数据字典，可方便地对一些状态进行管理")]),t._v(" "),_("li",[t._v("支持接口限流，避免恶意请求导致服务层压力过大")]),t._v(" "),_("li",[t._v("支持接口级别的功能权限与数据权限，可自定义操作")]),t._v(" "),_("li",[t._v("自定义权限注解与匿名接口注解，可快速对接口拦截与放行")]),t._v(" "),_("li",[t._v("对一些常用地前端组件封装：表格数据请求、数据字典等")]),t._v(" "),_("li",[t._v("前后端统一异常拦截处理，统一输出异常，避免繁琐的判断")]),t._v(" "),_("li",[t._v("支持在线用户管理与服务器性能监控，支持限制单用户登录")]),t._v(" "),_("li",[t._v("支持运维管理，可方便地对远程服务器的应用进行部署与管理")])]),t._v(" "),_("h2",{attrs:{id:"主要功能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主要功能"}},[t._v("#")]),t._v(" 主要功能")]),t._v(" "),_("ul",[_("li",[t._v("用户管理：提供用户的相关配置，新增用户后，默认密码为123456")]),t._v(" "),_("li",[t._v("角色管理：对权限与菜单进行分配，可根据部门设置角色的数据权限")]),t._v(" "),_("li",[t._v("菜单管理：已实现菜单动态路由，后端可配置化，支持多级菜单")]),t._v(" "),_("li",[t._v("部门管理：可配置系统组织架构，树形表格展示")]),t._v(" "),_("li",[t._v("岗位管理：配置各个部门的职位")]),t._v(" "),_("li",[t._v("字典管理：可维护常用一些固定的数据，如：状态，性别等")]),t._v(" "),_("li",[t._v("系统日志：记录用户操作日志与异常日志，方便开发人员定位排错")]),t._v(" "),_("li",[t._v("SQL监控：采用druid 监控数据库访问性能，默认用户名admin，密码123456")]),t._v(" "),_("li",[t._v("定时任务：整合Quartz做定时任务，加入任务日志，任务运行情况一目了然")]),t._v(" "),_("li",[t._v("代码生成：高灵活度生成前后端代码，减少大量重复的工作任务")]),t._v(" "),_("li",[t._v("邮件工具：配合富文本，发送html格式的邮件")]),t._v(" "),_("li",[t._v("七牛云存储：可同步七牛云存储的数据到系统，无需登录七牛云直接操作云数据")]),t._v(" "),_("li",[t._v("支付宝支付：整合了支付宝支付并且提供了测试账号，可自行测试")]),t._v(" "),_("li",[t._v("服务监控：监控服务器的负载情况")]),t._v(" "),_("li",[t._v("运维管理：一键部署你的应用")])]),t._v(" "),_("h2",{attrs:{id:"项目结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[t._v("#")]),t._v(" 项目结构")]),t._v(" "),_("ul",[_("li",[_("p",[_("code",[t._v("eladmin-common")]),t._v(" 为系统的公共模块，各种工具类，公共配置存在该模块")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("eladmin-system")]),t._v(" 为系统核心模块也是项目入口模块，也是最终需要打包部署的模块")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("eladmin-logging")]),t._v(" 为系统的日志模块，其他模块如果需要记录日志需要引入该模块")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("eladmin-tools")]),t._v(" 为第三方工具模块，包含：图床、邮件、云存储、本地存储、支付宝")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("eladmin-generator")]),t._v(" 为系统的代码生成模块，代码生成的模板在 system 模块中")])])]),t._v(" "),_("h2",{attrs:{id:"详细结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#详细结构"}},[t._v("#")]),t._v(" 详细结构")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("- eladmin-common 公共模块\n    - annotation 为系统自定义注解\n    - aspect 自定义注解的切面\n    - base 提供了Entity、DTO基类和mapstruct的通用mapper\n    - config 自定义权限实现、redis配置、swagger配置、Rsa配置等\n    - exception 项目统一异常的处理\n    - utils 系统通用工具类\n- eladmin-system 系统核心模块（系统启动入口）\n\t- config 配置跨域与静态资源，与数据权限\n\t    - thread 线程池相关\n\t- modules 系统相关模块(登录授权、系统监控、定时任务、运维管理等)\n- eladmin-logging 系统日志模块\n- eladmin-tools 系统第三方工具模块\n- eladmin-generator 系统代码生成模块\n")])])])])}),[],!1,null,null,null);v.default=i.exports}}]);