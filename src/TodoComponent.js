import React, { Component } from 'react';

class TodoComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container" style={{"backgroundColor": this.props.todo.done ? "red" : "blue"}}>
        <p>
          {this.props.todo.title}
        </p>
        <button todoid={this.props.todo.id} onClick={this.props.onDeleteClick.bind(null, this.props.todo.id)}> Delete </button>
      </div>
    );
  }
}

export default TodoComponent;
