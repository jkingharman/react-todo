import React, { Component } from 'react';
import Add from '@material-ui/icons/Add.js';

class TodoInput extends Component {

  constructor(props) {
    super(props)
    this.state = {note: "", title: "", validationFail: false}
    this.handleNoteChange = this.handleNoteChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  componentWillReceiveProps() {
    if (this.props.modalIsOpen === false) {
      this.clearInputs()
    }
  }

    clearInputs() {
      this.setState({note: "", title: ""})
    }

    todoIsValid() {
      if ((this.state.note !== "" && this.state.title !== "") && (this.state.note.length <= 200 && this.state.note.length <= 200))  {
        return true
      }
    }

  flashError() {
    this.setState(
      {validationFail: !this.state.validationFail}, () => {
        setTimeout(() => this.setState(
        {validationFail: !this.state.validationFail}
      ), 1500)
      }
    )
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleNoteChange(e) {
    this.setState({
      note: e.target.value,
    });
  }

  handleAdd() {
    if (this.todoIsValid()) {
      this.props.onAdd(this.state.note, this.state.title)
      this.clearInputs()
    } else {
      this.flashError()
    }
  }

  render() {
    return (
    <div>
      <input placeholder="Todo note" value={this.state.note} onChange={this.handleNoteChange}/>
      <input placeholder="Todo title" value={this.state.title} onChange={this.handleTitleChange}/>
    <div className="Flash" style={{display: this.state.validationFail ? "block" : "none"}}>
      Input can't be blank!
    </div>
      <Add style={{display: !this.state.validationFail ? "inline" : "none"}} onClick={this.handleAdd}/>
    </div>
    );
  }
}

export default TodoInput
