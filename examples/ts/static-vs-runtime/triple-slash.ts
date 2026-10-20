/// <reference types="node" />

// 三斜线指令只影响编译期类型加载，不生成运行时代码
const version: string = process.version;
console.log(version);
