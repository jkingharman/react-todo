import React, { Component } from 'react';
import Todos from './Todos'
import TodoComponent from './TodoComponent';

const TODOS = new Todos()
TODOS.createTodo("first", "test")

class TodoContainer extends Component {

  render() {
    return (
      <div className="container">
        <h2> Todos </h2>
        <ul>
          {TODOS.all().map((todo) => <li> <TodoComponent todo={todo}/> </li>)}
        </ul>
      </div>
    );
  }
}

export default TodoContainer;
