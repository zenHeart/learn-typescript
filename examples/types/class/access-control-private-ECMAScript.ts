class Person {
  #name: string;
  constructor(name:string) {
    this.#name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.#name}!`);
  }
}
let locke = new Person('Locke');

// 合法
locke.greet();

// 报错,私有属性无法在实例上访问
locke.#name;