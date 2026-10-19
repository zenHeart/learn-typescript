// 类型擦除示例
// TypeScript 类型在编译后被完全移除

function identity<T>(arg: T): T {
  return arg;
}

interface Point {
  x: number;
  y: number;
}

const p: Point = { x: 1, y: 2 };

// 泛型参数 T 在运行时不存在
function checkType<T>(value: T) {
  // typeof T 永远不会是 'string' 或其他具体类型
  // 因为 T 在运行时被擦除了
  console.log(typeof T); // 永远输出: undefined
  return value;
}

// 尝试在运行时检查泛型类型是不可能的
const str = checkType("hello");
const num = checkType(42);
