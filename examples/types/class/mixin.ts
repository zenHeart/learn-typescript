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
  constructor(name: string) {
    this.name = name;
  }
}

let tom = new Student('tom');

// 向 tom 实例动态注入 code 和 play 方法
mixinObj(tom, [Programer, Pianist]);

// 通过此申明实现 tom 的类型检查,注意申明顺序不会影响后续检查
// 注意不要忽略最后一个实例对象 {} 否则会报错!!!
// TODO: 为什么此处需要扩展 {}
interface Student extends Programer, Pianist {}

// 此处 tom
tom.code();
tom.paly();

function mixinObj(obj: any, baseCtors: any[]) {
  // 混入代码
}
