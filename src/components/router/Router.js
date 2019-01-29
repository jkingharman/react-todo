import React, { Component } from "react";

const history = window.history
const Context = React.createContext("")

class Router extends Component {

  state = {currentPath: "/"}

  handleLinkClick = (path) => {
    history.pushState(null, "", path)
    this.setState(currentPath: path)
  }

  render() {
    return (
      <div>
        <RouterContext.Provider value={this.handleLinkClick}>
          {this.props.children}
        </RouterContext.Provider>
      </div>
    );
  }
}

export default Router;
export const RouterContext = Context;
