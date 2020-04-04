type MapToPromise<T> = {
  [key in keyof T]: Promise<T[key]>;
};

type Coordinate = [number, number];

type PromiseCoordinate = MapToPromise<Coordinate>;

// 设置 promiseAll resolve 的值必须为 number 类型的 promise 数组
let promiseAll: PromiseCoordinate = [Promise.resolve(1), Promise.resolve(2)];
