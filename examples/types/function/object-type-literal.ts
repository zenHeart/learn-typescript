// 定义一个无输入参数和返回的函数类型 Func
type Func = () => void;

// 采用对象方式申明变量 foo  只接受一个输入参数为 number,且返回值为 number 的函数
let foo: { (a: number): number };

// 采用类型别名复用上述函数定义
type Func1 = { (a: number): number };
