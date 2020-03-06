class Parent1 {
  // 限制属性 foo 只有类中才可访问
  private _foo: string;
  constructor() {
    this._foo = 'foo';
  }
  // 限制 log 方法只有类才可访问
  private _log(str: string) {
    console.log(`${new Date()} set foo:`, str);
  }

  //foo 为私有属性, 通过 protected 提供方法给子类设置
  protected setFoo(str: string) {
    this._foo = str;
    //log 为私有函数只能在类中使用
    this._log(str);
  }

  //foo 为私有属性, 通过 protected 提供方法给子类读取
  protected getFoo() {
    return this._foo;
  }
}

class Children1 extends Parent1 {
  bar: string;
  constructor(bar: string) {
    super();
    this.bar = bar;
  }
  changeFoo(str: string) {
    //foo 为 private,子类无法直接设置,必须使用 changeFoo 才可以设置
    this.setFoo(str);
  }
  showFoo() {
    //foo 为 private,子类无法直接获取,必须使用 getFoo 才可以读取
    return this.getFoo();
  }
}
let parent1: Parent1 = new Parent1();
let children1: Children1 = new Children1('bar');

// 报错,属性 foo 申明为 private 属性,类和子类的实例均无法访问此属性
console.log(parent1._foo);
console.log(children1._foo);

// 报错,方法 log 申明为 private 属性,类和子类的实例均无法访问此方法
parent1._log('foo1');
children1._log('foo1');

// 合法, changeFoo 为公有方法
children1.changeFoo('foo1');
// 合法 changeFoo 为公有方法,通过 Children 类调用 setFoo
console.log(children1.showFoo());
