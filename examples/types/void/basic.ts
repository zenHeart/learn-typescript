// 通过显示标注函数为 void 说明函数无返回值,避免函数内部调用 return
function logSomeThing(): void {
  console.log('demo');

  // 该函会报错,因为函数无需返回值不需要 return 语句
  return 'success!';
}
