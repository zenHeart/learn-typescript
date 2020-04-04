type Extend1<T> = {
  [key in keyof T]:T[key]
}

//TODO: 为什么非法
interface Extend2<T>  {
  [key in keyof T]:T[key]
}
