// 判断字面量类型 'foo' 是否扩展与 string 类型
// 是则返回 true 字面量类型，否则返回 false 字面量类型
type IsString = 'foo' extends string? true : false;