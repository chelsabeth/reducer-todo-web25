import React from "react";

const Todo = ({ item, id, completed, toggleTodo }) => {
  return (
    <div
      className={`item${completed ? "completed item" : ""}`}
      onClick={() => toggleTodo(id)}
    >
      <p>{item}</p>
    </div>
  );
};

export default Todo;
