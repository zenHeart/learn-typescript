interface User {
  name: string;
}

const raw: unknown = JSON.parse('{"name": 42}');

// 危险：as 不校验运行时结构
const user = raw as User;
console.log(user.name.toUpperCase()); // 运行时 TypeError
