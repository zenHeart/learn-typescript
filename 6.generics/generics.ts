/**
 * 函数名后添加 <泛型名称> 的方式定义泛型函数
 */

// 该函数约束只能交换相同类型的元祖数据
function swapSameType<S>(tuple: [S, S]): S[] {
  return [tuple[1], tuple[0]];
}

console.log(swapSameType([1, 2]));
