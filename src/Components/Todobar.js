import React, { useState, useContext } from "react";
import {
  InputGroup,
  Input,
  FormGroup,
  Form,
  InputGroupAddon,
  Button,
  InputGroupText,
} from "reactstrap";
import "../Components/Todobar.css";
import "bootstrap/dist/css/bootstrap.min.css";
// this is the form that hads to be submitted
import { v4 } from "uuid";
import { TodoContext } from "../Context/Todocontext";
import { ADD_TODO } from "../Context/action.types";
const TodoBar = () => {
  const [formString, setFormString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const submitForm = (e) => {
    e.preventDefault(); // prevent whatever is the native html version

    if (formString === "")
      //empty
      return alert("Form field is empty");

    // else we create a new object

    const todo = {
      formString,
      id: v4(),
    };

    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
    setFormString("");
  };
  // <div className="Todobar">
  return (
    <Form className="Form" onSubmit={submitForm}>
      <FormGroup className="igroup">
        <InputGroup>
          <Input
            className="Input"
            type="text"
            placeholder="Todo"
            value={formString}
            onChange={(e) => setFormString(e.target.value)} // on change of this we are setting the form String to ne nthe new value
          ></Input>
          <InputGroupAddon addonType="append">
            <Button color="info">ADD</Button>
            {/* <InputGroupText>adadad</InputGroupText> */}
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
  // </div>
};

export default TodoBar;
