// 定义一个 CurrySum
type CurrySum = {
  (): any; // 无参数则返回任意类型
  (a: number): any; // 单一参数返回任意类型
  (a: number, b: number): any; // 两个参数返回任意类型
};

function sum(a?: number, b?: number) {
  if (a !== undefined && b !== undefined) {
    return a + b;
  } else if (a !== undefined) {
    return function(x: number) {
      return x + a;
    };
  } else {
    return sum;
  }
}

// 合法,符合函数类型
let a: CurrySum = sum;

console.log(a(1)(2)); // 返回 3
console.log(a(1, 2)); // 返回 3
