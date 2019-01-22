import React, { Component } from 'react';

class Modal extends Component {

  render(props) {
    return (
      <div style={{display: this.props.open ? "block" : "none"}}>
      <p> Test </p>
      <button onClick={this.props.onCloseClick}> </button> 
      </div>
    );
  }
}

export default Modal;
