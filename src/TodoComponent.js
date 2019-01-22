import React, { Component } from 'react';

class TodoComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container" style={{"background-color": this.props.todo.done ? "red" : "blue"}}>
        <p>
          {this.props.todo.title}
        </p>
        <button onClick={this.props.onDeleteClick}> Delete </button>
      </div>
    );
  }
}

export default TodoComponent;
