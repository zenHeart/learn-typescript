// 限制 time 参数只能为 morning,afternoon,evening ,name 只能为字符串, 函数无返回值
function greet(time: 'morning' | 'afternoon' | 'evening', name: string): void {
  console.log(`Good ${time} ${name}!`);
}

greet('morning', 'tom'); // 合法
greet('afternoon', 'jack'); // 合法
greet('evening', 'jerry'); // 合法

// 报错 输入字符串不属于限定的字符串
greet('evening1', 'jerry');
