/**
 * 该示例说明 typescript 中的类型
 */

// boolean 类型,值可以为 false,true,
let isDone: boolean = false;
isDone = true;

// number 类型,符合 ES6 的数值
let num: number = 6; // 十进制
num = 1e6; // 科学计数法
num = 0xff; // 16 进制
num = 0o77; // 8 进制
num = 0b11; // 2 进制

//string 类型
let color: string = 'blue';
color = 'demo';
color = `demo ${1 + 1} ${num}`; // 支持模板字符串

// 数组类型,采用 [类型名][] 申明数组元素类型
let list: number[] = [1, 23]; // 数值数组
let listStr: string[] = ['1', '2']; // 字符串数组
// 采用泛型模式申明数组
let arr: Array<number> = [1, 2, 3]; // 效果同 number[]

// 元祖类型,表示具有固定长度的特定类型数组
let tuple: [string, number] = ['1', 12]; // 元素类型必须和数组申明类型顺序相同

// 枚举类型, 语义化的表示数值,枚举类型默认为 0 开始自增的数值
enum Color {
  Red, // 值为 0
  Green, // 值为 1
  Blue // 值为 2
}
let c: Color = Color.Green;
let colorName: string = Color[1]; // 通过索引提取枚举类型名

// 任意类型, 可以去任何合法的值,尽量避免使用
let noSure: any = 4;
noSure = 'demo';
noSure = { a: 1 };
// 任意的数组支持数组元素为任意合法类型
let anyList: any[] = [1, true, 'free'];

// void 类型,any 类型取反,不返回类型,用于没有返回值的函数申明
function log(): void {
  console.log('log');
}
let unusable: void; // void 类型的变量不能赋值

// undefined 类型,只能赋值 undefined
let u: undefined = undefined;

// null 类型,只能赋值 null
let n: null = null;

// never 类型,用于表述函数无法正常返回的情况
function error(message: string): never {
  throw new Error(message);
}
// 死循环函数
function infiniteLoop(): never {
  while (true) {}
}

// 对象类型,所有非原始类型的值都为对象类型,JavaScript 的引用类型均属于对象类型
let o: object = {}; // 对象
o = []; // 数组属于 object 类型
o = () => {}; // 函数属于 object 类型
o = new Number(1); // 原始封装类型属于 object 类型
