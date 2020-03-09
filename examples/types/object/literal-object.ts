let literalObj: {} = new Object(1);
literalObj = new Boolean(false); // 合法, Boolean 原始封装对象
literalObj = new Number(10); // 合法 Number 原始封装对象
literalObj = Object(BigInt(1)); // 合法 BigInt 原始封装对象
literalObj = Object(Symbol(1)); // 合法 Symbol 原始封装对象
literalObj = new String('demo'); // 合法 String 原始封装对象
literalObj = {}; // 合法,此处定义了字面量对象
literalObj = Object.create(null); // 合法虽然原型链为 null
// Object 支持原始类型的值
literalObj = false; // 合法
literalObj = 1; // 合法
literalObj = 12n; // 合法
literalObj = 'foo'; // 合法
literalObj = Symbol(1); // 合法

literalObj = undefined; // 报错
literalObj = null; // 报错
