import React, { Component } from 'react';

class TodoComponent extends Component {

  render() {
    return (
      <div className="container">
        <p>
          {this.props.todo.title}
        </p>
      </div>
    );
  }
}

export default TodoComponent;
