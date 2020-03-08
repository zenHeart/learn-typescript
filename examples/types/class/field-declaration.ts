class A {
  // 字段申明,实例化时会采用次默认值
  a: string = 'default';
  constructor(a?: string) {
    if (a) {
      this.a = a;
    }
  }
}

let b: A = new A();
console.log(b); // 返回默认值 { a: 'default' }

b = new A('foo');
console.log(b); // 传入值替换默认值 { a: 'foo' }
