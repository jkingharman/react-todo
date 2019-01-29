import React, { Component } from "react";
import Modal from "./Modal";
import ModalButton from "./ModalButton";
import Link from "../router/Link.js"
import Todo from "./Todo";
import TodoList from "./TodoList";
import TodoInputContainer from "./TodoInputContainer";

class TodoContainer extends Component {

  componentWillMount() {
    console.log(this.state.todos)
    this.fetchTodos()
  }

  state = { modalOpen: false, todos: [], error: "" };

  fetchTodos() {
    const baseUrl = 'http://localhost:8080/todos'
    fetch(baseUrl)
      .then(res => { res.json().then(json => { this.setState({todos: json}) }) })
        .catch(err => { this.setState({error: "Error! Try inspect db.json"})})
  }

  handleClick = () => { this.setState({ modalOpen: !this.state.modalOpen }); }

  handleDelete = (id) => {
    this.setState(state => ({
      todos: this.state.todos.filter(todo => todo.id !== id)
    }));
  }

  getTodoId() {
    if (!Array.isArray(this.state.todos) || !this.state.todos.length) {
      return 0
    } else {
      return Math.floor(Math.random()*100000)
    }
  }

  handleTodoAdd = (todoNote, todoTitle) => {
    this.setState(state => ({
      todos: this.state.todos.concat(new Todo(this.getTodoId(), todoTitle, todoNote)),
      modalOpen: false
    }));
  }

  render() {
    if (this.state.error) {
      return (
        <div className="container">
          <p> {this.state.error} </p>
        </div>
      )
    } else {
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
          <Link to="/test"> Test </Link>
        </div>
      );
    }
  }
}

export default TodoContainer;
