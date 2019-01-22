import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todo from './Todo';
import Todos from './Todos';

let todo = new Todo("d", "y")
let todos = new Todos()

todos.add(todo)

console.log(todos.all())

ReactDOM.render(<App />, document.getElementById('root'));
