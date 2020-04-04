import { Observable } from './module1';

// 采用此申明在导入模块 Observable 上扩充 map 方法,避免使用报错
declare module './module1' {
  interface Observable<T> {
    map(): void;
  }
}

Observable.prototype.map = function() {};
