interface Hi {
  readonly name: string;
  sayHi(name?: string): void
}

class HiPerson implements Hi {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
  sayHi() {
    console.log(`hi ${this.name}`)
  }
}
let hiPerson = new HiPerson('tom')
hiPerson.sayHi()