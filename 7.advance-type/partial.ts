/**
 * 采用 partial<T> 表示类型 T 的子类型
 */

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

let todo1 = {
  title: 'organize desk',
  description: 'clear clutter'
};

let todo2 = updateTodo(todo1, {
  description: 'throw out trash'
});
