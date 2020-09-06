// TODO: 此处扩展示例需修改
// 1. 定义类装饰器函数，传入为类构造器
function dicription(target: any, key: String) {
  console.log(`decrption method ${key}`, arguments);
}


class Class3 {
  @dicription
  /** 
   * 2. 在方法之前采用 @<函数名> 设置装饰器
   * 改代码会在运行时，效果如下
   * class Class3 { method1() { // ... } };
   * dicription(Class3.prototype,'method1',Object.getOwnPropertyDescriptor('method1') )
   * */ 
  method1() {
    console.log('method1')
  }
}

console.log(Class3)
console.log(new Class3().method1())