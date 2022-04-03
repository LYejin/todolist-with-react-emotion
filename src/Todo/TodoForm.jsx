/** @jsxImportSource @emotion/react */
import React, { useRef } from "react";
import { css } from "@emotion/react";
import { useState } from "react";

/* 스타일 시작 */

const headerBox = css`
  background-color: #f44336;
  padding: 20px;
`;

const title = css`
  color: white;
  margin: 0;
  padding: 20px;
  text-align: center;
`;

const form = css`
  display: flex;
  justify-content: center;
`;

const inputStyle = css`
  width: 500px;
  height: 45px;
  border: none;
  font-size: 20px;
`;

const addButton = css`
  width: 150px;
  height: 55px;
  background-color: #d9d9d9;
  border: none;
  color: #555;
  cursor: pointer;
  transition: 0.3s;
  font-size: 20px;
  &:hover {
    background-color: #bbb9b9;
  }
`;

/* 스타일 종료 */

const TodoForm = ({ todoList, setTodoList }) => {
  const inputFocus = useRef(null);
  const [count, setCount] = useState(0);

  // todoList 생성 함수
  const onCreateTodoList = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { id: count, input: e.target.children.title.value, check: false },
    ]);
    setCount(count + 1);
    inputFocus.current.value = "";
    inputFocus.current.focus();
  };

  return (
    <div css={headerBox}>
      <h1 css={title}>My To Do List</h1>
      <form css={form} onSubmit={onCreateTodoList}>
        <input
          css={inputStyle}
          ref={inputFocus}
          name="title"
          type="text"
          placeholder="Title..."
        />
        <button css={addButton} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
