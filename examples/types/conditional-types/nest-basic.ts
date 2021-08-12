type Flatarr<T>  = T extends Array<infer U> ? Flatarr<U> : T
// TODO: 递归判断需修改
type a1 = Flatarr<[1, 2, 3, [4, [[5]]]]>


// 获取 promise 返回值

type NestAwaited<T> = T extends PromiseLike<infer U> ? NestAwaited<U> : T;

const pa1 = Promise.resolve(Promise.resolve(1))
type p1 = NestAwaited<typeof pa1>
