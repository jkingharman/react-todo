import React, { Component } from "react";
import Add from "@material-ui/icons/Add.js";

class TodoInput extends Component {

  render() {
    return (
      <div>
        <input
          id="note-input"
          placeholder="Todo note"
          value={this.props.note}
          onChange={this.props.handleNoteChange}
        />
        <input
          id="title-input"
          placeholder="Todo title"
          value={this.props.title}
          onChange={this.props.handleTitleChange}
        />
        <div
          className="Flash"
          style={{ display: this.props.validationFail ? "block" : "none" }}
        >
          Input can't be blank!
        </div>
        <Add
          style={{ display: !this.props.validationFail ? "inline" : "none" }}
          onClick={this.props.handleAdd}
        />
      </div>
    );
  }
}

export default TodoInput;
