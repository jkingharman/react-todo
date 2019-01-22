import React, { Component } from 'react';
import Todos from './Todos'
import Modal from './Modal';
import AddButton from './AddButton';
import TodoComponent from './TodoComponent';

const TODOS = new Todos()
TODOS.createTodo("first", "test")

class TodoContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {modalOpen: false}
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleAddClick() {
    this.setState({modalOpen: true})
  }

  handleClose() {
    this.setState({modalOpen: false})
  }

  render() {
    return (
      <div className="container">
        <h2> Todos </h2>
        <ul>
          {TODOS.all().map((todo) => <li> <TodoComponent todo={todo}/> </li>)}
        </ul>
        <AddButton onAddClick={this.handleAddClick}/>
        <Modal open={this.state.modalOpen} onCloseClick={this.handleClose}/>
      </div>
    );
  }
}

export default TodoContainer;
