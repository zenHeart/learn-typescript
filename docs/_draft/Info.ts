export enum INFO_TYPE {
  A = 1,
  B = 2,
  C = 3,
}
interface BaseInfo {
  a?: string,
}
interface InfoA extends BaseInfo {
  a1: string
}
interface InfoB extends BaseInfo {
  b1: string
}
interface InfoC extends BaseInfo {
  c1: number
}


type INFO_TYPES = keyof Record<INFO_TYPE, number>; 

type GetInfoType<T> = T extends typeof INFO_TYPE.A
? InfoA: T extends typeof INFO_TYPE.B
? InfoB: InfoC;

export function getPayload1<T extends INFO_TYPES>(info: GetInfoType<T>, type: T) {
  return info
}

getPayload1({
  a: 'asd',
  c1: 12
}, INFO_TYPE.C)

