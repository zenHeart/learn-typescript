import A, { AConfig } from './A'

interface ExtendsAConfig extends AConfig {
  extraConfig?: {
    [index: string]: any
  }
}

class AdapterA extends A {
  public override  d!: number
  public override  m6() {
    console.log(this.d)
  }
  constructor(conf: ExtendsAConfig) {
    super(conf)
    this.d = conf?.extraConfig?.d
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
      return new A(conf)
    }
  }
}



