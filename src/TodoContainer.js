import React, { Component } from "react";
import Modal from "./Modal";
import ModalButton from "./ModalButton";
import Todo from "./Todo";
import TodoList from "./TodoList";
import TodoInputContainer from "./TodoInputContainer";

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, todos: [] };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleTodoAdd = this.handleTodoAdd.bind(this);
  }

  handleClick() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  handleDelete() {
    let todoId = arguments[0];
    this.setState(state => ({
      todos: this.state.todos.filter(todo => todo.id !== todoId)
    }));
  }

  handleTodoAdd() {
    let todoNote = arguments[0];
    let todoTitle = arguments[1];
    this.setState(state => ({
      todos: this.state.todos.concat(new Todo(todoTitle, todoNote)),
      modalOpen: false
    }));
  }

  render() {
    return (
      <div className="container">
        <TodoList todos={this.state.todos} handleDelete={this.handleDelete} />
        <ModalButton onClick={this.handleClick} />
        <Modal isOpen={this.state.modalOpen} onClose={this.handleClick}>
          <TodoInputContainer
            onAdd={this.handleTodoAdd}
            modalIsOpen={this.state.modalOpen}
          />
        </Modal>
      </div>
    );
  }
}

export default TodoContainer;
