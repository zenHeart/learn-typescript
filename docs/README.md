# TypeScript 概述

该指南针对熟悉 JavaScript 的开发者。这里不假设你有强类型语言开发经验，例如 `C、C++、JAVA` 诸如此类。但是你必须熟悉 `ES6` 语法，包括 `Symbol` 类型、`let,const` 申明、解构、剩余参数、箭头函数、ESM 模块系统、类语法等， 若不熟悉上述知识推荐 JavaScript 高级程序作者 Nicholas C .Zakas [深入理解 ES6](http://www.dfhuo.com/es6.pdf)


## TypeScript 是什么
TypeScript 是微软开源的编程语言。属于 JavaScript 语言的超集。这意味着**所有合法的 JavaScript 语言也是 TypeScript 语言**。除此之外 TypeScript 提供了如下特性增强 JavaScript 的开发体验:
1. **静态类型检查系统** 提供可擦除的类型校验机制
    > 静态类型检查是指在代码运行之前对类型校验，TypeScript 的类型系统在编译为 JavaScript 时会擦除类型检查，避免额外的运行时开销
2. **扩充语法** 提供枚举、接口、泛型、抽象类等语法，增强 JavaScript 在面向对象，函数式编程等不同范式下的开发体验。

## 为什么要学习 TypeScript



**1. 强类型校验避免弱类型导致的编码错误**

JavaScript 属于弱类型语言，这导致在代码编写过程中，若函数未对输入参数做出严格限制，极易出现异常，例如对象检查未排除 null,导致类似 [ReferenceError: "x" is not defined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined) 的错误。

**2. 类型系统可以解释系统结构辅助设计**

基于 TypeScript 提供的类型系统，开发者在代码设计初期就需要考虑各种类型限制，这实际上可以帮助开发者提炼项目的核心数据结构，辅助设计。并且项目新成员可以根据项目暴露的核心类型结构理解项目，增强代码可读性和维护性。

**3. 扩充了 JavaScript 语言特性，完善不同编程范式下的开发效率**

JavaScript 是基于原型链实现的对象继承，对于熟悉了接口，抽象类，私有方法等特性的 OOP 开发者并不友好，基于 TypeScript 对上述语言特性的支持，还有枚举、命名空间等扩充特性，可方便其他语言开发者快速上手，并帮助 JavaScript 开发者更好组织 OOP 或 函数式的代码。


**4. 配合 IDE 提供良好的开发体验**

编辑器可以基于 TypeScript 的类型检查，进行智能推导和提示，提高代码编写效率。



## 正确理解 TypeScript

TypeScript 设计重点放在类型检查上，是对 JavaScript 弱类型语言的增强。你应该把它类比为 eslint 等工具，TypeScript 基于类型系统补充了 JavaScript 的不足，并利用扩充的语言特性增强了 JavaScript 在大型项目下的组织能力。

所以在学习 TypeScript 时记住如下核心原则 **不要把它作为替代 JavaScript 的语言学习，重点放在理解并运用 TypeScript 类型系统的功能上**，这也是本教程的主旨!



这里推荐阅读 [TypeScript  官方定义的设计目标](https://github.com/microsoft/TypeScript/wiki/TypeScript-Design-Goals) 来进一步理解理解 TypeScript 存在的价值:

**目标:**

1. 静态识别可能出错的结构
2. 提供一个结构机制用于组织大型代码
3. 产出代码不要增加运行时负担
4. 产出干净，惯用的，可识别的 JavaScript 代码
5. 产出一种可组合且易于推理的语言
6. 向当前和未来的 ECMAScript 规范靠拢
7. 保留所有 JavaScript 代码运行时特性
8. 避免添加表达式层面的语法
9. 使用一致，完全可擦除的结构化类型系统
10. 成为跨平台的工具
11. 不要和 TypeScript 发生破坏性迭代

**非目标:**
1. 完全模仿现有语言，使用当前 JavaScript 的特性和编程设计者的意图来开发一门更有价值的语言作为替代。
2. 激进的优化程序运行时性能，产出在运行平台性能更良好的 JavaScript 代码
3. 专注于完全或证明正确的类型系统，取代在正确性和高产性上进行平衡。
4. 提供一个端到端的编译管道，取代创建一个可扩展的外部工具用于编译器或其他更复杂的构建流
5. 在编码中添加或依赖与运行时的类型信息，或产出基于类型系统的不同代码。取代鼓励不依赖于运行时元数据的编程模式
6. 提供额外的运行时函数或库。取代使用 TypeScript 描述已经存在的库
7. 引入一些可能使用户惊讶的特性。取代其他语言经过考量而采用的通用模式。

## 如何学习 TypeScript 
基于本教程对应不同使用目的开发者。
推荐推荐如下学习顺序

* **类型系统** 针对无任何 typescript 经验的开发者
* **深入类型** 针对有一定使用经验开发者，并提供更为高级的特性讲解
* **使用案例** 针对 typescript 不同场景下的使用给以说明，帮助新手和有经验的开发者快速将 typescript 集成到项目中。
