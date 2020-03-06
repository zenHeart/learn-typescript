// null 类型,值只能为 null
let nullVal: null = null;

// undefined 类型,值只能为 undefined
let undefinedVal: undefined = undefined;

// boolean 类型,值只能为 false,true,
let isDone: boolean = false;
isDone = true;

// number 类型,值只能为符合规范的数值(IEEE 754)
let num: number = 6; // 十进制
num = 0xff; // 16 进制
num = 0o77; // 8 进制
num = 0b11; // 2 进制
num = 1.232432434e-6; // 科学计数法
num = -10; // 负数
num = NaN; // 特殊数值
num = Infinity; // 无穷大
num = -Infinity; // 负无穷大
num = Number.MAX_VALUE; // 构造器的特殊数值
num = Number.MAX_SAFE_INTEGER;

//string 类型,值只能为符合规范的字符串值
let str: string = 'hello world';
str = '😄😄😄😄'; // emoji
str = '\na\r'; // 转义字符
str = `demo ${1 + 1} ${num}`; // 支持模板字符串

//symbol 类型, 值只能为 Symbol 类型
let sym: symbol = Symbol('foo');
sym = Symbol.iterator; // 内建的迭代索引
sym = Symbol.for('bar'); // 创建一个全局符号

//bigint, 值只能为 为 BigInt 类型
let bigintVal: bigint = 0n; // 大整数
bigintVal = 0; // 该行会报错,不能把 Number 类型赋值给大整数
