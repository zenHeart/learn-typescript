// 1. 该函数用于抛出错误,无法正常返回所以类型为 never
function error(msg: string): never {
  //该函会报错, 由于注解为 never 不允许在函数返回
  return 1;
  throw new Error(msg);
}

// 2. 函数有死循环,注解为 never
function calculate(): never {
  while (true) {
    // ...
  }
}
