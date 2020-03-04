// 申明一个枚举变量 Direction
enum Direction {
  Right, // 标识符,合法的变量名即可 指代右
  Left, // 标识符 指代左
  Forward, // 标识符 指代前
  Backward // 标识符 指代后
}

// 申明移动函数只接受 Direction 的枚举类型,且无返回值
function move(direction: Direction): void {
  switch (direction) {
    // 采用 枚举名.标识符 的方式引用枚举的值
    case Direction.Left:
      console.log('left');
      break;
    case Direction.Right:
      console.log('right');
      break;
    case Direction.Backward:
      console.log('backward');
      break;
    case Direction.Forward:
      console.log('forward');
      break;
    default:
      console.log('stay');
  }
}

// 定义一个枚举变量,赋值为 Direction.Left
let moveLeft: Direction = Direction.Left;
move(moveLeft);

// 也可直接使用 枚举名.标识符 的方式赋值
move(Direction.Right);
move(Direction.Forward);
move(Direction.Backward);

console.log(Direction);
/** 枚举类型的实际结果是一个基于标识符和默认初始值的映射和反映射
{ '0': 'Right',
  '1': 'Left',
  '2': 'Forward',
  '3': 'Backward',
  Right: 0,
  Left: 1,
  Forward: 2,
  Backward: 3 } 
*/

// 基于上述输出你也可以反向获取枚举成员的名称
console.log(Direction[0]); // 返回 Right
