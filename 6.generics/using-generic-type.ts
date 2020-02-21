/**
 * 采用泛型的属性创建新的泛型
 */

// 获取对象的键值,限制键名必须存在
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3 };

let a = getProperty(x, 'a');

// 该语句会报错因为没有属性 m
// let a = getProperty(x,'m');
