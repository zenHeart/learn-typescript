var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * 注意由于属性值在实例化时才存在，所以无 value 参数
 * @param target 类的原型，由于实例在初始化时才创建，此处用原型替代
 * @param key 属性值
 */
function log(target, key) {
    // 修改属性为只读
    console.log('run in init');
    var val;
    return {
        set: function (value) {
            val = value;
            console.log("Set " + key + " to " + value, this);
        },
        get: function () {
            return val;
        }
    };
}
var Class8 = /** @class */ (function () {
    function Class8(name) {
        this.name = name;
    }
    __decorate([
        log
    ], Class8.prototype, "name");
    return Class8;
}());
var c = new Class8('tom');
console.log("%o", c);
