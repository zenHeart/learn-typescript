namespace A1 {
    interface A1 {
        a: string
    }
    namespace B1 {
        type C = string;
    }
}

// A 为非实例命名空间，无法作为值传递给变量，所以编译会报错
let b = A1;
