function readonly(target:any, key: PropertyKey): any{
  console.log('run init', arguments)
  return {
    writable: false
  }
}

class Class9  {
    @readonly
    get name()
}

// 对只读属性重写报错
Class9.username = 'jack'
console.log(Class9.username)