import React, { Component } from 'react';

class TodoComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {todoDone: this.props.todo.getDoneStatus()}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.todo.updateDoneStatus()
    this.setState({todoDone: !this.state.todoDone})
  }

  render() {
    return (
      <div className="container" onClick={this.handleClick} style={{"backgroundColor": this.state.todoDone ? "red" : "blue"}}>
        <p>
          Todo content here
        </p>
        <button onClick={this.props.onDelete.bind(null, this.props.todo.getId())}> Delete </button>
      </div>
    );
  }
}

export default TodoComponent;
