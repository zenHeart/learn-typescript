type ReadOnlyTuple = readonly [number, string];

let tuple2: ReadOnlyTuple = [1, 'foo'];

// 合法
tuple2 = [1, 'foo'];

//报错,元祖元素不能修改
tuple2[0] = 1;

// 报错, 元祖元素不能动态扩充
// 注意未申明 readonly 元祖虽然长度固定但仍可动态扩充
tuple2.push(12);
