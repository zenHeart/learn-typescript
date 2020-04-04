/**
 * 该接口用于设置对象泛型 T 的属性,并要求属性值和对象泛型 T 对应的属性值类型相同
 * T 为泛型,指代对象
 * K extends keyof T 是对 K 的泛型约束,限定类型 K 为 T 的键名组成的联合类型
 * T[K] 所赋值 value 必须和泛型 T 对应属性的值类型一致
 */
interface SetProperty<T, K extends keyof T> {
  (obj: T, key: K, value: T[K]): void;
}
// 定义一个对象类型 Obj
interface Obj {
  foo: string;
  bar: number;
  fooBar: string;
}
// 定义设置对象类型 Obj 属性的函数,且只能修改 'foo' 属性
let setObjProperty: SetProperty<Obj, 'foo'> = (obj, key: string, value) => {
  obj[key] = value;
};

let o1: Obj = {
  foo: 'foo',
  bar: 12,
  fooBar: 'fooBar'
};

// 合法
setObjProperty(o1, 'foo', 'demo');

// 报错, 值的类型非 string
setObjProperty(o1, 'foo', 12);

// 报错, 修改的属性非 foo
setObjProperty(o1, 'bar', 12);
