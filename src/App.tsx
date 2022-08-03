import styled, { keyframes } from "styled-components";
import React, { useState } from "react";
import Circle from "./Circle";

function App() {
  const [value, setValue] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //ES6 문법, 여러개의 변수가져올때 유용, const value = event.currentTarget.value 와 같음
    //currentTarget에 value 말고 id, tagName같은 요소도 넣고 싶으면 객체안에 넣으면 됨
    const {
      currentTarget : { value, id, tagName },
    } = event;
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  }

  return (
    <Container>
      <Father>
        <Circle bgColor="teal" borderColor="yellow" />
        <Circle text="hello!" bgColor="tomato" />
      </Father>

      <div>
        <form onSubmit={onSubmit}>
          <input type="text" value={value || ""} onChange={onChange} placeholder="write your name" />
          <button>Log In</button>
        </form>
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

const Father = styled.div`
  display: flex;
`;