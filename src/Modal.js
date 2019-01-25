import React, { Component } from "react";
import Close from "@material-ui/icons/Close.js";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.onClose();
  }

  render(props) {
    return (
      <div
        className="Modal"
        overlayclassname="Overlay"
        style={{ display: this.props.isOpen ? "block" : "none" }}
      >
        {this.props.children}
        <Close onClick={this.handleClose} />
      </div>
    );
  }
}

export default Modal;
