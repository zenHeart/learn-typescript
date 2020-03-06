class Octopus {
  readonly name?: string;
  readonly numberOfLegs: number = 8;
  constructor(theName?: string) {
    // 由于属性可选有值才添加
    if (theName) {
      this.name = theName;
    }
  }
}

let o1: Octopus = new Octopus();
// 由于属性可选,输出为 { numberOfLegs: 8 } 无 name 属性
console.log(o1);

// 报错,只读属性无法修改
o1.name = 'Tom';

o1 = new Octopus('Paul');
console.log(o1); // 返回 { numberOfLegs: 8, name: 'Paul' }
console.log(o1.name); // 返回 Paul

// 报错,只读属性无法修改
o1.name = 'Tom';
