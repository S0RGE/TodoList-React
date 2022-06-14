import React, { useContext } from "react";

import Context from "../../context";

const Todo = ({ todo, index }) => {
  const { removeTodo } = useContext(Context);

  return (
    <div>
      <input type="checkbox" />
      {index + 1} - {todo.title}
      <button onClick={() =>removeTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;
