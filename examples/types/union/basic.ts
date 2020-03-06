// 定义一个类型可以接受 string 或 number 类型
type StringOrNumber = string | number;

// 合法
let fooBar: StringOrNumber = 1;

// 合法
fooBar = 'demo';

// 报错类型不是 string 或 number
fooBar = false;
