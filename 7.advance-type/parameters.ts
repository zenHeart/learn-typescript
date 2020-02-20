/**
 * 采用 Pick<T,K> 提取类型 T 中键名属于类型 K 的子类型
 */

interface Foo {
  (string, number): void;
}

// 提取函数的参数类型为一个元祖 [string,number]
type para = Parameters<Foo>;

// 此时变量的值必须匹配 [string,number] 规则
let param: para = ['a', 12];
