interface Person {
  name: string;
  age: number;
  location: string;
}

type K1 = keyof Person; // "name" | "age" | "location"
// keyof 会提取数组暴露的方法名
type K2 = keyof Person[]; // "length" | "push" | "pop" | "concat" | ...
// 由于此处 x 是泛指索引类型键名为 string 类型，keyof 提取的类型就是 string 而非 x
type K3 = keyof { [x: string]: Person }; // string