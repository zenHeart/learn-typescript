// boolean 类型不接受原始封装类型的值
let boolVal: boolean = new Boolean(true); // 检查报错

// number 类型不接受原始封装类型的值
let num: number = new Number(1); // 检查报错

// string 类型不接受原始封装类型的值
let str: string = new String('foo'); // 检查报错

// symbol 可接受原始封装类型的值
let sym1: symbol = Object(Symbol('foo')); // 合法

// bigint 可接受原始封装类型的值
let bigIntVal: bigint = Object(1n); // 合法
