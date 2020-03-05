type PointDynamic = {
  x: number;
  y: number;
  // 注意此处的索引名没有限制,命名尽量语义化
  [pointName: string]: number;
};

let p6: PointDynamic;

// 合法此处属于初始化赋值
p6 = { x: 10, y: 20 };

// 合法
p6.z = 10;
p6.a = 1;
