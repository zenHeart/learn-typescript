// class fields 编译选项影响
// useDefineForClassFields 选项影响 class field 的 emit 方式

class Base {
  x = 1;
}

class Derived extends Base {
  x = 2;
  y = 3;
}

// 当 useDefineForClassFields: true 时
// 编译为使用 Object.defineProperty

// 当 useDefineForClassFields: false 时
// 编译为简单的属性赋值
