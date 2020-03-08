interface Lengthwise {
  length: number;
}

// 泛型 T 利用 extends 扩展接口，实现类型约束
function loggingIdentity<T extends Lengthwise>(arg: T) {
  console.log(arg.length);
  return arg;
}

loggingIdentity([1, 2, 3]);
