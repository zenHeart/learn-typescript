class Fish {
   swim() {
      console.log('swim')
   }
}
class Bird {
   fly() {
      console.log('fly')

   }
}
function createPet(type: 'fish' | 'bird') {
   let PetMap = {
      fish: Fish,
      bird: Bird
   }
   return new PetMap[type]
}

// 采用 as 断言 pet 值的类型为 Fish
let pet = createPet('fish') as Fish;
let pet1 = createPet('bird') as Bird ;

// 会自动提示 Fish 实例方法
pet.swim()
// 会自动提示 Bird 实例方法
pet1.fly()