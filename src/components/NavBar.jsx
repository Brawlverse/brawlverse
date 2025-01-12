import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/brawlers" className="nav-link">
        Brawlers
      </Link>
      <Link to="/cosmetics" className="nav-link">
        Cosmetics
      </Link>
      <Link to="/events" className="nav-link">
        Events
      </Link>
      <Link to="/items" className="nav-link">
        Items
      </Link>
    </nav>
  );
}

export default NavBar;
