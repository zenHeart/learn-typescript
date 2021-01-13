namespace A1 {
   // 这些类型和变量只在命名空间内可用
   var a = 1;
   interface Foo {
      a?: 1
   };

   function log1() {
      console.log(a)
   }


   export function log() {
      console.log(a)
   }

}

// 合法
A1.log()

// 报错,该方法未导出无法使用
A1.log1()
