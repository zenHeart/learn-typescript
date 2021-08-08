// 返回所有键值为数组的联合类型
export const c1 = {
  a: { b:{c:{d:{e:{f:{g:{h:{i:{j:{k:{l:{z:{o:{p:[1]}}}}}}}}}}}}}}
}
type C = typeof c1;

// 过滤特定类型键值组成的联合类型
type FilterObj<T extends {}, Condition> = keyof {
  [K in keyof T as 
    T[K] extends Condition ? K : 
    T[K] extends object ? FilterObj<T[K] , Condition>: never
 ]: T[K]
}
type a = FilterObj<C, any[]>;

// 获取类型所有键名组成的联合类型
type getNestKey<T extends object> = keyof {
  [
    K in keyof T as T[K] extends object ? T[K] extends any[] ? K: getNestKey<T[K]> | K : K
  ]: T[K]
}

type g = getNestKey<{
  a: {
    b: string,
    q: {
      n: number
    }
  },
  f: []
}>

// 判断类型逻辑
type getType<T> = T extends never ? 
'never' : (T extends object ? 
  (T extends any[] ? 'array': T extends Function ? 'function': 'object' ): 'object')
