// 导入 js 库, 注意 typescript 会自动查找同名的申明文件
import './global.js.js';

// 由于此文件采用 commonjs 导出,所以引入也必须采用相同方式,避免导入错误
let Greet = require('./greeter.js');

console.log(fooBar);
console.log(STATE_FOO);
greet('hello world!');
console.log(myLibrary.version);
myLibrary.hi();
getUser(1);
getUser('all');
greetWithOptions({ text: 'hello' });

let g = new Greet('tom');
g.greet();
