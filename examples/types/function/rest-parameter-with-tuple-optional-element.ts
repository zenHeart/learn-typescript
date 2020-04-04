// 定义剩余参数为元祖
// 效果类似 arg0:string,arg1:number,arg2?:string,arg3?:boolean
// 所以函数必须接受 4 个参数
function barFunc(arg0: string, ...args: [number, string?, boolean?]) {}

// 合法
barFunc('foo', 12, 'foo', true);
barFunc('foo', 12, 'foo');
barFunc('foo', 12);

// 报错,缺少一个参数
barFunc('foo');
