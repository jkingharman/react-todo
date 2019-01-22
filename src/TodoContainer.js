import React, { Component } from 'react';
import Modal from './Modal';
import AddButton from './AddButton';
import Todo from './Todo';
import TodoComponent from './TodoComponent';

class TodoContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {modalOpen: false, todos: []}
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleAddClick() {
    this.setState(state => ({todos: this.state.todos.concat(new Todo("first", "test"))}))
  }

  handleClose() {
    this.setState({modalOpen: false})
  }


  render() {
    return (
      <div className="container">
        <h2> Todos </h2>
        <ul>
          {this.state.todos.map((todo) => <li key={todo.id}> <TodoComponent todo={todo}/> </li>)}
        </ul>
        <AddButton onAddClick={this.handleAddClick}/>
        <Modal open={this.state.modalOpen} onCloseClick={this.handleClose}/>
      </div>
    );
  }
}

export default TodoContainer;
