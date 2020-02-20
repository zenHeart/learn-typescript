/**
 * 采用 Pick<T,K> 提取类型 T 中键名属于类型 K 的子类型
 */

interface Foo {
  (string, number): boolean;
}

// 提取函数的参数类型为一个元祖 boolean
type res = ReturnType<Foo>;

let res: res = true;
