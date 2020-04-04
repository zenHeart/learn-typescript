/**
    定义对象泛型 T 的所有属性为只读,产生一个只读的对象类型

    1. keyof T 提取泛型 T 的键名为字面量类型
    2. P in keyof T 遍历字面量类型的值
    3. readonly [P in keyof T] 修饰键名为只读
    4. T[P] 映射每个键名对应值的类型
*/
type ReadOnlyObj<T> = {
  readonly [P in keyof T]: T[P];
};

interface Obj1 {
  foo: number;
  bar: string;
}

// 限定 readOnlyObj 的对象类型为只读的 Obj1
let readOnlyObj: ReadOnlyObj<Obj1> = {
  foo: 12,
  bar: 'bar'
};

// 报错, 只读对象不允许修改
readOnlyObj.foo = 13;
