# 类型编程
抛出问题？

我们学会了如何使用 Typescript 内置的类型系统进行类型校验。
但在实际使用中，有大量类型校验需要逻辑判断，
这种复杂的类型处理 TypeScript 官方文档
叫做 [类型操作](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)， 这里笔者更愿意称之为类型编程，重点在于， 可将类型操作类比为各种语句，通过组合不同的语句
，实现对复杂类型的处理。这种概念映射可以更高效的帮助书写和理解复杂的类型函数。


本章将从语言的角度深入分析，基于 Typescript 提供的类型表示能力，
如何采用类似编程的方式解决复杂类型处理。该章节受 [TypeScript Berlin Meetup #2: Generics, Conditional types and Mapped types](https://www.youtube.com/watch?v=PJjeHzvi_VQ&list=PLy3Kqj2R0dpcQ_bRRE8NrS0vBIK1hn7Pk&index=1) 启发产生。

## 基本的映射关系

javascript | typescript
:---|:---|
原始值、数组、对象| 原始类型、元祖类型、结构类型
变量| 泛型
循环语句| 映射类型
判断语句| 条件类型
函数 | type

## 递归类型
如何表示类似 JSON 的对象类型。由于JSON 本声支持任意深度嵌套
这里采用类型别名实现递归类型

<<< ./examples/types/type-alias/recursive.ts

另一个示例表示 Virtual DOM 节点

<<< ./examples/types/type-alias/recursive-virtual-node.ts

也可使用 interface 来表示递归对象

<<< ./examples/types/interface/recursive-object.ts

尝试表示 Promise 等对象来进一步理解递归类型。

[官方文档 Recursive Type Aliases](https://www.typescriptlang.org/docs/handbook/release-notes/overview.html#more-recursive-type-aliases)

