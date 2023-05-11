(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{409:function(_,e,v){"use strict";v.r(e);var o=v(42),t=Object(o.a)({},(function(){var _=this,e=_.$createElement,v=_._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"模块解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#模块解析"}},[_._v("#")]),_._v(" 模块解析")]),_._v(" "),v("p",[_._v("在 TypeScript 中使用 "),v("code",[_._v("import a from 'ModuleA'")]),_._v(" 或\n"),v("code",[_._v("import a from './ModuleA'")]),_._v(" 语法时，TypeScript 如何确定 "),v("code",[_._v("ModuleA")]),_._v(" 的实际位置？编译器分析导入内容位置的过程就是本章讨论的"),v("strong",[_._v("模块解析")]),_._v(" 。")]),_._v(" "),v("h2",{attrs:{id:"模块解析概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#模块解析概述"}},[_._v("#")]),_._v(" 模块解析概述")]),_._v(" "),v("p",[_._v("TypeScript 存在两种典型的 "),v("strong",[_._v("模块解析")]),_._v(" 策略。")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("Classic")])]),_._v(" "),v("li",[v("strong",[_._v("Node")])])]),_._v(" "),v("h2",{attrs:{id:"关联导入和非关联导入"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关联导入和非关联导入"}},[_._v("#")]),_._v(" 关联导入和非关联导入")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("关联导入(relative import)")]),_._v(" 以 "),v("code",[_._v("/,./,../.")]),_._v(" 开头的导入，本地文件的导入")]),_._v(" "),v("li",[v("strong",[_._v("非关联导入(non-relative import)")]),_._v(" 模块名的方式导入，引用三方的模块导入，例如 "),v("code",[_._v('import * as $ from "jquery",import { Component } from "@angular/core";')]),_._v(" ，非关联导入具有如下特性\n"),v("ul",[v("li",[_._v("可以通过 "),v("code",[_._v("baseUrl")]),_._v(" 配置改变 "),v("strong",[_._v("模块解析")]),_._v(" 规则")]),_._v(" "),v("li",[_._v("会解析 ambient module declarations")])])])]),_._v(" "),v("h2",{attrs:{id:"模块解析策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#模块解析策略"}},[_._v("#")]),_._v(" 模块解析策略")]),_._v(" "),v("ul",[v("li",[v("strong",[_._v("moduleResolution")]),_._v(" 配置可以修改解析策略")]),_._v(" "),v("li",[_._v("未显示指定模块解析策略时根据配置的 "),v("code",[_._v("module")]),_._v(" 类型处理解析规则\n"),v("ul",[v("li",[v("strong",[_._v("commonjs")]),_._v(" 采用 node 解析")]),_._v(" "),v("li",[v("strong",[_._v("amd, system, umd, es2015, esnext")]),_._v(" 采用 classic 模式解析")])])])]),_._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[_._v("TIP")]),_._v(" "),v("p",[_._v("在开发 npm 包时，若定义模块为 "),v("code",[_._v("es2015, esnext")]),_._v(" 的 esm 导出方式，则建议配置 "),v("code",[_._v("moduleResolution")]),_._v(" 为 node, 采用类似 node 的方式处理模块解析")])]),_._v(" "),v("h2",{attrs:{id:"classic-策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#classic-策略"}},[_._v("#")]),_._v(" Classic 策略")]),_._v(" "),v("ol",[v("li",[v("strong",[_._v("关联导入")]),_._v(" "),v("ol",[v("li",[_._v("先解析路径下的 "),v("code",[_._v(".ts")]),_._v(" 为后缀的文件")]),_._v(" "),v("li",[_._v("若无则查找 "),v("code",[_._v(".d.ts")]),_._v(" 文件")])])]),_._v(" "),v("li",[v("strong",[_._v("非关联导入")]),_._v(" "),v("ol",[v("li",[_._v("在当前目录查找 "),v("code",[_._v(".ts")]),_._v(" 为后缀的模块名文件")]),_._v(" "),v("li",[_._v("若无，则在当前目录查找 "),v("code",[_._v(".d.ts")]),_._v(" 结尾的模块名文件")]),_._v(" "),v("li",[_._v("若无则，则在上一级目录重复步骤 1，2")]),_._v(" "),v("li",[_._v("若无则重复步骤 3")])])])]),_._v(" "),v("blockquote",[v("p",[_._v("若最后模块解析失败，ts 会抛出 "),v("code",[_._v("error TS2307: Cannot find module xxx.")]),_._v(" 的信息")])]),_._v(" "),v("h2",{attrs:{id:"node-策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#node-策略"}},[_._v("#")]),_._v(" Node 策略")]),_._v(" "),v("p",[_._v("加载机制详见 "),v("a",{attrs:{href:"https://nodejs.org/api/modules.html#modules_addenda_the_mjs_extension",target:"_blank",rel:"noopener noreferrer"}},[_._v("node 模块加载机制"),v("OutboundLink")],1)]),_._v(" "),v("p",[_._v("重点如下:")]),_._v(" "),v("ul",[v("li",[_._v("相对路径\n"),v("ul",[v("li",[_._v("node 会先加载不带任何后缀的文件作为 js 文件解析，随后按照  "),v("code",[_._v("js,json,node")]),_._v(" 的后缀加载文件")]),_._v(" "),v("li",[_._v("若文件无法查找到，按照同名文件夹会读取 "),v("code",[_._v("package.json")]),_._v(" "),v("strong",[_._v("main")]),_._v(" 字段，不存在会查找 "),v("code",[_._v("index")]),_._v(" 文件按照 "),v("code",[_._v("js,json,node")]),_._v(" 扩展顺序进行加载\n"),v("blockquote",[v("p",[_._v("注意此处不会加载没有扩展名文件，若文件夹下 index 无扩展名会直接抛出错误")])])])])]),_._v(" "),v("li",[_._v("绝对路径\n"),v("ul",[v("li",[_._v("对于不包含路径的模块，会先去加载内部模块若失败，会根据"),v("code",[_._v("module.paths")]),_._v(" 的一系列目录加载，回逐级向上查找 "),v("code",[_._v("node_modules")]),_._v(" 目录寻找模块\n"),v("blockquote",[v("p",[_._v("可以通过 "),v("code",[_._v("NODE_PATH")]),_._v(" 来增加解析路径。利用 "),v("code",[_._v(":")]),_._v(" 分隔多个目录。windows 为 "),v("code",[_._v(";")])])])])])])]),_._v(" "),v("p",[_._v("TypeScript 的规则类似")]),_._v(" "),v("ol",[v("li",[_._v("相对路径查找 "),v("code",[_._v("./moduleB")]),_._v(" "),v("ol",[v("li",[_._v("在当前路径查找名为 "),v("code",[_._v("moduleB.ts,moduleB.tsx,moduleB.d.ts")]),_._v(" 的文件")]),_._v(" "),v("li",[_._v("在当前路径的 "),v("code",[_._v("package.json")]),_._v(" 查找 types 字段对应的文件位置")]),_._v(" "),v("li",[_._v("在当前路径 "),v("code",[_._v("moduleB")]),_._v(" 文件夹下查找 "),v("code",[_._v("index.ts,index.tsx,index.d.ts")]),_._v(" 文件")]),_._v(" "),v("li",[_._v("若未找到退化到 node 的查找机制")])])]),_._v(" "),v("li",[_._v("绝对路径，查找 "),v("code",[_._v("moduleB")]),_._v(" "),v("ol",[v("li",[_._v("在 "),v("code",[_._v("node_modules")]),_._v(" 目录查找后缀为 "),v("code",[_._v("moduleB.ts,moduleB.tsx,moduleB.d.ts")]),_._v("  文件")]),_._v(" "),v("li",[_._v("在 "),v("code",[_._v("node_modules/moduleB/package.json")]),_._v(" "),v("code",[_._v("types")]),_._v(" 字段查找 "),v("code",[_._v(".ts,.tsx,.d.ts")]),_._v(" 文件")]),_._v(" "),v("li",[_._v("在 "),v("code",[_._v("node_modules/moduleB")]),_._v("  字段查找 "),v("code",[_._v("index.ts,index.tsx,index.d.ts")]),_._v(" 文件")]),_._v(" "),v("li",[_._v("在 "),v("code",[_._v("node_modules/@types/moduleB.d.ts")]),_._v("  字段查找 "),v("code",[_._v("index.ts,index.tsx,index.d.ts")]),_._v(" 文件")]),_._v(" "),v("li",[_._v("在 "),v("code",[_._v("node_modules/@types/moduleB")]),_._v("  字段查找 "),v("code",[_._v("index.ts,index.tsx,index.d.ts")]),_._v(" 文件")]),_._v(" "),v("li",[_._v("重复 1-5 向上一层查找 "),v("code",[_._v("node_modules")]),_._v(" 目录")])])])]),_._v(" "),v("h2",{attrs:{id:"模块解析配置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#模块解析配置"}},[_._v("#")]),_._v(" 模块解析配置")]),_._v(" "),v("p",[_._v("除了上述默认查找规则，可以利用如下配置定义解析器查找机制。")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("baseUrl")]),_._v(" 所有非相对路径模块导入会参考此地址导入。")]),_._v(" "),v("li",[v("code",[_._v("paths")]),_._v(" 有时模块的位置上述查找无法生效，例如 jquery 的编译文件定义在 "),v("code",[_._v("node_modules/jquery/dist/jquery")]),_._v(" 为了避免查找失败，通过此路径匹配\n"),v("blockquote",[v("p",[_._v("注意 "),v("code",[_._v("paths")]),_._v(" 的值是相对于 "),v("code",[_._v("baseUrl")]),_._v(" 而言的，所以需要设置 "),v("code",[_._v("baseUrl")]),_._v(" 为 "),v("code",[_._v(".")]),_._v(" 避免查找失败\n也可利用此示例实现跨模块查找")])])]),_._v(" "),v("li",[v("code",[_._v("rootDirs")]),_._v(" 实现编译时的动态载入，详见 "),v("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#virtual-directories-with-rootdirs",target:"_blank",rel:"noopener noreferrer"}},[_._v("rootDirs"),v("OutboundLink")],1)])]),_._v(" "),v("h2",{attrs:{id:"export-type"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#export-type"}},[_._v("#")]),_._v(" export type")]),_._v(" "),v("p",[_._v("详见 "),v("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/release-notes/overview.html#type-only-imports-and-export",target:"_blank",rel:"noopener noreferrer"}},[_._v("export type"),v("OutboundLink")],1)]),_._v(" "),v("h2",{attrs:{id:"知识点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[_._v("#")]),_._v(" 知识点")]),_._v(" "),v("ol",[v("li",[_._v("解决什么问题")]),_._v(" "),v("li",[_._v("核心概念有哪些\n"),v("ol",[v("li",[_._v("导入定义\n"),v("ol",[v("li",[v("strong",[_._v("关联导入(relative import)")]),_._v(" 以 "),v("code",[_._v("/,./,../.")]),_._v(" 开头的导入")]),_._v(" "),v("li",[v("strong",[_._v("非关联导入(non-relative import)")])])])])])]),_._v(" "),v("li",[_._v("如何影响该特性")]),_._v(" "),v("li",[_._v("实际使用场景")])])])}),[],!1,null,null,null);e.default=t.exports}}]);