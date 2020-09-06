// 1. 定义参数装饰器
function requireVal(target: any,key: PropertyKey,value: any):any {
  let d = Object.getOwnPropertyDescriptor(target,key)
  console.log('init run', arguments, target, d)
  Object.defineProperty(target, key, {
    value: function() {
      if(!arguments[value])  {
        console.log('must have name')
      }
      return d?.value.apply(this,arguments)
    }
  })
}

class Greeter2 {
  greet(@requireVal name?: string) {
    return "Hello " + name;
  }
}

// 运行时会检查属性值， TODO: tsnode 为什么失败
console.log(new Greeter2().greet())
console.log(new Greeter2().greet('tom'))