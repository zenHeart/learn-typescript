namespace M {
   var s = "hello"

   export function f() {  
      return s;  
  }  
}
M.f();

// s 为内部变量此处使用会报错
M.s