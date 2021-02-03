interface add12 {
  (a: string, b: string): string,
  (a: number, b: number): number,
}

// const add12 :add12  = (a, b ) =>  {
//   if(typeof a === 'string') {
//     return a + b;
//   } 
//   if(typeof a === 'number' && typeof b === 'number') {
//     return a + b;
//   }
// }

// add(1,3);
add12('dsdfs', '3');
add12(12, 23);

