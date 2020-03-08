// 定义泛型参数 T,U 表示交换函数可交换任意类型
// 泛型名称 T, U 可以为任意合法名称，只是一个指示符号
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

// 合法
console.log(swap([10, 'foo']));
// 合法
console.log(swap([10, 10]));
// 合法
console.log(swap([null, undefined]));
