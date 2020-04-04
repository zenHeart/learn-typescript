function funFoo() {
  // 报错无法在此处找到接口申明 T
  let a: T = { a: 1 };

  if (true) {
    interface T {
      x: number;
    }
    let v: T;
    v.x = 5;
  } else {
    interface T {
      x: string;
    }
    let v: T;
    v.x = 'hello';
  }
}
