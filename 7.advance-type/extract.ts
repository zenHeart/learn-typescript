/**
 * 采用 Exclude<T,K> 提取 T 类型中排出 K 后的子类型
 */

type T1 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;

// 取值只能取 'a'
let t: T1 = 'a';
