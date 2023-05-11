type PartialKeys<T, K extends keyof T> = {
 [index in keyof T as K1 extends K ? never: K1 ]: T[index]
} & { [index1 in keyof T as K1 extends K ? K: never ]?: T[index1] } 

interface A124 {
   a: number
   b: number
}

let n1: keyof A124 = 'name'

type B3 = PartialKeys<A124, 'a'>

const gf:B3 = {
   a: 12,
   name: 12,
   age: 12,
   location:12,
   greet: 12
}
type B = {
   a: number,
   b: string
}['a'| 'b']