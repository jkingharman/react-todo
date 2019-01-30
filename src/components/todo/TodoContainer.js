import React, { Component } from "react";
import Modal from "./Modal";
import ModalButton from "./ModalButton";
import Link from "../router/Link.js";
import Todo from "./Todo";
import TodoList from "./TodoList";

import {
  fetchTodos,
  addTodo,
  filterTodosByPath,
  genTodoId,
  removeTodo
} from "../../lib/todoHelpers.js";

import { RouterContext } from "../router/Router";
import TodoInputContainer from "./TodoInputContainer";

class TodoContainer extends Component {
  componentWillMount() {
    fetchTodos(this);
  }

  state = { modalOpen: false, todos: [], error: "" };

  handleClick = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  handleDelete = id => {
    this.setState(state => ({
      todos: removeTodo(this.state.todos, id)
    }));
  };

  handleTodoAdd = (todoNote, todoTitle) => {
    this.setState(state => ({
      todos: addTodo(
        this.state.todos,
        new Todo(genTodoId(), todoNote, todoTitle)
      ),
      modalOpen: false
    }));
  };

  render() {
    if (this.state.error) {
      return (
        <div className="container">
          <p> {this.state.error} </p>
        </div>
      );
    } else {
      const displayTodos = filterTodosByPath(
        this.state.todos,
        this.context.currentPath
      );
      return (
        <div className="container">
          <TodoList todos={displayTodos} handleDelete={this.handleDelete} />
          <ModalButton onClick={this.handleClick} />
          <Modal isOpen={this.state.modalOpen} onClose={this.handleClick}>
            <TodoInputContainer
              onAdd={this.handleTodoAdd}
              modalIsOpen={this.state.modalOpen}
            />
          </Modal>
          <Link to="/done"> Done </Link>
          <Link to="/undone"> Undone </Link>
          <Link to="/"> All </Link>
        </div>
      );
    }
  }
}

TodoContainer.contextType = RouterContext;

export default TodoContainer;
