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

export const fetchTodos = component => {
  const baseUrl = "http://localhost:8080/todos";
  fetch(baseUrl)
    .then(res => {
      res.json().then(json => {
        component.setState({ todos: json });
      });
    })
    .catch(err => {
      component.setState({ error: "Error! Try inspect db.json" });
    });
};

export const filterTodosByPath = (todos, path) => {
  switch (path) {
    case "/":
      return todos;
      break;
    case "/undone":
      return todos.filter(todo => !todo.done);
      break;
    case "/done":
      return todos.filter(todo => todo.done);
      break;
    default:
      return todos;
  }
};
