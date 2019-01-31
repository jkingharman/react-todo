export const genTodoId = () => {
  return Math.floor(Math.random() * 100000);
};

export const removeTodo = (todos, todoId) => {
  return todos.filter(todo => todo.id !== todoId);
};

export const addTodo = (todos, newTodo) => {
  return todos.concat(newTodo);
};

export const todoIsValid = (note, title) => {
  if (
    note !== "" &&
    title !== "" &&
    (note.length <= 200 && note.length <= 200)
  ) {
    return true;
  }
};

export const filterTodosByPath = (todos, path) => {
  switch (path) {
    case "/":
      return todos;
    case "/undone":
      return todos.filter(todo => !todo.done);
    case "/done":
      return todos.filter(todo => todo.done);
    default:
      return todos;
  }
};
