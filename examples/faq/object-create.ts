let p: {
  x: number;
  y: number;
};
// 为什么合法
p = Object.create({ a: 1 });
