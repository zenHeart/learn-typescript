// 采用规则 1 a = 0 ,后续值自增 b =1,c =2
enum DefaultEnum {
  a,
  b,
  c
}

// 采用规则 2
enum FooEnum {
  Foo = 'foo',
  Bar = 10,
  Bar1, // Bar1 之前的值为 10 所以 Bar1 为 11
  Bar2, // Bar2 自增为 12
  FooBar = 'bar',
  FooBar1 = 10,
  FooBar2 // FooBar2 之前的值为 10 所以 FooBar2 为 11
}

console.log(DefaultEnum, FooEnum);
/**
 * DefaultEnum:
 * { '0': 'a', '1': 'b', '2': 'c', a: 0, b: 1, c: 2 } 
 * 
 * FooEnum:
 { 
  '10': 'FooBar1',
  '11': 'FooBar2',
  '12': 'Bar2',
  Foo: 'foo',
  Bar: 10,
  Bar1: 11,
  Bar2: 12,
  FooBar: 'bar',
  FooBar1: 10,
  FooBar2: 11 }
 */
