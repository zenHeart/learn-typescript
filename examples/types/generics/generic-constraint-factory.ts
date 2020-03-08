class Animal {
  //  !: 表示明确类型断言,避免 TypeScript 检查到未对 numLegs 赋值报错
  numLegs!: number;
}

class Lion extends Animal {
  name!: string;
}

class Bug {}

// 采用泛型 A 限制构造器的类型必须是 Animal 及其子类
function createAnimal<A extends Animal>(C: new () => A): A {
  return new C();
}

let a1 = createAnimal(Animal);
let l1 = createAnimal(Lion);

// 由于 Bug 不继承自 Animal,此处检查会报错
let p1 = createAnimal(Bug);
