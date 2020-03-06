type Bird = {
  fly(): void;
  layEggs(): void;
};

type Fish = {
  swim(): void;
  layEggs(): void;
};
type BirdOrFish = Bird | Fish;

function createPet(name: string) {
  switch (name) {
    case 'bird':
      return {
        fly() {},
        layEggs() {}
      };
    case 'fish':
      return {
        swim() {},
        layEggs() {}
      };
    default:
      return null;
  }
}

// 申明 pet 变量可接受 Fish 或 Bird 类型
let pet: BirdOrFish;

// 合法 断言返回结果为 Bird
pet = <Bird>createPet('bird');
pet.layEggs();
pet.fly();
// 报错, 断言为 Bird 实例不具有 swim 方法
pet.swim();

// 合法 赋值为 fish 类型, 采用 as 断言返回结果为 Fish 类型
pet = createPet('fish') as Fish;
pet.layEggs();
pet.swim();
// 报错, 断言为 Fish 实例不具有 fly 方法
pet.fly();
