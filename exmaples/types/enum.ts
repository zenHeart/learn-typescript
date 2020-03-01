/**
 * 采用 enum 定义枚举类型,语法格式为
 * enum <枚举类型名> {<值1>,<值2> }
 */
enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}

// 采用对象属性赋值枚举类型
let day: Days = Days.Mon;
console.log(day); // 实际上枚举值
