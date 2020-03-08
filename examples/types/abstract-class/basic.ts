abstract class AbstractAnimal {
  // 抽象方法,继承的类必须实现
  abstract makeSound(): void;
  // 抽象属性,继承的类必须实现
  abstract type: string;
  move(): void {
    console.log('roaming the earth...');
  }
}

class Tiger extends AbstractAnimal {
  type = 'Felidae';
  makeSound() {
    console.log('roar');
  }
}

let t = new Tiger();

t.move();
console.log(t);

// 报错, 抽象类不能实例化
console.log(new AbstractAnimal());

// 抽象类会产生运行时代码
console.log(Animal);
