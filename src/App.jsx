import TodoList from "./Todo/TodoList";
import { css } from "@emotion/react";

const headerbox = css`
  margin: 0;
  padding: 0;
  text-align: center;
`;

function App() {
  return (
    <div css={headerbox}>
      <TodoList />
    </div>
  );
}

export default App;
