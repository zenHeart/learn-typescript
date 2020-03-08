// 在函数申明时采用泛型符号, T 指代任意类型,参数和返回值均可采用此类型
function identity<T>(arg: T): T {
  return arg;
}

// 泛型符号名称为指示符,可以取任何合法名称
let myIdentity1: <ABC>(arg: ABC) => ABC = identity;

// 注意 `<>` 是申明在 `()` 之前!
let myIdentity2: { <T>(arg: T): T } = identity;
