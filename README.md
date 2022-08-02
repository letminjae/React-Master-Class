# React Master Class from nomadcoder

## Section 1
### Styled Component

<br />

### 왜 styled component 인가? 

<br />

- props 담는방법 : ${(props) => props.bgColor};
```jsx

```
- 중복된 style이 있으면 styled(Box)``;
- 컴포넌트에 as 사용시 HTML부분 변경이 가능하다.
- 컴포넌트를 중복 사용시 속성값을 다적지않고 attrs를 사용하여 쉽게 설정가능

<br />
- theme ? 기본적으로 모든 색상을 가지고 있는 객체
- index.js에서 theme Provider 연결
- ThemeProvider은 항상 theme이라는 prop을 필요로한다

## Section 2

### TypeScript
- CRA에 타입스크립트 설치 - 추천!
npx create-react-app my-app --template typescript

- 이미 설치되어 있는 CRA에 타입스크립트 설치
npm i --save typescript @types/node @types/react @types/react-dom @types/jest