// 创建一个类,同时也创建基于此类对象类型 Greeter
class Greeter {
    // 申明构造器函数传入参数为 string 类型
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}
// 限制 greeter 变量为 Greeter 类型的实例
let greeter;
greeter = new Greeter('world');
console.log(greeter.greet());
