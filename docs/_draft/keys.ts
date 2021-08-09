export {}
type a = 'a' | 'b'
type L1  = `${a}.b`

// 支持嵌套 key 设置的类型
type combineK<T extends ``, U extends ``> = `${T}.${U}`
type getNestKey<T> = {
  [
    K in keyof T as 
  ]: T[K] extends object ? T[K] extends Array<infer Item> ? 
  Item extends object ? combineK<combineK<K, number> ,getNestKey<Item>>  | combineK<K, number> : combineK<K, number> 
  :  combineK<K, getNestKey<T[K]>>  | K : K
}[keyof T]

type g = getNestKey<{
  a: 1,
  b: {
    c: 2,
    f: {
      q: 1
    }
  },
  j: [
    {
    f: 1
  },
  {
    v: [{
      q: 1
    },
    12
  ]
  }
]
}>

function setK<T>(obj: {
  [index:string]: any
}, k: getNestKey<T> ) {
  
}
const a= {
  a: 1,
  b: {
    c: 12
  },
  g: [{
    f: 1,
    v: {
      q: {
        f: 12
      }
    }
  },2]
}

setK<typeof a>(a, 'g.12')

type f = ['name'] | ['name', 'firstName'] | ['name', 'secondName'] | ['hobby', number]
type f1 = keyof f

// 采用 infer 可以推导出内部数组的键
type getNextArrayType<T> = {
  [K in keyof T]: T[K] extends Array<infer Item>? {
    [K1 in keyof Item]: Item[K1] extends number? K1: never
  }[keyof Item]: never
}[keyof T]

const a1 = {
  a: 1,
  b: [{
    a: 1,
    b: '12',
    c: 0
  }]
}
type q = getNextArrayType<typeof a1>