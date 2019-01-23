let startingID = 0

class Todo {
    constructor(title, note) {
      this.id = this.setId()
      this.title = title
      this.note = note
      this.done = false
      this.createdAt = new Date()
  }

  updateStatus() {
    this.done = !this.done
  }

  setId() {
    return startingID++
  }

}

export default Todo;
