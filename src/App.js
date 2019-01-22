import React, { Component } from 'react';
import TodoContainer from './TodoContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TodoContainer/>
        </header>
      </div>
    );
  }
}

export default App;
