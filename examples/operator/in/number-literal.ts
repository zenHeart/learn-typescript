//限定索引前三个元素必须为 数值
type InNumber = {
  [key in 0 | 1 | 2]: number;
};
// 合法,只限定前 3 个元素
let inNumberArr: InNumber = [1, 2, 3, 'df'];
