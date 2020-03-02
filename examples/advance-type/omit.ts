/**
 * 采用 Omit<T,K> 提取类型 T 中键名不属于类型 K 的子类型返回新类型
 */

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, 'description'>;

let todo: TodoPreview = {
  title: 'clean room',
  completed: false
};

console.log(todo);
