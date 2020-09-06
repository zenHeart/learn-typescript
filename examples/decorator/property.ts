/**
 * 注意由于属性值在实例化时才存在，所以无 value 参数
 * @param target 类的原型，由于实例在初始化时才创建，此处用原型替代
 * @param key 属性值
 */
function log(target:any, key: PropertyKey):any {
    // 修改属性为只读
    console.log('run in init');
    let val: any;
    return {
      set: function (value: any) {
        val = value;
        console.log(`Set ${key as string} to ${value}`, this);
      },
      get: function() {
        return val;
      }
    };
}

class Class8  {
    @log
    name: string;
    constructor(name : string) {
        this.name = name
    }
}
let c = new Class8 ('tom');
console.log("%o", c)