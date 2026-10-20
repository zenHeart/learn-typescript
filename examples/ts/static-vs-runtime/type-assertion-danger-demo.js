// TypeScript 的 as 不会产生任何运行时检查
const data = JSON.parse('{"name": 42}');

// 断言成 { name: string } 后，运行时依旧是数字
const user = data;
console.log(typeof user.name); // number
