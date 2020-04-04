interface CustomArray {
  length: number;
  // 用于表示数组索引
  [index: number]: any;
}
// 合法
let arr: CustomArray = [1, 2, 3, 4];
// 由于索引为数值,你甚至可以取小数,但不建议这么做
arr[0.1] = 1; // 合法
arr[0b1111] = 1; // 2 进制, 合法
arr[0o1111] = 1; // 8 进制, 合法
arr[0x11] = 1; // 16 进制, 合法
arr[1e3] = 1; // 科学计数法, 合法

// 报错, 索引为字符串非数值
arr = { a: 1 };

// 用于表示对象,也包括数组
interface CustomObject {
  [index: string]: any;
}

// 合法
let objFoo: CustomObject = {
  a: 1,
  b: 'bar',
  10: 'bar'
};
// 合法
objFoo = [1, 2, 3, 4];
