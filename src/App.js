import logo from "./logo.svg";
import TodoBar from "./Components/Todobar";
import Todo from "./Components/Todo";
import "./App.css";

function App() {
  return (
    <div>
      <TodoBar className="Todobar" />
      <Todo />
    </div>
  );
}

export default App;
