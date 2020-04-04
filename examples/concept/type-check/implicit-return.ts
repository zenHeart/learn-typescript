function fun1111(x) {
  // Error: Not all code paths return a value.
  if (x) {
    return false;
  }
  // implicitly returns `undefined`
}
