// 该申明会在全局空间创建 abc 属性
var abc = 1;
// 合法
globalThis.abc = 200;

let f = 1;
// 非法不能在 globalThis 上动态添加属性
globalThis.f = 10;
