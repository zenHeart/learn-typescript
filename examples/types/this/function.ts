// 显示申明函数的 this 为空类型
function noThisHi(this: void, name: string) {
  console.log(`Hi ${name}`);
}

// 注意函数调用时 this 不会被识别为参数,它只是限制 this 的使用
noThisHi('tom');

// 非法, 此处 call 的第一个参数为 this, TypeScript 识别到限制 this 修改
noThisHi.call({});
