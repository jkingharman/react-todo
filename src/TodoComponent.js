import React, { Component } from 'react';

class TodoComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {todoDone: this.props.todo.done}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.todo.updateStatus()
    this.setState({todoDone: !this.state.todoDone})
  }

  render() {
    return (
      <div className="container" onClick={this.handleClick} style={{"backgroundColor": this.state.todoDone ? "red" : "blue"}}>
        <p>
          {this.props.todo.title}
        </p>
        <button onClick={this.props.onDeleteClick.bind(null, this.props.todo.id)}> Delete </button>
      </div>
    );
  }
}

export default TodoComponent;
