interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };

// 无法修改只读属性
p1.x = 10;
