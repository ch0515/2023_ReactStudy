import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리액트';
  const style1 = {
    backgroundColor : 'black', // 카멜 표기법 background-color
    color:'aqua',
    fontSize:'48px',
    fontWeight:'bold',
    padding : 16 //단위 px
  };
  return <div style={style1}>{name}</div>
}

export default App;
