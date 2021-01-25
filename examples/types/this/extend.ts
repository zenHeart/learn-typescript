interface MyType {
 extend<T>(other: T): this & T;
}

class C01 {
  public foo = 1
}

let c01 = new C01();
