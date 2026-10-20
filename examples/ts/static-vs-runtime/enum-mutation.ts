enum Status {
  Pending,
  Done,
}

// 运行时对象可被改写；TypeScript 不会阻止
(Status as unknown as Record<string, unknown>).Pending = 99;
console.log(Status.Pending); // 99
