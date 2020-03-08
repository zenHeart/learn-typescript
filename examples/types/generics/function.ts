// 采用 <T> 表示创建一个泛型 T, 注意 T 指代一个类型也可换为任何字符
type CreateArr = <T>(length: number, data: T) => T[];

let createArr: CreateArr = (length: number, data: any) => {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(data);
  }
  return arr;
};

// 创建长度为 10 ,元素为 1 的数组
console.log(createArr(10, 1));
// 创建长度为 10 ,元素为 'foo' 的数组
console.log(createArr(10, 'foo'));
// 创建长度为 10 ,元素为 { a: 1 } 的数组
console.log(createArr(10, { a: 1 }));
