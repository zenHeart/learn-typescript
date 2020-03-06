class Greeter1 {
  static PREFIX = '';

  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    // 对象实例调用此方法
    if (this.greeting) {
      console.log(`${Greeter1.PREFIX} ${this.greeting}`);
    } else {
      // 非成员调用触发
      console.log(`${Greeter1.PREFIX}`);
    }
  }
}

let greet1: Greeter1 = new Greeter1('morning');
greet1.greet();

// 申明一个工厂方法,由于此时需要返回 Greeter 的构造器所以采用 typeof Greeter 来申明返回类型
function GreetMaker(msg: string): typeof Greeter1 {
  Greeter1.PREFIX = msg;
  return Greeter1;
}

// 利用工厂方法, 创建 bye 的构造函数
let BeyGreeter: typeof Greeter1 = GreetMaker('Bye');
let greet2: Greeter1 = new BeyGreeter('tom');
greet2.greet();
