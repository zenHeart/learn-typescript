var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function d1() {
    console.log("f(): evaluated");
    return function (target, key, val) {
        console.log("f(): called");
    };
}
function d2() {
    console.log("g(): evaluated");
    return function (target, key, val) {
        console.log("g(): called");
    };
}
var Class14 = /** @class */ (function () {
    function Class14() {
    }
    Class14.prototype.method = function () { };
    __decorate([
        d1(),
        d2()
    ], Class14.prototype, "method");
    return Class14;
}());
