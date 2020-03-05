// 定义函数第二个参数为可选
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + ' ' + lastName;
  else return firstName;
}

// 合法
let result1 = buildName('Bob');
// 合法
let result3 = buildName('Bob', 'Adams');
// 非法多了一个输入参数
let result2 = buildName('Bob', 'Adams', 'Sr.');

// 定义一个函数类型,参数 a,b 必须为 number 类型,参数 b 可选,返回值为 number
type Foo = (a: number, b?: number) => number;

//非法, 注意可选参数必须放在最后
type Foo1 = (a?: number, b: number) => number;
