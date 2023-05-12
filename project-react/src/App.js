import { useInput } from "./useInput";

const App = () => {
  const [inputValue, handleChange, handleSubmit] = useInput("");
  const [inputValue2, handleChange2] = useInput("1234");

  
  return(
    <div>
      <h1>useInput</h1>
      <input value={inputValue} onChange={handleChange}/>
      <input value={inputValue2} onChange={handleChange2}/>
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
};
export default App;