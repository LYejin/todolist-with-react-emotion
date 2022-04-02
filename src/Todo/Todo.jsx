/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { useState } from "react";

/* 스타일 시작 */

const liBox = css`
  display: flex;
  justify-content: center;
  color: #74696d;
  background-color: #f9f9f9;
  list-style: none;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const liBoxChecked = css`
  background-color: #888;
  color: #fff;
  text-decoration: line-through;
`;

const text = css`
  right: 200px;
`;

const close = css`
  display: flex;
  justify-content: center;
  align-content: center;
  display: flex;
  width: 50px;
  height: 50px;
  color: #74696d;
  &:hover {
    background-color: red;
  }
`;

const listBoxStyle = (todoListCheck) => {
  return css`
    background-color: ${todoListCheck ? "#888" : "#f9f9f9"};
    color: ${todoListCheck ? "#fff" : "#74696d"};
    text-decoration: ${todoListCheck ? "line-through" : ""};
    color: #74696d;
    background-color: #f9f9f9;
    list-style: none;
    font-size: 30px;
    cursor: pointer;
    &:hover {
      background-color: #ddd;
    }
  `;
};

/* 스타일 종료 */

const Todo = ({ todoList, setTodoList, id }) => {
  const [todoListCheck, setTodoListCheck] = useState(false);

  const onTodoListClick = (e) => {
    e.preventDefault();
    setTodoListCheck(!todoListCheck);
  };

  const onDeleteButton = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <ul>
      {todoList.map((todo) => (
        <li
          css={listBoxStyle(todoListCheck)}
          key={todo.id}
          onClick={onTodoListClick}
        >
          <span css={text}>{todo.input}</span>
          <span css={close} onClick={() => onDeleteButton(todo.id)}>
            x
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
