# 装饰器

该章节讲解装饰器的使用。使用装饰器前确保, `tsconfig.json` 中打开了 `experimentalDecorators` 配置。

```json
{
    //...
    "compilerOptions": {
        // 打开装饰器配置
        "experimentalDecorators": true
        // ...
    }
}
```

## 装饰器概述
装饰器是处于 [草案阶段 stage2](https://github.com/wycats/javascript-decorators) 的 ECMAScript 语法，Typescript 基于此草案实现了改特性。

装饰器语法实现了对类的动态扩充，避免了直接对类的修改。是实现 [面向切面编程 AOP](https://en.wikipedia.org/wiki/Aspect-oriented_programming) 的一种手段。

TypeScript 提供了一系列装饰器语法来实现对类的动态修改，**TypeScript 和 js 草案在装饰器实现上有差异** 罗列如下：

装饰器| 功能| ts| js 草案
:---|:---|:---|:---|
类装饰器|扩充类| ✅| ✅
类方法装饰器|修改类的方法| ✅| ✅
类静态方法装饰器|修改类的静态方法| ✅| ✅
类属性装饰器|修改类的属性| ✅| ✅
类静态属性装饰器|修改类的静态属性| ✅| ✅
类访问器属性装饰器|修改类的访问器属性| ✅| ✅
类参数装饰器|修改类方法的参数| ✅| ⬜
装饰器工厂|动态设置装饰器| ✅| ✅
装饰器组合|混合多个装饰器| ✅| ✅


为什么没有函数的装饰器，详细讨论参见 [decorators for functions](https://github.com/NoBey/nobey/issues/44), 目前原因为函数提升导致了函数装饰器的不易实现，github 存在如下的 [function-decorators-proposal](https://github.com/finom/function-decorators-proposal) 解决此问题


<!-- TODO： 完成各类型装饰器的示例 -->
https://www.typescriptlang.org/docs/handbook/decorators.html




## 语法详解
### 类装饰器



### 装饰器表达式

### 装饰器工厂
动态创建装饰器


### 装饰器组合
<!-- TODO: 注意单行和多行声明模式 -->

## 使用场景

## 使用场景


## 总结
1. 装饰器用于运行时扩充类
2. 类的装饰器，入参为类
3. 静态方法装饰器,入参为类，方法名，描述对象
4. 静态属性装饰器,入参为类，属性名
5. 类的方法装饰器，入参为 类的原型，方法名，方法描述对象
6. 类的属性装饰器，入参为类的原型，属性名
8. 类的访问属性装饰器
7. 装饰器的执行时机是类初始化的时候
8. 装饰器工厂，返回装饰器用于实现动态设置装饰器
9.  多重装饰器，装饰器的叠加使用
10. 使用场景
   1. 类装饰器，动态扩充方法，混入
   2. 属性装饰器，
      1. 格式化属性值
      2. 校验属性值
   3. 方法装饰器
      1. 废弃方法申明
      2. 方法只读
   