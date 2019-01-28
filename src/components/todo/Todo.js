let startingId = 0;

class Todo {
  constructor(title, note) {
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
    return startingId++;
  }
}

export default Todo;
