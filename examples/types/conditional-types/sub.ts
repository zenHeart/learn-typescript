type FlattenArr<T> = T extends Array<infer U> ? U : T;

// 返回 string
type str = FlattenArr<string[]>

interface C1 {
  a: 1
}
// 返回 C1
type C1Type = FlattenArr<C1[]>