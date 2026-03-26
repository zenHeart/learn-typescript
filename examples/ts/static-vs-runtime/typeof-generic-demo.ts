// typeof-generic.ts 的运行时演示
// 在浏览器控制台运行以下代码

function logger(value) {
  console.log('typeof value:', typeof value);

  // 正确的做法：用 typeof value 而不是 typeof T
  if (typeof value === 'string') {
    console.log('Value is string:', value.toUpperCase());
  }

  return value;
}

logger("hello");
logger(42);
logger(true);
