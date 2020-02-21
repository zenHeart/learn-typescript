/**
 * 将泛型定义为接口类型
 */

interface GenericIdentityFn<T> {
  (arg: T): T;
}

interface GenericIdentityFn1 {
  <T>(arg: T): T;
}

function foo(arg) {
  return arg;
}

// 约定函数类型输入和返回值必须为数值
let myIdentity: GenericIdentityFn<number> = foo;

// 原定函数输入和返回值类型必须相同
let myIdentity1: GenericIdentityFn1 = foo;

// 由于泛型写在接口内部无法实现 GenericIdentityFn 指定特定类型的方法
// let myIdentity2: GenericIdentityFn1<number> = foo;

// 该函数只接受为 number 类型
console.log(myIdentity(1));
// 输入字符串会报错
// console.log(myIdentity('1'));

// 该函数未限定输入类型所以数值和字符串均可
console.log(myIdentity1('1'));
console.log(myIdentity1(1));
