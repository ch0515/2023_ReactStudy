import React, { useState, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  //count = 0에 저장
  //input박스에서 값 변경
  const countRef = useRef(0);
  //countRef.current = 0; 저장

  console.log(countRef);
  console.log("렌더링");
  const increaseCountState = () => {
    setCount(count + 1);
    // count = count +1 와 같다
    //그래서 state 변수인 count가 변경되었기 때문에 렌더링 발생
  };
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;// 1증가
    //countRef는 객체타입의 데이터라고 간주하고, countRef.current값이 변경되어도
    // 렌더링 발생하지 않음 그러나 콘솔 창에는 1씩 증가된 값이 출력
    //state변수가 변경될때 렌더링이 발생하기 때문에 countRef.current에 저장되어
    //있는 값이 브라우저에 출력된다.
    console.log('Ref : ', countRef.current);
  };
  return(
    <div>
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={increaseCountState}>State증가</button>
      <button onClick={increaseCountRef}>Ref증가</button>
    </div>
  );
};
export default App;