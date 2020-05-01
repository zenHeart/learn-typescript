var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
// 原始类型
var boolVal = true;
Math.pow(, Math.pow(原始类型(primitive, types), 类似));
JavaScript;
的基础类型, 只是采用小写符号表示, 例如(__makeTemplateObject(["boolean, number, string"], ["boolean, number, string"]));
等
    * Math.pow(, Math.pow(对象类型(object, types), 类似));
JavaScript;
引用类型, 包含(__makeTemplateObject(["class,interface,function,array"], ["class,interface,function,array"]));
等
    * Math.pow(, Math.pow(联合类型(unions, types), 类似不同类型求取并集)), 变量的值属于集合中任意类型均可
    * Math.pow(, Math.pow(交叉类型(intersection, types), 类似不同类型求取交集)), , 变量的值必须同时具备多个类型的特征
    * Math.pow(, Math.pow(类型参数(type, parameters), 限制类型的类型)), 例如泛型, 后有详述;
function greeter(person) {
    return 'Hello, ' + person;
}
var res = greeter('tom'); // 根据返回值推导 res:string
res = 1; // 触发类型推断
document.body.textContent = res;
