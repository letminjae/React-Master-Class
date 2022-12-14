# React Master Class from nomadcoder

## Section 1

### **Styled Component**

<br />

- Props 담는방법

```jsx
${(props) => props.bgColor};
```

- 중복된 style이 있으면 해당 컴포넌트에 넣어서 `재사용이 가능`하다.

```jsx
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

styled(Box)`
  font-size: 18px;
`;
```

- 컴포넌트에 as 사용시 HTML부분 변경이 가능하다.

```jsx
//button 태그가 a 태그로 바뀌어 사용
<Btn as="a" href="/">
  Log in
</Btn>;

const Btn = styled.button`
  border: 0;
  background-color: tomato;
  border-radius: 15px;
  color: ${(props) => props.theme.textColor};
`;
```

- 컴포넌트를 중복 사용시 속성값을 다적지않고 attrs를 사용하여 쉽게 설정가능

```jsx
// Input 여러개 사용시 모든 Input에 required, maxLength 적용
const Input = styled.input.attrs({ required: true, maxLength: 10 })`
  background-color: tomato;
`;
```

- 애니메이션 사용시에는 `keyframes` import하여 사용

```jsx
import styled, { keyframes } from "styled-components";

const rotationSmooth = keyframes`
  0% {
    transform : rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform : rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform : rotate(0deg);
    border-radius: 0px;
  }
`;
```

- Styled-Component 자체를 selector로 지정할수 있다

```jsx
const Emoji = styled.span`
  font-size: 36px;
`;

const SelectAniBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${rotationSmooth} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 60px;
    }
    &:active {
      opacity: 0;
    }
  }
`;
```

<br />

- `theme`이란? => 기본적으로 모든 색상을 가지고 있는 객체
  - index.js에서 themeProvider 연결
  - ThemeProvider은 항상 `theme이라는 prop`을 필요로 한다

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

```

## Section 2

### TypeScript

- CRA에 타입스크립트 설치 - 추천!

```jsx
npx create-react-app my-app --template typescript
```

- 이미 설치되어 있는 CRA에 타입스크립트 설치 => 충돌나서 별로 추천 X

```jsx
npm i --save typescript @types/node @types/react @types/react-dom @types/jest
```

- _타입스크립트를 왜 쓰는가?_
  - 자바스크립트에서는 코드 실행 전 타입에 대한 정의가 없어 내가 생각하지 못한 에러가 나기쉽다.
  - 타입스크립트는 강력한 타입 지정을 통해 언어 자체에 그 값들이 어떤 것인지, 타입들이 어떤 것인지 확인시켜줌으로써 검사를 해준다.
- 기본 타입 설정 => `: (콜론)`을 사용해준다

```ts
const Add = (x: number, y: number) : number => return x + y
```

- `컴포넌트 생성 뒤 prop을 보내줄때의 타입 설정` => interface 생성 후 prop에다 interface의 타입을 설정해준다.
  - interface에서 보내기 원치않는 prop이 있을때는 `optional 설정`을 해준다 => `?:` `?:`은 곧 `type | undefined` 이기 때문이다.
  - prop에 default 값을 주고싶다면 prop 자리에서 설정하기만 하면 된다. `active` type 참고 => active = false가 기본값으로 지정됨

```tsx
interface DummyProps {
    text: "string";
    otherThingHere?: boolean;
    active?: boolean
}

function Dummy({text, otherThingHere, active = false } : DummyProps) {
    return (
        <h1>{text}</h1>
    )
}

funtion App() {
    return (
        <div>
            <Dummy text="hello" />
        </div>
    )
}
```

- 타입스크립트의 `event 설정`
  - event 파라미터에 `React.~ 정말많은 event 타입중 하나를 설정`
  - 가장 쉽게는 form 태그를 만들고 `React.FormEvent` 사용
  - 뒤이어 `꺽쇠를 사용`하여 어떤 엘리먼트가 올건지 타입지정

```tsx
    funtion App() {
        const [value, setValue] = useState("hello");

        const onClick = (event : React.FormEvent<HTMLButtonElement, MouseEvent>) => {
            console.log(value);
        }

        return (
            <div>
                <Dummy text="hello" />
                <form>
                    <button onClick={onClick}>Click me!</button>
                </form>
            </div>
        )
    }
```

- 타입스크립트의 styled component 사용
  - 타입스크립트는 styled component같은 npm 라이브러리에 대해 인식을 못한다.
  - 하여 `declare(style.d.ts)`를 통해 선언파일을 만들어 타입스크립트를 위해 설명해주는 파일을 만들어야한다.
  - declare를 해주기 위해선 @types로 npm install을 해주어야한다.
  ```jsx
  npm install --save-dev @types/styled-components
  ```

## Section 3

### **React Query**

- React Query란?

  ```jsx
  npm install react-query
  ```

  - fetch 메소드를 이용해 useEffect로 데이터를 끌어오는 방식

  ```jsx
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api키를 가진 URL 주소");
      const json = await response.json();
      console.log(json);
    })();
  }, []);
  ```

  - 하지만, 데이터를 계속해서 fetching 하는데에는 한계가있다. => `캐싱을 꼭 해줘야 불필요한 데이터를 fetching 하지않음` => 우리는 왜 Loading 창을 계속 봐야하는가??

  - 타입스크립트를 사용할 시 데이터의 타입들을 일일히 설정해줘야한다. interface에 타입이 수백개가 있다면 언제 일일히 다 작성하겠는가??

  - React 애플리케이션에서 서버 state를 `fetching, caching, synchronizing, updating할 수 있도록 도와주는 라이브러리`

  - Global state를 건드리지 않고 React 및 React Native 애플리케이션에서 데이터를 가져오고, 캐시하고, 업데이트할 수 있다.

  - 현재 React 18 버전 사용중이라면 타입스크립트에서 react-query 사용불가
    ```jsx
    npm install @tanstack/react-query
    ```

- React-Query 사용법

  1. Query Client 및 Provider 생성

  - index.tsx에서 `QueryClientProvider` 생성, client를 new QueryClient()로 설정한 뒤 감싸준다.

  ```jsx
  const queryClient = new QueryClient();

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </>
  );
  ```

  2. fetcher Funtion 만들어주기

  - api.ts 파일을 만들어 useEffect에 있던 `fetcher funtion을 따로 만들어준다.` (asnyc await는 코드가 길어 promise 사용)

  ```jsx
  const BASE_URL = `https://api.coinpaprika.com/v1`;

  export function fetchCoins() {
    return fetch(`${BASE_URL}/coins`).then((response) => response.json());
  }
  ```

  3. 데이터를 부를 컴포넌트에 `useQuery` 사용 => useQuery는 데이터를 부르는 react-query의 핵심 메소드!

  - `isLoading` : 데이터가 fetch 됐는지 알려주는 boolean 값
  - `data` : fetch 된 api 데이터의 값
  - `["allCoins"]` : data array의 변수 이름 => `Query의 이름`
  - `fetchCoins` : api.ts의 fetcher function

  ```jsx
  interface ICoin {
  id: string;
  name: string;
  symbol: string;
  }

  const { isLoading, data } = useQuery<ICoin[]>(["allCoins"], fetchCoins);
  ```

  - 한 컴포넌트에 쿼리가 여러개 들어간다면, 고유 이름을 다르게 바꿔줄 수 있다.

  ```jsx
  const { isLoading: infoLoading, data: infoData } =
    useQuery < InfoData > (["info", coinId], () => fetchCoinInfo(coinId));
  ```

  4. React-Query-Devtools 사용

  - React Query의 모든 내부 작동을 시각화하는 데 도움이 되며 문제가 발생하면 디버깅 시간을 절약할 수 있는 툴

  ```jsx
  import { ReactQueryDevtools } from "react-query/devtools";

  <ReactQueryDevtools initialIsOpen={false} />;
  ```

- Apex Chart

  - 현대적이고 인터랙티브한 오픈 소스 차트 라이브러리

  ```jsx
  npm install --save react-apexcharts apexcharts
  ```

  - `type` : 차트 유형 (String) (기본값 ‘line’)
  - `series` : 차트에 표시하려는 데이터 (Array) (기본값 undefined)
  - `width, height` : 차트의 너비 (String || Number) (기본값 ‘100%’), 차트의 높이 (String || Number) (기본값 auto)
  - `options`: 차트의 구성 옵션 (Object) (기본값 {})

  ```jsx
  import ApexChart from "react-apexcharts";

  interface ICandleChartXY {
    x: Date;
    y: number[];
  }

  <>
    <ApexChart
      type="candlestick"
      series={[
        {
          name: "Price",
          data: data?.map((price) => {
            return {
              x: new Date(price.time_open * 1000),
              y: [
                parseFloat(price.open),
                parseFloat(price.high),
                parseFloat(price.low),
                parseFloat(price.close),
              ],
            };
          }) as ICandleChartXY[],
        },
      ]}
      options={{
        theme: {
          mode: "dark",
        },
        chart: {
          height: 350,
          width: 500,
          animations: {
            enabled: false,
          },
          background: "transparent",
          toolbar: {
            show: false,
          },
        },
        grid: { show: false },
        stroke: {
          curve: "smooth",
          width: 4,
        },
        yaxis: {
          show: false,
        },
        xaxis: {
          axisBorder: { show: false },
          axisTicks: { show: false },
          labels: { show: false },
          type: "datetime",
          categories: data?.map(
            (price) => price.time_close * 1000
          ),
        },
        tooltip: {
          y: {
            formatter: (value) => `$${value.toFixed(2)}`,
          },
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: '#DF7D46',
              downward: '#3C90EB',
            }
          }
        },
      }}
    />
    </>
  ```

- React-Helmet
  - 컴포넌트 render 시 문서의 Head로 가 페이지의 이름이 변경되게 하는 라이브러리
  ```jsx
  npm i react-helmet
  npm i --save-dev @types/react-helmet
  ```

  - HTML HEAD에 영향을 주어 검색엔진에 타이틀이 노출되게끔 만들수있다.
  ```jsx
  //Coin.tsx
  import { Helmet } from "react-helmet";

  //state.name = 코인 상세 페이지의 코인 이름
  <Helmet>
    <title>
      {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
    </title>
  </Helmet>
  ```