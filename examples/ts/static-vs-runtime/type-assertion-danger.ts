// 类型断言的危险性
// as 只在编译期有效，运行时没有任何类型保障

// 危险示例1：null 被断言为 string
const danger1 = null as string;
console.log("danger1:", danger1.toUpperCase()); // 💥 运行时报错

// 危险示例2：undefined 被断言为具体类型
const danger2 = undefined as { name: string };
console.log("danger2:", danger2.name.toUpperCase()); // 💥 运行时报错

// 危险示例3：API 返回的任意数据被断言为具体类型
interface User {
  id: number;
  name: string;
  email: string;
}

// 模拟 API 返回错误数据
const apiResponse = { error: "Not authorized", code: 401 };
const user = apiResponse as User;
console.log("user:", user.name.toUpperCase()); // 💥 运行时报错

// 正确做法：使用类型守卫
function safeGreet(name: string | null | undefined) {
  if (typeof name === "string") {
    return "Hello, " + name.toUpperCase();
  }
  return "Hello, stranger";
}

console.log(safeGreet("Alice")); // ✅ "Hello, ALICE"
console.log(safeGreet(null)); // ✅ "Hello, stranger"
console.log(safeGreet(undefined)); // ✅ "Hello, stranger"
