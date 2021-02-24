// this file is for one todo, we can loop through in order to show all
import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { TiTick } from "react-icons/ti";
import "../Components/Todo.css";
const Todo = () => {
  return (
    <ListGroup className="mt-5 mb-2 Todo">
      <ListGroupItem className="lgitem">
        <span>Todo</span>
        <TiTick></TiTick>
      </ListGroupItem>
    </ListGroup>
  );
};

export default Todo;
