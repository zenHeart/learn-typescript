function f1(this: void, foo: number) {
  // 报错，因为已显示申明 this 为空
  let b  = this.a;
  console.log(this, foo)
}
// 函数首个参数为 this 只是申明 this 在函数中的类型，并不代表实际参数
f1(12);
