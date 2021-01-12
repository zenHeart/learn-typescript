interface A { x: string; }

namespace M {  
    interface B { x: A; }  
    interface C { x: B; }  
    export function foo(c: C) { 

    }  
}