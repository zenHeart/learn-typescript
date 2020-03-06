// 定义一个函数,限制输入参数必须为 number 且返回值为 number
function add(a: number, b: number): number {
  return a + b;
}

// 合法
add(1, 2);

// 报错,缺少参数
add(1);

// 报错,返回值为 number 类型不能赋值给 string 类型的变量
let str: string = add(1, 2);
