import React, { Component } from "react";
import { RouterContext }  from "./Router";

class Link extends Component {

  handleClick = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <a href={this.props.to} onClick={this.props.handleLinkClick}> {this.props.children} {this.context} </a>
    );
  }
}
Link.contextType = RouterContext;

export default Link;
