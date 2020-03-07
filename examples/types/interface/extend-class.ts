class C11 {
  foo: string;
  constructor(foo: string) {
    this.foo = foo;
  }
}
// I11 继承了 C11 的所有方法和属性申明
interface I11 extends C11 {
  fooBar(): void;
}

// C12 必须实现 I11 扩充的方法和 C11 的方法和属性
class C12 implements I11 {
  foo: string;
  bar: string;
  constructor(foo: string, bar: string) {
    this.foo = foo;
    this.bar = bar;
  }
  fooBar() {}
}
