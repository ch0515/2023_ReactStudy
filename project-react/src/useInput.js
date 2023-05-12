import { useState } from "react";

export function useInput(initialValue){
  const [inputValue, setInputvalue] = useState(initialValue);


  const handleChange = (e) => {
    setInputvalue(e.target.value);
  };

  const handleSubmit = () => {
    setInputvalue("");
    alert(inputValue);
  }

  return [inputValue, handleChange, handleSubmit];
}