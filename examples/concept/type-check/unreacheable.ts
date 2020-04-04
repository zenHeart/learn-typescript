function fun1(x) {
  if (x) {
    return true;
  } else {
    return false;
  }
  // 报错, 无法访问的代码
  x = 0;
}
