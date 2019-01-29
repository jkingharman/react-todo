import React, { Component } from "react";

const history = window.history
const Context = React.createContext("")

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
export const RouterContext = Context;
