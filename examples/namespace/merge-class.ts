class C {}
namespace C {
   // 导出内容会合并到类 C 作为静态成员和方法
   export var b = 1;
   export function log() {

   }
}

console.log(C)