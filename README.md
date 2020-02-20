---
title: TypeScript    
tags:  TypeScript js     
birth: 2017-08-22      
modified: 2017-08-22      
---

# TypeScript

**TypeScript 学习笔记**


##  概述
### 为什么要学习 TypeScript

**1. 强类型校验避免类型处理错误**

js 属于弱类型语言,这导致在代码编写过程中,若函数未对输入参数做出严格限制,极易出现异常,例如未判断 null 为对象,导致类似 [ReferenceError: "x" is not defined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined) 的错误

此外采用类型校验无需再添加输入判断等逻辑,精简代码。

**2. 规范代码结构,易于维护**

利用申明文件确定项目架构的核心对象和数据结构,及便于后续系统设计,也便于维护人员快速代码核心架构。

**3. 扩充了 js 语言特性,便于代码编写**

基于 TypeScript 提供的 interface,enum 等语言特性可方便其他语言开发者迅速上手,同时弥补当前 js 语言不具备的语言特性。


除了上述优点需要权衡如下劣势:

1. TypeScript 扩充了 js 语言的类型,并添加了 enum,interface,泛型等一系列语言特性,具有一定学习成本
2. 类型定义是一把双面剑,未声明好项目类型定义的规则会导致书写和维护成本增大
3. TypeScript 会导致额外的编译操作,编译结果可能会引入额外逻辑,需酌情考量

### 何时使用 TypeScript
当项目本声出现大量的类型检查逻辑,或基于 OOP 思想进行架构时, 建议使用 TypeScript。

## 章节组成
1. [准备工作](./1.prepare/README.md) 讲解环境安装和基本概念
2. [基本类型](./2.basic-type/README.md) 详细讲解 TypeScript 提供的基本类型
3. [函数类型](./3.function/README.md) 详细讲解函数类型的定义
4. [类](./4.class/README.md) 讲解类提供的语言特性和类型定义
5. [接口](./5.interface/README.md) 讲解基于接口的类型定义
6. [泛型](./6.generics/README.md) 泛型系统
7. [高阶类型](./7.advance-type/README.md) 内建类型和结构
* [ ] 8. 配置 

