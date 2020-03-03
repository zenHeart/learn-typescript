# 类
该章节讲解环境配置和基本使用
详见 [interface](https://www.typescriptlang.org/docs/handbook/interfaces.html)

## 实例类型和构造器类型

```js
class Foo {
}
// 申明 foo 必须为 Foo 的实例
let foo:Foo = new Foo();
```

每当采用 class 语法创建一个类时， TypeScript 同时建立该类对应的实例类型。
`foo: Foo` 表示变量 foo 必须为，Foo 实例类型

但是如何定义 Foo 构造器对应的类型? 注意 Foo 的类名只是构造器函数的语法糖，
采用 `typeof Foo` 会提取 Foo 构造器作为类型!

参看示例 [构造器类型](./constructor-type.ts)


## 混入

有时可能需要在对象中动态注入方法，此时采用混入避免类型校验失败。

采用 `interface Obj extends <class1> <class2> ... {}` 申明混入

> 注意不要忽略最后一个对象实例 {}

参看示例 [mixin](./mixin.ts)

<!-- TODO: 为什么需要最后一个 {}  -->

## 知识点
1. 类定义
2. 类继承
3. 私有方法
4. protected 
5. readonly 修饰只读属性
6. 抽象类
7.  构造函数