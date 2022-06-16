import React, { useState } from "react";
import PropTypes from "prop-types";
import {OutlinedInput} from '@mui/material';

const AddListForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    addTodo({
      id: Date.now(),
      title: todo,
      completed: false,
    });
    setTodo("");
  };

  return (
    <div>
      <form className="inputForm" onSubmit={submitHandler}>
        <OutlinedInput
          autoFocus
          fullWidth
          placeholder="Add new todo"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />       
      </form>
    </div>
  );
};

AddListForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddListForm;
