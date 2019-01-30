import React, { Component } from "react";
import { RouterContext } from "./Router";

class Link extends Component {
  handleClick = e => {
    e.preventDefault();
    this.context.handleLinkClick(this.props.to);
  };

  render() {
    return (
      <a href={this.props.to} onClick={this.handleClick}>
        {" "}
        {this.props.children}{" "}
      </a>
    );
  }
}
Link.contextType = RouterContext;

export default Link;
