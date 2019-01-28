import React, { Component } from "react";
import Modal from "./Modal";
import ModalButton from "./ModalButton";
import Link from "../router/Link.js"
import Todo from "./Todo";
import TodoList from "./TodoList";
import TodoInputContainer from "./TodoInputContainer";

class TodoContainer extends Component {

  state = { modalOpen: false, todos: [] };

  handleClick = () => { this.setState({ modalOpen: !this.state.modalOpen }); }

  handleDelete = (id) => {
    this.setState(state => ({
      todos: this.state.todos.filter(todo => todo.id !== id)
    }));
  }

  handleTodoAdd = (todoNote, todoTitle) => {
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
        <Link> Test </Link>
      </div>
    );
  }
}

export default TodoContainer;
