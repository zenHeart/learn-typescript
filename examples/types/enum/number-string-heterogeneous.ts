// 数值枚举 表示 Promise 完成状态
enum PromiseStatus {
  Rejected = -1, // 指定拒绝状态的值为 -1
  Pending, // TypeScript 默认自增为 0
  Fulfilled // TypeScript 默认自增为 1
}

// 字符串枚举, 注意每个标识符都必须有值
enum Direction {
  Up = 'UP',
  Down = 'DOWN'
}

// 异构枚举, 每个标识符可以为 string 或 number
enum HeterogeneousEnums {
  Yes = 'yes',
  No = 0,
  Error, // 注意由于之前的值为 0,此处 TypeScript 可以推导进行自增所以值为 1
  Success // 推导自增值为 2
}

console.log(PromiseStatus, Direction, HeterogeneousEnums);
/** 各类型结果
 * PromiseStatus:
 * { 
  '0': 'Pending',
  '1': 'Fulfilled',
  Rejected: -1,
  '-1': 'Rejected',
  Pending: 0,
  Fulfilled: 1 } 
  
  Direction:
  { Up: 'UP', Down: 'DOWN' } 
  
  HeterogeneousEnums:
  { 
  '0': 'No',
  '1': 'Error',
  '2': 'Success',
  Yes: 'yes',
  No: 0,
  Error: 1,
  Success: 2 }
 */
