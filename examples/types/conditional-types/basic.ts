// 判断泛型 T 是否扩展自字符串,是则返回 true 字面量类型,否则为 false
type IsString<T> = T extends string ? true : false;

// 'foo' 为字符串字面量,返回 true 字面量类型,所以只能取值为 true
let valFoo: IsString<'foo'> = true;

// number 非 string ,返回 false
let valFoo1: IsString<number> = false;
