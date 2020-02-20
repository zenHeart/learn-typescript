/**
 * 泛型约束实现对泛型值的特征限定
 */
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T) {
  console.log(arg.length);
  return arg;
}

loggingIdentity([1, 2, 3]);
