type PointOptional = {
  x: number;
  y?: number; // 属性可选
};

let p4: PointOptional;

// 合法 y 属性为可选
p4 = { x: 10 };

// 合法
p4 = { x: 10, y: 10 };
