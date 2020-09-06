// TODO: 此处扩展示例需修改
// 1. 定义装饰器返回新的构造器
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
  };
}


@classDecorator
class Class2 {
  a = 1;

}

console.log(Class2)
console.log(new Class2())