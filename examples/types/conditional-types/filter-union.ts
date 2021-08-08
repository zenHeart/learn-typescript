// 从类型 T 中移除扩展自 U 的类型
type Diff<T, U> = T extends U ? never : T;  

// 过滤扩展自 U 的类型 T
type Filter<T, U> = T extends U ? T : never;  

// "b" | "d"
type T30 = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">;  
// "a" | "c"
type T31 = Filter<"a" | "b" | "c" | "d", "a" | "c" | "f">;  
// string | number
type T32 = Diff<string | number | (() => void), Function>; 
 
 // () => void
type T33 = Filter<string | number | (() => void), Function>; 