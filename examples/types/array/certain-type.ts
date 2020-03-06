// 定义 number 类型数组
let numArr: number[] = [1, 2, 3];
// 合法
numArr.push(12);
// 报错推入数据非 number 类型
numArr.push('demo');

// 定义字符串类型数组
let strArr: string[] = ['foo', 'bar'];
// 合法
strArr[3] = 'foobar';

// 报错, 不能将 number 类型赋值给 string
strArr[0] = 21;
