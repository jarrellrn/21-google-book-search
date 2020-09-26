import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/saved">Saved</Link>
      </div>
    </nav>
  );
}

export default Navbar;
