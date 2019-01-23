class Todo {
    constructor(title, note) {
      this.id = 1
      this.title = title
      this.note = note
      this.done = false
      this.createdAt = new Date()
  }

  updateStatus() {
    this.done = !this.done
  }

}

export default Todo;
