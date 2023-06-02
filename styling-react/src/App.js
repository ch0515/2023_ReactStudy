import { Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/home";

const App = () => {
  return(
    <Route>
      <Route Path="/" element={<Home/>}/>
      <Route Path="/about" element={<About/>}/>
    </Route>
  );
};

export default App;