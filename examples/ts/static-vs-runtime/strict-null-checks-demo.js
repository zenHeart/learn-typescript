// strict-null-checks.ts 编译后的 JavaScript
// 没有任何类型保护

let name = 'Alice';
name = null;    // 赋值成功，没有任何检查
name = undefined; // 赋值成功，没有任何检查

// 运行时会崩溃
try {
  console.log(name.toUpperCase());
} catch (e) {
  console.error('Error:', e.message); // Cannot read properties of null
}

// 正确做法：运行时手动检查
let name3 = 'Charlie';
if (name3 !== null) {
  console.log(name3.toUpperCase()); // CHARLIE
}
