import React, { Component } from "react";
import Delete from "@material-ui/icons/Delete.js";

class TodoComponent extends Component {
  state = { todoDone: this.props.todo.done };

  handleClick = () => {
    this.props.todo.done = !this.props.todo.done;
    this.setState({ todoDone: !this.state.todoDone });
  };

  render() {
    return (
      <div
        className="Todo"
        onClick={this.handleClick}
        style={{ backgroundColor: this.state.todoDone ? "#1abc9c" : "white" }}
      >
        <h4>{this.props.todo.title}</h4>
        <p>{this.props.todo.note}</p>
        <Delete
          style={{ marginLeft: "300px" }}
          onClick={() => {
            this.props.onDelete(this.props.todo.id);
          }}
        />
      </div>
    );
  }
}

export default TodoComponent;
