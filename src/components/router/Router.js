import React, { Component } from "react";

const history = window.history;
const Context = React.createContext("");

class Router extends Component {
  componentDidMount() {
    window.onpopstate = this.handleBackAndForward;
  }

  state = { currentPath: "/" };

  getContext() {
    return {
      handleLinkClick: this.handleLinkClick,
      currentPath: this.state.currentPath
    };
  }

  handleLinkClick = path => {
    history.pushState(null, "", path);
    this.setState({ currentPath: path });
  };

  handleBackAndForward = () => {
    const path = document.location.pathname;
    this.setState({ currentPath: path.substring(path.lastIndexOf("/")) });
  };

  render() {
    return (
      <div>
        <RouterContext.Provider value={this.getContext()}>
          {this.props.children}
        </RouterContext.Provider>
      </div>
    );
  }
}

export default Router;
export const RouterContext = Context;
