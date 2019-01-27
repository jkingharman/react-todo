import React, { Component } from "react";
import TodoComponent from "./TodoComponent";

class TodoList extends Component {
  
  render() {
    return (
      <div>
        <h2> Todos </h2>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>
              <TodoComponent todo={todo} onDelete={this.props.handleDelete} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
