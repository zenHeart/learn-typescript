// TODO: 此处扩展示例需修改
// 1. 定义类装饰器函数，传入为类构造器
function testAble(target: any) {
  target._test = true;
}


/** 
 * 2. 在类之前采用 @<函数名> 生命类装饰器
 * 改代码会在代码运行时执行如下逻辑
 * class Class1 {};
 * testAble(Class1); // 动态增加属性
 * */ 

@testAble
class Class1 {

}

console.log(Class1)