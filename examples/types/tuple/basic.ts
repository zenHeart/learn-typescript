// 申明长度为 2 第一个元素为数值,第二个元素为字符串的元祖
let tuple1: [number, string];
// 合法
tuple1 = [1, 'foo'];

//报错,第一个值必须为 nuber 类型
tuple1[0] = 'bar';
// 报错, 元祖长度固定不能扩充
tuple1[3] = 12;

//TODO:  合法, TypeScript 不检测动态注入值
tuple1.push(12);
