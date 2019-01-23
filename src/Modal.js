import React, { Component } from 'react';
import Add from '@material-ui/icons/Add.js';
import Close from '@material-ui/icons/Close.js';

class Modal extends Component {

  constructor(props) {
    super(props)
    this.state = {note: "", title: "", validationFail: false}
    this.handleNoteChange = this.handleNoteChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  clearInputs() {
    this.setState({note: "", title: "", validationFail: false})
  }

  todoIsValid() {
    if (this.state.note !== "" && this.state.title !== "") {
      return true
    }
  }

  flashError() {
    this.setState(
      {validationFail: !this.state.validationFail}, () => {
        setTimeout(() => this.setState(
        {validationFail: !this.state.validationFail}
          ), 5000)
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

  handleClose() {
    this.props.onClose()
    this.clearInputs()
  }


  handleAdd() {
    if (this.todoIsValid()) {
      this.props.onAdd(this.state.note, this.state.title)
      this.clearInputs()
    } else {
      this.flashError()
    }
  }

  render(props) {
    return (
      <div style={{display: this.props.isOpen ? "block" : "none"}}>
      <textarea value={this.state.note} onChange={this.handleNoteChange}> </textarea>
      <textarea value={this.state.title} onChange={this.handleTitleChange}> </textarea>
      <Add style={{display: !this.state.validationFail ? "block" : "none"}} onClick={this.handleAdd}/>
      <Close onClick={this.handleClose}/>

      <div style={{display: this.state.validationFail ? "block" : "none"}}>
        Input can't be blank
      </div>
      </div>
    );
  }
}

export default Modal;
