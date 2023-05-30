import styled from "styled-components";

const SimpleButton = styled.button`
color: white;
background-color: green;`;

const LargeButton = styled(SimpleButton)`
font-size: 50px;`;
//일반적인 방법
const ReactButton = (props) => {
  console.log("props", props);
  return <button className={props.className}>{props.children}</button>;
};

const ReactLargeButton = styled(ReactButton)`
font-size: 50px;`;

//primary라는 props를 주는 경우
const PrimaryButton = styled.button`
color: ${function (props){
  if(props.primary){
    return "white";
  }else{
    return "black";
  }
}};`;
const App = () => {
  return(
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>React Large</ReactLargeButton>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton>Primary</PrimaryButton>
    </div>
  );
};
export default App;