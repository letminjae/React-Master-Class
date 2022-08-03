import React, { useState } from "react";
import styled from "styled-components";

function Circle( {bgColor, borderColor, text="default text"} : CircleProps) {
  //useState Type 설정은 <> 붙여준다
  const [counter, setCounter] = useState<number|string>(1);

  return (
  <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
    {text}
  </Container>
)
}

interface CircleProps{
    bgColor: string;
    borderColor?: string;
    text?: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border : 2px solid ${(props) => props.borderColor};
`;

export default Circle;
