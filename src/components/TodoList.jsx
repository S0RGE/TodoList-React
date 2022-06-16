import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

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

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};

export default TodoList;
