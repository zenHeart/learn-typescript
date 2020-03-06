/**
 * 函数泛型基本使用
 * 1. 函数名后添加 <泛型名称> 的方式定义泛型函数
 */

// 该函数约束只能交换相同类型的元祖数据
function swapSameType<S>(tuple: [S, S]): S[] {
  return [tuple[1], tuple[0]];
}

// 交换数值
console.log(swapSameType([1, 2]));
// 交换字符串
console.log(swapSameType(['1', '2']));
// 交换对象
console.log(swapSameType([{ a: 1 }, { b: 1 }]));

// 若数组元素类型不一样会报错
// console.log(swapSameType([1, '1']));
