// 数值常量枚举
const enum ConstDirection {
  Right,
  Left,
  Forward,
  Backward
}
// 只能使用成员的值
console.log(ConstDirection.Right); // 该处编译结果被替换为 0
console.log(ConstDirection); // 非法,但编译结果不会变化

const enum ConstDirectionStr {
  Up = 'UP',
  Down = 'DOWN'
}
// 只能使用成员的值
console.log(ConstDirectionStr.Up); // 该处编译结果被替换为 'UP'
console.log(ConstDirectionStr); // 非法,但编译结果不会变化

// 异构枚举, 每个标识符可以为 string 或 number
const enum ConstHeterogeneousEnums {
  Yes = 'yes',
  No = 0,
  Error, // 注意由于之前的值为 0,此处 TypeScript 可以推导进行自增所以值为 1
  Success // 推导自增值为 2
}
// 只能使用成员的值
console.log(ConstHeterogeneousEnums.Yes); // 该处编译结果被替换为 'yes'
console.log(ConstHeterogeneousEnums); // 非法,但编译结果不会变化
