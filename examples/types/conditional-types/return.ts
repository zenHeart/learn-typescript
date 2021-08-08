// 提取函数类型的返回值类型
type ReturnFuncType<T> = T extends (...args: any[]) => infer R ? R : T;

// 返回 string 类型
type str = ReturnFuncType<() => string>
// 返回 number 类型
type num = ReturnFuncType<() => number>