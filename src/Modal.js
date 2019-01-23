import React, { Component } from 'react';

class Modal extends Component {

  constructor(props) {
    super(props)
    this.state = {note: "", title: ""}
    this.handleNoteChange = this.handleNoteChange.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleClose = this.handleClose.bind(this)
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
    this.props.onAdd(this.state.note, this.state.title)
    this.setState({note: "", title: ""})
  }

  handleClose() {
    this.props.onClose()
    this.setState({note: "", title: ""})
  }

  render(props) {
    return (
      <div style={{display: this.props.open ? "block" : "none"}}>
      <p> Test </p>
      <textarea value={this.state.note} onChange={this.handleNoteChange}> </textarea>
      <textarea value={this.state.title} onChange={this.handleTitleChange}> </textarea>
      <button onClick={this.handleAdd}> Update </button>
      <button onClick={this.handleClose}> Close </button>
      </div>
    );
  }
}

export default Modal;
