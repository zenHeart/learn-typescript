# 高阶类型

本章汇总之前未涉及的类型。


## typeof
typeof 在 JavaScript 中用于获取值的类型。你也可以在类型注释中使用来获取变量的类型。(严格来说 typeof 不是一种类型,只是一个操作符便于获取类型)

## 特殊符号 (unique symbol)
采用 `unique symbol` 创建一个特殊符号类型。

<<< ./examples/types/unique-symbol/basic.ts

详细资料参阅 [unique symbol](https://www.typescriptlang.org/v2/docs/handbook/release-notes/overview.html#unique-symbol)

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

