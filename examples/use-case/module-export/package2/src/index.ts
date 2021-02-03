import { add } from '@s/package1'

export function logAdd(a: number ,b: number): number {
  const res =  add(a, b);
  console.log(a ,b, res);
  return res
}