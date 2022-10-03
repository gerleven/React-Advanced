import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Loader from "./components/loader";

function App() {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    // setValue( value + 1); //ese value podria esta desactualizado
    setValue((valuePrevio) => valuePrevio + 2); //Forma correcta
  };
  return (
    <div className="App">
      <header className="App-header">
      <Loader></Loader>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Advanced <code>React</code> course.
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Actual Value: {value}</p>
        <button onClick={handleClick}>Value++</button>
      </header>
    </div>
  );
}

export default App;
