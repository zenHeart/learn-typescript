interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

// 同时扩展 Shape 和 PenStroke
interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square1 = {} as Square;
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 5.0;
