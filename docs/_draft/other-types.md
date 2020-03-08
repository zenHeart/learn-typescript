# 其他类型

本章汇总在类型系统中未介绍到的典型的类型使用技术

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