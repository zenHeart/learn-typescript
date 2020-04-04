abstract class Base {
  abstract name: string;
  abstract get value();
  abstract set value(v: number);
}

class Derived extends Base {
  name = 'derived';

  // 合法设置访问器属性为常规属性
  value = 1;
}
