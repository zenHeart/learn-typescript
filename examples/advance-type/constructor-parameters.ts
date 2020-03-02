/**
 * 采用 ConstructorParameters<T> 提取构造器类型 T 中参数组成的元祖
 */

type T10 = ConstructorParameters<ErrorConstructor>; // [(string | undefined)?]
type T11 = ConstructorParameters<FunctionConstructor>; // string[]
type T12 = ConstructorParameters<RegExpConstructor>; // [string, (string | undefined)?]
