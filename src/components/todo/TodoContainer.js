import React, { Component } from "react";
import Modal from "./Modal";
import ModalButton from "./ModalButton";
import Todo from "./Todo";
import TodoList from "./TodoList";

import  {
  loadTodos,
  createTodo,
  destroyTodo
} from "../../lib/crudService.js"

import {
  addTodo,
  filterTodosByPath,
  genTodoId,
  removeTodo
} from "../../lib/todoHelpers.js";

import { RouterContext } from "../router/Router";
import TodoInputContainer from "./TodoInputContainer";

class TodoContainer extends Component {
  componentWillMount() {
    loadTodos()
      .then(json => {
        this.setState({todos: json})
      })
        .catch(this.handleError);
  }

  state = { modalOpen: false, todos: [], error: "" };

  handleClick = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  handleDelete = id => {
    this.setState(state => ({
      todos: removeTodo(this.state.todos, id)
    }));
    destroyTodo(id).catch(this.handleError)
  };

  handleError = () => {
    this.setState({ error: "Error! Try inspect db.json" });
  }

  handleTodoAdd = (todoNote, todoTitle) => {
    const newTodo = new Todo(genTodoId(), todoNote, todoTitle)
    this.setState(state => ({
      todos: addTodo(
        this.state.todos,
        newTodo
      ),
      modalOpen: false
    }));
    createTodo(newTodo).catch(this.handleError)
  };

  render() {
    const displayTodos = filterTodosByPath(
      this.state.todos,
      this.context.currentPath
    );

    if (this.state.error) {
      return (
        <div className="container">
          <p> {this.state.error} </p>
        </div>
      );
    } else {
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
        </div>
      );
    }
  }
}

TodoContainer.contextType = RouterContext;

export default TodoContainer;
