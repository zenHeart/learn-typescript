// 单例模式
class Singleton {
  private static instance: Singleton;

  // 阻止采用构造器实例化
  private constructor() {}

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

let v = Singleton.getInstance();
// 报错, 不能采用 new 触发构造函数
let e = new Singleton();
