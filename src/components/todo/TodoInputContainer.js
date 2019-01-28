import React, { Component } from "react";
import TodoInput from "./TodoInput";

class TodoInputContainer extends Component {

  state = { note: "", title: "", errorMessage: "" };

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleNoteChange = (e) => {
    this.setState({
      note: e.target.value
    });
  }

  handleAdd = (e) => {
    this.props.onAdd(this.state.note, this.state.title);
    this.clearInputs();
  }

  handleEmptyAdd = (e) => {
    this.setError()
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

  setError() {
    this.setState({ errorMessage: "Input can't be blank!" }, () => {
      setTimeout(
        () => this.setState({ errorMessage: "" }),
        1500
      );
    });
  }

  render() {
    const handleAdd = this.todoIsValid() ? this.handleAdd : this.handleEmptyAdd

    return (
      <TodoInput
        note={this.state.note}
        title={this.state.title}
        errorMessage={this.state.errorMessage}
        handleAdd={handleAdd}
        handleNoteChange={this.handleNoteChange}
        handleTitleChange={this.handleTitleChange}
      />
    );
  }
}

export default TodoInputContainer;