import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Hooks from "./pages/Hooks";

function App() {
  /*Variables de estado*/
  /*Handles*/
  /*Efectos*/

  /*Views*/
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hooks" element={<Hooks />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
