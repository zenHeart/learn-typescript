// 采用表达式对枚举成员进行赋值
enum FileDemo {
  None, // 默认值为 0
  Read = 1 << 1, // 1 左移一位, Read = 2
  Write = 1 << 2, // 1 左移两位, Write = 4
  ReadWrite = Read | Write, // 引用之前的枚举成员的值进行或逻辑 ReadWrite = 6

  // 使用一个复杂表达式进行赋值,将数组的累加结果赋值给 G
  G = [1, 2, 3, 4].reduce((sum, ele) => (sum += ele)) // G =  10
}

console.log(FileAccess);
/**
 * FileAccess: 
 { 
 '0': 'None',
  '2': 'Read',
  '4': 'Write',
  '6': 'ReadWrite',
  '10': 'G',
  None: 0,
  Read: 2,
  Write: 4,
  ReadWrite: 6,
  G: 10 }
 */
