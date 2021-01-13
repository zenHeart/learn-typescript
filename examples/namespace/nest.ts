namespace A1.B.C {
   export interface A {
      a?: number
   }

   export var a =  1;
   export function log() {
      console.log('log')
   }
}


let a111 = A1.B.C.a
let abc1:A1.B.C.A;
A1.B.C.log();