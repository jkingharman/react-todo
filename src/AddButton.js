import React, { Component } from 'react';

class AddButton extends Component {

  render() {
    return (
      <button onClick={this.props.onAddClick}> </button>
    );
  }
}

export default AddButton;
