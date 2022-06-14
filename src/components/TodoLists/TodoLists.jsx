import React, { useState, useEffect } from "react";

import TodoList from "../TodoList/TodoList";
import AddListForm from "../AddListForm/AddListForm";

import Context from "../../context";

const TodoLists = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/?_limit=15")
      .then((response) => response.json())
      .then((todos) => setTodos(todos));
  }, []);

  const addTodo = (task) => {
    setTodos([...todos, task]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Context.Provider value={{removeTodo}}>
      <div>
        <AddListForm addTodo={addTodo} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TodoList todos={todos} title="All Todos" style={{ color: "red" }} />
          <TodoList
            todos={todos.filter((t) => !t.completed)}
            title="Done Todos"
            style={{ color: "green" }}
          />
          <TodoList
            todos={todos.filter((t) => t.completed)}
            title="Undone Todos"
            style={{ color: "blue" }}
          />
        </div>
      </div>
    </Context.Provider>
  );
};

export default TodoLists;
