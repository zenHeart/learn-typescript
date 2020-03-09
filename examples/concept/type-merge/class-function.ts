// 示例来源 https://www.typescriptlang.org/docs/handbook/release-notes/overview.html#ambient-classes-and-functions-can-merge
// TODO: 理解此示例
interface Point2D {
  (x: number, y: number): Point2D;
}
interface Point2D {
  x: number;
  y: number;
  constructor(x: number, y: number);
}

class Point2D implements Point2D {
  x = 0;
  y = 0;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
