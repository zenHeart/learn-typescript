/**
 * 采用泛型限制构造器类型
 */

class Animal {
  numLegs: number;
}

class Lion extends Animal {
  name: string;
}
class Person {}

function createAnimal<A extends Animal>(C: new () => A): A {
  return new C();
}

let a1 = createAnimal(Animal);
let l1 = createAnimal(Lion);

// 由于 Person 不继承自 Animal,此处检查会报错
let p1 = createAnimal(Person);
