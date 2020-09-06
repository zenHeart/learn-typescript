function d1():any {
  console.log("d1(): evaluated");
  return function (
    target: any,
    key: PropertyKey,
    val: PropertyDecorator
  ) {
    console.log("d1(): called");
  };
}

function d2():any {
  console.log("d2(): evaluated");
  return function (
    target: any,
    key: PropertyKey,
    val: PropertyDecorator
  ) {
    console.log("d2(): called");
  };
}


/**
 * tsc 编译后的执行结果类似
 * let d1Res = d1()
 * let d2Res = d1()
 * // 靠近方法的装饰器先执行
 * d2Res(target,key,value)
 * d1Res(target,key,value)
 */
class Class14 {
  @d1()
  @d2()
  method() {}
}

// return 
// d1(): evaluated
// d2(): evaluated
// d2(): called
// d1(): called