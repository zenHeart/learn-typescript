// 定义输入参数和返回值为类型 T 的泛型函数
interface InterfaceName {
  <T>(arg: T): T;
}

// 效果同上,注意泛型申明提升到了接口名后
interface InterfaceName1<T> {
  (arg: T): T;
}

// 无法采用类型断言,限制为特定类型
let val1: InterfaceName;

// 表示参数类型必须为函数且函数输入和返回值必须为 number 类型
let val2: InterfaceName1<number>;
