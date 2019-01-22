class Todo {
    constructor(title, note) {
      this.title = title
      this.note = note
      this.done = false
      this.createdAt = new Date()
  }
}

export default Todo;
