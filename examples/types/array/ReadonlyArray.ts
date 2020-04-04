// 效果同 let arr2:readonly number[] = [1,2,3]
let arr2: ReadonlyArray<number> = [1, 2, 3];

// 合法
console.log(readStrArr[0]);

// 报错, 数组只读无法修改
readStrArr[0] = 'bar';

// 报错, 只读数组无法添加新数据
readStrArr.push('bar');
readStrArr[3] = 'bar';
