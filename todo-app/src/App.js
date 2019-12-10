import React, { useReducer } from 'react';
import { reducer, initialState } from "./reducers/reducer";
import './App.css';

// Components
import TodoList from "./components/TodoList";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTodo = id => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  }

  return (
    <div className="App">
      <h1>Another ToDo App!</h1>
      <TodoList {...state} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;
