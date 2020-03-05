let obj1: Object = new Object(1);
obj1 = new Boolean(false); // 合法, Boolean 原始封装对象
obj1 = new Number(10); // 合法 Number 原始封装对象
obj1 = Object(BigInt(1)); // 合法 BigInt 原始封装对象
obj1 = Object(Symbol(1)); // 合法 Symbol 原始封装对象
obj1 = new String('demo'); // 合法 String 原始封装对象
obj1 = {}; // 合法,此处定义了字面量对象
obj1 = Object.create(null); // 合法虽然原型链为 null
// Object 支持原始类型的值
obj1 = false; // 合法
obj1 = 1; // 合法
obj1 = 12n; // 合法
obj1 = 'foo'; // 合法
obj1 = Symbol(1); // 合法

obj1 = undefined; // 非法
obj1 = null; // 非法

let obj2: object = new Object(1);
obj2 = new Boolean(false); // 合法, Boolean 原始封装对象
obj2 = new Number(10); // 合法 Number 原始封装对象
obj2 = Object(BigInt(1)); // 合法 BigInt 原始封装对象
obj2 = Object(Symbol(1)); // 合法 Symbol 原始封装对象
obj2 = new String('demo'); // 合法 String 原始封装对象
obj2 = {}; // 合法,此处定义了字面量对象
obj2 = Object.create(null); // 合法虽然原型链为 null

// object 不支持原始类型的值
obj2 = undefined; // 非法
obj2 = null; // 非法
obj2 = false; // 非法
obj2 = 1; // 非法
obj2 = 12n; // 非法
obj2 = 'foo'; // 非法
obj2 = Symbol(1); // 非法
