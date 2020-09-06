var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// TODO: 此处扩展示例需修改
// 1. 定义类装饰器函数，传入为类构造器
function dicription(target, key, val) {
    return {
        value: function () {
            var _a;
            console.log('run in method call', this);
            console.log("decrption method " + key, arguments);
            // 注意此处采用 call 防止 this 丢失
            return (_a = val.value).call.apply(_a, __spreadArrays([this], arguments));
        }
    };
}
var ClassTest = /** @class */ (function () {
    function ClassTest() {
    }
    /**
     * 2. 在方法之前采用 @<函数名> 设置装饰器
     * 改代码会在运行时，效果如下
     * class Class3 { method1() { // ... } };
     * dicription(Class3.prototype,'method1',Object.getOwnPropertyDescriptor('method1') )
     * */
    ClassTest.prototype.method1 = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('method1', args, this.method1);
    };
    __decorate([
        dicription
    ], ClassTest.prototype, "method1");
    return ClassTest;
}());
console.log(ClassTest);
console.log(new ClassTest().method1(1, 2, 3));
