
namespace M3 {  
    // 由于导出函数依赖类型 C， C 依赖类型 B 建议导出
    export type B = 'a' | 'b'  
    
    // 由于导出函数依赖类型 C，建议导出
    export interface C { x: B; }  

    export function fooA1(c: C) { 
       console.log(c)
    }  
}

M3.fooA1({x: 'a'} )