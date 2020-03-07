interface I1 {
  foo(): void;
}
interface I1 {
  bar(): void;
}

// C1 同时实现 I1 和 I2 定义的接口
class C1 implements I1, I1 {
  foo() {}
  bar() {}
}
