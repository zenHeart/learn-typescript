var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent1 = /** @class */ (function () {
    function Parent1() {
        this._foo = 'foo';
    }
    // 限制 log 方法只有类才可访问
    Parent1.prototype._log = function (str) {
        console.log(new Date() + " set foo:", str);
    };
    //foo 为私有属性, 通过 protected 提供方法给子类设置
    Parent1.prototype.setFoo = function (str) {
        this._foo = str;
        //log 为私有函数只能在类中使用
        this._log(str);
    };
    //foo 为私有属性, 通过 protected 提供方法给子类读取
    Parent1.prototype.getFoo = function () {
        return this._foo;
    };
    return Parent1;
}());
var Children1 = /** @class */ (function (_super) {
    __extends(Children1, _super);
    function Children1(bar) {
        var _this = _super.call(this) || this;
        _this.bar = bar;
        return _this;
    }
    Children1.prototype.changeFoo = function (str) {
        //foo 为 private,子类无法直接设置,必须使用 changeFoo 才可以设置
        this.setFoo(str);
    };
    Children1.prototype.showFoo = function () {
        //foo 为 private,子类无法直接获取,必须使用 getFoo 才可以读取
        return this.getFoo();
    };
    return Children1;
}(Parent1));
var parent1 = new Parent1();
var children1 = new Children1('bar');
// 报错,属性 foo 申明为 private 属性,类和子类的实例均无法访问此属性
console.log(parent1._foo);
console.log(children1._foo);
// 报错,方法 log 申明为 private 属性,类和子类的实例均无法访问此方法
parent1._log('foo1');
children1._log('foo1');
// 合法, changeFoo 为公有方法
children1.changeFoo('foo1');
// 合法 changeFoo 为公有方法,通过 Children 类调用 setFoo
console.log(children1.showFoo());
