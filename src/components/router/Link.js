import React, { Component } from "react";

class Link extends Component {
  render() {
    return (
      <a href="#"> {this.props.children} </a>
    );
  }
}

export default Link;
