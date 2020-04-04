interface IndexFoo {
  // 报错, foo 字段类型为对象,不属于 number 或 string 类型
  foo: object;
  [index: string]: string | number;
}
