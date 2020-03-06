type PointReadOnly = {
  readonly x: number;
  readonly y: number;
};

let p3: PointReadOnly;

// 合法此处属于初始化赋值
p3 = { x: 10, y: 20 };

// 报错 p3 为只读属性无法修改属性值
p3.x = 10;
p3.y = 10;

// 编译为 js 返回 {x:10,y:10}, TypeScript 只进行静态类型检查,不修改运行时特征
console.log(p3);
