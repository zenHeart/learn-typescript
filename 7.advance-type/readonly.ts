/**
 * 采用 Readonly<T> 设定类型 T 的所有属性为只读
 */

interface Todo {
  title: string;
  description: string;
}

let todo: Readonly<Todo> = {
  title: 'organize desk',
  description: 'clear clutter'
};

// 重新复制会报错
// todo.title = 'tom';
