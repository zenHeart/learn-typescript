/**
 * 该示例说明混入的使用
 */

// 定义类 1
class Programer {
  code() {
    console.log('code');
  }
}
class Pianist {
  paly() {
    console.log('paly music');
  }
}
class Student {
  name: string;
  constructor(name) {
    this.name = name;
  }
}

let tom = new Student('tom');

// 向 tom 实例动态注入 code 和 play 方法
mixinObj(tom, [Programer, Pianist]);

// 通过此申明实现 tom 的类型检查,注意申明顺序不会影响后续检查
// 注意不要忽略最后一个实例对象 {} 否则会报错!!!
interface Student extends Programer, Pianist {}

// 此处 tom
tom.code();
tom.paly();

function mixinObj(obj: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      Object.defineProperty(
        obj,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
      );
    });
  });
}
