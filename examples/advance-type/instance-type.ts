/**
 * 采用 InstanceType<T> 类型
 */
class C {
  x = 0;
  y = 0;
}

// 创建基于类型 C 的实例类型
type C1 = InstanceType<typeof C>;

// 此对象的值必须符合 C 的实例
let cc1: C1 = {
  x: 1,
  y: 2
};
