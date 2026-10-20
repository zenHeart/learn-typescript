class User {
  declare name: string;
  age: number;

  constructor(age: number) {
    this.age = age;
  }
}

const user = new User(18);
console.log(user.name); // undefined
