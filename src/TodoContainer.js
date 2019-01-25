import React, { Component } from "react";
import Modal from "./Modal";
import ModalButton from "./ModalButton";
import Todo from "./Todo";
import TodoComponent from "./TodoComponent";
import TodoInput from "./TodoInput";

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
        <h2> Todos </h2>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id}>
              <TodoComponent todo={todo} onDelete={this.handleDelete} />  
            </li>
          ))}
        </ul>
        <ModalButton onClick={this.handleClick} />
        <Modal isOpen={this.state.modalOpen} onClose={this.handleClick}>
          <TodoInput
            onAdd={this.handleTodoAdd}
            modalIsOpen={this.state.modalOpen}
          />
        </Modal>
      </div>
    );
  }
}

export default TodoContainer;
