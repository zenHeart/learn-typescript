# 高阶类型

本章汇总之前未涉及的类型。


## typeof
typeof 在 JavaScript 中用于获取值的类型。你也可以在类型注释中使用来获取变量的类型。(严格来说 typeof 不是一种类型,只是一个操作符便于获取类型)




## 特殊符号 (unique symbol)
采用 `unique symbol` 创建一个特殊符号类型。

<<< ./examples/types/unique-symbol/basic.ts

详细资料参阅 [unique symbol](https://www.typescriptlang.org/v2/docs/handbook/release-notes/overview.html#unique-symbol)

## this  
采用 this 指代当前的对象类型。
在动态扩充对象方法时,利用 this 避免调用出错。

<<< ./examples/types/this/basic.ts

阅读 [this-typing](https://www.typescriptlang.org/v2/docs/handbook/release-notes/overview.html#this-typing) 进一步理解。

也可在函数中申明 this,限定函数中 this 的使用。

<<< ./examples/types/this/function.ts

阅读 [Specifying the type of this for functions](https://www.typescriptlang.org/v2/docs/handbook/release-notes/overview.html#specifying-the-type-of-this-for-functions) 进一步理解。

## 索引类型 (index type)
在之前 [索引类型](./tutorial/3.2.builtin-literal-object.md#索引类型) 已做过简单介绍,此处详细讨论其特性。

### 索引签名 (index signatures)

形如 `[标识符:类型]: 类型` 的形式称为索引签名,
它限制了对象属性可取的类型。注意标识符的类型只支持字符串和数值格式。

<<< ./examples/types/index-types/basic.ts{27,30}

注意高亮行,由于数字索引实际上也是字符串,所以限制标识符为字符串类型也可创建数组。

:::tip
这也符合 JavaScript 的特性, `a = [1,2]`,采用 a['1'],a[1.00] 均可访问到元素 a[1]
:::

采用索引签名申明类型会限制,其他属性也必须属于索引签名的类型。

<<< ./examples/types/index-types/index-constraint.ts

根据 [TypeScript 规范 3.9.4](https://github.com/microsoft/TypeScript/blob/master/doc/spec.md#394-index-signatures) 索引特征在创建类型时只能出现一次

<<< ./examples/types/index-types/single.ts


## 查找类型(lookup type)
在 JavaScript 中我们常会采用 `Object.keys` 来提取对象的键名。为了实现动态提取键名和对应类型,TypeScript 创建查找类型解决此问题。查找类型的核心内容包括。

* **索引类型查询(index type queries)** 采用 keyof 迭代对象
* **索引类型访问(Indexed access types)** 采用 T[K] 获取索引的类型。

### keyof
keyof 用于提取对象的键名,返回对象键名组成的联合类型。

<<< ./examples/operator/keyof/basic.ts

结合索引类型访问 `T[K]` 可以提取对象部分属性组成新类型。

<<< ./examples/operator/keyof/generic.ts

<!-- TODO: 补充此处讲解 -->
补充数值和符号的枚举 [number and symbol](https://www.typescriptlang.org/v2/docs/handbook/release-notes/overview.html#support-number-and-symbol-named-properties-with-keyof-and-mapped-types)

交叉类型也可采用 `keyof` 此时会返回对应键名的联合类型。

<<< ./examples/operator/keyof/intersection.ts

交叉类型的其他介绍推荐 [Improved keyof with intersection types](https://www.typescriptlang.org/v2/docs/handbook/release-notes/overview.html#improved-keyof-with-intersection-types)

理解 keyof 的源头,推荐阅读 
* TypeScript 仓库 issue [Static types for dynamically named properties ](https://github.com/microsoft/TypeScript/pull/11929)
* 官方 2.1 发布说明 [keyof and Lookup Types](https://www.typescriptlang.org/v2/docs/handbook/release-notes/overview.html#keyof-and-lookup-types)


## 映射类型 (mapped type )
映射类型属于对象类型,可在属性申明模板上通过迭代属性名,映射新的类型。

### in
在 JavaScript [in](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#in) 用于判断对象或原型链是否包含某属性,也用于`for in` 的循环语句中迭代对象的键名。TypeScript 借鉴了此概念采用 in 操作符,在属性申明的模板上迭代属性名映射新的类型。

<<< ./examples/operator/in/basic.ts

除了迭代字符串字面量,也可迭代数值字面量。

<<< ./examples/operator/in/number-literal.ts

也可迭代枚举类型,注意**属性名为枚举类型标识符的值而标识符的名称**。

<<< ./examples/operator/in/enum.ts

一个典型的用例是结合泛型,来动态创建类型。

<<< ./examples/operator/in/generic.ts

这正是 TypeScript 内部提供的 [Record<K,T>](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkt) 的原理。

进一步阅读查看 [mapped types](https://www.typescriptlang.org/v2/docs/handbook/release-notes/overview.html#mapped-types)

### 结合 keyof
结合索引类型查询 `keyof`,你可创造更多复杂的类型模板。

<<< ./examples/operator/in/tools.ts


### 数组或元祖使用
可以利用 `in` 迭代数组结合之前的操作符,可产生类似数组的 map 方法,用于创建新的类型。

<<< ./examples/types/mapped-types/promise.ts

示例利用 `in` 结合索引类型,将元祖类型装换为了包含 Promise 的元祖。

延伸阅读 [github issues Mapped Types](https://github.com/Microsoft/TypeScript/pull/12114) 

:::tip
TypeScript 内置了一套类型模板,详见 [Utility Types
](https://www.typescriptlang.org/docs/handbook/utility-types.html)
:::

### 映射类型修饰符
对象类型中,可通过 `readonly,?` 属性修饰符表示只读和可选。
在映射类型中可利用 `-,+` 表示删除或者添加的只读或可选修饰符。

<<< ./examples/types/mapped-types/modifier-minus.ts

详细资料参阅 [Improved control over mapped type modifiers](https://www.typescriptlang.org/v2/docs/handbook/release-notes/overview.html#improved-control-over-mapped-type-modifiers)

## 条件类型 (conditional type)
采用 `T extends U ? X :Y` 表示条件类型。表达式含义为若类型 T 可以赋值给类型 U 则
类型为 X ,否则为 Y 。

<<< ./examples/types/conditional-types/basic.ts

可以组合多个条件类型。

<<< ./examples/types/conditional-types/multi.ts

### 分配性条件类型(Distributive conditional types)
采用 `T extends U? X :Y` 进行条件类型判断时,若类型 T 为联合类型 `A | B | C` 则此时条件判断的结果会拆分为  `(A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y)`。

<<< ./examples/advance-type/distributive.ts


详细资料参见 [条件类型](https://www.typescriptlang.org/v2/docs/handbook/release-notes/overview.html#conditional-types)


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



## 内建的公用类型
TypeScript 提供了一系列全局类型，用于方便使用。

* 多类型处理
  * `Record<K,T>` 创建键名属于类型 K ，键值属于 T 的类型，[范例 Record]()
  * `Pick<T,K>` 创建类型 T 中键名符合类型 K 的子类型，[范例 Record](./pick.ts)
  * `Omit<T,K>` 创建类型 T 中键名不符合类型 K 的子类型，效果是 `Pick` 相对 [范例 Record](./pick.ts)
  * `Exclude<T,K>` 创建 T 类型中除去 K 类型后的子类型，类似集合的补集，[范例 Exclude](./exclude.ts)
  * `Extract<T,K>` 创建同时属于 T,K 类型的子类型，类似集合的交集，[范例 Extract](./extract.ts)
  * `NonNullable<T>` 创建 T 中非 null 和 undefined 的子类型，效果同 `Exclude<T,null|undefined>`，[范例 NonNullable](./)
* 函数类子类型
  * `Parameters<T>` 创建函数类型 T 的参数类型组成的元祖，[范例 Parameters](./parameters.ts)
  * `ConstructorParameters<T>` 创建构造器类型 T 的参数组成的元祖， [范例 ConstructorParameters]
  * `ReturnType<T>` 创建函数类型 T 的返回值类型组成的元祖， [范例 ReturnType]()
  * `InstanceType<T>` 创建类类型 T 对应的实例类型 [范例 InstanceType](./instance-type.ts)
  * `ThisParameterType<T>` 提取函数类型 T,this 参数对应的类型，[范例 ThisParameterType](./this-parameters-type.ts)
    > `--strictFunctionTypes` 配置使能后生效
  * `OmitThisParameters<T>` 创建函数类型 T除去 this 参数后的函数，[范例 OmitThisParameters](./omit-this-parameters.ts)
    > `--strictFunctionTypes` 配置使能后生效
  * `ThisType<T>` 创建函数类型 T除去 this 参数后的函数，[范例 ThisType](./this-type.ts)
    > `--noImplicitThis` 配置使能后生效
* 类型修改
  * `Readonly<T>` 创建类型 T 的所有属性为只读的类型，[范例 Readonly](./readonly.ts)
  * `Required<T>` 创建类型 T 的所有属性为必选的类型 [范例 Required](./required.ts)
  * `Partial<T>` 创建属于类型 T 的子类型，[范例 Partial](./partial.ts)
