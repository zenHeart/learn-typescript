let p: {
  x: number;
  y: number;
};
// TODO: 为什么合法
p = Object.create({ a: 1 });
