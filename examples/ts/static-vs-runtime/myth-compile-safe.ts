interface User {
  name: string;
}

function printName(user: User) {
  console.log(user.name);
}

// 编译通过，但运行时会拿到不符合接口的数据
printName(JSON.parse('{"name": null}') as User);
