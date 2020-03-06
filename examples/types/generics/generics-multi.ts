/**
 * 可以一次定义多个参量表示泛型
 */

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

console.log(swap([10, 'foo']));
