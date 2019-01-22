import Todo from './Todo';

class Todos {
    constructor() {
      this.todos = []
  }

  createTodo(title, note) {
    this.add(new Todo(title, note))
  }

  all() {
    return this.todos;
  }

  add(todo) {
    this.todos.push(todo)
  }
}

export default Todos;
