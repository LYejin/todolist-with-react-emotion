/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const container = css`
  margin: 0;
  padding: 0;
`;

const liBox = css`
  list-style: none;
  background-color: #f9f9f9;
  padding: 12px 8px, 12px, 40px;
  text-align: left;
  cursor: pointer;
  position: relative;
  font-size: 18px;
`;

const text = css`
  position: relative;
  top: 10px;
  left: 40px;
  font-size: 30px;
`;

const close = css`
  position: relative;
  top: 5px;
  left: 270px;
  font-size: 30px;
`;

const Todo = (props) => {
  const { todoList } = props;

  return (
    <ul css={container}>
      {todoList.map((todo, index) => (
        <li css={liBox} key={index}>
          {todo}
          <span css={close}>x</span>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
