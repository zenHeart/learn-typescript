const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 45 },
];

// 该操作会自动综合 MyArray 的各项返回对应类型
type Person = typeof MyArray[number];
type Age = typeof MyArray[number]["age"];
type Age2 = Person["age"];


  