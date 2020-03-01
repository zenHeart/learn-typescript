# 概念

本章讲解 TypeScript 的核心概念。

## 核心概念

**类型**

类型是你采用 TypeScript 

典型的类型包括 

* 联合类型
* 接口
* 类
* 枚举申明
* import 导入的指向其他类型的引用

**值**
值是语句可以在运行时引用的变量。
如下语法创建值

* let,const,var 申明
* 包含值的 namespace 或 module 申明
* enum 申明
* class 申明
* 引用值的 import 申明
* 函数申明

**命名空间**

当定义 let x: A.B.C;TypeScript 识别 C 属于 `A.B` 的命名空间。
可以把命名空间理解为集合关系,TypeScript 通过判断元素 C 是否属于集合 `A.B` 进行类型判断。
