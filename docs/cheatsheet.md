---
sidebar: auto
---

# 知识点

## 类型系统
1. 原始类型
   1. 基本类型 es6 的基础类型
   2. 特殊基础类型 void,never,any
2. 对象类型 object 所有 js 引用类型
   > `--strictNullChecks` 默认关闭，此时基础类型值 null,undefined 可以赋值给其他类型，因为 null,undefined 是所有其他类型的子类型
3. 元祖 
   1. 元祖之外的元素为联合类型 https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-3.html#tuple-types
4. 接口类型
   1. 采用 `?:` 声明可选参数
   2. 采用 `readonly` 修饰只读参数
   3.  `ReadonlyArray<T>` 修饰只读数组
       1.  使用 const 和 readonly 的选择 <https://www.typescriptlang.org/v2/docs/handbook/interfaces.html#readonly-vs-const>
             1.  变量 const
             2.  属性 readonly
             3.  索引类型实现扩展 `[index:string]:any`
             4.  索引类型约束字段，详见 <https://www.typescriptlang.org/v2/docs/handbook/interfaces.html#excess-property-checks>
             5.  综合 readonly 和索引类型定义
5. 类
  1. 访问控制
     1. private 类中才可访问，实例无法访问
     2. protected 类和子类才可访问，实例无法访问
        1. 构造函数也可限制，表示只有扩展类才可实例化
     3. public 类实例均可以访问
     4. 结合 readonly 限制属性
     <!-- TODO: 构造函数名字为只读为什么 -->
     1. 构造函数名字限制为只读，没看懂 https://www.typescriptlang.org/v2/docs/handbook/classes.html#parameter-properties
     2. 访问器
        1. 只有 get 自动推到为 readonly
     3. 静态成员
  2. 构造器约束和实例约束 <https://www.typescriptlang.org/v2/docs/handbook/interfaces.html#difference-between-the-static-and-instance-sides-of-classes>
  3. 继承
     1. `implements` 实现接口
     2. `extends shape,..` 实现d多继承，详见 https://www.typescriptlang.org/v2/docs/handbook/interfaces.html#extending-interfaces
     3. 组合 `implements extend` 使用
     <!--TODO: 5 没看懂  -->
     1. 接口继承类类型 <https://www.typescriptlang.org/v2/docs/handbook/interfaces.html#interfaces-extending-classes> 没看懂此特性
  4. 抽象类
     1. 抽象方法
  5. 构造器类型和实例类型
  6. 接口继承类类型 https://www.typescriptlang.org/v2/docs/handbook/classes.html#using-a-class-as-an-interface
  <!-- TODO: 添加装饰器使用说明，不建议使用了解即可 -->
  1. 装饰器 https://www.typescriptlang.org/v2/docs/handbook/decorators.html
  2. 混入 https://www.typescriptlang.org/v2/docs/handbook/mixins.html
5. 函数
  1. 参数和返回值的注解
  2. 内联函数注解
    > 采用有意义的参数注解函数便于使用，参看 https://www.typescriptlang.org/v2/docs/handbook/functions.html#writing-the-function-type
  3. 可选参数
  4. 剩余参数
  5. this 限制 https://www.typescriptlang.org/v2/docs/handbook/functions.html#this-parameters
  6. 重载
  7. 解构标注
6. 枚举类型
  1. 数值类型枚举
  2. 字符串枚举
  3. 混合枚举，不建议使用
  4. 常量枚举
  5. 枚举初始化
     1. 基本规则
     2. 初始值后的计算规则
     3. 采用表达式初始化
  6. 枚举的类型推导 
  7. 枚举的运行时特性
  8. 枚举的反向映射特性
  9. 高级用法
     1. 枚举成员作为类型限制符号 https://www.typescriptlang.org/v2/docs/handbook/enums.html#union-enums-and-enum-member-types
     <!-- TODO: 没看懂 -->
     1. Ambient enums https://www.typescriptlang.org/v2/docs/handbook/enums.html#ambient-enums 
7. 组合类型
  1.  联合类型 1.4 加入 https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-4.html#union-types
  2. 交叉类型
8. 泛型
  1. 泛型基本使用
  2. 泛型变量
  3. 泛型类
  4. 泛型类型操作
     1. `extends` 实现泛型约束
     2. `new` 泛型构造函数
     3. `keyof`  
9.  高阶类型
   1. 字面量类型
      1.  数值字面量
      2.  字符串字面量 https://github.com/Microsoft/TypeScript/pull/5185
   2. 类型别名
      1.  `type`
      2.  泛型的类型别名
      3.  类型别名和接口的区别 https://www.typescriptlang.org/v2/docs/handbook/advanced-types.html#interfaces-vs-type-aliases
   3. `Discriminated Unions` https://www.typescriptlang.org/v2/docs/handbook/advanced-types.html#discriminated-unions
   4. this 的多态 https://www.typescriptlang.org/v2/docs/handbook/advanced-types.html#polymorphic-this-types
   5. 索引类型
      1. `keyof` 后去泛型的字面量联合类型
   6. 映射类型
      1. `in` 迭代联合类型
   7. 条件类型 https://www.typescriptlang.org/v2/docs/handbook/advanced-types.html#conditional-types
      1. 预定义的条件类型  https://www.typescriptlang.org/v2/docs/handbook/advanced-types.html#type-inference-in-conditional-types
   8. 分配置条件类型 https://www.typescriptlang.org/v2/docs/handbook/advanced-types.html#distributive-conditional-types
   9. 工具类型 https://www.typescriptlang.org/v2/docs/handbook/utility-types.html
10. 模块
   1.  模块解析
11. 命名空间
12. JSX 的类型系统

## 类型断言
1. `<>` 
2. as 语法   
> 当运行时需要根据不同入参进行处理使采用断言避免报错
3. 对象使用类型断言详见 <https://www.typescriptlang.org/v2/docs/handbook/interfaces.html#excess-property-checks>

## 类型守卫
用于条件判断 https://www.typescriptlang.org/v2/docs/handbook/advanced-types.html 解决运行时类型判断

类型守卫 https://devblogs.microsoft.com/typescript/typescript-1-4-sneak-peek-union-types-type-guards-and-more/

1. `is`
2. `in`
3. `typeof`
4. `strictNullChecks` 限制赋值
> 类型守卫和类型断言的区别 https://www.typescriptlang.org/v2/docs/handbook/advanced-types.html#type-guards-and-type-assertions


类型守卫,类型判断语法会被 TypeScript 理解,并影响类型推导。



## 类型注释
1. `:` 进行注释
2. 结构对象的类型注解
3. `?:` 表示可选字段
4. js 文件采用 jsdoc 注释 https://www.typescriptlang.org/v2/docs/handbook/type-checking-javascript-files.html

## 类型推导 
https://www.typescriptlang.org/v2/docs/handbook/type-inference.html
1. 上下文推导 https://www.typescriptlang.org/v2/docs/handbook/functions.html#inferring-the-types
2. 耗尽检查 https://www.typescriptlang.org/v2/docs/handbook/advanced-types.html#exhaustiveness-checking
3. 条件类型推导 https://www.typescriptlang.org/v2/docs/handbook/advanced-types.html#type-inference-in-conditional-types
4. 类型兼容 https://www.typescriptlang.org/v2/docs/handbook/type-compatibility.html#subtype-vs-assignment
   1. 子类型兼容
   2. 赋值兼容
5. 类型申明，用于创建类型
6. 重点理解创建值的申明会产生运行时代码， 表 https://www.typescriptlang.org/v2/docs/handbook/declaration-merging.html#basic-concepts
7. 申明合并
   1. 后申明顺序在上
   2. 含有字面量则优先
   3. 不同类型的合并
   4. 模块增加类型
8. 工具特性
9. 三元指令 [Triple-Slash Directives](https://www.typescriptlang.org/v2/docs/handbook/triple-slash-directives.html)
   1. `/// <reference path="..." />` 索引额外的文件编译

10. 类型系统 如何定义类型
11. 静态类型检测 如何识别类型错误
12. 类型推导
13. 类型注释
14. 运行时类型检测
15. 类型导出
16. 申明
17. 工具特性


vue 使用 ts https://github.com/DanielRosenwasser/typescript-vue-todomvc

--strictNull 操作符
