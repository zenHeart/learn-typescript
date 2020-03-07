class Octopus1 {
  // 属性为只读可选
  readonly #name?: string;
  readonly numberOfLegs: number = 8;
  constructor(theName?: string) {
    // 由于属性可选有值才添加
    if (theName) {
      this.#name = theName;
    }
  }
  showName() {
    console.log(this.#name)
  }
}

let o2: Octopus1 = new Octopus1();
// 由于属性可选,输出为 { numberOfLegs: 8 } 无 name 属性
console.log(o2);

// 报错,私有属性无法访问
o2.#name;
// 报错, 属性并未创建, 无法访问
o2.showName();


o2 = new Octopus1('Paul');
console.log(o2); // 返回 { numberOfLegs: 8, name: 'Paul' }
// 合法, 使用函数访问私有属性
o2.showName();

//报错, 私有属性无法访问
console.log(o2.#name);


