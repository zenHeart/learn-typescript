// 原始类型
let boolVal:boolean = true;

// 对象类型
interface Person {
    name:string;
}

// 联合类型
type id = string | number;

// 交叉类型
type foo = 

* **原始类型(primitive types)** 类似 JavaScript 的基础类型,只是采用小写符号表示,例如 `boolean, number, string` 等
* **对象类型(object types)** 类似 JavaScript 引用类型,包含 `class,interface,function,array` 等
* **联合类型(unions types)** 类似不同类型求取并集,变量的值属于集合中任意类型均可
* **交叉类型(intersection types)** 类似不同类型求取交集,,变量的值必须同时具备多个类型的特征
* **类型参数(type parameters)** 限制类型的类型,例如泛型,后有详述

function greeter(person: string) {
  return 'Hello, ' + person;
}
let res = greeter('tom'); // 根据返回值推导 res:string
res = 1; // 触发类型推断
document.body.textContent = res;
