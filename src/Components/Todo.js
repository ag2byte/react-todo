// this file is for one todo, we can loop through in order to show all
import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { TiTick } from "react-icons/ti";
import "../Components/Todo.css";
import { TodoContext } from "../Context/Todocontext";
import { REMOVE_TODO } from "../Context/action.types";
const Todo = () => {
  const { todos, dispatch } = useContext(TodoContext);
  console.log(todos);

  return (
    <ListGroup className="mt-5 mb-2 Todo">
      {todos.map((todo) => (
        <ListGroupItem
          key={todo.id}
          className="lgitem"
          onClick={() => {
            dispatch({
              type: REMOVE_TODO,
              payload: todo.id,
            });
          }}
        >
          <span>{todo.formString}</span>
          <TiTick></TiTick>
        </ListGroupItem>
      ))}

      {/* <ListGroupItem className="lgitem">
        <span>Todo</span>
        <TiTick></TiTick>
      </ListGroupItem>
      <ListGroupItem className="lgitem">
        <span>Todo</span>
        <TiTick></TiTick>
      </ListGroupItem> */}
    </ListGroup>
  );
};

export default Todo;
