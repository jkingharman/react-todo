import React, { Component } from "react";
import TodoInput from "./TodoInput";
import { todoIsValid } from "../../lib/todoHelpers.js";

class TodoInputContainer extends Component {
  state = { note: "", title: "", errorMessage: "" };

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleNoteChange = e => {
    this.setState({
      note: e.target.value
    });
  };

  handleAdd = e => {
    this.props.onAdd(this.state.note, this.state.title);
    this.clearInputs();
  };

  handleEmptyAdd = e => {
    this.setError();
  };

  componentWillReceiveProps() {
    if (this.props.modalIsOpen === false) {
      this.clearInputs();
    }
  }

  clearInputs() {
    this.setState({ note: "", title: "" });
  }

  setError() {
    this.setState({ errorMessage: "Input cannot be blank!" }, () => {
      setTimeout(() => this.setState({ errorMessage: "" }), 1500);
    });
  }

  render() {
    const handleAdd = todoIsValid(this.state.note, this.state.title)
      ? this.handleAdd
      : this.handleEmptyAdd;

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
