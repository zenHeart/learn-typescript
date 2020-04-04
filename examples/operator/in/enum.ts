enum EnumType {
  Foo = 'foo',
  Bar = 1,
  FooBar
}

// 注意 a 的键名为枚举类型的值而非标识符名称。
let a: { [key in EnumType]: string } = {
  foo: 'foo',
  1: 'bar',
  2: 'foo'
};
