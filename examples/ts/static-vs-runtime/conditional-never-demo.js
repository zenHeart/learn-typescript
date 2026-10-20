// never 只影响类型层，不会删除运行时的值
const values = ['a', 1, true];
console.log(values.filter((v) => typeof v === 'string'));
