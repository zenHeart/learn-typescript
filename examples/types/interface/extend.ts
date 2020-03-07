interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

// 断言字面量对象符合 Square 接口特征,避免检查报错
let square = {} as Square;
square.color = 'blue';
square.sideLength = 10;
