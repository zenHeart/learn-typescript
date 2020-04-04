export function toObservable1() {}

// 全局扩充, 将模块方法扩充到全局的原型对象上
declare global {
  interface Array<T> {
    toObservable1(): void;
  }
}

Array.prototype.toObservable1 = toObservable1;
