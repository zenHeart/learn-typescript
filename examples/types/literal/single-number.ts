// 限制变量 delayTime 的取值类型为 500 数值字面量
const delayTime: 500 = 500;

// 注意数值也可为 bigint
let a2: 500n = 500n;

// 报错, bigint 和 number 不是同种数值类型
a2 = delayTime;
