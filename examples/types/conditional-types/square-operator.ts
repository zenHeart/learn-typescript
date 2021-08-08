type Foo12<T> = T extends any ? T[] : never;

// 返回 string[] | number[]
type Bar = Foo12<string | number>;

// 期望单独结构各类型改写为如下形式
type Foo13<T> = [T] extends [any] ? T[] : never;

// 返回 (string | number)[]
type Bar1 = Foo13<string | number>;