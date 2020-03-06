type PointCombine = {
  readonly x: number; // 只读属性 x
  readonly y?: number; // 只读可选属性 y
  readonly z?: number; // 只读可选属性 z
};

let p5: PointCombine;

// 合法此处属于初始化赋值
p5 = { x: 10 };

// 报错,必须在初始化时赋值不要动态添加属性值
p5.y = 10;
p5.z = 10;
