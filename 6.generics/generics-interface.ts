/**
 * 将泛型定义为接口类型
 */
interface GenericIdentityFn<T> {
  (arg: T): T;
}
function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
let myIdentity1: GenericIdentityFn<string> = identity;

// 该函数只接受为 number 类型
console.log(myIdentity(1));

// 该函数只接受为 string 类型的参数
console.log(myIdentity1('1'));
