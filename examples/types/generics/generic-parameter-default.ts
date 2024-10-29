export function getObjectKeys<Obj extends Record<string, any>,ChoiceKeys extends (keyof Obj)[] = (keyof Obj)[]>(obj: Obj,keys: ChoiceKeys) {
  return Object.keys(obj).filter(key => keys.includes(key))
}

export const a = getObjectKeys<{a: number, b: number}>({a: 1, b:2}, ['a'])