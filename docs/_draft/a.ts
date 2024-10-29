interface Comp1 {
  name: 'a',
  props: {
    a: string
  }
}

interface Comp2 {
  name: 'b',
  props: {
    b: number
  }
}

type CompMap = {
  'a': Comp1,
  'b': Comp2
}

type  CompsNames = 'a' | 'b'  

let comp1: Comp1= {
  name: 'a',
  props: {
    a: 'a'
  }
}
let comp2: Comp2 = {
  name: 'b',
  props: {
    b: 1
  }
}

type CompInfo =  {
  is: CompsNames,
  comp:  CompInfo['is'] extends 'a' ? Comp1: Comp2
}