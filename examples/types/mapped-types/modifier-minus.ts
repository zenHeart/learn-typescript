// 删除泛型对象的只读和可选修饰符
type Writable<T> = {
  -readonly [K in keyof T]-?: T[K];
};

interface ReadonlyObj {
  readonly foo: string;
  readonly bar?: number;
}

// 由于删除可选, bar 属性必须存在
let writeObj: Writable<ReadonlyObj> = {
  foo: 'foo',
  bar: 12
};

// 合法, 删除了只读修饰符
writeObj.foo = 'bar';
writeObj.bar = 12;
