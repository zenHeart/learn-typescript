// any 类型可以被赋予任何值
let anyVal: any = 1;
anyVal = 'demo'; // 合法
anyVal = null; // 合法
anyVal = []; // 合法
anyVal + 1; // 合法
anyVal.a.v(); // 合法, 虽然没有任何属性 TypeScript 不会检查报错
let bar: string = anyVal; // 合法 TypeScript 检查变量为 any 类型所以兼容 string
let bar1: number = anyVal; // 合法
let bar2: null = anyVal; // 合法
let bar3: undefined = anyVal; // 合法

// unknown 类型也可赋予任何值,但是限制了赋值和操作,避免了 any 类型没有检查的错误
let unknownVal: unknown = 1;
unknownVal = 'demo'; // 合法
unknownVal = null; // 合法
unknownVal = []; // 合法
unknownVal + 1; // 非法, 由于不确定类型无法进行 + 运算
unknownVal.a.v(); // 非法, 不确定类型,所以无法调用此方法
unknownVal.toString(16); // 非法,虽然 unknown 的值为 1,但由于该类型为不确定类型所以操作非法
let bar11: string = unknownVal; // 非法,不确定类型不能复制给确定的类型
let bar12: number = unknownVal; // 非法
let bar13: null = unknownVal; // 非法
let bar14: undefined = unknownVal; // 非法
let bar15: any = unknownVal; // 合法, any 类型接受任何类型
let bar16: unknown = unknownVal; // 合法,因为是相同类型赋值
