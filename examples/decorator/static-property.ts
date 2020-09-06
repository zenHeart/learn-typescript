function log(target:any, key: PropertyKey, descriptor: any): any{
  console.log('run init', arguments)
  let oldGetter = descriptor.get
  return {
    get: function () {
      console.log('log', descriptor, this[key])
      // 报错原因
      oldGetter()
    }
  }
}

class Class10  {
    get fullName():string {
      return this.firstName + this.lastName
    }
    firstName: string;
    lastName: string;
    constructor (firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;

    }
}

// 对只读属性重写报错
let user = new Class10('hello','world');
user.fullName 
