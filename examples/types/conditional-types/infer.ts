// infer 只能在条件类型的 extends 子句中使用
// 用于从类型中推断出某个部分作为新类型

// 1. 推断函数返回值类型
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
// 示例
function asyncFunction() {
  return Promise.resolve(42);
}
type AsyncReturn = ReturnType<typeof asyncFunction>; // Promise<number>

// 2. 推断函数参数类型
type Parameters<T> = T extends (...args: infer P) => any ? P : never;
// 示例
function greet(name: string, age: number) {}
type GreetParams = Parameters<typeof greet>; // [string, number]

// 3. 推断构造函数参数
type ConstructorParameters<T> = T extends new (...args: infer P) => any ? P : never;
class Person {
  constructor(public name: string, public age: number) {}
}
type PersonParams = ConstructorParameters<typeof Person>; // [string, number]

// 4. 从数组/元组类型推断元素类型
type ElementType<T> = T extends (infer E)[] ? E : never;
type Num = ElementType<number[]>; // number

// 5. 推断 Promise 内部类型
type Awaited<T> = T extends Promise<infer U> ? U : T;
type PromiseResult = Awaited<Promise<string>>; // string

// 6. 多重 infer
type ExtractArgs<T> = T extends `${infer _name}(${infer Args})` ? Args : never;
type Args1 = ExtractArgs<"add(1, 2)">; // "1, 2"
type Args2 = ExtractArgs<"multiply(3, 4)">; // "3, 4"

// 7. infer 在元组提取中的应用
type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never;
type FirstNum = First<[1, 2, 3]>; // 1
type FirstStr = First<["a", "b"]>; // "a"

// 8. 推断对象属性类型
type PropType<T, K extends keyof T> = T extends { [P in K]: infer V } ? V : never;
interface User {
  name: string;
  age: number;
}
type UserName = PropType<User, "name">; // string

// 9. 递归 infer - 提取嵌套类型
type DeepAwaited<T> = T extends Promise<infer U>
  ? DeepAwaited<U>
  : T;
// 等待嵌套 Promise
type Nested = DeepAwaited<Promise<Promise<string>>>; // string

// 10. infer 与 never 联合使用
type UnwrapArray<T> = T extends Array<infer U> ? U : never;
type StrOrNum = UnwrapArray<string[] | number[]>; // string | number
