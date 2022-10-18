import React, { useState, useEffect } from "react";


import "./App.css";
import Loader from "./components/loader";
import Header from "./pages/Header";

interface Person {
  name: string;
  job: {
    company: string;
  };
}
function App() {

  /*Variables de estado*/
  const [value, setValue] = useState<number>(0);
  const [persona, setPersona] = useState<Person>({
    name: "german",
    job: { company: "Microsoft" },
  });
  const [dias, setDias] = useState<string[]>(["Lunes", "Martes"]);

  /*Handles*/
  const handleClick = () => {
    // setValue( value + 1); //ese value podria esta desactualizado
    setValue((prevValue) => prevValue + 1); //Forma correcta
    setPersona(
      (prevPersona: Person) => ({ ...prevPersona, name: "joaquin" } as Person)
    );
    setDias((prevDias) => [...prevDias, "Miercoles"]);
  };

  /*Efectos*/
  useEffect(() => {
    console.log("Efecto 1");
    console.log(value);
    console.log(persona);
    console.log(dias);
  });

  useEffect(() => {
    console.log("Eefcto 2");
    const handleKeyListener = (e: KeyboardEvent) => {
      console.log(e.code);
    };

    window.addEventListener("keydown", handleKeyListener);

    const saniamiento = () => {
      console.log("listener deleted");
      window.removeEventListener("keydown", handleKeyListener);
    };
    return saniamiento;
  }, []);

  /*Views*/
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        
        <Loader></Loader>
        <p>Actual Value: {value}</p>
        <button onClick={handleClick}>Value++</button>
      </header>
    </div>
  );
}

export default App;
