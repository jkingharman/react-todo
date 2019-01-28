import React, { Component } from "react";
import RouterContext from "./RouterContext.js"

const history = window.history

class Router extends Component {

  handleLinkClick = (to) => {
    history.pushState(null, "", to)
  }

  render() {
    return (
      <div>
        <RouterContext.Provider value="test">
          {this.props.children}
        </RouterContext.Provider>
      </div>
    );
  }
}

export default Router;
