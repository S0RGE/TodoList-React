import React from "react";
import Todo from "../Todo/Todo";

const TodoList = ({ todos, title, ...props }) => {
  return (
    <div {...props}>
      <h2>{title}</h2>
      {todos.map((todo, index) => {
        return <Todo todo={todo} index={index} key={todo.id} />;
      })}
    </div>
  );
};

export default TodoList;
