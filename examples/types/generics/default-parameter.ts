// 定义创建数组的泛型，默认为 number[]
type ArrayFactory<T = number> = T[]

// 数组元素默认为 number
const na: ArrayFactory = [1]

// 数组元素默认为 string
const na1: ArrayFactory<string> = [ 'a' ]

// 数组元素默认为 number
const na2: ArrayFactory<object> = [ { a: 1 } ]