/**
 * 采用 ThisParametersType<T> 提取函数类型 T this 参数对应的类型
 */

function toHex(this: number): string {
  return Number(this).toString(16);
}

// 返回 toHex this 参数对应的类型 number
type T = ThisParameterType<typeof toHex>;

// t1 只能赋值为 1
let t1: T = 1;
