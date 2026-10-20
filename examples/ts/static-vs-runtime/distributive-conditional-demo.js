// 分布式条件类型在编译期展开，运行时无对应结构
const values = ['a', 1];
console.log(values.map((v) => [v]));
