namespace A1 {
    export var a = 1;  
    export interface A1 {
        a: string
    }

    namespace B1 {
        type C = string;
    }
}

// A1 命名空间作为值传递， 只保留具有实际意义的 a 属性
let fooA1 = A1;

// 该申明会报错，无法在 fooA1 变量上不包含类型定义
let c: fooA1.A1;
