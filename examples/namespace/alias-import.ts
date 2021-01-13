namespace A1 {  
   export interface X { s: string }  
   export var X: X;  
}

namespace B {  
   // 注意此处赋值只包含 A1 命名空间的值，不包含类型
   var Y = A1;    // Alias for namespace A  
   // 此处会报错，应为 Y 不包含导入命名空间的类型
   var B: Y.X;


    // import 不仅创建了别名，同时导入了 A1 所有 export 的值和类型
   import Y1 = A1;    
   // 合法，由于导入了所有申明，所以包含 A1 的导出类型
   var B1: Y1.X;
}