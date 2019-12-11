import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map(item => {
        return <Todo key={item.id} {...item} toggleTodo={toggleTodo} />;
      })}
    </div>
  );
};

export default TodoList;
