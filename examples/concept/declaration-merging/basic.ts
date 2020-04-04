interface Foo {
  a: string;
}
interface Foo {
  b: number;
}
interface Foo {
  c: number;
}

/**
 * TyeScript 检测到 Foo 有三个同名的申明,合并为一个申明
 * interface Foo {
 *  a: string;
 *  b: number,
 *  c: number
 * }
 *  */

// foo1 必须具备合并后的类型所具有的特征
let foo1: Foo = {
  a: 'foo',
  b: 1,
  c: 1
};
