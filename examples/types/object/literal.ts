// 定义 point 变量,只能接受包含 x,y 两个属性且属性值为 number 类型的对象
let point: {
  x: number;
  y: number;
};

// 合法
point = {
  x: 1,
  y: 2
};

// 报错
point = {
  x: 1,
  y: 'demo' // 必须为 number 类型
};

// 报错
point = { x: 1, y: 2, z: 2 }; // 包含多余参数 z
