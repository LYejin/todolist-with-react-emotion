/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

/* 스타일 시작 */

const text = (todoListCheck) => css`
  display: block;
  width: 100%;
  text-decoration: ${todoListCheck.check ? "line-through" : ""};
  background-color: ${todoListCheck.check ? "#888888" : ""};
  padding: 5px;
  &:hover {
    background-color: #ddd;
  }
`;

const close = (todoListCheck) => css`
  position: absolute;
  right: 0;
  display: block;
  text-align: center;
  background-color: ${todoListCheck.check ? "#888888" : ""};
  width: 50px;
  height: 50px;
  &:hover {
    background-color: red;
  }
`;

const listBoxStyle = (todoListCheck) => {
  return css`
    display: flex;
    background-color: ${todoListCheck.id % 2 !== 0 ? "#eeeeee" : "#f9f9f9"};
    color: ${todoListCheck.check ? "white" : "#74696d"};
    font-size: 30px;
    cursor: pointer;
    &:hover {
      background-color: #ddd;
    }
  `;
};

/* 스타일 종료 */

const Todo = ({ todoList, setTodoList }) => {
  // 클릭시 check boolean 변경
  const handleClick = (List) => {
    const todoCheck = todoList.map((todo) => {
      if (todo.id === List.id) {
        return { ...List, check: !List.check };
      }
      return todo;
    });
    setTodoList(todoCheck);
  };

  // TodoList 삭제 버튼
  const onDeleteButton = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <ul>
      {todoList.map((todo) => (
        <li css={listBoxStyle(todo)} key={todo.id}>
          <span css={text(todo)} onClick={() => handleClick(todo)}>
            {todo.input}
          </span>
          <span css={close(todo)} onClick={() => onDeleteButton(todo.id)}>
            x
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
