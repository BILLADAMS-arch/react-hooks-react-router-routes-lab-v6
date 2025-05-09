import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Actors">Actors</NavLink>
      <NavLink to="/Directors">Directors</NavLink>
    </nav>
  );
}

export default NavBar;
