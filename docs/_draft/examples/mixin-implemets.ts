import type TypeA  from './A'
import { AConfig } from './A'
import A from './A'

interface ExtendsAConfig extends AConfig {
  extraConfig?: {
    [index: string]: any
  }
}

// simulate all A public feature  ts will throw error
// simulate private or protected method ts2720 error
class AdapterA implements TypeA {
  public foo!: number;
  private bar!: string;
  public a!: number;
  protected b!:number
  private c!:string;
  private e!:number;
  public d!: number
  private m1() {
  }
  public m2() {

  }
  private m3() {
  }
  public m4() {
  }
  protected m5() {}
  public m6() {
  }
  constructor(conf: ExtendsAConfig) {
    // do some new logic
  }
}


export default class MixinA extends AdapterA {
  public override  d!: number
  public override  m6() {
  }

  constructor(conf: ExtendsAConfig) {
    super(conf)
    const model = conf?.extraConfig?.model ?? 'A'
    if(model === 'mixinA') {
      return this
    } else if(model === 'adapter') {
      return new AdapterA(conf)
    } else {
      // throw error MixinA not like A type
      return new A(conf)
    }
  }
}



