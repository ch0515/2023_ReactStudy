import React, {useRef, useEffect} from "react";

const App = () => {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);
  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}!`);
    inputRef.current.value = ""; //input 박스의 내용을 삭제
    inputRef.current.focus(); //input박스에 포커스
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username"/>
      <button onClick={login}>로그인</button>
    </div>
  );
};
export default App;