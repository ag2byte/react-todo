import { useReducer } from "react";
// import logo from "./logo.svg";
import TodoBar from "./Components/Todobar";
import Todo from "./Components/Todo";
import "./App.css";

import { TodoContext } from "./Context/Todocontext";
import Todoreducer from "./Context/reducer";

function App() {
  const [todos, dispatch] = useReducer(Todoreducer, []); // the innitialstate is [] as this is the empty array that is rendererd at the beginning

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <TodoBar className="Todobar" />
      <Todo />
    </TodoContext.Provider>
  );
}

export default App;
