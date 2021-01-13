namespace A1 {
   // 定义 A1 命名空间的内容
   export var a = 1;

   export namespace B.C {
      export interface A {
         a?: number
      }

      export var a =  1;
      export function log() {
         console.log('log', A1.a)
      }
   }
   namespace F {
      export function log() {
         console.log('F namespace')
      }
   }
   // 你直接在 A1 的命名空间内部使用内层命名空间
   B.C.log()

   // 即使命名空间未导出，但是可获取该命名空间内部导出方法
   F.log()

}


let a111 = A1.B.C.a
let abc1:A1.B.C.A;
A1.B.C.log();
console.log(A1)