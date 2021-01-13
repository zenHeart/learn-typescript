// 注意虽然和 A.ts 中模块同名，但是由于导出为模块作用域只在模块内有效
export namespace A {
  export var c = 1;
}

export namespace B {
  export var Foo = 1;
}