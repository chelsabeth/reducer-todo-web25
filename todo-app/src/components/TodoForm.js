import React, { useState } from "react";

const TodoForm = ({ addTodo, clearCompleted }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} name="todo" onChange={handleChanges} />
      <button type="submit">Add Todo</button>
      <button className="clear" onClick={clearCompleted}>
        Delete Todo
      </button>
    </form>
  );
};

export default TodoForm;
