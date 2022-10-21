import { useState, createContext, FC, useContext } from "react";
import { NavLink } from "react-router-dom";
import ContextChildA from "../components/ContextChild/ContextChildA";

interface CounterContextInterface {
  counterState: number;
  incrementCounter: () => void;
  decrementCounter: () => void;
  setCounterState: (value: number) => void;
}

//Create and export de context of counter
export const CounterContext = createContext<CounterContextInterface>({
  counterState: 0,
  incrementCounter: () => {},
  decrementCounter: () => {},
  setCounterState: () => {},
});

const Context = () => {
  const [counterState, setCounterState] = useState(0);

  //async function resetCounter() {setCounterState(1);}

  return (
    <>
      <h1>Context!</h1>
      <CounterContext.Provider
        value={{
          counterState: counterState,
          incrementCounter: () => {
            setCounterState((prevState) => prevState + 1);
          },
          decrementCounter: () => {
            setCounterState((prevState) => prevState - 1);
          },
          setCounterState: (value: number) => {
            setCounterState(value);
          },
        }}
      >
        <ContextChildLocalA />
        <ContextChildLocalB />

        {/* <ContextChildA/>  //Pendiente */}
      </CounterContext.Provider>

      <NavLink to="/" className={"App-link"}>
        Back
      </NavLink>
    </>
  );
};

export default Context;

const ContextChildLocalA: FC = () => {
  const {
    counterState,
    incrementCounter,
    decrementCounter,
    setCounterState,
  } = useContext(CounterContext);
  return (
    <>
      <span>
        <h3>Context Child Local A - state: {counterState}</h3>
        <button onClick={decrementCounter}>---</button>
        <button onClick={()=>setCounterState(0)}>Reset</button>
        <button onClick={incrementCounter}>+++</button>
      </span>
    </>
  );
};
const ContextChildLocalB: FC = () => (
  <>
    <CounterContext.Consumer>
      {({ counterState }) => (
        <>
          <h3>Context Child Local B - state: {counterState}</h3>
        </>
      )}
    </CounterContext.Consumer>
  </>
);
