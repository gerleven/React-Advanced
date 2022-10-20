import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Hooks from "./pages/Hooks";
import Context from "./pages/Context";

function App() {
  /*Variables de estado*/
  /*Handles*/
  /*Efectos*/

  /*Views*/
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <NavBar/>
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hooks" element={<Hooks />}></Route>
          <Route path="/context" element={<Context />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
