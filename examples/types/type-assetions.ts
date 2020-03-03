let unknownVal1: unknown = 1;

// 采用 <类型> 标注 unknownVal1 为 number 类型
(<number>unknownVal1).toString(16);
// 也可采用 as 语法,注意在 jsx 中只能采用此语法,因为尖括号表示标签!
(unknownVal1 as number).toString(16);

// 非法,类型断言只是显示告知 TypeScript 如何处理变量类型,并不会实际转换变量类型
unknownVal1.toString(16);
