// 采用 type 名称 = 类型 的方式定义别名
type DiceNumber = 1 | 2 | 3 | 4 | 5 | 6;

// 此处直接使用 DiceNumber 简化数值字面量的使用
function rollDice(): DiceNumber {
  return <DiceNumber>Math.floor(Math.random() * 6 + 1);
}
console.log(rollDice());
console.log(rollDice());
console.log(rollDice());
