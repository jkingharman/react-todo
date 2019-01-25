class Todo {
  constructor(title, note) {
    this.startingId = 0;
    this.id = this.setId();
    this.title = title;
    this.note = note;
    this.done = false;
  }

  updateDoneStatus() {
    this.done = !this.done;
  }

  getDoneStatus() {
    return this.done;
  }

  getId() {
    return this.id;
  }

  setId() {
    return this.startingId++;
  }
}

export default Todo;
