function testGeneric<T extends Record<string, any>, U = Partial<keyof T>>(a: T) {
  let b = Object.keys(a) as U
  return b
}

let a12 = testGeneric<{a: number, b: string}, 'a'>({a: 1, b: '12'})
console.log(a12)