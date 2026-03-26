// 类型擦除后的编译结果
// 所有类型注解被移除

function identity(arg) {
  return arg;
}

const p = { x: 1, y: 2 };

function checkType(value) {
  // T 被完全擦除！
  console.log(typeof T); // 报错: T is not defined
  return value;
}

const str = checkType("hello");
const num = checkType(42);
