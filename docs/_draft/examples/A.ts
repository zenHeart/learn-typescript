
class Base {
  public foo!: number;
  private bar!: string;
  constructor(conf: {
    [index:string]: any
  }) {
    this.foo = conf.foo
    this.bar = conf.bar
  }
  private m1() {
    console.log(this.foo)
  }
  public m2() {
    this.m1()
    console.log(this.bar)
  }
}
interface AParentConf {
  a: number
  b: number
  c: string
  foo?: number
  bar?: string
  [index:string]: any
}
class AParent extends Base {
  public a!:number
  protected b!:number
  private c!:string;
  constructor(conf: AParentConf) {
    super(conf)
    this.a = conf.a
    this.b = conf.b
    this.c = conf.c
  }
  private m3() {
    console.log(this.c)
  }
  public m4() {
    this.m3()
    console.log(this.b)
  }
}
export interface AConfig extends AParentConf {
  d: number
  e: number
}

export default class A extends AParent {
  public d!: number
  private e!: number

  constructor(conf: AConfig) {
    super(conf)
    this.d = conf.d
    this.e = conf.e
  }
  
  protected m5() {
    console.log(this.e)
  }

  public m6() {
    this.m5()
    console.log(this.d)
  }
}