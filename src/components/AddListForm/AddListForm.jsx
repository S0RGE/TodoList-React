import React, { useState } from "react";

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
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button type="submit">Add todo</button>
      </form>
    </div>
  );
};

export default AddListForm;
