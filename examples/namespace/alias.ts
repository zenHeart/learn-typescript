namespace LongNameSpaceName {
   export const a = 1
}

namespace LongNameSpaceName1 {
   export type A = 'a' | 'b'
}

// 采用 import 简化长命名空间导入
import LN = LongNameSpaceName;
console.log(LN.a)