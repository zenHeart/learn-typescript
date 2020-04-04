class FooC {
  // 注意此处的返回值申明,要求返回的 this 同时具有泛型对象的属性
  extend<T>(obj: {}): this & T {
    Object.assign(this, obj);
    // 类型断言避免返回类型 this 和 this & T 不匹配
    return this as this & T;
  }
  hi() {
    console.log('hi');
    return this;
  }
}
let fooC = new FooC();

fooC.hi();

fooC
  .extend({
    hello() {
      console.log();
    }
  })
  .hello(); // 报错, typescript 无法检测动态添加的方法,需要在 extend 显示申明扩充类型才可以

fooC
  .extend<{ bye(): void }>({
    bye() {
      console.log('bye');
    }
  })
  .hi()
  .bye(); // 合法,由于返回值类型为 this & { bye():void} 的交叉类型包含所有属性
