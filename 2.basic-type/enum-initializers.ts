/**
 * 可已设定各枚举元素对应的初始值 ,语法格式为
 * enum <枚举类型名> {<值1>=<val> ,<值2> }
 */
enum Direction {
  up = 1,
  down,
  left,
  right
}

// 采用对象属性赋值枚举类型
let dir: Direction = Direction.left;

console.log(Direction, dir);

// 字符串必须都付初始值
enum Time {
  M = 'morning',
  A = 'afternoon',
  E = 'evening'
}
console.log(Time.M);
