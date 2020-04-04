// x 变为 'foo' 类型不可再更改
let x = <const>'foo';
// 报错
x = 'bar';

// y 变为只读数组
let y = [10, 'bar'] as const;
// 报错, 不可动态增加和修改已有值
y[0] = 1;
y.push(1);

// o 变为只读对象
let o = {
  a: 1,
  b: 2
} as const;
// 报错, 不可动态增加和修改已有值
o.a = 1;
o.foo = 1;
