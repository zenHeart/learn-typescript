var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// TODO: 此处扩展示例需修改
// 1. 定义类装饰器函数，传入为类构造器
function dicription(target, key) {
    console.log("decrption method " + key, arguments);
}
var Class3 = /** @class */ (function () {
    function Class3() {
    }
    /**
     * 2. 在方法之前采用 @<函数名> 
     * 改代码会在代码运行时执行如下逻辑
     * class Class1 {};
     * testAble(Class1); // 动态增加属性
     * */
    Class3.prototype.method1 = function () {
        console.log('method1');
    };
    __decorate([
        dicription
    ], Class3.prototype, "method1");
    return Class3;
}());
console.log(Class3);
console.log(new Class3().method1());
