// 掷骰子函数,限定函数返回的值只能为 1-6
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  // 注意 TypeScript 类型推导返回为 number,此处采用类型断言显示申明返回类型避免报错
  return <1 | 2 | 3 | 4 | 5 | 6>Math.floor(Math.random() * 6 + 1);
}
console.log(rollDice());
console.log(rollDice());
console.log(rollDice());
