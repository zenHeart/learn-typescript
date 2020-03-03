let neverVal: never;

never = null; // 非法
never = undefined; // 非法
never = 1; // 非法

// 非法,注意理解此示例,虽然函数的返回类型为 never ,但是函数本声也是一个类型所以无法赋值给 never
neverVal = (): never => {
  throw new Error('demo');
};

// 此处合法,由于函数返回类型为 never ,通过触发函数执行达到赋值效果
neverVal = ((): never => {
  throw new Error('demo');
})();
