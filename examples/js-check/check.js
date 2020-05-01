//@ts-check 在文件头部打开 typescript 类型检查
let a = 1;
a = 'foo';

let b = 12;
// @ts-ignore 忽略当行的类型检查
b = 'bar';

class C {
  constructor() {
    this.constructorOnly = 0;
    this.constructorUnknown = undefined;
  }
  method() {
    this.constructorOnly = false; // error, constructorOnly is a number
    this.constructorUnknown = 'plunkbat'; // ok, constructorUnknown is string | undefined
    this.methodOnly = 'ok'; // ok, but methodOnly could also be undefined
  }
  method2() {
    this.methodOnly = true; // also, ok, methodOnly's type is string | boolean | undefined
  }
}
