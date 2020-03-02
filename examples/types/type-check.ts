/**
 * 类型断言
 */
let someVal: any = 'string';
// 1. 采用 <类型>  告知编译器 someVal 为 string 避免类型检查错误
let strLength: number = (<string>someVal).length;

// 2. 采用 as 语法 效果同上
let strLength1: number = (someVal as string).length;
