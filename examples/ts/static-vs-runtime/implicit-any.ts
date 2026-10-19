// noImplicitAny 演示
// noImplicitAny: true 时，隐式 any 会报错

// noImplicitAny: false (默认)
function process(data) {  // data 隐式为 any
  return data.value;      // 不报错，但危险！
}

// noImplicitAny: true
function processSafe(data: any) {  // 显式声明为 any
  return data.value;
}

// 即使编译通过，运行时也可能出错
const result = process(null); // 返回 undefined，不会报错
console.log(result); // undefined
