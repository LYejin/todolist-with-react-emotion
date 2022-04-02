/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <Todo todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default TodoList;
