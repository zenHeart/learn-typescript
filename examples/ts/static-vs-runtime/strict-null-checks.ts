// strictNullChecks 编译期 vs 运行期
// 编译选项只影响编译，运行时无任何保障

// strictNullChecks: true 时，编译会报错
let name: string = 'Alice';
// name = null;    // Error: Type 'null' is not assignable to type 'string'
// name = undefined; // Error: Type 'undefined' is not assignable to type 'string'

// 即使编译通过，运行时仍然可能出错
let name2: string = 'Bob';
name2 = null as any; // 绕过类型检查

// 运行时会崩溃！
// console.log(name2.toUpperCase()); // TypeError: Cannot read properties of null

// 正确做法：显式处理 null/undefined
let name3: string | null = 'Charlie';
if (name3 !== null) {
  console.log(name3.toUpperCase()); // 安全
}
