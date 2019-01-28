import React, { Component } from "react";
import TodoContainer from "./TodoContainer";
import Router from "../router/Router.js"
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <TodoContainer />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
