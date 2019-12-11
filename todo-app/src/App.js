import React, { useReducer } from "react";
import { reducer, initialState } from "./reducers/reducer";
import "./App.css";

// Components
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTodo = id => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const addTodo = todoName => {
    dispatch({ type: "ADD_TODO", payload: todoName });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="App">
      <h1>Another ToDo App!</h1>
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
      <TodoList {...state} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
