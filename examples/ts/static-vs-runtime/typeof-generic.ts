// typeof T 在泛型函数中的行为

function logger<T>(value: T) {
  console.log('typeof T:', typeof T);      // 永远输出: undefined
  console.log('typeof value:', typeof value); // 真实类型

  // 错误示例：尝试用 typeof T 做类型判断
  if (typeof T === 'string') {  // 永远为 false！
    // 这段代码永远不会执行
    return value.toUpperCase();
  }

  return value;
}

logger("hello");   // typeof T: undefined, typeof value: string
logger(42);        // typeof T: undefined, typeof value: number
logger(true);      // typeof T: undefined, typeof value: boolean
