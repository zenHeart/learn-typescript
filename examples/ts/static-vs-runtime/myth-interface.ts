interface User {
  name: string;
}

// interface 不会生成运行时校验
const user = {} as User;
console.log(user.name); // undefined
