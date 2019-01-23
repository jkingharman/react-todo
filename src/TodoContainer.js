import React, { Component } from 'react';
import Modal from './Modal';
import ModalButton from './ModalButton';
import Todo from './Todo';
import TodoComponent from './TodoComponent';

class TodoContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {modalOpen: false, todos: []}
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleTodoAdd = this.handleTodoAdd.bind(this)
  }

  handleOpen() {
    this.setState({modalOpen: true})
  }

  handleClose() {
    this.setState({modalOpen: false})
  }

  handleDelete() {
    let todoId = arguments[0]
    this.setState(state => ({todos: this.state.todos.filter(todo => todo.id !== todoId)}))
  }

  handleTodoAdd() {
    let todoNote = arguments[0]
    let todoTitle = arguments[1]
    this.setState(state => ({todos: this.state.todos.concat(new Todo(todoNote, todoTitle)), modalOpen: false}))
  }

  render() {
    return (
      <div className="container">
        <h2> Todos </h2>
        <ul>
          {this.state.todos.map((todo) =>
            <li key={todo.id}> <TodoComponent todo={todo} onDelete={this.handleDelete} /> </li>
          )}
        </ul>
        <ModalButton onClick={this.handleOpen}/>
        <Modal isOpen={this.state.modalOpen} onClose={this.handleClose} onAdd={this.handleTodoAdd}/>
      </div>
    );
  }
}

export default TodoContainer;
