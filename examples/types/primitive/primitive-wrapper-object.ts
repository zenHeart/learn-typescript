// Boolean 类型,值可以为 boolean 类型和 Boolean 的原始封装类型
let bool: Boolean = new Boolean(true);
bool.valueOf();
bool = false;
bool = true;

// Number 类型,值可以为 number 类型和 Number 的原始封装类型
let numVal: Number = new Number(1); // 十进制
numVal.toString(16); // 转转为 16 进制
numVal = 1; // 也支持数值

//String 类型,,值可以为 string 类型和 String 的原始封装类型
let strVal: String = new String('foo');
strVal.split(''); // 拆分字符串为单个字符
strVal = 'foo'; // 支持赋值为字符串

//Symbol 类型, 值可以为 symbol 类型和 Symbol 的原始封装类型
let symVal: Symbol = Object(Symbol('foo')); // 注意 Symbol 不能采用 new 只可采用 Object 创建原始封装类型
symVal.valueOf();
sym = Symbol.for('bar'); // 创建一个全局符号

//BigInt, 值可以为 string 类型和 BigInt 的原始封装类型
let bigVal: BigInt = Object(1n); // BigInt 也只能采用 Object 包裹的方式创建原始封装类型
bigVal.toString();
bigVal = 1n; // 支持 bigint 类型

let str1: string = '1';
