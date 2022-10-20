import { NavLink } from "react-router-dom";
import "../../App.css";

const NavBar = () => {
  return (
    <div className="Nav-bar">
      <NavLink to="/" className={"App-link"}>Home</NavLink>
      <NavLink to="/hooks" className={"App-link"}>Hooks</NavLink>
    </div>
  );
};

export default NavBar;
