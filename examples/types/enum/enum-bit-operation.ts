enum FileAccess {
  Execution = 1,
  Write = 1 << 1, // 左移一位表示读权限
  Read = 1 << 2 // 左移一位表示写权限
}

// 显示文件权限
function getFileAccess(num: number): string {
  let res = ['-', '-', '-']; // 默认无权限
  // 与逻辑判断对应标志位是否有读权限
  if (num & FileAccess.Read) {
    res[0] = 'r';
  }
  // 与逻辑判断对应标志位是否有写权限
  if (num & FileAccess.Write) {
    res[1] = 'w';
  }
  // 与逻辑判断对应标志位是否有执行权限
  if (num & FileAccess.Execution) {
    res[2] = 'x';
  }
  return res.join('');
}
// 创建可读可写的文件
let readWritFile = FileAccess.Write | FileAccess.Read;
// 包含所有权限的文件
let allAccessFile = FileAccess.Execution | FileAccess.Write | FileAccess.Read;

// 返回: readWritFile: rw-
console.log('readWritFile:', getFileAccess(readWritFile));

// 返回: allAccessFile: rwx
console.log('allAccessFile:', getFileAccess(allAccessFile));
