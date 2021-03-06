// 限制对象为 string 的原始封装类型和字符串,不建议使用,此处只是示例说明
let s: String = new String('1');
// 限制对象为 number 的原始封装类型和字符串,不建议使用,此处只是示例说明
let n: Number = new Number(1);

// 限制对象为 Error 的实例
let e: Error = new Error('foo');
e = new TypeError('foo'); // 合法 TypeError 继承自 Error

// 限制对象为 Date 的实例类型
let d: Date = new Date('2019');
// 限制对象为函数类型
let f: Function = () => {};
// 限制对象为 Promise 的实例且返回值必须为 number 类型
let p: Promise<number> = Promise.resolve(1); // 注意这里的尖括号后续章节会有详细描述
// 限制对象为 Set 的实例且元素必须为数值
let setVal: Set<number> = new Set([1, 2, 3]);
// 限制为对象类型
let obj: Object = new Object(1);
obj = s; // 合法
obj = n; // 合法
obj = d; // 合法
obj = f; // 合法
obj = {}; // 合法,此处定义了字面量对象
obj = Object.create(null); // 合法虽然原型链为 null
obj = 12; // 合法
obj = 'foo'; // 合法
obj = null; // 报错
obj = undefined; // 报错
