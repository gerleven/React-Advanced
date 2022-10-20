import { NavLink } from "react-router-dom";

const Context = () => {
  return (
    <>
      <h1>Context!</h1>
      <span>Props: </span>
      <NavLink to="/" className={"App-link"}>
        Back
      </NavLink>
    </>
  );
};

export default Context;
