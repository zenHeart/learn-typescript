interface A {
  a: string;
}
interface B {
  b: string;
}

// 返回 'a' | 'b'
type T1 = keyof (A & B);
