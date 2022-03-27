/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { css } from "@emotion/react";

const headerbox = css`
  margin: 0;
  padding: 0;
  text-align: center;
`;

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div css={headerbox}>
      <TodoForm setTodoList={setTodoList} />
      <Todo todoList={todoList} />
    </div>
  );
};

export default TodoList;
