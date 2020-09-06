// 1. 申明装饰器工厂返回装饰器函数
function testAble(flag: Boolean) {
  return function(target: any) {
    target._test = flag
  }
}

// 返回类构造器，类申明时，设置类的 _test 为 false
@testAble(false)
class Class11 {
}
console.log(Class11)

// 返回类构造器，类申明时，设置类的 _test 为 true
@testAble(true)
class Class12 {

}
console.log(Class12)
