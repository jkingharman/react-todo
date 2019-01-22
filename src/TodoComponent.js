import React, { Component } from 'react';

class TodoComponent extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div onClick={this.handleClick} className="container" style={{"background-color": this.props.todo.done ? "red" : "blue"}}>
        <p>
          {this.props.todo.title}
        </p>
      </div>
    );
  }
}

export default TodoComponent;
