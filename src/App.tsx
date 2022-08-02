import styled, { keyframes } from "styled-components";
import React, {useState} from 'react';
import Circle from "./Circle";

function App() {

  return (
    <div>
      <Circle bgColor="teal" borderColor="yellow" />
      <Circle text="hello!" bgColor="tomato" />
    </div>

    // <Container>
    //   <Father>
    //     <Box bgColor="teal">
    //       <Text>Hello</Text>
    //     </Box>
    //     <Circle bgColor="tomato" />
    //   </Father>

    //   <Btn>Log in</Btn>
    //   {/* as => HTML 부분을 바꿔준다 */}
    //   <Btn as="a" href="/">
    //     Log in
    //   </Btn>
    //   <Input />

    //   <AniBox>
    //     <span>💛</span>
    //   </AniBox>

    //   <SelectAniBox>
    //     <Emoji>💜</Emoji>
    //   </SelectAniBox>

    //   {/* <Btn>Mode Change!</Btn> */}
    // </Container>
  );
}

export default App;

// const Container = styled.div`
//   background-color: ${(props) => props.theme.backgroundColor};
//   color: ${(props) => props.theme.color};
// `;

// const Father = styled.div`
//   display: flex;
// `;

// const Box = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
// `;

// // 애니매이션 사용시에는 keyframes 사용
// const rotationAnimation = keyframes`
//   from {
//     transform : rotate(0deg);
//     border-radius: 0px;
//   }
//   to {
//     transform: rotate(360deg);
//     border-radius: 100px;
//   }
// `;

// const rotationSmooth = keyframes`
//   0% {
//     transform : rotate(0deg);
//     border-radius: 0px;
//   }
//   50% {
//     transform : rotate(360deg);
//     border-radius: 100px;
//   }
//   100% {
//     transform : rotate(0deg);
//     border-radius: 0px;
//   }
// `;

// const AniBox = styled.div`
//   width: 200px;
//   height: 200px;
//   background-color: tomato;
//   animation: ${rotationSmooth} 1s linear infinite;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   span {
//     font-size: 36px;
//     // & 표시는 span:hover, span:active와 같다
//     &:hover {
//       font-size: 60px;
//     }
//     &:active {
//       opacity : 0;
//     }
//   }
// `;

// const Emoji = styled.span`
//   font-size: 36px;
// `;

// const SelectAniBox = styled.div`
//   width: 200px;
//   height: 200px;
//   background-color: tomato;
//   animation: ${rotationSmooth} 1s linear infinite;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   // Styled-Component 자체를 selector로 지정할수 있다
//   ${Emoji} {
//     &:hover {
//       font-size: 60px;
//     }
//     &:active {
//       opacity : 0;
//     }
//   }
// `;

// const Circle = styled(Box)`
//   border-radius: 50px;
// `;

// const Btn = styled.button`
//   border: 0;
//   background-color: tomato;
//   border-radius: 15px;
//   color: ${(props) => props.theme.color};
// `;

// const Text = styled.span`
// `;

// // 중복된 컴포넌트를 써야되는데 속성값을 다적지말고 attrs를 사용하자!
// const Input = styled.input.attrs({ required: true, maxLength: 10 })`
//   background-color: tomato;
// `;
