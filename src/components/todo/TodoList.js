import React from "react";
import TodoComponent from "./TodoComponent";
import Link from "../router/Link.js";

const TodoList = ({ todos, handleDelete }) => {
  return (
    <div>
      <h2> Todos </h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <TodoComponent todo={todo} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
      <Link to="/done"> Done </Link>
      <Link to="/undone"> Undone </Link>
      <Link to="/"> All </Link>
    </div>
  );
};

export default TodoList;
