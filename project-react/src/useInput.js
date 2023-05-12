import { useState } from "react";

export function useInput(initialValue){
  const [inputValue, setInputvalue] = useState(initialValue);

  const handleChange = (e) => {
    setInputvalue(e.target.value);
  };

  return [inputValue, handleChange];
}