import React, { Component } from 'react';
import AddBox from '@material-ui/icons/AddBox.js';
class ModalButton extends Component {

  render() {
    return (
      <AddBox onClick={this.props.onClick}/>
    );
  }
}

export default ModalButton;
