// TODO: 此处扩展示例需修改
// 1. 定义类装饰器函数，传入为类构造器
function dicription2(target: any, key: String, val: PropertyDescriptor) {
  console.log(`decrption method ${key}`, arguments);
}


class Class5 {
  /** 
   * 2. 在方法之前采用 @<函数名> 设置装饰器
   * 改代码会在运行时，效果如下
   * class Class5 { method1() { // ... } };
   * dicription(Class5,'method1',Object.getOwnPropertyDescriptor('method1') )
   * */ 
  @dicription2
  static method1() {
    console.log('method1')
  }
}

console.log(Class5)
console.log(Class5.method1())