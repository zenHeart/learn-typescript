// TODO: 此处扩展示例需修改
// 1. 定义类装饰器函数，传入为类构造器
function dicription3(target: any, key: PropertyKey , val: PropertyDescriptor) {
  console.log('run in init', key, val);
  let { value: method } = val;
  function change(this: any) {
    console.log('run in method call', this);
    console.log(`decrption method ${key as string}`, arguments);
    // 注意此处采用 call 防止 this 丢失
    method.call(this, ...arguments)
  }
  // 修改原始函数
  val.value = change
  console.log('change method success', Object.getOwnPropertyDescriptor(target, key))
}


class Class6 {
  @dicription3
  static method1(...args:any) {
    console.log('method1', args, this.method1)
  }
}

console.log(Class6)
console.log(Class6.method1(1,2,3))