class Greeter {
  static PREFIX = '';

  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    // 对象实例调用此方法
    if (this.greeting) {
      console.log(`${Greeter.PREFIX} ${this.greeting}`);
    } else {
      // 非成员调用触发
      console.log(`${Greeter.PREFIX}`);
    }
  }
}

let greet1: Greeter = new Greeter('morning');
greet1.greet();

// 申明一个工厂方法,由于此时需要返回 Greeter 的构造器所以采用 typeof Greeter 来申明返回类型
function GreetMaker(msg: string): typeof Greeter {
  Greeter.PREFIX = msg;
  return Greeter;
}

// 利用工厂方法, 创建 bye 的构造函数
let BeyGreeter: typeof Greeter = GreetMaker('Bye');
let greet2: Greeter = new BeyGreeter('tom');
greet2.greet();
