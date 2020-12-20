class Base {
  private name;
  private getName() {
    this.name = 'tom'
  }
  public sayHi = sayHi;
  
  constructor(name) {
    this.name = name
  }
}

// this need work
function sayHi(this: Base) {
  // @ts-ignore
  console.log(`hi ${this.getName()}`)
}


// this work
class Base1 {
  private name;
  private getName() {
    this.name = 'tom'
  }
  
  constructor(name) {
    this.name = name
  }
  sayHi() {
    console.log(`hi ${this.getName()}`)
  }
}
