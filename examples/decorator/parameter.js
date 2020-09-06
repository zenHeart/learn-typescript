var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 1. 定义参数装饰器
function requireVal(target, key, value) {
    var d = Object.getOwnPropertyDescriptor(target, key);
    console.log('init run', arguments, target, d);
    Object.defineProperty(target, key, {
        value: function () {
            if (!arguments[value]) {
                console.log('must have name');
            }
            return d === null || d === void 0 ? void 0 : d.value.apply(this, arguments);
        }
    });
}
var Greeter2 = /** @class */ (function () {
    function Greeter2() {
    }
    Greeter2.prototype.greet = function (name) {
        return "Hello " + name;
    };
    __decorate([
        __param(0, requireVal)
    ], Greeter2.prototype, "greet");
    return Greeter2;
}());
// 运行时会
console.log(new Greeter2().greet());
console.log(new Greeter2().greet('tom'));
