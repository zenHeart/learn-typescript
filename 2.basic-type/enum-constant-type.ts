/**
 * 常数枚举,相比普通枚举,不会编译出枚举对象
 * 建议采用常数枚举代替, enum 可以减少编译结果
 */
const enum Days1 {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
var d: Days1 = Days1.Sat;
console.log(d);
