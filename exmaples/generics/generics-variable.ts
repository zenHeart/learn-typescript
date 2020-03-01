/**
 * 采用如下方式约束变量为泛型函数类型
 * 1. <T>(T) => T
 * 2. 对象表示 { <T>(T): T }
 */

function Identity<T>(arg: T): T {
  return arg;
}
// 约束参数类型为函数,且入参和返回值必须相同
let identity: <T>(T) => T = Identity;

// 效果同上
let identity1: { <T>(T): T } = Identity;

console.log(identity, identity1);
