# 准备工作
该章节讲解环境配置和基本使用

## 枚举类型
1. 采用 `enum` 定义枚举类型,范例 [枚举定义](./enum.ts)
2. 枚举类型对应的变量可以定义初始值,范例 [枚举初始化](./enum-initializers.ts)
   1. 枚举变量为数值时,默认从 0 开始,按步长为 1 自增
   2. 可自行设定各枚举变量对应的值
3. 采用 `const enum` 申明的枚举类型,编译后枚举变量会被替换为对应值,不会生成枚举对象,范例 [枚举常量](./enum-constant-type.ts)

详情参见 [enums](https://www.typescriptlang.org/docs/handbook/enums.html)

## 本章学习 typescript 基本类型
* boolean bool 类型
* number 数值类型
* string 字符串类型
* Array 数组类型
  * <type>[] 对应类型的数组
  * Array<number> 同上
* tuple 元祖
  * [string,number] 字符串 整形
* enum 枚举
  * 采用 `enum` 定义枚举
  * 枚举类型
* any 任意类型
* void 只能赋值 null
* null,undefined 只能赋予对应值
* never 
* object