/**
 * 采用 NonNullable<T> 排出 T 中 null | undefined 后的子类型
 */

type T3 = NonNullable<string | number | undefined>;

// a 只能取 string | number
let a: T3 = 12;
