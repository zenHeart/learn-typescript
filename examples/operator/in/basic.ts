// 创建一个对象类型, 属性 a,b 都是字符串类型
type ObjAB = {
  // in 迭代字符串字面量类型的值作为属性名,并设定属性为 string  类型
  [key in 'a' | 'b']: string;
};

// 合法, 对象包含 a,b 且为字符串类型
let objAB: ObjAB = {
  a: 'foo',
  b: 'bar'
};
