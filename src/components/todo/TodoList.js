import React from "react";
import TodoComponent from "./TodoComponent";

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
    </div>
  );
};

export default TodoList;
