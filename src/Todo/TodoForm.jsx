/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";

{
  /* 스타일 시작 */
}
const headerBox = css`
  background-color: #f44336;
  padding: 20px;
`;

const title = css`
  color: white;
  margin: 0;
  padding: 20px;
`;

const formBox = css`
  display: flex;
  justify-content: center;
`;

const input = css`
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

{
  /* 스타일 끝 */
}

const TodoForm = (props) => {
  const { setTodoList } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList((state) => [e.target.children.title.value, ...state]);
  };

  return (
    <div css={headerBox}>
      <h1 css={title}>My To Do List</h1>
      <form css={formBox} onSubmit={handleSubmit}>
        <input css={input} name="title" type="text" placeholder="Title..." />
        <button css={addButton} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
