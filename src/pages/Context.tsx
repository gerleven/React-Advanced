import { useState, createContext, FC, useContext } from "react";
import { NavLink } from "react-router-dom";

interface CounterContextInterface {
  counterState: number;
  //resetCounter: ()=>(void)
  //incrementCounter: ()=>(void),
}

//Create and export de context of counter
export const CounterContext = createContext<CounterContextInterface>({
  counterState: 0,
  //resetCounter: () => {},
  //incrementCounter: () => {},
});

const Context = () => {
  const [counterState, setCounterState] = useState(0);

  //async function resetCounter() {setCounterState(1);}

  return (
    <>
      <h1>Context!</h1>
      <CounterContext.Provider value={{ counterState: counterState }}>
        <ContextChildLocalA />
        <ContextChildLocalB />
      </CounterContext.Provider>

      <NavLink to="/" className={"App-link"}>
        Back
      </NavLink>
    </>
  );
};

export default Context;

const ContextChildLocalA: FC = () => {
  const { counterState } = useContext(CounterContext);
  return (
    <>
      <h3>Context Child Local A - state: {counterState}</h3>
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