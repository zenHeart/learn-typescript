const c1 = 1; // Type 1
const c2 = c1; // Type 1
const c3 = "abc"; // Type "abc"
const c4 = true; // Type true
const c5 = c1 ? 1 : "abc"; 
type c5 = typeof c5; // Type 1 | 'abc'

let var1 = 1; // Type number
var1 = 12;
// 非法
var1 = '1'