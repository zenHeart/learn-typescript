// class-fields.ts 编译后的 JavaScript
// useDefineForClassFields: true 时

var Base = /** @class */ (function () {
  function Base() {
    Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
  }
  return Base;
}());

var Derived = /** @class */ (function () {
  function Derived() {
    // super() 会调用 Object.defineProperty 设置 x
    // 然后子类设置 x = 2
    this.x = 2;
    this.y = 3;
  }
  return Derived;
}());
