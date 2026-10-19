// 类型守卫 - 在编译期和运行期都有效

// 场景：处理多种可能类型的参数
function processValue(value: string | number | boolean | null | undefined) {
  // typeof 是真正的运行时检查
  if (typeof value === "string") {
    // TypeScript 在这个分支中知道 value 是 string
    console.log("String length:", value.length);
    return value.toUpperCase();
  }
  
  if (typeof value === "number") {
    // TypeScript 在这个分支中知道 value 是 number
    console.log("Number to fixed:", value.toFixed(2));
    return value * 2;
  }
  
  if (typeof value === "boolean") {
    // TypeScript 在这个分支中知道 value 是 boolean
    return !value;
  }
  
  // 这里是 null | undefined
  return "No value provided";
}

// 测试
console.log(processValue("hello")); // String length: 5, HELLO
console.log(processValue(123.456)); // Number to fixed: 123.46, 246.912
console.log(processValue(true)); // false
console.log(processValue(null)); // No value provided
console.log(processValue(undefined)); // No value provided
