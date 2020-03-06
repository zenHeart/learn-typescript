// 申明长度为 2 第一个元素为数值,第二个元素为字符串的元祖
let x1: [number, string];
// 合法
x1 = [1, 'foo'];

//报错, 不能采用此方式增加数据
x1[3] = 12;

// 合法
x1.push(1);

// 合法
x1.push('demo');

// 报错,插入元素不是 number  或 string 类型
x1.push(false);

// 合法, 在数组开始插入元素 `demo` ,虽然和元祖类型不匹配但 TypeScript 无法识别
x1.unshift('demo');

// 合法, 替换索引为 1 位置的元素为 10,虽然此处该为 string 类型,但 TypeScript 无法检测
x1.splice(1, 1, 10);

console.log(x1); // 返回 [ 'demo', 10, 'foo', 1, 'demo' ]
