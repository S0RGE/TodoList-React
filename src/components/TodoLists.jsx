import React, { useState, useEffect } from "react";
import AddListForm from "./AddListForm";

import Context from "../context";
import TabsTodos from "./TabsTodos";

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

  const changeTodoComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <Context.Provider value={{ removeTodo, changeTodoComplete }}>
      <div className="todoList">
        <h1>TODOS</h1>
        <AddListForm addTodo={addTodo} />
        {todos.length ? <TabsTodos todos={todos} /> : <h2>There is no todos</h2>}
      </div>
    </Context.Provider>
  );
};

export default TodoLists;
