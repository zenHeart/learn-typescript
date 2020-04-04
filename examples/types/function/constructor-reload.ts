// 工厂方法限制传入参数必须是构造函数
function FactoryCreate(ctor: new () => void): any {
  return new ctor();
}

// 申明函数类型可以采用 new 调用或直接调用
interface ConstructFunction {
  new (): void;
  (): void;
}

function Ctor() {}

// 合法, 采用类型断言和重载申明 Ctor 为构造函数
let ctor = FactoryCreate(Ctor as ConstructFunction);
console.log(ctor);
