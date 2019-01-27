 import React, { Component } from "react";
import TodoInput from "./TodoInput";

class TodoInputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { note: "", title: "", validationFail: false };
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentWillReceiveProps() {
    if (this.props.modalIsOpen === false) {
      this.clearInputs();
    }
  }

  clearInputs() {
    this.setState({ note: "", title: "" });
  }

  todoIsValid() {
    if (
      this.state.note !== "" &&
      this.state.title !== "" &&
      (this.state.note.length <= 200 && this.state.note.length <= 200)
    ) {
      return true;
    }
  }

  flashError() {
    this.setState({ validationFail: !this.state.validationFail }, () => {
      setTimeout(
        () => this.setState({ validationFail: !this.state.validationFail }),
        1500
      );
    });
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleNoteChange(e) {
    this.setState({
      note: e.target.value
    });
  }

  handleAdd() {
    if (this.todoIsValid()) {
      this.props.onAdd(this.state.note, this.state.title);
      this.clearInputs();
    } else {
      this.flashError();
    }
  }

  render() {
    return (
      <TodoInput
        note={this.state.note}
        title={this.state.title}
        validationFail={this.state.validationFail}
        handleAdd={this.handleAdd}
        handleNoteChange={this.handleNoteChange}
        handleTitleChange={this.handleTitleChange}
      />
    );
  }
}

export default TodoInputContainer;
