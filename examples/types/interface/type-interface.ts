interface Demo {
  foo: string;
  bar: string;
}

// 为 Demo 类型提供一个别名 D
type D = Demo;

// 当在 vscode 等编辑器中,悬浮在变量 fooBar1 上会显示类型 Demo 而非 D
let fooBar1: D = {
  foo: 'foo',
  bar: 'bar'
};

// 报错,注意观察报错信息指向的类型名是 Demo 而非 D
fooBar1 = {
  foo: 'bar'
};
