interface O1 {
  a: number
}
interface O2 {
  b: number,
  c: string
}
type A1 = O1 | O2;
type A1_ARR = A1[]
type A2_ARR = A1[]


let a :A1_ARR = [{a : 1, b : 12 }, {b : 4, c: '12'}]
let a1 :A2_ARR  = a;
