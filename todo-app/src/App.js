import React, { useReducer } from 'react';
import { reducer, initialState } from "./reducers/reducer";
import './App.css';

// Components
import TodoList from "./components/TodoList";

function App() {
  const [todoState, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Another ToDo App!</h1>
      <TodoList {...todoState}/>
    </div>
  );
}

export default App;
