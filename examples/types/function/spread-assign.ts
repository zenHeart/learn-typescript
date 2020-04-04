function funBar(str: string, num: number) {}

// 报错, TypeScript 需要显示申明输入类型为 [string,number] 的元祖才可执行扩展
funBar(...['foo', 1]);

// 采用类型断言,申明扩展数组为 [string,number] 的元祖
funBar(...(<[string, number]>['foo', 1]));
// 效果同上,使用 as 语法
funBar(...(['bar', 1] as [string, number]));
