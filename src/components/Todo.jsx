import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button, Checkbox } from "@mui/material";


import Context from "../context";

const Todo = ({ todo, index }) => {
  const { removeTodo, changeTodoComplete } = useContext(Context);

  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <div className="todo">
      <span className={classes.join(" ")}>     
        <Checkbox
          type="checkbox"
          onChange={() => changeTodoComplete(todo.id)}
          checked={todo.completed}
        />
        {index + 1} - {todo.title}
      </span>
      <Button color="error" variant="contained" onClick={() => removeTodo(todo.id)}>Delete</Button>
    </div>
  );
};

Todo.protoTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Todo;
