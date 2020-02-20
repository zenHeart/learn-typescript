/**
 * 采用 Pick<T,K> 提取类型 T 中键名属于类型 K 的子类型
 */

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

let todo: TodoPreview = {
  title: 'clean room',
  completed: false
};

console.log(todo);
