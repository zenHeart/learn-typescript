var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// TODO: 此处扩展示例需修改
// 1. 定义类装饰器函数，传入为类构造器
function testAble(target) {
    target._test = true;
}
/**
 * 2. 在类之前采用 @<函数名> 生命类装饰器
 * 改代码效果等同于
 *
 * */
var Class1 = /** @class */ (function () {
    function Class1() {
    }
    Class1 = __decorate([
        testAble
    ], Class1);
    return Class1;
}());
console.log(Class1);
