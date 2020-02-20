interface Point {
  readonly x: number;
  readonly y: number;
  [propName: string]: number;
}

// 扩展定义多维度的点
let p: Point = { x: 10, y: 20, z: 10 };

// 无法修改只读属性
console.log(p);
