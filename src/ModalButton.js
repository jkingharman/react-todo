import React, { Component } from "react";
import Create from "@material-ui/icons/Create.js";

class ModalButton extends Component {
  render() {
    return <Create id="create-btn" onClick={this.props.onClick} />;
  }
}

export default ModalButton;
