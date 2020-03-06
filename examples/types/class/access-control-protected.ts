class Parent {
  // 限制属性 foo 只有类和子类才可访问
  protected foo: string;
  constructor() {
    this.foo = 'foo';
  }
  // 限制方法 setFoo 只有类和子类才可访问
  protected setFoo(str: string) {
    this.foo = str;
  }
}

class Children extends Parent {
  bar: string;
  constructor(bar: string) {
    super();
    this.bar = bar;
  }
  changeFoo(str: string) {
    // 子类中访问 setFoo 方法合法
    this.setFoo(str);
  }
  getFoo() {
    // 子类中访问 foo 属性合法
    return this.foo;
  }
}
let parent0: Parent = new Parent();
let children: Children = new Children('bar');

// 报错, 由于 属性 foo 申明为 protected 属性,类和子类的实例均无法访问此属性
console.log(parent1.foo);
console.log(children.foo);

// 报错, 由于 方法 setFoo 申明为 protected 属性,类和子类的实例均无法访问此方法
parent1.setFoo('foo1');
children.setFoo('foo1');

// 合法,getFoo 为公有方法,通过 Children 类访问到了 foo 属性的值
console.log(children.getFoo());
// 合法,changeFoo 为公有方法,通过 Children 类调用 setFoo
console.log(children.changeFoo('foo1'), children.getFoo());
