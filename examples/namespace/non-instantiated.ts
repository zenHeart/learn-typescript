// 命名空间 A1 只包含类型定义，所以编译输出 js 为空
namespace A1 {
    interface A1 {
        a: string
    }
    namespace B1 {
        type C = string;
    }
}

