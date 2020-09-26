import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div id="linkcontainer">
        <div id="link1">
          <Link to="/">Home</Link>
        </div>
        <div id="link2">
          <Link to="/saved">Saved</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
