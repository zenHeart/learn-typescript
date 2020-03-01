---
title: TypeScript    
tags:  TypeScript  
---

# TypeScript

**TypeScript 学习笔记**


##  概述
### 为什么要学习 TypeScript

**1. 强类型校验避免弱类型导致的编码错误**

js 属于弱类型语言,这导致在代码编写过程中,若函数未对输入参数做出严格限制,极易出现异常,例如未判断 null 为对象,导致类似 [ReferenceError: "x" is not defined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined) 的错误

此外采用类型校验无需再添加输入判断等逻辑,精简代码。

**2. 规范代码结构,易于维护**

利用申明文件确定项目架构的核心对象和数据结构,便于后续系统设计,也便于维护人员快速理解代码核心架构。

**3. 扩充了 js 语言特性,降低强类型语言者学习门槛**

基于 TypeScript 类型机制, 及额外提供的 interface,enum,namespace 等特性可方便强类型语言开发者迅速上手,同时增强 js 语言在不同编程范式下的开发体验。


**4. 配合 vscode 等编辑器提供友好的编写支持**

编辑器可以基于 TypeScript 的类型检查,进行智能推导和提示,提高代码编写效率。




### 如何学习 TypeScript

TypeScript 设计重点放在类型检查上。基于静态类型检查提供对 JavaScript 的类型判断。

> 

在学习 TypeScript 记住如下核心原则 **不要把它当成一门语言学习,重点放在理解并运用 TypeScript 的静态类型检查的功能上**,这也是本教程的主旨!


## 章节组成
1. [准备工作](./1.prepare/README.md) 讲解环境安装和基本概念
    1. 概念
       1. 区分申明和类型定义!!!!
2. [基本类型](./2.basic-type/README.md) 详细讲解 TypeScript 提供的基本类型
3. [函数类型](./3.function/README.md) 详细讲解函数类型的定义
4. [类](./4.class/README.md) 讲解类提供的语言特性和类型定义
5. [接口](./5.interface/README.md) 讲解基于接口的类型定义
6. [泛型](./6.generics/README.md) 泛型系统
7. [高阶类型](./7.advance-type/README.md) 内建类型和结构
* [ ] 8. 配置 

