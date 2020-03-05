// 定义变量 func 必须为函数类型,函数没有输入参数且函数无返回值
let func: () => void;

// 定义变量 func1 必须为函数类型,函数的必须有两个输入参数且类型为 number ,返回类型也为 number
// 注意参数名没有限制,保持语义化即可
let func1: (a: number, b: number) => number;

// 合法符合限定额函数类型
func = () => {};

// 合法
func1 = (a, b) => a + b;
// 调用合法
func1(1, 2);
// 非法,少输了一个参数
func1(1);
// 非法,参数 2 类型不对
func1(1, '1');
// 非法,返回值为 number 不能赋值给 string 类型的变量
let str: string = func1(1, 2);
