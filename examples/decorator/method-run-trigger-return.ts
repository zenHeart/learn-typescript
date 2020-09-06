// TODO: 此处扩展示例需修改
// 1. 定义类装饰器函数，传入为类构造器
function dicription(target: any, key: PropertyKey , val: PropertyDescriptor) {
  return {
    value: function() {
      console.log('run in method call', this);
      console.log(`decrption method ${key as string}`, arguments);
      // 注意此处采用 call 防止 this 丢失
      return val.value.call(this, ...arguments)
    }
  }
}


class ClassTest {
  /** 
   * 2. 在方法之前采用 @<函数名> 设置装饰器
   * 改代码会在运行时，效果如下
   * class Class3 { method1() { // ... } };
   * dicription(Class3.prototype,'method1',Object.getOwnPropertyDescriptor('method1') )
   * */ 
  @dicription
  method1(...args:any) {
    console.log('method1', args, this.method1)
  }
}

console.log(ClassTest)
console.log(new ClassTest().method1(1,2,3))