// 工厂方法限制传入参数必须是构造函数
function FactoryCreate(ctor: new () => void): any {
  return new ctor();
}

// 类,默认为构造函数
class Ctor1 {}

// 申明的函数,默认无法采用 new 调用
function Ctor2() {}

// 合法
let ctor1 = FactoryCreate(Ctor1);
console.log(ctor1);

// 非法,函数默认不支持 new 的调用
let ctor2 = FactoryCreate(Ctor2);
console.log(ctor2);
