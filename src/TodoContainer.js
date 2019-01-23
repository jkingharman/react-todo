import React, { Component } from 'react';
import Modal from './Modal';
import AddButton from './AddButton';
import Todo from './Todo';
import TodoComponent from './TodoComponent';

class TodoContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {modalOpen: false, todos: []}
    this.handleAdd = this.handleAdd.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleModalAdd = this.handleModalAdd.bind(this)
  }

  handleAdd() {
    this.setState({modalOpen: true})
  }

  handleModalAdd() {
    let todoNote = arguments[0]
    let todoTitle = arguments[1]
    this.setState(state => ({todos: this.state.todos.concat(new Todo(todoNote, todoTitle))}))
  }

  handleClose() {
    this.setState({modalOpen: false})
  }

  handleDelete() {
    let todoId = arguments[0]
    this.setState(state => ({todos: this.state.todos.filter(todo => todo.id !== todoId)}))
  }


  render() {
    return (
      <div className="container">
        <h2> Todos </h2>
        <ul>
          {this.state.todos.map((todo) =>
            <li key={todo.id}> <TodoComponent todo={todo} onDeleteClick={this.handleDelete} /> </li>
          )}
        </ul>
        <AddButton onClick={this.handleAdd}/>
        <Modal open={this.state.modalOpen} onClose={this.handleClose} onAdd={this.handleModalAdd}/>
      </div>
    );
  }
}

export default TodoContainer;
