import React from "react";
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
const TodoBar = () => (
  // <div className="Todobar">
  <Form className="Form">
    <FormGroup className="igroup">
      <InputGroup>
        <Input className="Input" type="text" placeholder="Todo"></Input>
        <InputGroupAddon addonType="append">
          <Button color="info">Add</Button>
          {/* <InputGroupText>adadad</InputGroupText> */}
        </InputGroupAddon>
      </InputGroup>
    </FormGroup>
  </Form>
  // </div>
);

export default TodoBar;
