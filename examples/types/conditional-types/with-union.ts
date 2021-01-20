type IsLiteral<T> = T extends string | number | boolean  ? true : false;

// 是字面量类型发挥 true
type T01 = IsLiteral<1>
type T02 = IsLiteral<'adf'>
type T03 = IsLiteral<true>

// 非字面量类型返回 fasle
type T04 = IsLiteral<{a: string}>
