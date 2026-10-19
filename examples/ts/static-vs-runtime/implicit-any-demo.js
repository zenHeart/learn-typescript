// implicit-any.ts 编译后的 JavaScript
// any 类型在运行时没有任何保护

function process(data) {
  return data.value;
}

function processSafe(data) {
  return data.value;
}

const result = process(null); // 返回 undefined，不报错
console.log(result); // undefined

// 运行时行为完全一样，没有任何类型保护
