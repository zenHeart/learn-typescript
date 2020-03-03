# 接口
该章节讲解环境配置和基本使用
详见 [interface](https://www.typescriptlang.org/docs/handbook/interfaces.html)

## 接口定义
采用 `interface` 定义接口

## property 定义
### 可选参数
利用 `?:` 定义可选参数


### 只读属性
采用 `readonly` 属性

### 额外属性定义
采用 `[propName: string]:any` 定义多余属性

### property 检查
1. 名字错误会被检查出来
2. const 用于变量

## 函数类型接口
1. 函数类型的变量名不会检查
2. 函数接口定义后后续函数无需重复

## 索引类型接口
1. 对于数组限制索引的类型
2. index 规则限制
3. 结合 readonly 属性
  

## 类
综合属性和函数接口


## 接口扩展

## 函数接口
注意 具名函数接口为对象属性

接口典型作用：https://devblogs.microsoft.com/typescript/walkthrough-interfaces/