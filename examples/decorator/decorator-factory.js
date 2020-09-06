var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1. 申明装饰器工厂返回装饰器函数
function testAble(flag) {
    return function (target) {
        target._test = flag;
    };
}
// 返回类构造器，类申明时，设置类的 _test 为 false
var Class11 = /** @class */ (function () {
    function Class11() {
    }
    Class11 = __decorate([
        testAble(false)
    ], Class11);
    return Class11;
}());
console.log(Class11);
// 返回类构造器，类申明时，设置类的 _test 为 true
var Class12 = /** @class */ (function () {
    function Class12() {
    }
    Class12 = __decorate([
        testAble(true)
    ], Class12);
    return Class12;
}());
console.log(Class12);
