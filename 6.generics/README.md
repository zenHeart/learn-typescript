# 泛型(generic)

一个数组生成器,数组的值只包含一种类型,但该类型可能为字符串,数值,或对象。如何定义该函数实现对上述规则的检查,采用泛型即可定义通用类型模板解决上述问题?

[toc]

## 泛型定义
### 函数泛型定义
1. 单一参数,[示例函数泛型定义](./generics.ts)

    ```ts
    function functionName<T>(arg:T):T {
        // ...
        return arg;
    }
    ```
2. 多个参数,[示例函数泛型多个参数](./generics-multi-arg.ts)

    ```ts
    function functionName<T,U>(a1:T,a2:U):void {
        //
    }
    ```


**知识点:**

1. 泛型名称 `T,U` 可以为任意值,只是一个指示符号,通常用 `T` 表示



### 接口泛型定义

1.  通用定义,[示例泛型接口定义](./generics-interface.ts)

    ```ts
    interface InterfaceName<T> {
        (arg:T):T;
    }

    // 此方式可在定义时确定泛型的实际类型
    let val:InterfaceName<number>;
    ```

2. `<T>` 放入接口内

    ```ts
    interface InterfaceName {
        <T>(arg:T):T;
    }

    let val:InterfaceName;

    ```


## 泛型约束
如何设置泛型对应的类型是类数组类型,采用泛型约束实现对特定类型的限制

1. 泛型约束,[范例泛型约束](./generics-constraints.ts)

    ```ts
    // 1. 定义类型的约束条件
    interface Lengthwise {
        length: number;
    }
    
    // 2. 泛型 T 利用 extends 扩展接口,实现类型约束
    function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  
    return arg;
    } 
    ```


## 参考资料
* [官方文档 generic](https://www.typescriptlang.org/docs/handbook/generics.html)
