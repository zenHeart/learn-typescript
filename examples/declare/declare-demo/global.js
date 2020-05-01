fooBar = 12; // 全局变量
const STATE_FOO = [1, 2, 3];
global.STATE_FOO = STATE_FOO; // 全局常量
global.greet = str => console.log(str); // 全局方法

// 导出一个全局对象
myLibrary = {
  version: '1.0.0',
  hi() {
    console.log('hi');
  }
};
global.myLibrary;

users = [
  { name: 'tom', id: 1 },
  { name: 'jack', id: 12 }
];

// 导出输入支持多种类型的全局函数
global.getUser = function(input) {
  if (typeof input === 'number') {
    return users.filter(ele => ele.id === input);
  } else if (input === 'all') {
    return users;
  } else {
    return [];
  }
};

//导出输入为配置的对象的全局函数函数
let DEFAULT_OPTIONS = {
  text: 'test',
  time: 400,
  color: 'green'
};
// 三项都为选填内容
function greetWithOptions(options = DEFAULT_OPTIONS) {
  let config = { ...options, ...DEFAULT_OPTIONS };
  console.log(config);
}
global.greetWithOptions = greetWithOptions;
