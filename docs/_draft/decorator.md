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


<<< ./examples/decorator/class.ts

也可以返回一个新的类

<<< ./examples/decorator/change-class.ts


### 方法装饰器

<<< ./examples/decorator/method.ts

若想在函数运行时也执行装饰器的注入逻辑，可修改方法描述对象的 value 值

<<< ./examples/decorator/method-run-trigger.ts

:::tip
注意示例中高亮行，修改方法运行时需避免 this 的丢失
:::


也可直接返回修改的方法描述对象

<<< ./examples/decorator/method-run-trigger-return.ts

### 静态方法
除了类方法，装饰器也支持对静态方法的修改

<<< ./examples/decorator/static-method.ts


:::tip
注意静态方法装饰器的 target 为类，而非类的原型，一个简单的记忆原则是，
target 为修改内容的所属者，例如方法属于类的原型所以 target 为类，静态方式属于类
所以 target 为类，该规则适用于所有装饰器
:::


也可采用修改属性描述符，实现在调用时触发相关逻辑

<<< ./examples/decorator/static-method-run-trigger.ts

### 属性装饰器

<<< ./examples/decorator/property.ts

由于属性在实例化时才创建，而装饰器在类声明时就运行，如何实现在创建类时才执行描述符定义。
这里利用了 `Reflect.decorate` 方法。

<!-- TODO: 如何实现对象实例化时的动态注入 -->

:::tip
注意定义属性装饰器时不要传入 value 参数， ts 检查会报错，
详见 [Why I can't use decorator on property](https://github.com/microsoft/TypeScript/issues/19528)
:::

### 静态属性装饰器
静态属性也可使用装饰器

<<< ./examples/decorator/static-property.ts


### 访问器属性装饰器
也可设置访问器属性为装饰器。

<<< ./examples/decorator/accessor-property.ts


### 参数装饰器

参数装饰器,注意参数装饰器传入的第三个参数为 `index`， 参数对应索引值。

<<< ./examples/decorator/parameter.ts



### 装饰器工厂
利用装饰工厂动态创建装饰器，返回的装饰器会在类申明时运行。

<<< ./examples/decorator/decorator-factory.ts

### 装饰器组合
装饰器可以叠加使用。

<<< ./examples/decorator/decorator-composition.ts


注意组合装饰器是的执行顺序是从内往外。


## 注解(Annotations) 和装饰器 (decorator)
参考 [The difference between Annotations and Decorators](https://blog.thoughtram.io/angular/2015/05/03/the-difference-between-annotations-and-decorators.html)
注解为类提供额外的注释信息，可以采用装饰器语法实现该功能。



## 使用场景
### 元编程
typescript 内置了一些装饰器通过 `emitDecoratorMetadata` 配置打开。

```json
{
  "compilerOptions": {
    "emitDecoratorMetadata": true
  }
}
```

该配置会内置 [reflect-metadata](https://github.com/rbuckton/reflect-metadata) 相关装饰器






## 总结
1. 装饰器是一个函数，用于实现对类的动态修改，基本结构如下
    ```js
    function decorator(target, key ,value) {
        // 可以返回新的类或属性描述对象
    }

    ```
2. 类的装饰器入参为类，支持返回新的类替换原有类
3. 方法装饰器，入参为 `类的原型，方法名，方法描述符`，通过修改方法描述符实现运行时修改，支持返回新的属性描述符进行替换
4. 静态方法装饰器，入参的第一个参数为类，其他功能和方法装饰器类似
5. 属性装饰器,入参为 `类的原型，属性名`
6. 静态属性装饰器,入参为 `类的原型，属性名`
7. 访问器属性装饰器,入参为 `类的原型，属性名`
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
11. 额外注意事项
    1.  装饰器的运行时机是在类申明后，可以通过修改属性描述符实现方法运行时的动态插入
   
## 参考资料
* [装饰器提案](https://github.com/wycats/javascript-decorators)
* [装饰器](https://www.typescriptlang.org/docs/handbook/decorators.html)

