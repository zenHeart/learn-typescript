// 申明一个点的接口
interface Point {
  x: number;
  y: number;
}
// 申明一个坐标系类
class Grid {
  // 设置静态属性 origin 为私有
  private static origin = { x: 0, y: 0 };
  // 提供重置 origin 的方法
  static setOrigin(point: Point) {
    Grid.origin = point;
  }
  // 计算两点距离
  calculateDistanceFromOrigin(point: Point) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist);
  }
}

let grid1 = new Grid();

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));

// 坐标系偏移 5,5
Grid.setOrigin({ x: 5, y: 5 });
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));

// 报错, 不能直接访问私有静态成员
Grid.origin = { x: 0, y: 0 };
