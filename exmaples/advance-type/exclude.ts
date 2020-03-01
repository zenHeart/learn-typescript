/**
 * 采用 Exclude<T,K> 提取 T 类型中排出 K 后的子类型
 */

type T0 = Exclude<'a' | 'b' | 'c', 'a'>;
