/**
 * 采用泛型限制构造器类型
 */

class Animal1 {
  numLegs: number;
}

class Lion extends Animal1 {
  name: string;
}
class Fish {}

function createAnimal<A extends Animal1>(C: new () => A): A {
  return new C();
}

let a1 = createAnimal(Animal1);
let l1 = createAnimal(Lion);

// 由于 Fish 不继承自 Animal,此处检查会报错
let p1 = createAnimal(Fish);
